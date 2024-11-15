"use-client"

import { Search as LucideSearch } from "lucide-react"

export default function Search() {
  return (
    <div className="bg-zinc-50 flex ">
      <input className="bg-green-300 outline-none flex-1" type="text" />
      <LucideSearch className="size-6" />
    </div>
  )
}