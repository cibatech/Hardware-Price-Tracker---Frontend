import { useFilters } from "@/hooks/useFilters"
import { Select } from "../../ui/select"
import { PriceModal } from "../price-modal"
import { SelectOption } from "./select-option"

interface Option {
  title: string
  value: string
}

interface RenderSelectProps {
  filterKey: string
  label: string
  list?: Option[]
  priceFilter?: boolean
  pagination?: boolean
}

export function RenderSelect({
  filterKey,
  label,
  list = [],
  priceFilter = false,
  pagination = false,
}: RenderSelectProps) {
  const { searchParams, updateFilter } = useFilters()

  const isPriceFilterActive = searchParams.get("priceFilter") === "true"

  const handleOptionClick = (option: string) => {
    updateFilter(filterKey, option)
  }

  const selectedOption = list.find(
    (option) => option.value === searchParams.get(filterKey)
  )

  return (
    <Select
      selected={
        priceFilter
          ? isPriceFilterActive
            ? "Preço "
            : "Preço"
          : selectedOption?.title || label
      }
      defaultText={label}
      pagePagination={pagination}
    >
      {priceFilter ? (
        <PriceModal />
      ) : (
        list.map((option) => (
          <SelectOption
            key={option.value}
            option={option.title}
            isSelected={searchParams.get(filterKey) === option.value}
            onClick={() => handleOptionClick(option.value)}
          />
        ))
      )}
    </Select>
  )
}
