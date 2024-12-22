"use client"

import { Search as LucideSearch } from "lucide-react"
import { FormEvent, useEffect, useRef, useState } from "react"
import { SuggestionItem } from "./suggestion-card"
import { useDebouncedCallback } from "use-debounce"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Product } from "@/@types/product"
import { filterProduct } from "@/http/product/filter-product"

export function Search() {
  const [suggestions, setSuggestions] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const { replace, push } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const formRef = useRef<HTMLFormElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const query = searchParams.get("query")

  function handleRedirectToPageResults(e: FormEvent) {
    e.preventDefault()
    push(`/results/?query=${query}`)
  }

  const handleTriggerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    setIsOpen(true)
  }

  const handleBlur = () => {
    setTimeout(() => setIsOpen(false), 100)
  }

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`)

    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set("query", term)
    } else {
      params.delete("query")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  useEffect(() => {
    const handleSearchByQuery = async () => {
      if (query) {
        const data = await filterProduct("hardware", null, null, null, query)
        setSuggestions(data.response.Return.TotalList)
      }
    }

    handleSearchByQuery()
  }, [query])

  const suggestionsListLenght = suggestions.length

  return (
    <div className="relative w-full md:w-[45%]">
      <form
        className="bg-zinc-50 flex w-full justify-between items-center rounded-3xl px-3 py-2 relative"
        ref={formRef}
        onClick={handleTriggerClick}
        onSubmit={handleRedirectToPageResults}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder="Buscar"
          className="bg-transparent outline-none flex-1"
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get("query")?.toString()}
          onFocus={() => setIsOpen(true)}
          onBlur={handleBlur}
        />
        <button type="submit">
          <LucideSearch className="size-6" />
        </button>
      </form>

      {isOpen && (
        <div
          className="absolute left-0 right-0 mt-2 rounded-3xl shadow-lg z-50"
          style={{
            width: formRef.current
              ? `${formRef.current.clientWidth}px`
              : "100%",
          }}
        >
          <ul className="bg-zinc-50 flex flex-col w-full p-4 border gap-3 rounded-xl max-h-64 overflow-scroll">
            {suggestionsListLenght > 0 ? (
              suggestions.map((suggestion, index) => (
                <SuggestionItem
                  key={index}
                  suggestionTitle={suggestion.Title}
                  suggestionCategory={suggestion.Where}
                  suggestionProductId={suggestion.Id}
                  suggestionProductStore={suggestion.Kind}
                  suggetionProductImageUrl={suggestion.ImageUrl}
                  suggestionProductPrice={suggestion.Value}
                />
              ))
            ) : (
              <div className="flex gap-3 items-center m-auto">
                <strong>Nenhuma busca ainda.</strong>
              </div>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
