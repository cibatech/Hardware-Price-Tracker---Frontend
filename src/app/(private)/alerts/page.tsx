"use client"

import { AlertCard } from "@/components/alertas/alert-card"
import { SearchAlerts } from "@/components/alertas/search"
import { useAlerts } from "@/contexts/alerts-context"
import { Trash } from "lucide-react"

export default function Alerts() {
  const { alerts } = useAlerts()

  console.log("Alerts context loaded:", alerts)

  if (!alerts) {
    return (
      <div className="flex justify-center items-center col-span-full mt-4 text-2xl font-semibold">
        O contexto de alertas ainda não foi carregado.
      </div>
    )
  }

  if (alerts.length === 0) {
    return (
      <div className="flex justify-center items-center col-span-full mt-4 text-2xl font-semibold">
        Você não tem alertas ainda.
      </div>
    )
  }

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
        {alerts.map((alert) => (
          <AlertCard
            key={alert.Id}
            alertId={alert.Id}
            value={alert.TargetPrice}
          />
        ))}
      </main>
    </div>
  )
}
