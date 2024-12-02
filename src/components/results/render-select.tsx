import { useFilters } from "@/hooks/useFilters"
import { Select } from "../ui/select/select"
import { PriceModal } from "./price-modal"

export function RenderSelect(
  filterKey: string,
  label: string,
  list: string[],
  priceFilter?: boolean,
  pagination?: boolean
) {
  const { searchParams, updateFilter } = useFilters()
  return (
    <Select
      selected={searchParams.get(filterKey) || label}
      defaultText={label}
      pagePagination={pagination}
    >
      {!priceFilter ? (
        list.map((option) => (
          <button
            key={option}
            onClick={() => updateFilter(filterKey, option)}
            className={`px-4 py-2 border border-green-500 rounded-full text-green-500 hover:bg-green-700 hover:text-white ${
              searchParams.get(filterKey) === option
                ? "bg-green-700 text-white border-green-700"
                : ""
            }`}
          >
            {option}
          </button>
        ))
      ) : (
        <PriceModal />
      )}
    </Select>
  )
}
