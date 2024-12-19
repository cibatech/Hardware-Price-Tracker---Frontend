import { useSearchParams, useRouter, usePathname } from "next/navigation"

export function useFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams?.toString())

  const updateFilter = (key: string, value: string) => {
    const isSelected = params.get(key) === value
    if (isSelected) {
      params.delete(key)
    } else {
      params.set(key, value)
    }

    router.replace(`${pathname}?${params.toString()}`)
  }

  const resetFilters = () => {
    params.forEach((_, key) => params.delete(key))
    router.replace(pathname)
  }

  return {
    updateFilter,
    resetFilters,
    filtersCount: params.size,
    searchParams,
    params,
  }
}
