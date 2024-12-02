
import Image from "next/image"
import gpuImage from "../../../../public/gpu.svg"
import { DefaultLayout } from "@/app/components/defaultLayout/default-layout"
import { BreadcrumbDemo } from "@/app/components/product/ui/breadcumb"
import StarRating from "@/app/components/product/ui/avaliation-stars"
import { PriceDatailsArea } from "@/app/components/product/price-details-area"
import { ComparePriceArea } from "@/app/components/product/compare-price-area"
import { PriceHistoryArea } from "@/app/components/product/price-history-area"


export default function ProductPage() {
  return (
    <DefaultLayout>
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
    </DefaultLayout>
  )
}
