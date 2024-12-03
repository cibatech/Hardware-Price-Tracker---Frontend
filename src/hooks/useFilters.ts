import { useSearchParams, useRouter, usePathname } from "next/navigation"

export function useFilters() {
  const { replace } = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)

  const updateFilter = (key: string, value: string) => {
    const isSelected = params.get(key) === value
    if (isSelected) {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    replace(`${pathname}?${params.toString()}`)
  }

  const resetFilters = () => {
    params.forEach((_, key) => params.delete(key))
    replace(pathname)
  }

  return { updateFilter, resetFilters, filtersCount: params.size, searchParams }
}
