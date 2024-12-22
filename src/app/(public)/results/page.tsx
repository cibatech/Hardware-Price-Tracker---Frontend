"use client"

import { Filter, Trash } from "lucide-react"
import { useEffect, useState } from "react"
import {
  hardwareCategories,
  productsPaginationOptions,
  stores,
} from "@/constants"
import { useFilters } from "@/hooks/useFilters"
import { BreadcrumbDemo } from "@/components/ui/breadcumb"
import { Button } from "@/components/ui/button"
import { RenderSelect } from "@/components/results/select/render-select"
import { ProductCard } from "@/components/product/ui/cards/product-card"
import { FilterModal } from "@/components/results/filter-modal"
import { PaginationDemo } from "@/components/results/products-pagination"
import { filterProduct } from "@/http/product/filter-product"
import { ProductsFilterResponse } from "@/@types/product"
import { EmptySearchResults } from "@/components/results/empty-search-results"
import { useRouter } from "next/navigation"
import { LoadingSpinner } from "@/components/ui/loading"
import { EmptyFilterResults } from "@/components/results/empty-filter-results"

export default function ResultsPage() {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false)
  const { filtersCount, resetFilters, searchParams, params } = useFilters()
  const [totalProducts, setTotalProducts] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [productsList, setProductsList] = useState<
    ProductsFilterResponse["response"]["Return"]["TotalList"]
  >([])
  const [totalPages, setTotalPages] = useState(1)
  const router = useRouter()

  const category = searchParams.get("categoria") || "hardware"
  const store = searchParams.get("loja")
  const query = searchParams.get("query")
  const currentPage = Number(searchParams.get("page")) || 1
  const productsPerPage = Number(searchParams.get("productsPerPage")) || 12

  const minPrice = searchParams.get("initialPrice")
    ? Number(searchParams.get("initialPrice"))
    : null
  const maxPrice = searchParams.get("finalPrice")
    ? Number(searchParams.get("finalPrice"))
    : null

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true)
      try {
        const data = await filterProduct(
          category,
          store,
          minPrice,
          maxPrice,
          query,
          currentPage
        )

        if (data) {
          setProductsList(data.response.Return.TotalList)
          setTotalProducts(data.response.Return.TotalListLength)

          const totalPages = Math.ceil(
            data.response.Return.TotalListLength / 20
          )
          setTotalPages(totalPages)
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [category, store, query, minPrice, maxPrice, currentPage, productsPerPage])

  useEffect(() => {
    let shouldUpdate = false
    const updatedParams = new URLSearchParams(params.toString())

    if (!searchParams.get("categoria")) {
      updatedParams.set("categoria", "hardware")
      shouldUpdate = true
    }
    if (!searchParams.get("productsPerPage")) {
      updatedParams.set("productsPerPage", "12")
      shouldUpdate = true
    }

    if (shouldUpdate) {
      router.replace(`?${updatedParams.toString()}`)
    }
  }, [searchParams, router, params, currentPage])

  const isEmptyQueryForLoading = !isLoading && totalProducts === 0 && !!query
  const isEmptyFilterResults =
    !isLoading &&
    totalProducts === 0 &&
    !query &&
    (minPrice || maxPrice || store)
  // const isEmptyFilterResults = !isLoading && totalProducts === 0

  return (
    <main className="flex flex-col gap-8 py-8 w-full max-w-screen-xl m-auto">
      <section className="flex flex-1 items-center justify-between">
        <BreadcrumbDemo isProductPage={false} />
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
          {totalProducts} resultados
        </strong>
        <Button
          className="size-10"
          variant="filter"
          onClick={() => setFilterModalOpen(true)}
        >
          <Filter />
        </Button>
        <div className="md:flex gap-3 hidden">
          <RenderSelect filterKey="preco" label="Preço" priceFilter />
          <RenderSelect filterKey="loja" label="Loja" list={stores} />
          <RenderSelect
            filterKey="categoria"
            label="Categoria"
            list={hardwareCategories}
          />
        </div>
        <div className="md:flex gap-3 items-center text-sm text-green-700 hidden">
          <label htmlFor="">Produtos por página</label>
          <RenderSelect
            filterKey="productsPerPage"
            label="12 "
            list={productsPaginationOptions}
            pagination
          />
        </div>
      </section>

      <div className="flex flex-1 justify-center flex-wrap gap-8 m-auto">
        {isLoading && <LoadingSpinner />}
        {isEmptyQueryForLoading && <EmptySearchResults query={query} />}
        {isEmptyFilterResults && <EmptyFilterResults />}
        {!isLoading &&
          totalProducts > 0 &&
          productsList
            .slice(0, productsPerPage)
            .map((product, index) => (
              <ProductCard
                key={index}
                productImageUrl={product.ImageUrl}
                productPrice={product.Value}
                productTitle={product.Title}
                store={product.Kind}
                productId={product.Id}
              />
            ))}
      </div>

      {isFilterModalOpen && (
        <FilterModal closeFilterModal={() => setFilterModalOpen(false)} />
      )}

      <PaginationDemo totalPages={totalPages} />
    </main>
  )
}
