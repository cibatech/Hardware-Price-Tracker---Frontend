import { Alert } from "@/@types/alerts"
import { api } from "@/services/api"

export type FetchAlertResponse = {
  Description: string
  resp: Alert[]
}

export async function fetchAlerts(userId: string): Promise<FetchAlertResponse> {
  try {
    const { data } = await api.get(`/api/tracker/fromuser/${userId}`)

    console.log("Succsses")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao buscar alertas")
  }
}
