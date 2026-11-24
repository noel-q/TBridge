import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { DateTime } from 'luxon'
import { MagnifyingGlass } from '@phosphor-icons/react/dist/csr/MagnifyingGlass'
import {
  SOURCE_TIMEZONE_DETAILS,
  type SourceTimezoneDetail,
  searchSourceTimezones,
} from '../data/sourceTimezoneSearch'
import { findTimezoneByIana } from '../data/timezones'
import { getTimezoneAbbreviation } from '../utils/conversion'
import { Highlight } from './Icons'

type Props = {
  value: string
  date: string
  time: string
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

/** "GMT · UTC+00:00" for the chosen zone at the chosen date and time (today if that is invalid). */
export function describeZoneAt(iana: string, date: string, time: string): string {
  let at = DateTime.fromISO(`${date}T${time}`, { zone: iana })
  if (!at.isValid) at = DateTime.now().setZone(iana)
  if (!at.isValid) return ''
  const offset = at.toFormat('ZZ').replace('-', '−')
  return `${getTimezoneAbbreviation(iana, at)} · UTC${offset}`
}

export function SourceTimezoneCombobox({ value, date, time, onChange }: Props) {
  const selectedCity =
    SOURCE_TIMEZONE_DETAILS.find((option) => option.iana === value)?.city ??
    findTimezoneByIana(value)?.city ??
    SOURCE_TIMEZONE_DETAILS[0].city
  const [query, setQuery] = useState(selectedCity)
  const [open, setOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const listId = useId()

  const searchText = query
  const results = useMemo(() => searchSourceTimezones(searchText), [searchText])
  const groups = useMemo(() => groupOptions(results), [results])
  const activeOption = results[activeIndex]

  useEffect(() => {
    if (!open) setQuery(selectedCity)
  }, [open, selectedCity])

  useEffect(() => {
    setActiveIndex(0)
  }, [searchText])

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handlePointerDown)
    return () => document.removeEventListener('mousedown', handlePointerDown)
  }, [])

  useEffect(() => {
    if (!open || !activeOption) return
    document.getElementById(`${listId}-${activeOption.iana}`)?.scrollIntoView({ block: 'nearest' })
  }, [open, activeOption, listId])

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
    <div className="tb-field" ref={containerRef} style={{ gap: 0 }}>
      <div className="q-field">
        <MagnifyingGlass size={16} aria-hidden="true" />
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
          onFocus={(event) => {
            setOpen(true)
            event.target.select()
          }}
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
          autoComplete="off"
          spellCheck={false}
          aria-label="Time zone to convert from"
          aria-autocomplete="list"
          aria-expanded={open}
          aria-controls={`${listId}-list`}
          aria-activedescendant={open && activeOption ? `${listId}-${activeOption.iana}` : undefined}
        />
        {!open && <span className="q-field__end">{describeZoneAt(value, date, time)}</span>}
      </div>

      {open && results.length > 0 && (
        <ul id={`${listId}-list`} role="listbox" aria-label="Time zones" className="q-menu">
          {groups.map((group) => (
            <li key={group.label} role="presentation">
              <div className="q-menu__head" aria-hidden="true">{group.label}</div>
              <ul role="presentation">
                {group.options.map((option) => {
                  const index = results.findIndex((item) => item.iana === option.iana)
                  const active = index === activeIndex
                  return (
                    <li
                      id={`${listId}-${option.iana}`}
                      key={option.iana}
                      role="option"
                      aria-selected={option.iana === value}
                      data-active={active}
                      className="q-menu__item"
                      onMouseEnter={() => setActiveIndex(index)}
                      onMouseDown={(event) => {
                        event.preventDefault()
                        choose(option)
                      }}
                    >
                      <div className="q-menu__body">
                        <span className="q-menu__title">
                          <Highlight text={option.city} query={searchText} />
                        </span>
                        <span className="q-menu__meta">
                          {option.abbreviations.join('/')} · <span className="q-mono">{option.iana}</span>
                        </span>
                      </div>
                      <span className="q-menu__end">
                        {option.iana === value && 'Selected'}
                        <span className="q-kbd" aria-hidden="true">↵</span>
                      </span>
                    </li>
                  )
                })}
              </ul>
            </li>
          ))}
        </ul>
      )}

      {open && searchText.length > 0 && results.length === 0 && (
        <div className="q-menu" role="status" aria-live="polite">
          <p className="q-menu__empty">Nothing matches "{searchText}". Try a city, an abbreviation such as PST, or an offset such as UTC+5.</p>
        </div>
      )}
    </div>
  )
}
