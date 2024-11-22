import { priceFormatter } from "@/lib/formatter"
import Image from "next/image"

interface IProductCard {
  productImageUrl: string
  productPrice: number
  productTitle: string
  store: string
}

export function ProductCard({
  productImageUrl,
  productPrice,
  productTitle,
  store,
}: IProductCard) {
  return (
    <div className="flex flex-col justify-center px-6 py-8 gap-6 border rounded-xl max-w-xs">
      <Image src={productImageUrl} alt="" className="w-[14.5rem] h-auto m-auto" />
      <span className="text-base font-medium">{productTitle}</span>
      <div className="flex flex-col gap-4">
        <span className="text-zinc-600 text-xs font-semibold ">
          Menor preço via {store}
        </span>
        <strong className="text-xl font-semibold text-green-500">
          {priceFormatter.format(productPrice)}
        </strong>
      </div>
    </div>
  )
}
