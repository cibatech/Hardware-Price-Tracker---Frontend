"use client"

import { Search as LucideSearch } from "lucide-react"
import { useRef, useState } from "react"
import { SuggestionItem } from "./suggestion-card"

export function Search() {
  const divRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState("")
  const [isOpen, setIsOpen] = useState(false)

  const handleTriggerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    setIsOpen(true)
  }

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 100)
  }

  return (
    <div className="relative w-full md:w-[45%]">
      <div
        className="bg-zinc-50 flex w-full justify-between items-center rounded-3xl px-3 py-2 relative"
        ref={divRef}
        onClick={handleTriggerClick}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar"
          className="bg-transparent outline-none flex-1"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={handleBlur}
        />
        <LucideSearch className="size-6" />
      </div>

      {isOpen && (
        <div
          className="absolute left-0 right-0 mt-2 rounded-3xl shadow-lg z-50"
          style={{
            width: divRef.current ? `${divRef.current.clientWidth}px` : "100%",
          }}
        >
          <ul className="bg-zinc-50 flex flex-col w-full p-4 border gap-3 rounded-xl">
            {Array.from({ length: 4 }).map((_, index) => (
              <SuggestionItem key={index} />
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
