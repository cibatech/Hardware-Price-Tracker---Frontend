"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { SuggestionItemProps } from "@/components/ui/search/suggestion-card"

interface MostSearchedProductsContextData {
  mostSearchedProductsContextList: SuggestionItemProps[]
  addProductInMostSearchedProductsContextList: (product: SuggestionItemProps) => void
}

const MostSearchedProductsContext = createContext<
  MostSearchedProductsContextData | undefined
>(undefined)

export function MostSearchedProductProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [mostSearchedProductsContextList, setMostSearchedProductsContextList] =
    useState<SuggestionItemProps[]>([])

  useEffect(() => {
    function loadRecentlyViewedProducts() {
      const recentlyViewedProductsData = localStorage.getItem(
        "@mostSearchedProductsContextList"
      )

      if (recentlyViewedProductsData) {
        setMostSearchedProductsContextList(
          JSON.parse(recentlyViewedProductsData)
        )
      }
    }

    loadRecentlyViewedProducts()
  }, [])

  function addProductInMostSearchedProductsContextList(product: SuggestionItemProps) {
    const isAlreadyInList = mostSearchedProductsContextList.some(
      (p) => p.suggestionProductId === product.suggestionProductId
    )

    if (isAlreadyInList) {
      const updatedList = [
        product,
        ...mostSearchedProductsContextList.filter(
          (p) => p.suggestionProductId !== product.suggestionProductId
        ),
      ]
      setMostSearchedProductsContextList(updatedList)
      localStorage.setItem(
        "@mostSearchedProductsContextList",
        JSON.stringify(updatedList)
      )
      return
    }

    const updatedList = [product, ...mostSearchedProductsContextList].slice(
      0,
      10
    )
    setMostSearchedProductsContextList(updatedList)
    localStorage.setItem(
      "@mostSearchedProductsContextList",
      JSON.stringify(updatedList)
    )
  }

  return (
    <MostSearchedProductsContext.Provider
      value={{
        mostSearchedProductsContextList,
        addProductInMostSearchedProductsContextList,
      }}
    >
      {children}
    </MostSearchedProductsContext.Provider>
  )
}

export const useMostSearchedProductsContexts = () => {
  const context = useContext(MostSearchedProductsContext)
  if (!context) {
    throw new Error(
      "useAlerts must be used within an RecentkyViwedProductsProvider"
    )
  }
  return context
}
