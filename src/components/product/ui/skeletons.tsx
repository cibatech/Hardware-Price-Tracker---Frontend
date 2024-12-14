import { Skeleton } from "@/components/ui/skeleton"

export function ProductSketonImage() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="size-[16rem] rounded-xl" />
    </div>
  )
}

export function ProductSketonTitle() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[60%]" />
    </div>
  )
}

export function ProductSketonPriceDatails() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[350px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  )
}

export function ProductSkeletonCard() {
  return (
    <div className="flex flex-col gap-4 p-4 border rounded-lg shadow-sm w-[240px]">
      <Skeleton className="h-48 w-full rounded-lg" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
      <Skeleton className="h-6 w-1/3" />
    </div>
  )
}
