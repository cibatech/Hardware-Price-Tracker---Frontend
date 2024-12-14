import {
  hardwareCategories,
  productsPaginationOptions,
  stores,
} from "@/constants"
import { RenderSelect } from "./render-select"
import { Button } from "../ui/button/button"
import { useFilters } from "@/hooks/useFilters"
import { Trash, X } from "lucide-react"

interface FilterModalProps {
  closeFilterModal: () => void
}

export function FilterModal({ closeFilterModal }: FilterModalProps) {
  const { filtersCount, resetFilters } = useFilters()

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-md p-6">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <strong className="text-xl font-semibold">Filtros</strong>
            <span className="size-5 flex items-center justify-center bg-green-700 rounded-full text-zinc-50">
              {filtersCount}
            </span>
          </div>
          <button onClick={closeFilterModal} className="text-zinc-900">
            <X />
          </button>
        </header>
        <div className="flex flex-col gap-4 w-full">
          <RenderSelect filterKey="preco" label="Preço" priceFilter />
          <RenderSelect filterKey="loja" label="Loja" list={stores} />
          <RenderSelect
            filterKey="categoria"
            label="Categoria"
            list={hardwareCategories}
          />
          <div className="flex items-center justify-between">
            <span className="text-base text-green-700">
              Produtos por página
            </span>
            <RenderSelect
              filterKey="productsPerPage"
              label="12 "
              list={productsPaginationOptions}
              pagination
            />
          </div>
        </div>
        <div className="mt-6">
          <Button onClick={resetFilters} variant="delete" className="w-full">
            <Trash />
            Resetar Filtros
          </Button>
        </div>
      </div>
    </div>
  )
}
