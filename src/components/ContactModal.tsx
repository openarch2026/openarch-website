import { useState } from 'react'
import { useApp } from '../context'
import { T } from '../i18n'

const SUPABASE_FUNCTION_URL = 'https://rycernxjcemofhttvpsf.supabase.co/functions/v1/submit-contact'
const SUPABASE_ANON_KEY = 'sb_publishable_8oiZTzHTzvxy9M0OKB-Ndg_tLMsmGoA'

export default function ContactModal() {
  const { lang, contactOpen, closeContact } = useApp()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  if (!contactOpen) return null

  const m = T.modal

  const reset = () => {
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')
    setStatus('idle')
  }

  const handleClose = () => {
    closeContact()
    reset()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(SUPABASE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON_KEY,
          Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ name, email, phone, message }),
      })
      const data = await res.json()
      if (!res.ok || data.error) throw new Error(data.error)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-6"
      style={{ background: 'rgb(0 0 0 / 0.6)', backdropFilter: 'blur(4px)' }}
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-md border hairline bg-site p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          aria-label={m.close[lang]}
          className="absolute top-4 right-4 text-dim hover:text-site transition-colors font-mono-elegant text-xs"
        >
          ✕
        </button>

        <h3 className="font-mono-elegant text-xs tracking-[0.3em] uppercase text-faint mb-6">{m.title[lang]}</h3>

        {status === 'sent' ? (
          <p className="text-sm font-light text-dim leading-loose">{m.sent[lang]}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <label className="flex flex-col gap-2">
              <span className="font-mono-elegant text-[10px] tracking-[0.2em] uppercase text-dim">{m.name[lang]}</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-transparent border-b hairline-strong pb-2 text-sm font-light text-site outline-none"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono-elegant text-[10px] tracking-[0.2em] uppercase text-dim">{m.email[lang]}</span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-b hairline-strong pb-2 text-sm font-light text-site outline-none"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono-elegant text-[10px] tracking-[0.2em] uppercase text-dim">{m.phone[lang]}</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-transparent border-b hairline-strong pb-2 text-sm font-light text-site outline-none"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="font-mono-elegant text-[10px] tracking-[0.2em] uppercase text-dim">{m.message[lang]}</span>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-transparent border-b hairline-strong pb-2 text-sm font-light text-site outline-none resize-none"
              />
            </label>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 font-mono-elegant text-xs tracking-[0.3em] uppercase bg-inv text-inv px-6 py-4 hover:opacity-85 transition-opacity disabled:opacity-50"
            >
              {status === 'sending' ? m.sending[lang] : m.submit[lang]}
            </button>
            {status === 'error' && (
              <p className="font-mono-elegant text-[10px] tracking-[0.16em] text-red-500">{m.error[lang]}</p>
            )}
            <p className="font-mono-elegant text-[10px] tracking-[0.16em] text-faint">{m.note[lang]}</p>
          </form>
        )}
      </div>
    </div>
  )
}
