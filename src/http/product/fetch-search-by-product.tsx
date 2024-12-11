import { ProductsQueryResponse } from "@/@types/product"
import { api } from "@/services/api"

export async function searchByQuery(
  query: string
): Promise<ProductsQueryResponse> {
  try {
    const { data } = await api.get(`/api/products/search/${query}/1`)

    console.log("Bucando")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao buscar as infos")
  }
}
