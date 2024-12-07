"use client"

import { priceFormatter } from "@/lib/formatter"
import Image from "next/image"
import { redirect } from "next/navigation"

interface IProductCard {
  productImageUrl: string
  productPrice: number
  productTitle: string
  store: string
  redirectLink: string
}

export function ProductCard({
  productImageUrl,
  productPrice,
  productTitle,
  store,
  redirectLink
}: IProductCard) {
  function handleRedirectToProductPage() {
    redirect(`/product/${redirectLink}`)
  }

  return (
    <div
      className="flex flex-col justify-center px-6 py-8 gap-6 border rounded-xl max-w-[17.5rem] cursor-pointer hover:shadow-lg"
      onClick={handleRedirectToProductPage}
    >
      <Image
        src={productImageUrl}
        alt=""
        width={232}
        height={146} 
        className="w-[14.5rem] h-auto m-auto"
      />
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
