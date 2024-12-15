import { api } from "@/services/api"

export type CreateAlertData = {
  TargetPrice: number
  ProdId: string
  UserId: string
}

export type AlertResponse = {
  Id: string
} & CreateAlertData

export type CreateAlertResponse = {
  Description: string
  response: AlertResponse
  config: CreateAlertData
}

export async function deleteAlert(
  alertId: string
): Promise<CreateAlertResponse> {
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
