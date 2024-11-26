import { LucideLaugh, LucideMeh, LucideSmile } from "lucide-react"
import { PopoverInfo } from "./popover-info"

type PriceClassification = "good" | "ok" | "bed"

interface IPriceClassification {
  priceClassification: PriceClassification
}

export function PriceAnalysisCard({
  priceClassification,
}: IPriceClassification) {
  return (
    <div className="flex items-center rounded-xl gap-3 px-4 py-3 h-16 justify-between border border-zinc-300">
      <span className="text-base font-semibold">O preço está ótimo</span>
      <div className="flex items-center justify-between gap-3">
        <div className="bg-green-100 text-green-700 size-10 rounded-full flex items-center justify-center">
          {priceClassification === "good" && <LucideLaugh />}
          {priceClassification === "ok" && <LucideSmile />}
          {priceClassification === "bed" && <LucideMeh />}
        </div>
        <PopoverInfo />
      </div>
    </div>
  )
}
