"use client"

import { Select } from "../components/ui/select/select"
import gpuPicture from "../../../public/gpu.svg"
import { ProductCard } from "../components/ui/product-card"
import { PaginationDemo } from "../components/results/products-pagination"
import { useState } from "react"
import { DefaultLayout } from "../components/defaultLayout/default-layout"
import { Button } from "../components/ui/button/button"

export default function ResultsPage() {
  const options = ["Asus", "Gigabyte", "MSI", "Asrock"]
  const [selected, setSelected] = useState("Marca")

  const handleOptionClick = (option: string) => {
    setSelected(option)
  }

  return (
    <DefaultLayout>
      <div className="flex flex-col gap-8 py-8 w-full max-w-screen-xl m-auto">
        <section className="flex flex-1 items-center justify-between">
          <div>
            <h1>Breadcumb</h1>
          </div>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <strong className="text-xl font-semibold">Filtros</strong>
              <span className="size-5 flex items-center justify-center bg-green-700 rounded-full text-zinc-50">
                2
              </span>
            </div>
            <Button variant="delete">Resetar Filtros</Button>
          </div>
        </section>
        <div className="flex items-center justify-between  w-full ">
          <strong className="text-xl font-semibold">612 resultados</strong>
          <div className="flex gap-3">
            <Select>
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 border border-green-500 rounded-full text-green-500 hover:bg-green-500 hover:text-white ${
                    selected === option ? "bg-green-500 text-white" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </Select>
            <Select>
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`px-4 py-2 border border-green-500 rounded-full text-green-500 hover:bg-green-500 hover:text-white ${
                    selected === option ? "bg-green-500 text-white" : ""
                  }`}
                >
                  {option}
                </button>
              ))}
            </Select>
          </div>
          <div className="flex gap-3 items-center text-sm text-green-700">
            <label htmlFor="">Produtos por página</label>
            <Select><p>a</p></Select>
          </div>
        </div>
        <div className="flex flex-1 justify-center flex-wrap gap-8 m-auto ">
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
        <PaginationDemo />
      </div>
    </DefaultLayout>
  )
}
