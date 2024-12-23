"use client"

import { AlertCard } from "@/components/alertas/alert-card"
import { SearchAlerts } from "@/components/alertas/search"
import { useAlerts } from "@/contexts/alerts-context"
import { Trash } from "lucide-react"
import { useSearchParams } from "next/navigation"

export default function Alerts() {
  const { alerts } = useAlerts()
  const searchParams = useSearchParams()

  if (alerts.length === 0) {
    return (
      <div className="flex justify-center items-center col-span-full mt-4 text-2xl font-semibold h-screen">
        Você não tem alertas ainda.
      </div>
    )
  }

  const alertSearch = searchParams.get("alert-search")
  const filteredAlerts = alertSearch
    ? alerts.filter((alert) =>
        alert.ProdName.toLowerCase().includes(alertSearch)
      )
    : alerts

  return (
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
      <main className="grid md:grid-cols-2 gap-3 grid-cols-1">
        {filteredAlerts.map((alert, index) => (
          <AlertCard
            key={index}
            alertId={alert.Id}
            value={alert.TargetPrice}
            alertImageUrl={alert.ProdImage}
            alertName={alert.ProdName}
          />
        ))}
      </main>
    </div>
  )
}
