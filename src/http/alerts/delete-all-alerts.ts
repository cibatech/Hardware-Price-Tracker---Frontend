import { api } from "@/services/api"

export async function deleteAllAlerts(userId: string): Promise<void> {
  try {
    const { data } = await api.delete(`/api/tracker/delete/all/${userId}`)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao deletar todos os alertas")
  }
}
