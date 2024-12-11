import { TrendsResponse } from "@/@types/product"
import { api } from "@/services/api"

export async function FetchTrendsById(id: string): Promise<TrendsResponse> {
  try {
    const { data } = await api.get(`/api/products/trends/${id}`)

    console.log("Pegando trends")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao buscar as infos")
  }
}
