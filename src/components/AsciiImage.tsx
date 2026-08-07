import { useEffect, useRef, useState } from 'react'
import { useApp } from '../context'

const RAMP = ' .·:;+*x%#@'

/**
 * An image that dissolves into living ASCII art on hover.
 * The photo crossfades into a canvas where every glyph is sampled from the
 * image's brightness, then modulated by time and the pointer position.
 */
export default function AsciiImage({
  src,
  alt,
  className = '',
  imgClassName = '',
}: {
  src: string
  alt: string
  className?: string
  imgClassName?: string
}) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [hovered, setHovered] = useState(false)
  const { theme } = useApp()

  useEffect(() => {
    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let bitmap: ImageData | null = null
    let cols = 0
    let rows = 0
    let cw = 0
    let ch = 0
    let w = 0
    let h = 0
    const mouse = { x: 0.5, y: 0.5 }
    let reveal = 0 // 0..1 dissolve progress
    let running = false

    // theme-aware ink color
    let inkColor = '255,255,255'
    const readInk = () => {
      const isLight = document.documentElement.classList.contains('light')
      inkColor = isLight ? '0,0,0' : '255,255,255'
    }
    readInk()
    const mo = new MutationObserver(readInk)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const img = new Image()
    img.src = src

    const setup = () => {
      const r = wrap.getBoundingClientRect()
      w = r.width
      h = r.height
      if (!w || !h || !img.naturalWidth) return false
      canvas.width = Math.floor(w)
      canvas.height = Math.floor(h)
      cw = 7
      ch = 11
      cols = Math.floor(w / cw)
      rows = Math.floor(h / ch)

      // sample the image (object-cover) into a small grid
      const off = document.createElement('canvas')
      off.width = cols
      off.height = rows
      const octx = off.getContext('2d')
      if (!octx) return false
      const scale = Math.max(cols / img.naturalWidth, rows / img.naturalHeight)
      const sw = cols / scale
      const sh = rows / scale
      const sx = (img.naturalWidth - sw) / 2
      const sy = (img.naturalHeight - sh) / 2
      octx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows)
      bitmap = octx.getImageData(0, 0, cols, rows)
      return true
    }

    const render = (t: number) => {
      if (!bitmap) return
      ctx.clearRect(0, 0, w, h)
      ctx.font = '10px "Geist Mono", monospace'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      const time = t * 0.0011

      for (let ry = 0; ry < rows; ry++) {
        for (let cx = 0; cx < cols; cx++) {
          const i = (ry * cols + cx) * 4
          const lum = (bitmap.data[i] * 0.299 + bitmap.data[i + 1] * 0.587 + bitmap.data[i + 2] * 0.114) / 255

          // pointer energy — chars near cursor get brighter & shuffled
          const nx = cx / cols
          const ny = ry / rows
          const dx = (nx - mouse.x) * (w / Math.max(h, 1))
          const dy = ny - mouse.y
          const md = Math.exp(-(dx * dx + dy * dy) * 8)

          // living wave over the image
          const wave = Math.sin(nx * 9 + time + ny * 4) * 0.12 + Math.sin((nx - ny) * 14 - time * 1.4) * 0.08

          let v = lum + wave + md * 0.45
          // staggered dissolve from the pointer outward
          const revealAt = reveal * 1.6 - (dx * dx + dy * dy) * 1.2
          if (revealAt <= 0.02) continue
          v = Math.min(1, Math.max(0, v * Math.min(1, revealAt)))

          let glyph = RAMP[Math.min(RAMP.length - 1, (v * RAMP.length) | 0)]
          if (md > 0.5 && Math.random() < 0.05) {
            glyph = RAMP[(Math.random() * RAMP.length) | 0]
          }
          if (glyph === ' ') continue

          const alpha = Math.min(1, 0.25 + v * 0.75) * Math.min(1, revealAt)
          ctx.fillStyle = `rgba(${inkColor},${alpha.toFixed(3)})`
          ctx.fillText(glyph, cx * cw + cw / 2, ry * ch + ch / 2)
        }
      }
    }

    const loop = (t: number) => {
      reveal += (1 - reveal) * 0.07
      render(t)
      raf = requestAnimationFrame(loop)
    }

    const start = () => {
      if (running) return
      if (!bitmap && !setup()) {
        // image not ready yet — retry shortly
        setTimeout(start, 120)
        return
      }
      running = true
      reveal = 0
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    const onEnter = () => {
      setHovered(true)
      start()
    }
    const onLeave = () => {
      setHovered(false)
      stop()
    }
    const onMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect()
      mouse.x = (e.clientX - r.left) / Math.max(r.width, 1)
      mouse.y = (e.clientY - r.top) / Math.max(r.height, 1)
    }

    wrap.addEventListener('pointerenter', onEnter)
    wrap.addEventListener('pointerleave', onLeave)
    wrap.addEventListener('pointermove', onMove)

    if (img.complete) setup()
    else img.onload = () => setup()

    return () => {
      stop()
      mo.disconnect()
      wrap.removeEventListener('pointerenter', onEnter)
      wrap.removeEventListener('pointerleave', onLeave)
      wrap.removeEventListener('pointermove', onMove)
    }
  }, [src])

  return (
    <div ref={wrapRef} className={`relative overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-500 ${hovered ? 'opacity-0' : 'opacity-100'} ${theme === 'light' ? 'invert' : ''} ${imgClassName}`}
      />
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
        style={{ backgroundColor: 'rgb(var(--bg))' }}
        aria-hidden="true"
      />
    </div>
  )
}
