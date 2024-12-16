"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "../shadcn-ui/ui/chart"
import { filterProductByDateOptions } from "@/constants"
import { useFilters } from "@/hooks/useFilters"
import { useEffect, useMemo, useState } from "react"
import { FetchProductById } from "@/http/product/fetch-product-by-id"
import { useParams } from "next/navigation"
import { formattedRelativeDate } from "@/lib/formatter"

interface ChartData {
  date: string
  price: number
}

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#22c55e",
  },
} satisfies ChartConfig

interface CustomTooltipProps {
  active: boolean
  payload: { value: number }[]
  label: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-3">
        <strong className="text-green-600 font-bold text-xl">{`R$ ${payload[0].value}`}</strong>
        <p className="text-zinc-600 text-base">
          {formattedRelativeDate(label)}
        </p>
      </div>
    )
  }

  return null
}

export function ChartArea() {
  const { searchParams, updateFilter } = useFilters()
  const params = useParams()

  const [chartData, setChartData] = useState<ChartData[]>([])

  const selectedDate = useMemo(
    () => searchParams.get("date") || "30",
    [searchParams]
  )

  useEffect(() => {
    const fetchChartData = async () => {
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
      }
    }

    fetchChartData()
  }, [params.id, selectedDate])

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
            className={`px-4 py-2 border bg-green-100 rounded-3xl transition-all ${
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
