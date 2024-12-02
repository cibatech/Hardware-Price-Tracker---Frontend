import { PriceClassificationCard } from "./ui/cards/price-classification";

export function ComparePriceArea() {
  return (
    <section
      id="compare-section"
      className="flex justify-center flex-col gap-11 py-8 px-4"
    >
      <strong className="text-xl font-semibold">
        Compare preços em 3 lojas
      </strong>
      <div className="flex gap-8 flex-col">
        <PriceClassificationCard isLowestPrice={true} />
        <PriceClassificationCard isLowestPrice={false} />
        <PriceClassificationCard isLowestPrice={false} />
      </div>
    </section>
  )
}