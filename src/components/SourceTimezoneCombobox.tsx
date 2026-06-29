import { useEffect, useId, useMemo, useRef, useState } from 'react'
import {
  SOURCE_TIMEZONE_DETAILS,
  type SourceTimezoneDetail,
  searchSourceTimezones,
} from '../data/sourceTimezoneSearch'

type Props = {
  value: string
  onChange: (iana: string) => void
}

function groupOptions(options: SourceTimezoneDetail[]) {
  return options.reduce<{ label: string; options: SourceTimezoneDetail[] }[]>((groups, option) => {
    const group = groups.find((item) => item.label === option.groupLabel)
    if (group) {
      group.options.push(option)
    } else {
      groups.push({ label: option.groupLabel, options: [option] })
    }
    return groups
  }, [])
}

export function SourceTimezoneCombobox({ value, onChange }: Props) {
  const selected = SOURCE_TIMEZONE_DETAILS.find((option) => option.iana === value) ?? SOURCE_TIMEZONE_DETAILS[0]
  const [query, setQuery] = useState(selected.city)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  const results = useMemo(() => searchSourceTimezones(query), [query])
  const groups = useMemo(() => groupOptions(results), [results])
  const activeOption = results[activeIndex]

  useEffect(() => {
    if (!open) setQuery(selected.city)
  }, [open, selected.city])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  function choose(option: SourceTimezoneDetail) {
    onChange(option.iana)
    setQuery(option.city)
    setOpen(false)
    inputRef.current?.focus()
  }

  function moveActive(delta: number) {
    if (!open) setOpen(true)
    if (results.length === 0) return
    setActiveIndex((current) => (current + delta + results.length) % results.length)
  }

  return (
    <div className="source-combobox" ref={containerRef}>
      <input
        ref={inputRef}
        id="source-tz"
        role="combobox"
        type="text"
        value={query}
        onChange={(event) => {
          setQuery(event.target.value)
          setOpen(true)
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault()
            moveActive(1)
          } else if (event.key === 'ArrowUp') {
            event.preventDefault()
            moveActive(-1)
          } else if (event.key === 'Enter' && open && activeOption) {
            event.preventDefault()
            choose(activeOption)
          } else if (event.key === 'Escape') {
            setOpen(false)
          }
        }}
        className="input"
        autoComplete="off"
        aria-label="Search source timezone"
        aria-autocomplete="list"
        aria-expanded={open}
        aria-controls={`${listId}-list`}
        aria-activedescendant={activeOption ? `${listId}-${activeOption.iana}` : undefined}
      />

      {open && results.length > 0 && (
        <ul id={`${listId}-list`} role="listbox" className="dropdown source-dropdown">
          {groups.map((group) => (
            <li key={group.label} className="dropdown-group">
              <div className="dropdown-group-label">{group.label}</div>
              <ul>
                {group.options.map((option) => {
                  const index = results.findIndex((item) => item.iana === option.iana)
                  const active = index === activeIndex
                  return (
                    <li
                      id={`${listId}-${option.iana}`}
                      key={option.iana}
                      role="option"
                      aria-selected={option.iana === value}
                      className={`dropdown-item source-option ${active ? 'dropdown-item--active' : ''}`}
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseDown={(event) => {
                        event.preventDefault()
                        choose(option)
                      }}
                    >
                      <div className="dropdown-row-main">
                        <span className="dropdown-city">{option.city}</span>
                        {option.iana === value && <span className="source-selected-label">Selected</span>}
                      </div>
                      <div className="dropdown-hint">{option.summary}</div>
                      <div className="dropdown-iana">{option.iana}</div>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      )}

      {open && query.length > 0 && results.length === 0 && (
        <div className="dropdown" role="status" aria-live="polite">
          <p className="dropdown-item dropdown-empty">No source timezones for "{query}"</p>
        </div>
      )}
    </div>
  )
}
