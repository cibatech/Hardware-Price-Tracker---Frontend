import { ProductsFilterResponse } from "@/@types/product"
import { api } from "@/services/api"

export async function filterProduct(
  category: string | null, 
  store: string | null,
  min: number | null,
  max: number | null,
  query: string | null,
  page: number = 1
): Promise<ProductsFilterResponse> {
  try {
    const { data } = await api.get(
      `/api/products/${category}/${min}--${max}/${store}/${query}/${page}`
    )

    return data
  } catch (error) {
    throw new Error(`Erro ao filtrar por produto(s): ${error}`)
  }
}
