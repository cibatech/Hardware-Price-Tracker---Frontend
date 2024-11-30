"use client"

import { Select } from "../components/ui/select/select"
import { ProductCard } from "../components/ui/product-card"
import { PaginationDemo } from "../components/results/products-pagination"
import { DefaultLayout } from "../components/defaultLayout/default-layout"
import { Button } from "../components/ui/button/button"
import { BreadcrumbDemo } from "../components/product/ui/breadcumb"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Filter, Trash, X } from "lucide-react"
import { useState } from "react"
import gpuPicture from "../../../public/gpu.svg"
import { Input } from "../components/ui/inputs/input"
import { productsPaginationOptions } from "@/constants"

export default function ResultsPage() {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false)
  const { replace } = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const params = new URLSearchParams(searchParams)
  const options = ["Asus", "Gigabyte", "MSI", "Asrock"]

  const filtersCount = params.size

  const handleOptionClick = (filterKey: string, option: string) => {
    const isSelected = searchParams.get(filterKey) === option
    if (isSelected) {
      params.delete(filterKey)
    } else {
      params.set(filterKey, option)
    }
    replace(`${pathname}?${params.toString()}`)
  }

  function handleResetFilters() {
    params.forEach((_, key) => params.delete(key))
    replace(pathname)
  }

  const PriceModal = () => {
    return (
      <form className="flex flex-col  gap-4 w-80">
        <label htmlFor="initial-price" className="font-bold text-green-700">
          Preço inicial
        </label>
        <Input variant="outline" id="initial-price" placeholder="R$ 0,00" />
        <label htmlFor="final-price" className="font-bold text-green-700">
          Preço final
        </label>
        <Input variant="outline" id="final-price" placeholder="R$ 0,00" />
        <Button variant="secondary">Aplicar</Button>
      </form>
    )
  }

  const renderSelect = (filterKey: string, label: string, list: string[], priceFilter?: boolean, pagination?: boolean) => (
    <Select selected={searchParams.get(filterKey) || label} defaultText={label} pagePagination={pagination}>
      {!priceFilter ? list.map((option) => (
        <button
          key={option}
          onClick={() => handleOptionClick(filterKey, option)}
          className={`px-4 py-2 border border-green-500 rounded-full text-green-500 hover:bg-green-700 hover:text-white ${
            searchParams.get(filterKey) === option
              ? "bg-green-700 text-white border-green-700"
              : ""
          }`}
        >
          {option}
        </button>
      )): (<PriceModal />)}
    </Select>
  )

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-8 py-8 w-full max-w-screen-xl m-auto">
        <section className="flex flex-1 items-center justify-between">
          <BreadcrumbDemo />
          <div className="md:flex items-center justify-between gap-4 hidden">
            <div className="flex items-center gap-2">
              <strong className="text-xl font-semibold">Filtros</strong>
              <span className="size-5 flex items-center justify-center bg-green-700 rounded-full text-zinc-50">
                {filtersCount}
              </span>
            </div>
            <Button variant="delete" onClick={handleResetFilters}>
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
            {renderSelect("preco", "Preço", options, true)}
            {renderSelect("loja", "Loja", options)}
            {renderSelect("marca", "Marca", options)}
            {renderSelect("categoria", "Categoria", options)}
          </div>
          <div className="md:flex gap-3 items-center text-sm text-green-700 hidden">
            <label htmlFor="">Produtos por página</label>
            {renderSelect(
              "pagina",
              "12",
              productsPaginationOptions,
              false,
              true
            )}
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
            />
          ))}
        </div>

        {isFilterModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg w-11/12 max-w-md p-6">
              <header className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <strong className="text-xl font-semibold">Filtros</strong>
                  <span className="size-5 flex items-center justify-center bg-green-700 rounded-full text-zinc-50">
                    {filtersCount}
                  </span>
                </div>
                <button
                  onClick={() => setFilterModalOpen(false)}
                  className="text-zinc-900"
                >
                  <X />
                </button>
              </header>
              <div className="flex flex-col gap-4 w-full">
                {renderSelect("marca", "Marca", options)}
                {renderSelect("tipo", "Tipo", options)}
                {renderSelect("categoria", "Categoria", options)}
                <div className="flex items-center justify-between">
                  <span className="text-base text-green-700">
                    Produtos por página
                  </span>
                  {renderSelect("categoria", "12", options)}
                </div>
              </div>
              <div className="mt-6">
                <Button
                  onClick={handleResetFilters}
                  variant="delete"
                  className="w-full"
                >
                  <Trash />
                  Resetar Filtros
                </Button>
              </div>
            </div>
          </div>
        )}

        <PaginationDemo />
      </div>
    </DefaultLayout>
  )
}
