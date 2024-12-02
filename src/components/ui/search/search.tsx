"use client"

import { Search as LucideSearch } from "lucide-react"
import SearchResults from "./search-results"
import { useState, useRef } from "react"

export function Search() {
  const [showSearchResults, setShowSearchResults] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    setShowSearchResults(true)
  }

  const handleBlur = () => {
    setTimeout(() => {
      setShowSearchResults(false)
    }, 100)
  }

  return (
    <>
      <div className="bg-zinc-50 flex w-full md:w-[45%] justify-between items-center rounded-3xl px-3 py-2 ">
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent outline-none flex-1"
          ref={inputRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <LucideSearch className="size-6" />
      </div>
      {showSearchResults && <SearchResults />}
    </>
  )
}
