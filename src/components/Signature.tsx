import { useEffect, useState } from 'react'

let greeted = false

/**
 * The hidden signature (Quiet README, "Signature"): hovering, focusing or clicking the
 * version lets a small ember square settle and shows one line. No network, no storage.
 */
export function Signature({ version }: { version: string }) {
  const [hovered, setHovered] = useState(false)
  const [pinned, setPinned] = useState(false)
  const shown = hovered || pinned

  useEffect(() => {
    if (greeted) return
    greeted = true
    console.log('Made quietly by Noel. Hello, curious developer.')
  }, [])

  return (
    <button
      type="button"
      className="tb-sig"
      data-shown={shown}
      aria-expanded={shown}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => {
        setHovered(false)
        setPinned(false)
      }}
      onClick={() => setPinned((value) => !value)}
    >
      <span className="tb-sig__square" aria-hidden="true" />
      <span>TBridge {version}</span>
      <span className="tb-sig__line" aria-live="polite">
        {shown ? 'Made quietly by Noel.' : ''}
      </span>
    </button>
  )
}
