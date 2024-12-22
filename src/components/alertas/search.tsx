"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useDebouncedCallback } from "use-debounce"
import { LucideSearch } from "lucide-react"

export function SearchAlerts() {
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`)

    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set("alertSearch", term)
    } else {
      params.delete("alertSearch")
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)

  return (
    <div className="flex-1">
      <div className="bg-green-100 flex w-full justify-between items-center rounded-3xl px-3 py-2 gap-3">
        <LucideSearch className="size-6 text-green-700" />
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent outline-none flex-1 text-green-700"
          onChange={(e) => {
            handleSearch(e.target.value)
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  )
}
