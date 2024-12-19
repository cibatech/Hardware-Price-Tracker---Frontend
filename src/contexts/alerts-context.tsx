"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { fetchAlerts } from "@/http/alerts/fetch-alerts"
import { deleteAlert } from "@/http/alerts/delete-alert"
import { EditAlertFormSchema } from "@/components/alertas/edit-alert-modal"
import { editAlert } from "@/http/alerts/edit-alert"
import Cookies from "js-cookie"
import { Alert } from "@/@types/alerts"

interface AlertsContextData {
  alerts: Alert[]
  deleteAlertById: (alertId: string) => Promise<void>
  editAlertById: (alertId: string, data: EditAlertFormSchema) => Promise<void>
}

const AlertsContext = createContext<AlertsContextData | undefined>(undefined)

export function AlertsProvider({ children }: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>([])

  useEffect(() => {
    async function loadAlerts() {
      const userId = Cookies.get("userId")

      if (userId) {
        const alertsData = await fetchAlerts(userId)
        setAlerts(alertsData.resp)
      }
    }

    loadAlerts()
  }, [])

  async function deleteAlertById(alertId: string) {
    await deleteAlert(alertId)
    setAlerts((prevAlerts) =>
      prevAlerts.filter((alert) => alert.Id !== alertId)
    )
  }

  async function editAlertById(alertId: string, data: EditAlertFormSchema) {
    const { TargetPrice } = data

    await editAlert(alertId, TargetPrice)
    console.log("alerta atualizado!")

    setAlerts((prevAlerts) =>
      prevAlerts.map((alert) =>
        alert.Id === alertId ? { ...alert, TargetPrice } : alert
      )
    )
  }

  return (
    <AlertsContext.Provider value={{ alerts, deleteAlertById, editAlertById }}>
      {children}
    </AlertsContext.Provider>
  )
}

export const useAlerts = () => {
  const context = useContext(AlertsContext)
  if (!context) {
    throw new Error("useAlerts must be used within an AlertsProvider")
  }
  return context
}
