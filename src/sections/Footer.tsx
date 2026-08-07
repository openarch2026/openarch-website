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
