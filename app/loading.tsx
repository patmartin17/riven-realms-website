import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Hero skeleton */}
      <div className="relative">
        <Skeleton className="w-full h-[200px] sm:h-[300px] md:h-[450px] lg:h-[610px]" />
      </div>

      {/* Navbar skeleton */}
      <div className="w-full">
        <Skeleton className="w-full h-[80px] sm:h-[100px] lg:h-[140px] -mt-8" />
      </div>

      {/* Content skeleton */}
      <div className="px-[clamp(16px,7.5vw,144px)] pb-10 mt-8">
        <div className="mx-auto w-[85%] space-y-4">
          <Skeleton className="h-12 w-3/4 mx-auto" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
          <div className="space-y-3 mt-8">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    </main>
  )
}

