import { StoresOptions } from "@/components/product/ui/cards/price-classification"
import { api } from "@/services/api"

export type ProductsResponse = {
  Description: string
  response: {
    FindInThreeStores: {
      Id: string
      Title: string
      Description: string
      Value: number
      Link: string
      Where: string
      Kind: StoresOptions
      ImageUrl: string
      Slug: string
    }[]
  }
  BestPrice: {
    Id: string
    Title: string
    Description: string
    Value: number
    Link: string
    Where: string
    Kind: string
    ImageUrl: string
    Slug: string
    onInstallment: null
  }
  Config: {
    Page: string
  }
}

export async function FetchProductsByComparasion(
  store?: string | null
): Promise<ProductsResponse> {
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
