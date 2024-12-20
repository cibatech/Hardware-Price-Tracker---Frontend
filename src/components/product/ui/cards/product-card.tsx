"use client"

import Image from "next/image"
import ImageIndisplonible from "@/assets/image-indisponible.svg"
import { priceFormatter } from "@/lib/formatter"
import { useRecentkyViwedProducts } from "@/contexts/recently-viewed-products-list-context"
import Link from "next/link"

export interface IProductCard {
  productImageUrl: string
  productPrice: number
  productTitle: string
  productId: string
  store: string
}

export function ProductCard({
  productImageUrl,
  productPrice,
  productTitle,
  store,
  productId,
}: IProductCard) {
  const { addProductInRecentlyViewedProductsList } = useRecentkyViwedProducts()

  const product = {
    productImageUrl,
    productPrice,
    productTitle,
    store,
    productId,
  }

  function handleAddProductInRecentlyViewedProductsList() {
    addProductInRecentlyViewedProductsList(product)
  }

  return (
    <div
      className="flex flex-col justify-center px-6 py-8 gap-6 border rounded-xl max-w-[17.5rem] cursor-pointer hover:shadow-lg"
      onClick={handleAddProductInRecentlyViewedProductsList}
    >
      <Link href={`/product/${productId}`}>
        <Image
          src={productImageUrl || ImageIndisplonible}
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
            {productPrice === 0
              ? "Indisponível"
              : priceFormatter.format(productPrice)}
          </strong>
        </div>
      </Link>
    </div>
  )
}
