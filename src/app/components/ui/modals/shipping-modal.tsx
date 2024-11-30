import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "../inputs/input"
import { MapPin } from "lucide-react"

export function ShippingModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 text-zinc-300 hover:opacity-50 transition-all text-nowrap">
          <MapPin className="size-6" />
          <span className="font-normal text-base">Calcular frete</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Informe seu CEP</DialogTitle>
          <DialogDescription>
            Com base no frete, poderá compensar comprar um diferente produto.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input type="string" placeholder="Digite seu CEP" />
        </div>
        <DialogFooter>
          <button className="flex-1 bg-green-700 text-zinc-50 rounded-3xl py-2">
            Confirmar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
