import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { LucideInfo } from "lucide-react"

const goToPriceHistory = () => {
  const section = document.getElementById("price-history")
  section?.scrollIntoView({ behavior: "smooth" })
}

export function PopoverInfoCard() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="bg-green-100 text-green-700 size-10 rounded-full flex items-center justify-center">
          <LucideInfo />
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="rounded-3xl w-auto max-w-[22rem] shadow-none"
        align="end"
        sideOffset={20}
        side="top"
      >
        O nosso comparador utiliza o cálculo do menor preço desse produto
        baseado nos últimos meses salvos no{" "}
        <span
          onClick={() => goToPriceHistory()}
          className="underline cursor-pointer"
        >
          histórico de preços
        </span>
        .
      </PopoverContent>
    </Popover>
  )
}
