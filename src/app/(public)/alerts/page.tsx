import { AlertCard } from "@/components/alertas/alert-card"
import { SearchAlerts } from "@/components/alertas/search"
import { DefaultLayout } from "@/components/defaultLayout/default-layout"
import { Trash } from "lucide-react"

export default function Alerts() {
  return (
    <DefaultLayout>
      <div className="flex flex-col w-full max-w-[80%] m-auto py-8 gap-8 min-h-screen">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <h1 className="text-xl font-semibold">Alerts</h1>

          <section className="flex items-center gap-4 flex-wrap">
            <SearchAlerts />
            <button className="bg-green-100 flex text-sm font-medium text-green-700 items-center rounded-3xl px-3 py-2 gap-3 flex-1">
              <Trash />
              Remover todos os alertas
            </button>
          </section>
        </div>
        <main className="flex gap-3 justify-center md:flex-row flex-col">
          <AlertCard />
          <AlertCard />
        </main>
      </div>
    </DefaultLayout>
  )
}
