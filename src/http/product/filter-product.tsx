import { ProductsFilterResponse } from "@/@types/product"
import { api } from "@/services/api"

export async function filterProduct(
  store?: string | null
): Promise<ProductsFilterResponse> {
  try {
    const { data } = await api.get(
      `/api/products/hardware/null--null/${store}/1`
    )

    console.log("REQ")
    console.log(data)

    return data
  } catch (error) {
    console.log(error)
    throw new Error("Erro ao filtrar o produto")
  }
}
