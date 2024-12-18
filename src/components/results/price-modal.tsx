"use client"

import { useFilters } from "@/hooks/useFilters"
import { Button } from "../ui/button/button"
import { Input } from "../ui/inputs/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

export const priceFilterFormSchema = z.object({
  initialPrice: z
    .string()
    .transform((value) => Number(value)) 
    .refine((value) => !isNaN(value), "Preço inicial deve ser um número"),
  finalPrice: z
    .string()
    .transform((value) => Number(value)) 
    .refine((value) => !isNaN(value), "Preço final deve ser um número"),
})

type PriceFilterFormSchema = z.infer<typeof priceFilterFormSchema>

export const PriceModal = () => {
  const { updateFilter, searchParams, params } = useFilters()

  const initialPrice = Number(searchParams.get("initialPrice"))
  const finalPrice = Number(searchParams.get("finalPrice"))
  const priceFilter = searchParams.get("priceFilter")

  const { register, handleSubmit } = useForm<PriceFilterFormSchema>({
    resolver: zodResolver(priceFilterFormSchema),
    defaultValues: {
      initialPrice: initialPrice,
      finalPrice: finalPrice,
    },
  })

  function handleSubmitData(data: PriceFilterFormSchema) {
    const { initialPrice, finalPrice } = data
    console.log(data)

    updateFilter("initialPrice", `${initialPrice}`)
    updateFilter("finalPrice", `${finalPrice}`)

    const currentPriceFilter = params.get("price")
    if (currentPriceFilter === "true") {
      updateFilter("priceFilter", "false") 
    } else {
      updateFilter("priceFilter", "true") 
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubmitData)}
      className="flex flex-col gap-4 w-80"
    >
      <label htmlFor="initial-price" className="font-bold text-green-700">
        Preço inicial
      </label>
      <Input
        variant="outline"
        id="initial-price"
        placeholder="R$ 0,00"
        type="number"
        {...register("initialPrice")}
      />
      <label htmlFor="final-price" className="font-bold text-green-700">
        Preço final
      </label>
      <Input
        variant="outline"
        id="final-price"
        placeholder="R$ 0,00"
        type="number"
        {...register("finalPrice")}
      />
      <Button variant="secondary" type="submit">
        {priceFilter === "true" ? "Desativar filtro" : "Aplicar"}
      </Button>
    </form>
  )
}
