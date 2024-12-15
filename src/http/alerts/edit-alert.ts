import { api } from "@/services/api"

export type Alert = {
  Id: string
  TargetPrice: number
  UserId: string
  ProdId: string
}

export type FetchAlertResponse = {
  Description: string
  resp: Alert[]
}

export async function editAlert(alertId: string, value: number): Promise<FetchAlertResponse> {
  try {
    const { data } = await api.put(`/api/tracker/update/${alertId}/${value}`)

    console.log("Succsses, atualizzado!")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao atualizar alertas")
  }
}
