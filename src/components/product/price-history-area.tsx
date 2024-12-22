import { ProductChartHistoryPrices } from "./ui/chart/chart"

export function PriceHistoryArea() {
  return (
    <section
      className="flex justify-center flex-col gap-11 py-8 px-4"
      id="price-history"
    >
      <strong className="text-xl font-semibold">Histórico de preços</strong>
      <ProductChartHistoryPrices />
    </section>
  )
}
