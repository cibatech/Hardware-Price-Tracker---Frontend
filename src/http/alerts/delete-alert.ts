import { DeleteAlertResponse } from "@/@types/alerts"
import { api } from "@/services/api"

export async function deleteAlert(
  alertId: string
): Promise<DeleteAlertResponse> {
  try {
    const { data } = await api.delete(`api/tracker/delete/${alertId}`)

    console.log("Alerta deletado!")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao registar alertas")
  }
}
