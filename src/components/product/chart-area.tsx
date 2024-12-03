"use client"

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "../shadcn-ui/ui/chart"
import { useState } from "react"

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#22c55e",
  },
} satisfies ChartConfig

interface CustomTooltipProps {
  active: boolean
  payload: Record<string, number>[]
  label: string
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white rounded-lg shadow-lg flex-1 p-3">
        <strong className="text-green-600 font-bold text-xl">{`R$ ${payload[0].value}`}</strong>
        <p className="text-zinc-600 text-base">Em {label}</p>
      </div>
    )
  }

  return null
}

export function ChartArea() {
  const options = ["Asus", "Gigabyte", "MSI", "Asrock"]
  const [selected, setSelected] = useState("Asus")

  return (
    <div className="flex flex-col gap-10">
      <ChartContainer
        config={chartConfig}
        className="w-full h-auto max-h-[20rem] m-auto -ml-4 "
      >
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 0,
            right: 0,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={true}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis tickLine={false} tickFormatter={(value) => `${value}`} />
          <ChartTooltip
            cursor={false}
            content={<CustomTooltip active={false} payload={[]} label={""} />}
            formatter={(value) => `R$ ${value}`}
          />
          <Line
            dataKey="desktop"
            type="linear"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
      <section className="flex items-center w-full gap-8 ml-6 overflow-scroll">
        {options.map((option) => (
          <button
            key={option}
            className={`px-4 py-2 border bg-green-100 rounded-3xl transition-all ${
              selected === option
                ? "bg-green-700 text-white"
                : "text-green-700 hover:bg-green-700 hover:text-white"
            }`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </section>
    </div>
  )
}
