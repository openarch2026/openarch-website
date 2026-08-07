import DotField from '../components/DotField'
import Magnetic from '../components/Magnetic'
import { useApp } from '../context'
import { T, CONTACT } from '../i18n'

export default function CTA() {
  const { lang } = useApp()
  const benefits = T.cta.benefits[lang]

  return (
    <section id="contact" className="relative border-t hairline overflow-hidden">
      <DotField className="absolute inset-0 w-full h-full opacity-70" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgb(var(--bg)), rgb(var(--bg) / 0.4), rgb(var(--bg)))',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 md:px-10 py-32 md:py-48">
        <div className="flex items-center gap-4 mb-14" data-reveal>
          <p className="font-mono-elegant text-[11px] tracking-mega text-faint uppercase">
            {T.cta.label[lang]}
          </p>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono-elegant text-faint text-sm select-none">+</span>
        </div>

        <h2
          data-reveal
          className="font-extralight tracking-tight leading-[1.05] max-w-5xl"
          style={{ fontSize: 'clamp(36px, 5.6vw, 84px)' }}
        >
          {T.cta.headingA[lang]}
          <span className="text-faint">{T.cta.headingB[lang]}</span>
        </h2>

        <p className="mt-10 max-w-xl text-base font-light text-dim leading-loose" data-reveal>
          {T.cta.body[lang]}
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-8" data-reveal>
          <Magnetic>
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(T.cta.button[lang] + ' — OpenArch')}`}
              className="block font-mono-elegant text-xs tracking-[0.3em] uppercase bg-inv text-inv px-10 py-5 hover:opacity-85 transition-opacity"
            >
              {T.cta.button[lang]}
            </a>
          </Magnetic>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${CONTACT.email}`}
              className="font-mono-elegant text-[11px] tracking-[0.24em] text-dim hover:text-site transition-colors uppercase"
            >
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone1Intl}`}
              className="font-mono-elegant text-[11px] tracking-[0.24em] text-dim hover:text-site transition-colors"
            >
              {CONTACT.phone1} — {T.cta.phone1[lang]}
            </a>
            <a
              href={`tel:${CONTACT.phone2Intl}`}
              className="font-mono-elegant text-[11px] tracking-[0.24em] text-dim hover:text-site transition-colors"
            >
              {CONTACT.phone2} — {T.cta.phone2[lang]}
            </a>
          </div>
        </div>

        <div data-reveal className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px fg-12 border hairline max-w-4xl">
          {benefits.map((b) => (
            <div key={b} className="px-5 py-4" style={{ backgroundColor: 'rgb(var(--bg) / 0.8)' }}>
              <p className="font-mono-elegant text-[10px] tracking-[0.2em] text-dim uppercase leading-relaxed">
                {b}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
