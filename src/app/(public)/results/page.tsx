"use client"

import { Filter, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import { options, productsPaginationOptions, stores } from "@/constants"
import { useFilters } from "@/hooks/useFilters"

// import gpuPicture from "../../../../public/gpu.svg"

import { BreadcrumbDemo } from "@/components/product/ui/breadcumb"
import { Button } from "@/components/ui/button/button"
import { RenderSelect } from "@/components/results/render-select"
import { ProductCard } from "@/components/product/ui/cards/product-card"
import { FilterModal } from "@/components/results/filter-modal"
import { PaginationDemo } from "@/components/results/products-pagination"
import { filterProduct, ProductsResponse } from "@/http"

export default function ResultsPage() {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false)
  const { filtersCount, resetFilters, searchParams } = useFilters()
  const [productsList, setProductsList] = useState<
    ProductsResponse["response"]["Return"]["TotalList"]
  >([])

  const store = searchParams.get("loja")

  useEffect(() => {
    console.log(store)

    async function fetchProducts() {
      const data = await filterProduct(store)
      if (data) {
        setProductsList(data.response.Return.TotalList) 
      }
    }

    fetchProducts()
  }, [store])

  const totalResults = productsList.length

  return (
    <main className="flex flex-col gap-8 py-8 w-full max-w-screen-xl m-auto">
      <section className="flex flex-1 items-center justify-between">
        <BreadcrumbDemo />
        <div className="md:flex items-center justify-between gap-4 hidden">
          <div className="flex items-center gap-2">
            <strong className="text-xl font-semibold">Filtros</strong>
            <span className="size-5 flex items-center justify-center bg-green-700 rounded-full text-zinc-50">
              {filtersCount}
            </span>
          </div>
          <Button variant="delete" onClick={resetFilters}>
            <Trash />
            Resetar Filtros
          </Button>
        </div>
      </section>

      <section className="flex items-center justify-between md:w-[95%] w-[20rem] m-auto">
        <strong className="text-xl font-semibold">
          {totalResults} resultados
        </strong>
        <Button
          className="size-10"
          variant="filter"
          onClick={() => setFilterModalOpen(true)}
        >
          <Filter />
        </Button>
        <div className="md:flex gap-3 hidden">
          {RenderSelect("preco", "Preço", options, true)}
          {RenderSelect("loja", "Loja", stores)}
          {RenderSelect("marca", "Marca", options)}
          {RenderSelect("categoria", "Categoria", options, false)}
        </div>
        <div className="md:flex gap-3 items-center text-sm text-green-700 hidden">
          <label htmlFor="">Produtos por página</label>
          {RenderSelect("pagina", "12", productsPaginationOptions, false, true)}
        </div>
      </section>

      <div className="flex flex-1 justify-center flex-wrap gap-8 m-auto">
        {productsList.map((product, index) => (
          <ProductCard
            key={index}
            productImageUrl={product.ImageUrl}
            productPrice={product.Value}
            productTitle={product.Title}
            store={product.Kind}
            redirectLink=""
          />
        ))}
      </div>

      {isFilterModalOpen && (
        <FilterModal closeFilterModal={() => setFilterModalOpen(false)} />
      )}

      <PaginationDemo />
    </main>
  )
}
