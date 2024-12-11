import { ProductComparasionResponse } from "@/@types/product"
import { StoresOptions } from "@/components/product/ui/cards/price-classification"
import { api } from "@/services/api"

export async function FetchProductsByComparasion(
  store: StoresOptions
): Promise<ProductComparasionResponse> {
  try {
    const { data } = await api.get(`/api/products/comparasion/${store}`)

    console.log("Comparacion")
    console.log(data)

    return data
  } catch (error) {
    console.log(error)
    throw new Error("Erro ao buscar produtos para comparar")
  }
}
