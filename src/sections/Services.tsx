import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useApp } from '../context'
import { T, SERVICE_SLUGS, SERVICE_META } from '../i18n'

export default function Services() {
  const { lang, theme } = useApp()
  const [active, setActive] = useState<string | null>(null)
  const previewRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, rot: 0 })

  // floating preview follows the cursor with inertia + slight tilt
  useEffect(() => {
    let raf = 0
    const loop = () => {
      raf = requestAnimationFrame(loop)
      const p = pos.current
      const prevX = p.x
      p.x += (p.tx - p.x) * 0.12
      p.y += (p.ty - p.y) * 0.12
      const vel = p.x - prevX
      p.rot += (Math.max(-9, Math.min(9, vel * 0.55)) - p.rot) * 0.1
      const el = previewRef.current
      if (el) {
        el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -58%) rotate(${p.rot}deg)`
      }
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="facilities" className="relative border-t hairline">
      {/* floating cursor preview (desktop) */}
      <div
        ref={previewRef}
        className={`hidden lg:block fixed left-0 top-0 z-40 w-[280px] pointer-events-none transition-opacity duration-300 ${
          active ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden="true"
      >
        <div
          className="border hairline-strong overflow-hidden"
          style={{ backgroundColor: 'rgb(var(--bg))', boxShadow: '0 30px 80px rgb(0 0 0 / 0.35)' }}
        >
          {active && (
            <img
              src={SERVICE_META[active as keyof typeof SERVICE_META].image}
              alt=""
              className={`w-full aspect-[3/4] object-cover ${theme === 'light' ? 'invert' : ''}`}
            />
          )}
        </div>
        <p className="mt-3 font-mono-elegant text-[10px] tracking-[0.3em] text-dim uppercase text-center">
          {active ? SERVICE_META[active as keyof typeof SERVICE_META].code : ''}
        </p>
      </div>

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
        <div className="flex items-center gap-4 mb-6" data-reveal>
          <p className="font-mono-elegant text-[11px] tracking-mega text-faint uppercase">
            {T.services.label[lang]}
          </p>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono-elegant text-faint text-sm select-none">+</span>
        </div>

        <h2
          className="font-extralight tracking-tight uppercase mb-20"
          style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          data-reveal
        >
          {T.services.headingA[lang]}
          <span className="text-faint">{T.services.headingB[lang]}</span>
        </h2>

        <div className="border-t hairline">
          {SERVICE_SLUGS.map((slug, i) => {
            const item = T.services.items[slug]
            const meta = SERVICE_META[slug]
            return (
              <Link
                key={slug}
                to={`/?service=${slug}`}
                data-reveal
                onMouseEnter={() => setActive(slug)}
                onMouseLeave={() => setActive(null)}
                onMouseMove={(e) => {
                  pos.current.tx = e.clientX
                  pos.current.ty = e.clientY
                }}
                className="group grid md:grid-cols-12 gap-6 md:gap-10 items-center py-10 md:py-14 border-b hairline bg-hover-tint transition-colors -mx-6 md:-mx-10 px-6 md:px-10"
              >
                <div className="md:col-span-1">
                  <p className="font-mono-elegant text-xs tracking-[0.3em] text-faint group-hover:text-dim transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                </div>
                <div className="md:col-span-4">
                  <h3 className="font-extralight uppercase tracking-tight text-2xl md:text-4xl group-hover:translate-x-3 transition-transform duration-500">
                    {item.name[lang]}
                  </h3>
                  <p className="font-mono-elegant text-[10px] tracking-[0.28em] text-faint mt-3 uppercase">
                    {meta.code} · {T.services.status[lang]}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <p className="text-sm md:text-base font-light text-dim leading-relaxed group-hover:text-site transition-colors">
                    {item.desc[lang]}
                  </p>
                  <p className="text-sm font-light text-faint leading-relaxed mt-2 line-clamp-2">
                    {item.paragraphs[lang][0]}
                  </p>
                </div>
                <div className="md:col-span-2 flex md:justify-end">
                  <span className="font-mono-elegant text-[11px] tracking-[0.22em] uppercase border hairline-strong group-hover:bg-inv group-hover:text-inv transition-colors px-5 py-3 whitespace-nowrap">
                    {T.services.detail[lang]}
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
