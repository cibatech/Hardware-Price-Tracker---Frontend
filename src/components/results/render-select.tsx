import { useFilters } from "@/hooks/useFilters"
import { Select } from "../ui/select/select"
import { PriceModal } from "./price-modal"

type Option = {
  title: string
  value: string
}

type RenderSelectProps = {
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

type SelectOptionProps = {
  option: string
  isSelected: boolean
  onClick: () => void
}

const SelectOption = ({ option, isSelected, onClick }: SelectOptionProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border rounded-full text-green-500 hover:bg-green-700 hover:text-white ${
        isSelected
          ? "bg-green-700 text-white border-green-700"
          : "border-green-500"
      }`}
    >
      {option}
    </button>
  )
}
