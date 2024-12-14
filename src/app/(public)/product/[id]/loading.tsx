import {
  ProductSketonImage,
  ProductSketonPriceDatails,
  ProductSketonTitle,
} from "@/components/product/ui/skeletons"

export default function Loading() {
  return (
    <main className="flex flex-col max-w-screen-lg m-auto p-4 space-y-6 h-screen">
      <div className="w-full">
        <ProductSketonTitle />
      </div>
      <section className="flex justify-center gap-16 w-full flex-wrap">
        <div className="flex flex-col gap-4">
          <ProductSketonTitle />
          <ProductSketonImage />
        </div>
        <div className="flex flex-col gap-4">
          <ProductSketonPriceDatails />
        </div>
      </section>
      <div className="flex flex-col gap-4">
        <ProductSketonTitle />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductSketonPriceDatails />
          <ProductSketonPriceDatails />
          <ProductSketonPriceDatails />
        </div>
      </div>
    </main>
  )
}
