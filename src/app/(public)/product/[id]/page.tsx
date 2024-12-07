import Image from "next/image"


import { BreadcrumbDemo } from "@/components/product/ui/breadcumb"
import StarRating from "@/components/product/ui/avaliation-stars"
import { PriceDatailsArea } from "@/components/product/price-details-area"
import { ComparePriceArea } from "@/components/product/compare-price-area"
import { PriceHistoryArea } from "@/components/product/price-history-area"
import { FetchProductById } from "@/http/fetch-product-by-id"

export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const data = await FetchProductById(params.id)

  return (
    <div className="flex flex-col max-w-screen-lg m-auto">
      <BreadcrumbDemo />
      <section className="flex justify-center gap-16 w-full flex-wrap p-4">
        <div>
          <h1 className="text-2xl font-medium max-w-[430px]">
            {data.response.Product.Title}
          </h1>
          <StarRating rating={2.4} avaliationsNumber={203} />
          <Image src={data.response.Product.ImageUrl} width={212} height={112} alt="" className="size-[16rem]" />
        </div>
        <PriceDatailsArea />
      </section>
      <ComparePriceArea />
      <PriceHistoryArea />
    </div>
  )
}
