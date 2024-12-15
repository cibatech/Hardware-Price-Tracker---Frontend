import { ProductPriceResponse } from "@/@types/product"
import { api } from "@/services/api"

export async function FetchProductById(
  id: string,
  pasDays: number = 1
): Promise<ProductPriceResponse> {
  try {
    const { data } = await api.get(`/api/products/prices/${id}/${pasDays}`)
    console.log(data)

    return data
  } catch (error) {
    throw new Error(`Erro ao buscar o produto: ${error}`)
  }
}
