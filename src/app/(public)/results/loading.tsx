import {
  ProductSketonImage,
  ProductSketonPriceDatails,
  ProductSketonTitle,
} from "@/components/product/ui/skeletons"

export default function Loading() {
  return (
    <div className="flex flex-col h-full max-w-screen-lg m-auto p-4 space-y-6">
      <p>Carregando produtos</p>
      {/* Breadcrumb Skeleton */}
      <div className="w-full">
        <ProductSketonTitle />
      </div>

      {/* Main Section */}
      <section className="flex justify-center gap-16 w-full flex-wrap">
        {/* Image and Title Skeleton */}
        <div className="flex flex-col  gap-4">
          <ProductSketonTitle />
          <ProductSketonImage />
        </div>

        {/* Price Details Skeleton */}
        <div className="flex flex-col gap-4">
          <ProductSketonPriceDatails />
        </div>
      </section>

      {/* Compare Prices Skeleton */}
      <div className="flex flex-col gap-4">
        <ProductSketonTitle />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ProductSketonPriceDatails />
          <ProductSketonPriceDatails />
          <ProductSketonPriceDatails />
        </div>
      </div>
    </div>
  )
}
