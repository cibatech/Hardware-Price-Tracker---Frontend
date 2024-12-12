import { ProductsFilterResponse } from "@/@types/product"
import { api } from "@/services/api"

export async function filterProduct(
  category: string | "hardware",
  store: string | null,
  min: number | null,
  max: number | null,
  query: string | null
): Promise<ProductsFilterResponse> {
  try {
    const { data } = await api.get(
      `/api/products/${category}/${min}--${max}/${store}/${query}/1`
    )

    return data
  } catch (error) {
    throw new Error(`Erro ao filtrar por produto(s): ${error}`)
  }
}
