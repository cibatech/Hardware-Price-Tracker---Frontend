"use client"

import { useFilters } from "@/hooks/useFilters"
import { Button } from "../ui/button/button"
import { Input } from "../ui/inputs/input"

export const PriceModal = () => {
  const { updateFilter, } = useFilters()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

   

    const initialPrice = (e.target as number).elements["initial-price"].value
    const finalPrice = (e.target as number).elements["final-price"].value

    updateFilter("initialPrice", `${initialPrice}`)
    updateFilter("finalPrice", `${finalPrice}`)
    updateFilter("preco", "Preço")
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col  gap-4 w-80">
      <label htmlFor="initial-price" className="font-bold text-green-700">
        Preço inicial
      </label>
      <Input variant="outline" id="initial-price" placeholder="R$ 0,00" />
      <label htmlFor="final-price" className="font-bold text-green-700">
        Preço final
      </label>
      <Input variant="outline" id="final-price" placeholder="R$ 0,00" />
      <Button variant="secondary" type="submit">
        Aplicar
      </Button>
    </form>
  )
}
