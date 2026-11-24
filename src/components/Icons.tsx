/** TBridge's bridge mark, drawn in currentColor. */
export function BridgeMark({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="6" cy="24" r="3" fill="currentColor" />
      <circle cx="26" cy="8" r="3" fill="currentColor" />
      <path d="M6 21 Q16 2 26 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

/** Wraps the part of `text` that matches `query` in <mark> (Quiet: matches in ink weight 600). */
export function Highlight({ text, query }: { text: string; query: string }) {
  const q = query.trim().toLowerCase()
  const at = q ? text.toLowerCase().indexOf(q) : -1
  if (at < 0) return <>{text}</>
  return (
    <>
      {text.slice(0, at)}
      <mark>{text.slice(at, at + q.length)}</mark>
      {text.slice(at + q.length)}
    </>
  )
}
