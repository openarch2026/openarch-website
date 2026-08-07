import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../sections/Nav'
import Footer from '../sections/Footer'
import Magnetic from '../components/Magnetic'
import AsciiImage from '../components/AsciiImage'
import { useApp } from '../context'
import { T, CONTACT, SERVICE_META } from '../i18n'

export default function FacilityDetail({ slug }: { slug: string }) {
  const { lang } = useApp()
  const item = T.services.items[slug as keyof typeof T.services.items]
  const meta = SERVICE_META[slug as keyof typeof SERVICE_META]

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!item || !meta) {
    return (
      <div className="min-h-screen bg-site text-site flex flex-col">
        <Nav />
        <main className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
          <p className="font-light text-dim">{T.services.notFound[lang]}</p>
          <Link
            to="/"
            className="font-mono-elegant text-[11px] tracking-[0.28em] uppercase border hairline-strong hover:bg-inv hover:text-inv px-6 py-3 transition-colors"
          >
            {T.services.home[lang]}
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-site text-site">
      <Nav />

      <main className="mx-auto max-w-[1600px] px-6 md:px-10 pt-32 md:pt-40 pb-24">
        <Link
          to="/"
          className="font-mono-elegant text-[11px] tracking-[0.26em] uppercase text-faint hover:text-site transition-colors"
        >
          {T.services.back[lang]}
        </Link>

        <div className="mt-12 grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* text column */}
          <div className="lg:col-span-7">
            <p className="font-mono-elegant text-[11px] tracking-mega text-faint uppercase mb-8">
              {meta.code} · {T.services.status[lang]}
            </p>
            <h1
              className="font-extralight uppercase tracking-tight leading-[0.95]"
              style={{ fontSize: 'clamp(44px, 6.5vw, 96px)' }}
            >
              {item.name[lang]}
            </h1>

            <div className="mt-10 flex items-center gap-6">
              <span className="h-px w-14" style={{ backgroundColor: 'rgb(var(--fg) / 0.4)' }} />
              <p className="font-light text-dim">{item.desc[lang]}</p>
            </div>

            <h2 className="mt-16 text-xl md:text-2xl font-light leading-snug text-site/90 max-w-2xl">
              {item.articleTitle[lang]}
            </h2>

            <div className="mt-8 space-y-6 max-w-2xl">
              {item.paragraphs[lang].map((p, i) => (
                <p key={i} className="text-base font-light text-dim leading-loose">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-8">
              <Magnetic>
                <a
                  href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(meta.mailSubject[lang])}`}
                  className="block font-mono-elegant text-xs tracking-[0.3em] uppercase bg-inv text-inv px-10 py-5 hover:opacity-85 transition-opacity"
                >
                  {item.cta[lang]}
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
              </div>
            </div>
          </div>

          {/* image column */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <AsciiImage
                src={meta.image}
                alt={item.name[lang]}
                className="border hairline aspect-[3/4]"
              />
              <div className="flex items-center justify-between mt-4">
                <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint uppercase">
                  {meta.code} — OpenArch
                </p>
                <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint select-none">
                  / / /
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
