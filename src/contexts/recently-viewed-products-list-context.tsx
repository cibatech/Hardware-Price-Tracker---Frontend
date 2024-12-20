"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { IProductCard } from "@/components/product/ui/cards/product-card"

interface RecentkyViwedProductsContextData {
  recentlyViewedProductsList: IProductCard[]
  addProductInRecentlyViewedProductsList: (product: IProductCard) => void
}

const RecentkyViwedProductsContext = createContext<
  RecentkyViwedProductsContextData | undefined
>(undefined)

export function RecentkyViwedProductsProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [recentlyViewedProductsList, setRecentlyViewedProductsList] = useState<
    IProductCard[]
  >([])

  useEffect(() => {
    function loadRecentlyViewedProducts() {
      const recentlyViewedProductsData = localStorage.getItem(
        "@recentlyViewedProductsList"
      )

      if (recentlyViewedProductsData) {
        setRecentlyViewedProductsList(JSON.parse(recentlyViewedProductsData))
      }
    }

    loadRecentlyViewedProducts()
  }, [])

  function addProductInRecentlyViewedProductsList(product: IProductCard) {
    const isAlreadyInList = recentlyViewedProductsList.some(
      (p) => p.productId === product.productId
    )

    if (isAlreadyInList) {
      const updatedList = [
        product,
        ...recentlyViewedProductsList.filter((p) => p.productId !== product.productId),
      ]
      setRecentlyViewedProductsList(updatedList)
      localStorage.setItem(
        "@recentlyViewedProductsList",
        JSON.stringify(updatedList)
      )
      return
    }

    const updatedList = [product, ...recentlyViewedProductsList].slice(0, 10)
    setRecentlyViewedProductsList(updatedList)
    localStorage.setItem(
      "@recentlyViewedProductsList",
      JSON.stringify(updatedList)
    )
  }

  return (
    <RecentkyViwedProductsContext.Provider
      value={{
        recentlyViewedProductsList,
        addProductInRecentlyViewedProductsList,
      }}
    >
      {children}
    </RecentkyViwedProductsContext.Provider>
  )
}

export const useRecentkyViwedProducts = () => {
  const context = useContext(RecentkyViwedProductsContext)
  if (!context) {
    throw new Error(
      "useAlerts must be used within an RecentkyViwedProductsProvider"
    )
  }
  return context
}
