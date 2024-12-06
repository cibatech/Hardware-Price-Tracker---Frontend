import Image from "next/image"
import gpuImage from "../../../../public/gpu.svg"

import { BreadcrumbDemo } from "@/components/product/ui/breadcumb"
import StarRating from "@/components/product/ui/avaliation-stars"
import { PriceDatailsArea } from "@/components/product/price-details-area"
import { ComparePriceArea } from "@/components/product/compare-price-area"
import { PriceHistoryArea } from "@/components/product/price-history-area"

export default function ProductPage() {
  return (
    <div className="flex flex-col max-w-screen-lg m-auto">
      <BreadcrumbDemo />
      <section className="flex justify-center gap-16 w-full flex-wrap p-4">
        <div>
          <h1 className="text-2xl font-medium">
            Placa de vídeo GTX 1650 4G GDDR6
          </h1>
          <StarRating rating={2.4} avaliationsNumber={203} />
          <Image src={gpuImage} alt="" className="size-[32rem]" />
        </div>
        <PriceDatailsArea />
      </section>
      <ComparePriceArea />
      <PriceHistoryArea />
    </div>
  )
}
