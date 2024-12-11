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

export type ProductPriceResponse = {
  Description: string
  response: {
    Product: Product
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

export type ProductWithInstallment = Product & {
  onInstallment: null
}

export type ProductComparasionResponse = {
  Description: string
  response: {
    FindInThreeStores: Product[]
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
