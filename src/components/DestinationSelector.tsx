import { useState, useRef, useEffect, useId, useMemo } from 'react'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/csr/MagnifyingGlass'
import { X } from '@phosphor-icons/react/dist/csr/X'
import { searchTimezones, searchResultToSelection } from '../data/timezones'
import { convertTime } from '../utils/conversion'
import { useShortcuts } from '../hooks/useShortcuts'
import { Highlight } from './Icons'
import type { AppState } from '../types'

type Props = {
  state: AppState
  onChange: (patch: Partial<AppState>) => void
}

const MAX_RESULTS = 8

export function DestinationSelector({ state, onChange }: Props) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listId = useId()

  useShortcuts({ '/': () => inputRef.current?.focus() })

  // Deduplicate by "city|iana" so aliases with same IANA as primary still show
  const selectedKeys = new Set(state.destSelections.map((s) => `${s.city}|${s.iana}`))

  const results = searchTimezones(query)
    .filter((r) => !selectedKeys.has(`${r.city}|${r.iana}`))
    .slice(0, MAX_RESULTS)

  // Each result shows its local time for the chosen moment, so the list already answers the question.
  const previews = useMemo(
    () =>
      convertTime(
        state.date,
        state.time,
        state.sourceIana,
        results.map(searchResultToSelection),
        state.is24h,
      ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state.date, state.time, state.sourceIana, state.is24h, results.map((r) => `${r.city}|${r.iana}`).join(',')],
  )

  const activeResult = results[Math.min(activeIndex, results.length - 1)]

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  function addSelection(result: (typeof results)[number]) {
    const sel = searchResultToSelection(result)
    onChange({ destSelections: [...state.destSelections, sel] })
    setQuery('')
    setOpen(false)
    inputRef.current?.focus()
  }

  function removeSelection(idx: number) {
    onChange({ destSelections: state.destSelections.filter((_, i) => i !== idx) })
  }

  function moveActive(delta: number) {
    if (!open) setOpen(true)
    if (results.length === 0) return
    setActiveIndex((current) => (current + delta + results.length) % results.length)
  }

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as Element).closest('[data-dest-selector]')) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <section className="tb-section" aria-labelledby="to-heading">
      <h2 id="to-heading" className="tb-section__title">Compare with</h2>

      {state.destSelections.length > 0 && (
        <div className="tb-chips">
          {state.destSelections.map((sel, idx) => (
            <span key={`${sel.city}|${sel.iana}|${idx}`} className="tb-chip">
              {sel.city}
              <button
                type="button"
                onClick={() => removeSelection(idx)}
                aria-label={`Remove ${sel.city}`}
                title={`Remove ${sel.city}`}
                className="tb-chip__remove"
              >
                <X size={12} aria-hidden="true" />
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="tb-field" data-dest-selector>
        <div className="q-field">
          <MagnifyingGlass size={16} aria-hidden="true" />
          <input
            ref={inputRef}
            id={listId}
            role="combobox"
            type="text"
            placeholder="Add a city"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                moveActive(1)
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                moveActive(-1)
              } else if (e.key === 'Escape') {
                setOpen(false)
              } else if (e.key === 'Enter' && activeResult) {
                e.preventDefault()
                addSelection(activeResult)
              } else if (e.key === 'Backspace' && query === '' && state.destSelections.length > 0) {
                e.preventDefault()
                removeSelection(state.destSelections.length - 1)
              }
            }}
            autoComplete="off"
            spellCheck={false}
            aria-label="Add a city to compare"
            aria-keyshortcuts="/"
            aria-autocomplete="list"
            aria-expanded={open && results.length > 0}
            aria-controls={`${listId}-list`}
            aria-activedescendant={open && activeResult ? `${listId}-${activeIndex}` : undefined}
          />
          <span className="q-field__end" aria-hidden="true">
            <span className="q-kbd">/</span>
          </span>
        </div>

        {open && results.length > 0 && (
          <ul id={`${listId}-list`} role="listbox" aria-label="Cities" className="q-menu">
            {results.map((result, i) => {
              const preview = previews[i]
              return (
                <li
                  key={`${result.city}|${result.iana}`}
                  id={`${listId}-${i}`}
                  role="option"
                  aria-selected={i === activeIndex}
                  data-active={i === activeIndex}
                  className="q-menu__item"
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    addSelection(result)
                  }}
                >
                  <div className="q-menu__body">
                    <span className="q-menu__title">
                      <Highlight text={result.city} query={query} />
                    </span>
                    <span className="q-menu__meta">
                      {result.country} · <span className="q-mono">{result.iana}</span>
                      {result.isAlias && result.primaryCity && <> · uses {result.primaryCity} time</>}
                    </span>
                  </div>
                  <span className="q-menu__end">
                    {preview && `${preview.displayTime} ${preview.abbreviation}`}
                    <span className="q-kbd" aria-hidden="true">↵</span>
                  </span>
                </li>
              )
            })}
            <li className="q-menu__foot" aria-hidden="true">
              <span className="q-hint"><span className="q-kbd">↑</span><span className="q-kbd">↓</span> Move</span>
              <span className="q-hint"><span className="q-kbd">↵</span> Add</span>
              <span className="q-hint"><span className="q-kbd">esc</span> Close</span>
            </li>
          </ul>
        )}

        {open && query.length > 0 && results.length === 0 && (
          <div className="q-menu" role="status" aria-live="polite">
            <p className="q-menu__empty">Nothing matches "{query}". Try another spelling or a nearby city.</p>
          </div>
        )}
      </div>
    </section>
  )
}
