import { useApp } from '../context'
import { T, GALLERY_IMAGES } from '../i18n'
import AsciiImage from '../components/AsciiImage'

export default function Gallery() {
  const { lang } = useApp()
  const items = T.gallery.items[lang]

  return (
    <section id="archives" className="relative border-t hairline">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-28 md:py-40">
        <div className="flex items-center gap-4 mb-6" data-reveal>
          <p className="font-mono-elegant text-[11px] tracking-mega text-faint uppercase">
            {T.gallery.label[lang]}
          </p>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono-elegant text-faint text-sm select-none">+</span>
        </div>

        <h2
          data-reveal
          className="font-extralight tracking-tight mb-20 max-w-3xl leading-[1.08]"
          style={{ fontSize: 'clamp(32px, 4.4vw, 64px)' }}
        >
          {T.gallery.headingA[lang]}
          <span className="text-faint">{T.gallery.headingB[lang]}</span>
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px fg-12 border hairline" data-reveal>
          {GALLERY_IMAGES.map((src, i) => (
            <figure key={src} className="group relative bg-site overflow-hidden">
              <AsciiImage src={src} alt={items[i]} className="aspect-[3/4]" imgClassName="opacity-90" />
              <figcaption
                className="absolute inset-x-0 bottom-0 p-5 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgb(var(--bg) / 0.9), transparent)' }}
              >
                <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint mb-2">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <p className="font-mono-elegant text-[10px] md:text-[11px] tracking-[0.2em] text-site/80 uppercase leading-relaxed">
                  {items[i]}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
