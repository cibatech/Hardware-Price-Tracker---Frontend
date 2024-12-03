import { Button } from "../ui/button/button"
import { Input } from "../ui/inputs/input"

export const PriceModal = () => {
  return (
    <form className="flex flex-col  gap-4 w-80">
      <label htmlFor="initial-price" className="font-bold text-green-700">
        Preço inicial
      </label>
      <Input variant="outline" id="initial-price" placeholder="R$ 0,00" />
      <label htmlFor="final-price" className="font-bold text-green-700">
        Preço final
      </label>
      <Input variant="outline" id="final-price" placeholder="R$ 0,00" />
      <Button variant="secondary">Aplicar</Button>
    </form>
  )
}
