import { TrendsResponse } from "@/@types/product"
import { api } from "@/services/api"

export async function FetchTrendsById(id: string): Promise<TrendsResponse> {
  try {
    const { data } = await api.get(`/api/products/trends/${id}`)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar as tendências do produto(s): ${error}`)
  }
}
