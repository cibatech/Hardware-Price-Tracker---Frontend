import { ProductsQueryResponse } from "@/@types/product"
import { api } from "@/services/api"
// Talvez não precise dessa função
export async function searchByQuery(
  query: string
): Promise<ProductsQueryResponse> {
  try {
    const { data } = await api.get(`/api/products/search/${query}/1`)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar detalhes do produto: ${error}`)
  }
}
