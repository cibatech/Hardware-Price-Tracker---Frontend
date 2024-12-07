"use client"

import { priceFormatter } from "@/lib/formatter"
import { Button } from "../ui/button/button"
import { PriceAnalysisCard, PriceClassification } from "./ui/cards/price-analysis-card"
import { ProductValueModal } from "./ui/product-value-modal"

interface PriceDatailsProps {
  store: string
  price: number
  productEvaluation: PriceClassification
}

export function PriceDatailsArea({ price, store, productEvaluation }: PriceDatailsProps) {
  const goToCompareSection = () => {
    const section = document.getElementById("compare-section")
    section?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="flex flex-col gap-8 ">
      <PriceAnalysisCard priceClassification={productEvaluation} />
      <div className="flex flex-col gap-3">
        <strong className="text-slate-600 text-xs font-semibold">
          Menor preço via <span className="text-green-500 ">{store}</span>
        </strong>
        <div className="flex flex-col">
          <strong className="text-green-500 text-2xl font-semibold">
            {priceFormatter.format(price)}{" "}
            <span className="text-sm font-semibold ">(frete não incluso)</span>
          </strong>
          <span className="text-xs text-slate-600 font-semibold">
            ou 8x de R$ 354,87 com juros
          </span>
        </div>
      </div>
      <Button variant="secondary" onClick={goToCompareSection}>
        Comparar em 3 lojas
      </Button>
      <div className="flex flex-col px-4 py-6 gap-2 border border-zinc-300 rounded-xl">
        <strong className="text-base font-semibold">
          Quer saber quando esse produto baixar o preço?
        </strong>
        <div className="flex items-center justify-between">
          <span>Ative as notificações.</span>
          <ProductValueModal />
        </div>
      </div>
    </div>
  )
}
