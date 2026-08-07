import { useEffect, useRef } from 'react'

const RAMP = ' .·:;+*x%#@'
const GLYPHS = '01+/\\|<>[]{}#$%&@'

/**
 * Strong ASCII field — a full terrain of characters (not just dots) on pure black.
 * Waves deform the field, the pointer sends ripples through it, clicks fire pulses,
 * and sparse glitch glyphs flicker for a raw terminal feel.
 */
export default function DotField({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    let w = 0
    let h = 0
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: 0.66, y: 0.55, tx: 0.66, ty: 0.55, active: false }
    const pulses: { x: number; y: number; t0: number }[] = []
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      w = r.width
      h = r.height
      canvas.width = Math.max(1, Math.floor(w * dpr))
      canvas.height = Math.max(1, Math.floor(h * dpr))
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const toLocal = (cx: number, cy: number) => {
      const r = canvas.getBoundingClientRect()
      return { x: (cx - r.left) / Math.max(r.width, 1), y: (cy - r.top) / Math.max(r.height, 1) }
    }

    const onMove = (e: PointerEvent) => {
      const p = toLocal(e.clientX, e.clientY)
      if (p.x < -0.2 || p.x > 1.2 || p.y < -0.2 || p.y > 1.2) {
        mouse.active = false
        return
      }
      mouse.active = true
      mouse.tx = p.x
      mouse.ty = p.y
    }
    const onDown = (e: PointerEvent) => {
      const p = toLocal(e.clientX, e.clientY)
      if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return
      pulses.push({ x: p.x, y: p.y, t0: performance.now() })
      if (pulses.length > 4) pulses.shift()
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })

    const CELL = 14
    ctx.font = '11px "Geist Mono", monospace'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'

    // theme-aware foreground color
    let inkColor = '255,255,255'
    const readInk = () => {
      const isLight = document.documentElement.classList.contains('light')
      inkColor = isLight ? '0,0,0' : '255,255,255'
    }
    readInk()
    const mo = new MutationObserver(readInk)
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    let frame = 0
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw)
      frame++
      if (frame % 2 !== 0) return // ~30fps, keeps it smooth and cheap

      ctx.clearRect(0, 0, w, h)
      mouse.x += (mouse.tx - mouse.x) * 0.06
      mouse.y += (mouse.ty - mouse.y) * 0.06
      const time = reduced ? 0 : t * 0.00016
      const now = performance.now()

      // expire pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        if (now - pulses[i].t0 > 2600) pulses.splice(i, 1)
      }

      for (let y = CELL * 0.5; y < h; y += CELL) {
        for (let x = CELL * 0.5; x < w; x += CELL) {
          const nx = x / w
          const ny = y / h

          // layered elevation field
          const elev =
            Math.sin(nx * 4.6 + time + ny * 1.8) * 0.5 +
            Math.sin(nx * 10.5 - time * 1.5 + ny * 5.2) * 0.28 +
            Math.sin((nx + ny) * 7.0 + time * 0.8) * 0.22
          let intensity = elev * 0.5 + 0.5

          // pointer ripple — traveling rings around the cursor
          let boost = 0
          if (mouse.active) {
            const dx = (nx - mouse.x) * (w / h)
            const dy = ny - mouse.y
            const d = Math.sqrt(dx * dx + dy * dy)
            boost +=
              Math.exp(-d * d * 10) * 0.55 +
              Math.sin(d * 34 - (reduced ? 0 : t * 0.004)) * Math.exp(-d * 4.5) * 0.35
          }

          // click pulses — expanding shockwave rings
          for (const p of pulses) {
            const age = (now - p.t0) / 1000
            const radius = age * 0.5
            const dx = (nx - p.x) * (w / h)
            const dy = ny - p.y
            const d = Math.sqrt(dx * dx + dy * dy)
            const ring = Math.exp(-((d - radius) * (d - radius)) * 260) * Math.max(0, 1 - age / 2.2)
            boost += ring * 0.9
          }

          intensity = Math.min(1, Math.max(0, intensity + boost))

          // fade toward top-left so typography stays legible
          const legibility = Math.min(1, Math.max(0.18, nx * 0.72 + ny * 0.6))
          const alpha = (0.08 + intensity * 0.62) * legibility
          if (alpha < 0.05 && boost < 0.12) continue

          // glitch flicker
          let ch: string
          if (Math.random() < 0.0016) {
            ch = GLYPHS[(Math.random() * GLYPHS.length) | 0]
          } else {
            ch = RAMP[Math.min(RAMP.length - 1, (intensity * RAMP.length) | 0)]
          }
          if (ch === ' ') continue

          ctx.fillStyle = `rgba(${inkColor},${Math.min(alpha + boost * 0.5, 0.95).toFixed(3)})`
          ctx.fillText(ch, x, y + elev * 9)
        }
      }
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      mo.disconnect()
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden="true" />
}
