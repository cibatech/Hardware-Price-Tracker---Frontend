import { LucideLaugh, LucideMeh, LucideSmile } from "lucide-react"
import { PopoverInfoCard } from "./popover-info"
import { IPriceClassification } from "@/@types/product"

export function PriceAnalysisCard({
  priceClassification,
}: IPriceClassification) {
  return (
    <div className="flex items-center rounded-xl gap-3 px-4 py-3 h-16 justify-between border border-zinc-300">
      <span className="text-base font-semibold">
        O preço está {priceClassification === "Good" && "ótimo"}
        {priceClassification === "Normal" && "bom"}
        {priceClassification === "Bad" && "ruim"}
      </span>
      <div className="flex items-center justify-between gap-3">
        <div className="bg-green-100 text-green-700 size-10 rounded-full flex items-center justify-center">
          {priceClassification === "Good" && <LucideLaugh />}
          {priceClassification === "Normal" && <LucideSmile />}
          {priceClassification === "Bad" && <LucideMeh />}
        </div>
        <PopoverInfoCard />
      </div>
    </div>
  )
}
