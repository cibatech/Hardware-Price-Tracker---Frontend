import { DeleteButton } from "../ui/button/button"
import DefaultLayout from "../ui/defaultLayout/default-layout"
import { Select } from "../ui/select/select"

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
        <div>
          <strong className="text-xl font-semibold">612 resultados</strong>
          <div>
            <Select />
            <Select />
            <Select />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
