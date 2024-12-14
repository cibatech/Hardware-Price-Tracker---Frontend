import { ProductSkeletonCard } from "@/components/product/ui/skeletons"
import { Skeleton } from "../ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto p-4">
 
      <div className="flex justify-between items-center mb-4">
        <Skeleton className="h-6 w-32" />
        <div className="flex gap-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductSkeletonCard />
        <ProductSkeletonCard />
        <ProductSkeletonCard />
        <ProductSkeletonCard />
      </div>
    </div>
  )
}
