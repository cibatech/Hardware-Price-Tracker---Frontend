"use client"

import { api } from "@/services/api"
import { createContext, ReactNode } from "react"

export interface ProviderProps {
  children: ReactNode
}

interface UserProviderType {
  filterProduct: (store?: string | null) => Promise<void>
}

export const ProductsContext = createContext({} as UserProviderType)

export function ProductsProvider({ children }: ProviderProps) {
  async function filterProduct(store?: string | null) {
    try {
      const { data } = await api.get(
        `/api/products/hardware/null--null/${store}/1`
      )

      console.log("REQ")
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductsContext.Provider value={{ filterProduct }}>
      {children}
    </ProductsContext.Provider>
  )
}
