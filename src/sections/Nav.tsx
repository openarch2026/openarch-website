import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useApp, type Lang } from '../context'
import { T } from '../i18n'

export function Logo({ compact = false }: { compact?: boolean }) {
  const { theme } = useApp()
  const src = theme === 'dark' ? '/images/logo-white.png' : '/images/logo-black.png'
  return (
    <Link to="/" className="flex items-center" aria-label="OpenArch">
      <img src={src} alt="OpenArch" className={compact ? 'h-8 w-auto' : 'h-8 w-auto'} />
    </Link>
  )
}

const LANGS: { code: Lang; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'vi', label: 'VI' },
  { code: 'zh', label: '中文' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const { lang, setLang, theme, toggleTheme, openContact } = useApp()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) {
      navigate('/' + href)
      return
    }
    el.scrollIntoView({ behavior: 'smooth' })
  }

  const links = [
    { label: T.nav.services[lang], href: '#facilities' },
    { label: T.nav.ecosystem[lang], href: '#ecosystem' },
    { label: T.nav.capabilities[lang], href: '#archives' },
    { label: T.nav.mission[lang], href: '#manifesto' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 border-b ${
        scrolled ? 'bg-site/85 backdrop-blur-md hairline' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-10 h-16 md:h-[72px] flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={go(l.href)}
              className="font-mono-elegant text-[11px] uppercase tracking-[0.26em] text-dim hover:text-site transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-5">
          {/* language switcher */}
          <div className="flex items-center border hairline-strong fg-04">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`font-mono-elegant text-[10px] tracking-[0.14em] px-2.5 py-1.5 transition-colors ${
                  lang === l.code ? 'bg-inv text-inv' : 'text-dim hover:text-site'
                }`}
                aria-pressed={lang === l.code}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-8 h-8 border hairline-strong fg-04 flex items-center justify-center text-dim hover:text-site transition-colors"
          >
            {theme === 'dark' ? (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
              </svg>
            )}
          </button>

          <button
            onClick={openContact}
            className="hidden md:block font-mono-elegant text-[11px] uppercase tracking-[0.26em] border hairline-strong fg-04 hover:bg-inv hover:text-inv transition-colors px-4 py-2"
          >
            {T.nav.cta[lang]}
          </button>
        </div>
      </div>
    </header>
  )
}
