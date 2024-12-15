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

export async function creteAlert(
  createAlertData: CreateAlertData
): Promise<CreateAlertResponse> {
  try {
    const { data } = await api.post("/api/tracker/create", createAlertData)

    console.log("Alerta registrado")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao registar alertas")
  }
}
