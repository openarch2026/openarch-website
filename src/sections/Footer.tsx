import { useApp } from '../context'
import { T, CONTACT, SERVICE_SLUGS } from '../i18n'
import { Logo } from './Nav'

export default function Footer() {
  const { lang } = useApp()

  return (
    <footer className="relative border-t hairline">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Logo compact />
            <p className="mt-8 max-w-sm text-sm font-light text-dim leading-loose">
              {T.footer.tagline[lang]}
            </p>
            <a
              href="https://www.facebook.com/openarch2026"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="mt-6 inline-flex w-9 h-9 border hairline-strong fg-04 items-center justify-center text-dim hover:text-site transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 320 512" fill="currentColor">
                <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
              </svg>
            </a>
          </div>
          <div className="md:col-span-3">
            <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint uppercase mb-6">
              {T.footer.services[lang]}
            </p>
            <ul className="space-y-3 text-sm font-light text-dim">
              {SERVICE_SLUGS.map((s) => (
                <li key={s}>{T.services.items[s].name[lang]}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint uppercase mb-6">
              {T.footer.contact[lang]}
            </p>
            <ul className="space-y-3 text-sm font-light text-dim">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="hover:text-site transition-colors">
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone1Intl}`} className="hover:text-site transition-colors">
                  {CONTACT.phone1}
                </a>
                <span className="block font-mono-elegant text-[10px] tracking-[0.18em] text-faint mt-1">
                  {T.cta.phone1[lang]}
                </span>
              </li>
              <li>
                <a href={`tel:${CONTACT.phone2Intl}`} className="hover:text-site transition-colors">
                  {CONTACT.phone2}
                </a>
                <span className="block font-mono-elegant text-[10px] tracking-[0.18em] text-faint mt-1">
                  {T.cta.phone2[lang]}
                </span>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint uppercase mb-6">
              {T.footer.legal[lang]}
            </p>
            <ul className="space-y-3 text-sm font-light text-dim">
              <li>{T.footer.policy[lang]}</li>
              <li>{T.footer.terms[lang]}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-14 flex items-center justify-between">
          <p className="font-mono-elegant text-[10px] tracking-[0.2em] text-faint uppercase">
            {T.footer.copyright[lang]}
          </p>
          <p className="hidden md:block font-mono-elegant text-[10px] tracking-[0.2em] text-faint uppercase">
            {T.footer.status}
          </p>
          <p className="font-mono-elegant text-[10px] tracking-[0.3em] text-faint select-none">/ / / / / /</p>
        </div>
      </div>
    </footer>
  )
}
