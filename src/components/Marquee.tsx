export default function Marquee({ items }: { items: readonly string[] }) {
  const row = items.map((i) => `${i}`).join('   ·   ') + '   ·   '
  return (
    <div className="relative border-b hairline overflow-hidden py-5 select-none" aria-hidden="true">
      <div className="marquee-track flex whitespace-nowrap font-mono-elegant text-[11px] tracking-[0.4em] uppercase text-faint">
        <span className="pr-4">{row}</span>
        <span className="pr-4">{row}</span>
      </div>
    </div>
  )
}
