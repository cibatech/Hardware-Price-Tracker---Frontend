import { StoresOptions } from "./stores"

export type Product = {
  Id: string
  Title: string
  Description: string
  Value: number
  Link: string
  Where: string
  Kind: StoresOptions
  ImageUrl: string
  Slug: string
}

export type PriceClassification = "Good" | "Normal" | "Bad"

export type ProductsQueryConfig = {
  Page: string
  Query: string
}

export type ProductsQueryResponse = {
  Description: string
  response: Product[]
  Config: ProductsQueryConfig
}

export type ProductWithInstallment = Product & {
  onInstallment: string
}

export type ProductPriceResponse = {
  Description: string
  response: {
    Product: ProductWithInstallment
    PriceRef: {
      [date: string]: {
        Id: string
        AtDate: string
        Price: number
        ProdId: string
      }[]
    }
  }
  Config: {
    Id: string
    PasDays: string
  }
}




export type ProductComparasionResponse = {
  Description: string
  response: {
    FindInThreeStores: ProductWithInstallment[]
  }
  BestPrice: ProductWithInstallment
  Config: {
    Page: string
  }
}

export type ProductsFilterResponse = {
  Description: string
  response: {
    providedParams: {
      Category: string
      Min: number | null
      Max: number | null
      Page: number
    }
    Return: {
      TotalList: Product[]
      TotalListLength: number
    }
  }
  Config: {
    Page: string
  }
}

export interface IPriceClassification {
  priceClassification: PriceClassification
}

export type TrendsResponse = {
  Description: string
  response: {
    AveragePrice: number
    ProductEvaluation: PriceClassification
  }
  Config: {
    Id: string
  }
}
