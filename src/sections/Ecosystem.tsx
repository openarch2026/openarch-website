import { useApp } from '../context'
import { T } from '../i18n'

export default function Ecosystem() {
  const { lang } = useApp()
  const groups = T.ecosystem.groups[lang]

  return (
    <section id="ecosystem" className="relative border-t hairline">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
        <div className="flex items-center gap-4 mb-6" data-reveal>
          <p className="font-mono-elegant text-[11px] tracking-mega text-faint uppercase">
            {T.ecosystem.label[lang]}
          </p>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono-elegant text-faint text-sm select-none">+</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-end mb-20">
          <h2
            data-reveal
            className="font-extralight tracking-tight leading-[1.05]"
            style={{ fontSize: 'clamp(32px, 4.4vw, 64px)' }}
          >
            {T.ecosystem.headingA[lang]}
            <span className="text-faint">{T.ecosystem.headingB[lang]}</span>
          </h2>
          <p className="text-base font-light text-dim leading-loose max-w-md md:justify-self-end" data-reveal>
            {T.ecosystem.body[lang]}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px fg-12 border hairline">
          {groups.map((g, i) => (
            <div
              key={g.title}
              data-reveal
              className="bg-site p-8 md:p-12 group bg-hover-tint transition-colors"
            >
              <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint mb-8">
                0{i + 1}
              </p>
              <h3 className="font-light uppercase tracking-wide text-lg md:text-xl mb-8">{g.title}</h3>
              <ul className="space-y-4">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-3 text-sm font-light text-dim">
                    <span className="font-mono-elegant text-faint text-xs">+</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
