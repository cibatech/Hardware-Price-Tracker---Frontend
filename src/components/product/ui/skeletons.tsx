import { Skeleton } from "@/components/ui/skeleton"

export function ProductSketonImage() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="size-[16rem]  rounded-xl" />
    </div>
  )
}

export function ProductSketonTitle() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 flex-1" />
    </div>
  )
}

export function ProductSketonPriceDatails() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  )
}
