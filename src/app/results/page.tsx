import { DeleteButton } from "../ui/button/button"
import DefaultLayout from "../ui/defaultLayout/default-layout"
import { Select } from "../ui/select/select"
import gpuPicture from "../../../public/gpu.svg"
import { ProductCard } from "../ui/product-card"
import { PaginationDemo } from "../ui/results/products-pagination"

export default function ResultsPage() {
  return (
    <DefaultLayout>
      <div>
        <section className="flex items-center justify-between">
          <h1>Breadcumb</h1>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <strong className="text-xl font-semibold">Filtros</strong>
              <span className="size-5 flex items-center justify-center bg-green-700 rounded-full text-zinc-50">
                2
              </span>
            </div>
            <DeleteButton>Resetar Filtros</DeleteButton>
          </div>
        </section>
        <div className="flex items-center justify-between">
          <strong className="text-xl font-semibold">612 resultados</strong>
          <div className="flex gap-3">
            <Select />
            <Select />
            <Select />
          </div>
          <div>
            <label htmlFor="">Produtos por página</label>
            <Select />
          </div>
        </div>
        <div className="flex items-center justify-center w-full flex-wrap gap-8 max-w-[80%] m-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <ProductCard
              key={index}
              productImageUrl={gpuPicture}
              productPrice={879}
              productTitle="Placa de video galax geforce gtx 1650 ex plus 1click oc 4gb..."
              store="Terabyte"
            />
          ))}
        </div>
        <PaginationDemo />
      </div>
    </DefaultLayout>
  )
}
