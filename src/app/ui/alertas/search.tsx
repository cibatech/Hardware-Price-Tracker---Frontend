"use client"

import { LucideSearch } from "lucide-react"

export function SearchAlerts() {
  return (
    <div className="flex-1">
      <div className="bg-green-100 flex w-full justify-between items-center rounded-3xl px-3 py-2 gap-3">
        <LucideSearch className="size-6 text-green-700" />
        <input
          type="text"
          placeholder="Buscar"
          className="bg-transparent outline-none flex-1 text-green-700"
        />
      </div>
    </div>
  )
}
