import Image from "next/image"
import logo from "../../../../assets/terabyte-logo.svg"
import gpu from "../../../../../public/gpu.svg"
import { LinkButton } from "../link-button"

interface PriceClassificationCardProps {
  isLowestPrice: boolean
}

export function PriceClassificationCard({
  isLowestPrice,
}: PriceClassificationCardProps) {
  return (
    <div className="flex border border-zinc-300 justify-between items-center rounded-lg px-1 md:px-10 py-8 md:flex-row flex-col gap-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center">
          <Image src={gpu} alt="" className="size-32" />
          <div className="flex gap-1 flex-col">
            <div className="flex flex-col">
              <strong className="text-green-500 text-2xl font-semibold">
                R$ 879,00{" "}
                <span className="text-sm font-semibold ">(frete incluso)</span>
              </strong>
              <span className="text-xs text-slate-600 font-semibold">
                ou 8x de R$ 354,87 com juros
              </span>
            </div>
            {isLowestPrice && (
              <div className="flex max-w-[98px] items-center justify-center text-slate-300 text-xs font-semibold bg-green-700 py-1 rounded-sm">
                Menor preço
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <strong>Terabyte</strong>
          <div className="size-12 rounded-full flex items-center justify-center bg-zinc-100 ">
            <Image src={logo} alt="" className="w-8" />
          </div>
        </div>

        <LinkButton redirectLink="">Ir à loja</LinkButton>
      </div>
    </div>
  )
}
