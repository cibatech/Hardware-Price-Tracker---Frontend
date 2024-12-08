import { api } from "@/services/api"

export type ProductsResponse = {
  Description: string
  response: {
    providedParams: {
      Category: string
      Min: number | null
      Max: number | null
      Page: number
    }
    Return: {
      TotalList: {
        Id: string
        Title: string
        Description: string
        Value: number
        Link: string
        Where: string
        Kind: string
        ImageUrl: string
        Slug: string
      }[]
    }
  }
  Config: {
    Page: string
  }
}


export async function filterProduct(store?: string | null): Promise<ProductsResponse> {
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
