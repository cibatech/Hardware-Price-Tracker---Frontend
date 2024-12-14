import { ProductComparasionResponse } from "@/@types/product"
import { api } from "@/services/api"

export async function FetchProductsByComparasion(
  productId: string
): Promise<ProductComparasionResponse> {
  try {
    const { data } = await api.get(`/api/products/comparasion/${productId}`)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar produtos para comparar: ${error}`)
  }
}
