import Image from "next/image";
import logo from "../../../assets/terabyte-logo.svg"
import gpu from "../../../../public/gpu.svg"
import { Button } from "../button/button";

export function PriceClassificationCard() {
  return (
    <div className="flex border border-zinc-300 justify-between items-center">
      <div className="flex items-center">
        <Image src={gpu} alt="" />
        <div className="flex flex-col">
          <strong className="text-green-500 text-2xl font-semibold">
            R$ 879,00{" "}
            <span className="text-sm font-semibold ">(frete incluso)</span>
          </strong>
          <span className="text-xs text-slate-600 font-semibold">
            ou 8x de R$ 354,87 com juros
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center gap-4">
          <strong>Terabyte</strong>
          <div className="size-12 rounded-full flex items-center justify-center bg-zinc-100">
            <Image src={logo} alt="" className="w-8" />
          </div>
        </div>
        <Button variant="secondary">Ir à loja</Button>
      </div>
    </div>
  )
}