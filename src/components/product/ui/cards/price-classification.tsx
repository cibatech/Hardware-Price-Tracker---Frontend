import Image from "next/image"
import terabyteLogo from "@/assets/terabyte-logo.svg"
import kabumLogo from "@/assets/kabum-logo.svg"
import pichauLogo from "@/assets/pichau-logo.svg"
import ImageIndisplonible from "@/assets/image-indisponible.svg"
import { LinkButton } from "../link-button"
import { priceFormatter } from "@/lib/formatter"

export type StoresOptions = "TeraByte" | "Pichau" | "Kabum" // Colocar dentro de uma arquivo types

interface PriceClassificationCardProps {
  isLowestPrice: boolean
  productPrice: number
  productStore: StoresOptions
  productLink: string
  productImageUrl: string
  tearmValue: string
}

const storeLogos = {
  TeraByte: terabyteLogo,
  Kabum: kabumLogo,
  Pichau: pichauLogo,
}

export function PriceClassificationCard({
  isLowestPrice,
  productPrice,
  productStore,
  productLink,
  productImageUrl,
  tearmValue,
}: PriceClassificationCardProps) {
  return (
    <div className="flex border border-zinc-300 justify-between items-center rounded-lg px-1 md:px-10 py-8 md:flex-row flex-col gap-4">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-1">
          <Image
            src={productImageUrl || ImageIndisplonible}
            width={128}
            height={128}
            alt=""
            className="size-32"
          />
          <div className="flex gap-1 flex-col">
            <div className="flex flex-col">
              <strong className="text-green-500 text-2xl font-semibold">
                {productPrice === 0 ? (
                  "Indisponível"
                ) : (
                  <>
                    {priceFormatter.format(productPrice)}
                    <span className="text-sm font-semibold">
                      (frete não incluso)
                    </span>
                  </>
                )}
              </strong>
              {productPrice > 0 && (
                <span className="text-xs text-slate-600 font-semibold">
                  ou {tearmValue}
                </span>
              )}
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
          <strong>{productStore}</strong>
          <div className="size-12 rounded-full flex items-center justify-center bg-zinc-100 ">
            <Image src={storeLogos[productStore]} alt="" className="w-8" />
          </div>
        </div>
        <LinkButton redirectLink={productLink}>Ir à loja</LinkButton>
      </div>
    </div>
  )
}
