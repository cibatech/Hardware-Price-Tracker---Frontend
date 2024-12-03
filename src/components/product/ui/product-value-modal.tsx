import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../shadcn-ui/ui/dialog"
import { BellRing } from "lucide-react"
import { Input } from "../../ui/inputs/input"
import { Button } from "../../ui/button/button"

export function ProductValueModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="size-10" variant="sponsor">
          <BellRing />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Definir valor</DialogTitle>
          <DialogDescription>
            Defina o valor desejado e seja notificado assim que o produto
            atingir ou ficar abaixo desse preço.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Input type="string" placeholder="Digite um valor" />
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
