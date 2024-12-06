"use client"

import { Filter, Trash } from "lucide-react"
import { useState } from "react"
import { options, productsPaginationOptions } from "@/constants"
import { useFilters } from "@/hooks/useFilters"

import gpuPicture from "../../../../public/gpu.svg"

import { BreadcrumbDemo } from "@/components/product/ui/breadcumb"
import { Button } from "@/components/ui/button/button"
import { RenderSelect } from "@/components/results/render-select"
import { ProductCard } from "@/components/product/ui/cards/product-card"
import { FilterModal } from "@/components/results/filter-modal"
import { PaginationDemo } from "@/components/results/products-pagination"

export default function ResultsPage() {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false)
  const { filtersCount, resetFilters } = useFilters()

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
        <strong className="text-xl font-semibold">612 resultados</strong>
        <Button
          className="size-10"
          variant="filter"
          onClick={() => setFilterModalOpen(true)}
        >
          <Filter />
        </Button>
        <div className="md:flex gap-3 hidden">
          {RenderSelect("preco", "Preço", options, true)}
          {RenderSelect("loja", "Loja", options)}
          {RenderSelect("marca", "Marca", options)}
          {RenderSelect("categoria", "Categoria", options, false)}
        </div>
        <div className="md:flex gap-3 items-center text-sm text-green-700 hidden">
          <label htmlFor="">Produtos por página</label>
          {RenderSelect("pagina", "12", productsPaginationOptions, false, true)}
        </div>
      </section>

      <div className="flex flex-1 justify-center flex-wrap gap-8 m-auto">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            key={index}
            productImageUrl={gpuPicture}
            productPrice={879}
            productTitle="Placa de video galax geforce gtx 1650 ex plus 1click oc 4gb..."
            store="Terabyte"
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
