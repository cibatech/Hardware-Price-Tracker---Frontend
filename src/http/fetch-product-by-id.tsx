import { api } from "@/services/api"

export type ProductResponse = {
  Description: string
  response: {
    Product: {
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
    PriceRef: {
      Id: string
      AtDate: string
      Price: number
      ProdId: string
    }[]
  }
  Config: {
    Id: string
  }
}

export async function FetchProductById(id: string): Promise<ProductResponse> {
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
