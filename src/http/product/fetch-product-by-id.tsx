import { ProductPriceResponse } from "@/@types/product"
import { api } from "@/services/api"

export async function FetchProductById(
  id: string
): Promise<ProductPriceResponse> {
  try {
    const { data } = await api.get(`/api/products/prices/${id}`)

    console.log("Pegando produto específico")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao buscar o produto")
  }
}
