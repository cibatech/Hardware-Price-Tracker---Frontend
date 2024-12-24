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
import { useRecentkyViwedProducts } from "@/contexts/recently-viewed-products-list-context"
import { EmptyProducts } from "./empties"

export function RecentlyViewedProducts() {
  const { recentlyViewedProductsList } = useRecentkyViwedProducts()

  if (recentlyViewedProductsList.length === 0) {
    return <EmptyProducts variant="view" />
  }

  return (
    <Carousel className="w-full md:max-w-full max-w-[80%]">
      <CarouselContent className="-ml-1 gap-8 ">
        {recentlyViewedProductsList.map((alert, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <ProductCard
              productImageUrl={alert.productImageUrl || gpuPicture}
              productPrice={alert.productPrice}
              productTitle={alert.productTitle}
              store={alert.store}
              productId={alert.productId}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
