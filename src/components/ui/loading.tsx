import { Spinner } from "../product/ui/spinner"

export function LoadingSpinner() {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <Spinner />
        <span>Carregando...</span>
      </div>
    </div>
  )
}
