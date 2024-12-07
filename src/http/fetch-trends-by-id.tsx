import { PriceClassification } from "@/components/product/ui/cards/price-analysis-card"
import { api } from "@/services/api"

export type ProductResponse = {
  Description: string
  response: {
    AveragePrice: number
    ProductEvaluation: PriceClassification
  }
  Config: {
    Id: string
  }
}

export async function FetchTrendsById(id: string): Promise<ProductResponse> {
  try {
    const { data } = await api.get(`/api/products/trends/${id}`)

    console.log("Pegando trends")
    console.log(data)

    return data
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao buscar as infos")
  }
}
