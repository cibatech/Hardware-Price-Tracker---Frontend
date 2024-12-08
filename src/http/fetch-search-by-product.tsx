import { api } from "@/services/api"

export type Product = {
  Id: string
  Title: string
  Description: string
  Value: number
  Link: string
  Where: string
  Kind: string
  ImageUrl: string
  Slug: string
}

export type ProductsConfig = {
  Page: string
  Query: string
}

export type ProductsResponse = {
  Description: string
  response: Product[]
  Config: ProductsConfig
}

export async function searchByQuery(query: string): Promise<ProductsResponse> {
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
