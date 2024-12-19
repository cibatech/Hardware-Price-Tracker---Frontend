import { Search } from "lucide-react"

export function EmptySearchResults({ query }: { query: string | null }) {
  return (
    <section className="h-screen">
      <div className="flex items-center gap-4 mt-10">
        <Search className="size-10" />
        <strong className="text-3xl">
          Nenhum resultado encontrado para &quot;{query}&quot;
        </strong>
      </div>
    </section>
  )
}
