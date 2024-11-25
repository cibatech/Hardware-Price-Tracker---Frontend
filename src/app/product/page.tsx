import DefaultLayout from "../ui/defaultLayout/default-layout"
import StarRating from "../ui/product/avaliation-stars"
import Image from "next/image"
import gpuImage from "../../../public/gpu.svg"
import { PriceAnalysisCard } from "../ui/product/price-analysis-card"
import { Button } from "../ui/button/button"
import { BellRing, Truck } from "lucide-react"
import { PriceClassificationCard } from "../ui/product/price-classification"

export default function ProductPage() {
  return (
    <DefaultLayout>
      <div>
        <p>Bredcumb</p>
        <section className="flex justify-center">
          <div>
            <h1 className="text-2xl font-medium">
              Placa de vídeo GTX 1650 4G GDDR6
            </h1>
            <StarRating rating={2.4} avaliationsNumber={203} />
            <Image src={gpuImage} alt="" className="size-[32rem]" />
          </div>
          <div className="flex flex-col gap-8 ">
            <PriceAnalysisCard priceClassification="good" />
            <div className="flex flex-col gap-3">
              <strong className="text-slate-600 text-xs font-semibold">
                Menor preço via{" "}
                <span className="text-green-500 ">Terabyte</span>
              </strong>
              <div className="flex flex-col">
                <strong className="text-green-500 text-2xl font-semibold">
                  R$ 879,00{" "}
                  <span className="text-sm font-semibold ">
                    (frete incluso)
                  </span>
                </strong>
                <span className="text-xs text-slate-600 font-semibold">
                  ou 8x de R$ 354,87 com juros
                </span>
              </div>
            </div>
            <Button variant="secondary">Comparar em 3 lojas</Button>
            <div className="flex flex-col px-4 py-6 gap-2 border border-zinc-300 rounded-xl">
              <strong className="text-base font-semibold">
                Quer saber quando esse produto baixar o preço?
              </strong>
              <div className="flex items-center justify-between">
                <span>Ative as notificações.</span>
                <Button className="size-10" variant="secondary">
                  <BellRing />
                </Button>
              </div>
            </div>
            <div className="flex px-4 py-6 gap-2 border border-zinc-300 rounded-xl justify-between items-center">
              <strong className="text-base font-semibold">
                Frete - R$ 44,50
              </strong>
              <Button className="size-10" variant="secondary">
                <Truck />
              </Button>
            </div>
          </div>
        </section>
        <section className="flex justify-center flex-col ">
          <strong className="text-xl font-semibold">
            Compare preços em 3 lojas
          </strong>
          <div>
            <PriceClassificationCard />
          </div>
        </section>
      </div>
    </DefaultLayout>
  )
}
