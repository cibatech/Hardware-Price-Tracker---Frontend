import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../shadcn-ui/ui/carousel"

import gpuPicture from "../../assets/image-indisponible.svg"
import { ProductCard } from "../product/ui/cards/product-card"

export function CarouselSpacing() {
  return (
    <Carousel className="w-full md:max-w-full max-w-[80%]">
      <CarouselContent className="-ml-1 gap-8 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/4">
            <ProductCard
              productImageUrl={gpuPicture}
              productPrice={879}
              productTitle="Placa de video galax geforce gtx 1650 ex plus 1click oc 4gb..."
              store="Terabyte"
              redirectLink=""
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
