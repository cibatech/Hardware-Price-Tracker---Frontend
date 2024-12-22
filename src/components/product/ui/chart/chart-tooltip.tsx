import { formattedRelativeDate } from "@/lib/formatter"

interface CustomTooltipProps {
  active: boolean
  payload: { value: number }[]
  label: string
}

export function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
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
