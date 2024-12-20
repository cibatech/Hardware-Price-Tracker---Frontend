"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn-ui/ui/carousel"

import gpuPicture from "../../assets/image-indisponible.svg"
import { ProductCard } from "../product/ui/cards/product-card"
import { useMostSearchedProductsContexts } from "@/contexts/most-searched-products-context"

export function MostSearchedProducts() {
  const { mostSearchedProductsContextList } = useMostSearchedProductsContexts()

  return (
    <Carousel className="w-full md:max-w-full max-w-[80%]">
      <CarouselContent className="-ml-1 gap-8 ">
        {mostSearchedProductsContextList.map((product, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <ProductCard
              productImageUrl={product.suggetionProductImageUrl || gpuPicture}
              productPrice={product.suggestionProductPrice}
              productTitle={product.suggestionTitle}
              store={product.suggestionProductStore}
              productId={product.suggestionProductId}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
