import DotField from '../components/DotField'
import { useApp } from '../context'
import { T } from '../i18n'

function Plus({ className = '' }: { className?: string }) {
  return (
    <span className={`font-mono-elegant text-faint text-sm select-none ${className}`} aria-hidden>
      +
    </span>
  )
}

export default function Hero() {
  const { lang } = useApp()
  const notes = T.hero.notes[lang]
  const caps = T.hero.caps[lang]

  return (
    <section id="hero" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* ASCII terrain */}
      <DotField className="absolute inset-0 w-full h-full" />
      {/* soft vignette for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgb(var(--bg)), rgb(var(--bg) / 0.6), transparent)' }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgb(var(--bg)), transparent)' }}
      />

      {/* corner marks */}
      <Plus className="absolute top-24 right-6 md:right-10" />
      <Plus className="absolute top-24 right-16 md:right-24" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 md:px-10 flex-1 flex flex-col justify-center pt-32 pb-16">
        <p className="font-mono-elegant text-[11px] md:text-xs tracking-mega text-dim uppercase mb-8 animate-fade-up">
          {T.hero.eyebrow[lang]}
        </p>

        <h1
          className="font-extralight uppercase leading-[0.92] tracking-tight animate-fade-up"
          style={{ fontSize: 'clamp(64px, 11vw, 176px)', animationDelay: '80ms' }}
        >
          {T.hero.title1}
          <br />
          {T.hero.title2}
        </h1>

        <div className="mt-10 max-w-md animate-fade-up" style={{ animationDelay: '160ms' }}>
          <p className="text-lg md:text-xl font-light text-site/85 leading-relaxed">
            {T.hero.lead[lang]}
          </p>
        </div>

        <div className="mt-10 flex items-center gap-6 animate-fade-up" style={{ animationDelay: '240ms' }}>
          <span className="h-px w-14 bg-line" style={{ backgroundColor: 'rgb(var(--fg) / 0.4)' }} />
          <p className="font-light text-dim tracking-wide">{T.hero.tagline[lang]}</p>
        </div>

        {/* supporting notes */}
        <div
          className="mt-14 grid sm:grid-cols-3 gap-px fg-12 border hairline max-w-3xl animate-fade-up"
          style={{ animationDelay: '320ms' }}
        >
          {notes.slice(0, 3).map((n, i) => (
            <div key={i} className="p-5" style={{ backgroundColor: 'rgb(var(--bg) / 0.7)' }}>
              <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint mb-3">
                0{i + 1}
              </p>
              <p className="text-sm font-light text-dim leading-relaxed">{n}</p>
            </div>
          ))}
        </div>
      </div>

      {/* capability strip */}
      <div className="relative z-10 border-t hairline">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 grid grid-cols-2 md:grid-cols-4">
          {caps.map((c, i) => (
            <div
              key={c}
              className={`py-6 pr-6 flex items-start gap-3 ${i > 0 ? 'md:border-l hairline md:pl-6' : ''}`}
            >
              <Plus />
              <p className="font-mono-elegant text-[10px] md:text-[11px] tracking-[0.22em] text-dim leading-relaxed">
                {c}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* bottom meta */}
      <div className="relative z-10 border-t hairline">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-12 flex items-center justify-between">
          <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint">{T.hero.site}</p>
          <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint select-none">/ / / / / /</p>
        </div>
      </div>
    </section>
  )
}
