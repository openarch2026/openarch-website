import { useRef } from 'react'

/** Magnetic wrapper — child is gently pulled toward the cursor and springs back. */
export default function Magnetic({
  children,
  strength = 0.32,
  className = '',
}: {
  children: React.ReactNode
  strength?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    el.style.transition = 'transform 0.12s ease-out'
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    el.style.transform = 'translate(0px, 0px)'
  }

  return (
    <div ref={ref} className={`inline-block will-change-transform ${className}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}
