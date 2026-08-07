import { createContext, useContext, useEffect, useState } from 'react'

export type Lang = 'en' | 'vi' | 'zh'
export type Theme = 'dark' | 'light'

interface AppCtx {
  lang: Lang
  setLang: (l: Lang) => void
  theme: Theme
  toggleTheme: () => void
  contactOpen: boolean
  openContact: () => void
  closeContact: () => void
}

const Ctx = createContext<AppCtx>({
  lang: 'en',
  setLang: () => {},
  theme: 'dark',
  toggleTheme: () => {},
  contactOpen: false,
  openContact: () => {},
  closeContact: () => {},
})

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('oa-lang')
    return saved === 'vi' || saved === 'zh' || saved === 'en' ? saved : 'en'
  })
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('oa-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('oa-lang', lang)
    document.documentElement.lang = lang === 'zh' ? 'zh' : lang
  }, [lang])

  useEffect(() => {
    localStorage.setItem('oa-theme', theme)
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    document.documentElement.style.colorScheme = theme
  }, [theme])

  return (
    <Ctx.Provider
      value={{
        lang,
        setLang: setLangState,
        theme,
        toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
        contactOpen,
        openContact: () => setContactOpen(true),
        closeContact: () => setContactOpen(false),
      }}
    >
      {children}
    </Ctx.Provider>
  )
}

export const useApp = () => useContext(Ctx)
