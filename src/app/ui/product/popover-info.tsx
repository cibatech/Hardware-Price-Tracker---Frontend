import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LucideInfo } from "lucide-react"

export function PopoverInfo() {
  return (
    <Popover >
      <PopoverTrigger>
        <button className="bg-green-100 text-green-700 size-10 rounded-full flex items-center justify-center">
          <LucideInfo />
        </button>
      </PopoverTrigger>
      <PopoverContent  className="rounded-3xl w-auto max-w-[22rem] shadow-none">
        O nosso comparador utilliza o cálculo do menor preço desse produto
        baseado nos últimos meses salvos no histórico de preços.
      </PopoverContent>
    </Popover>
  )
}
