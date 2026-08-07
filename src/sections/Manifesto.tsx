import { useApp } from '../context'
import { T } from '../i18n'

export default function Manifesto() {
  const { lang } = useApp()
  return (
    <section id="manifesto" className="relative border-t hairline">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
        <div className="flex items-center gap-4 mb-14" data-reveal>
          <p className="font-mono-elegant text-[11px] tracking-mega text-faint uppercase">
            {T.mission.label[lang]}
          </p>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono-elegant text-faint text-sm select-none">+</span>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <h2
            className="md:col-span-7 font-extralight leading-[1.12] tracking-tight text-site"
            style={{ fontSize: 'clamp(30px, 4vw, 56px)' }}
            data-reveal
          >
            {T.mission.headingA[lang]}{' '}
            <span className="text-faint">{T.mission.headingB[lang]}</span>
          </h2>

          <div className="md:col-span-5 md:pt-3" data-reveal>
            <p className="text-base font-light text-dim leading-loose">{T.mission.body[lang]}</p>
            <div className="mt-10 flex items-center gap-6">
              <span className="h-px w-14" style={{ backgroundColor: 'rgb(var(--fg) / 0.4)' }} />
              <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint uppercase">
                {T.mission.caption[lang]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
