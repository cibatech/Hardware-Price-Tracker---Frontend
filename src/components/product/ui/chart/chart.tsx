"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip } from "../../../shadcn-ui/ui/chart"
import { filterProductByDateOptions } from "@/constants"
import { useFilters } from "@/hooks/useFilters"
import { useEffect, useMemo, useState } from "react"
import { FetchProductById } from "@/http/product/fetch-product-by-id"
import { useParams } from "next/navigation"
import { LoadingSpinner } from "../../../ui/loading"
import { chartConfig } from "@/lib/utils"
import { CustomTooltip } from "./chart-tooltip"

interface ChartData {
  date: string
  price: number
}

export function ProductChartHistoryPrices() {
  const { searchParams, updateFilter } = useFilters()
  const params = useParams()

  const [chartData, setChartData] = useState<ChartData[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const selectedDate = useMemo(
    () => searchParams.get("date") || "30",
    [searchParams]
  )

  useEffect(() => {
    const fetchChartData = async () => {
      setIsLoading(true)
      try {
        const response = await FetchProductById(
          params.id as string,
          Number(selectedDate)
        )

        if (response?.response?.PriceRef) {
          const formattedData = Object.entries(response.response.PriceRef).map(
            ([date, priceRecords]) => ({
              date,
              price: priceRecords[0]?.Price ?? 0,
            })
          )
          setChartData(formattedData)
        }
      } catch (error) {
        console.error("Erro ao buscar os dados do gráfico:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchChartData()
  }, [params.id, selectedDate])

  if (isLoading) {
    return <LoadingSpinner />
  }

  return (
    <div className="flex flex-col gap-10">
      <ChartContainer
        config={chartConfig}
        className="w-full h-auto max-h-[20rem] m-auto -ml-4"
      >
        <LineChart data={chartData} margin={{ left: 0, right: 0 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine
            tickMargin={8}
            tickFormatter={(value) => value.slice(5, 10)}
          />
          <YAxis tickLine={false} tickFormatter={(value) => `R$ ${value}`} />
          <ChartTooltip
            cursor={false}
            content={<CustomTooltip active={false} payload={[]} label={""} />}
          />
          <Line
            dataKey="price"
            type="linear"
            stroke={chartConfig.desktop.color}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>

      <section className="flex items-center w-full gap-8 ml-6 overflow-scroll">
        {filterProductByDateOptions.map((option) => (
          <button
            key={option.value}
            className={`px-4 py-2 border bg-green-100 rounded-3xl transition-all text-nowrap ${
              selectedDate === option.value
                ? "bg-green-700 text-white"
                : "text-green-700 hover:bg-green-700 hover:text-white"
            }`}
            onClick={() => updateFilter("date", option.value)}
          >
            {option.title}
          </button>
        ))}
      </section>
    </div>
  )
}
