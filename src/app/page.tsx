


import Banner from "./ui/home/banner"
import pichauLogo from "../assets/pichau-logo.svg"
import kabumLogo from "../assets/kabum!-logo.svg"
import terabyteLogo from "../assets/terabyte-logo.svg"
import { CarouselSpacing } from "./ui/home/carousel"
import DefaultLayout from "./ui/defaultLayout/default-layout"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-end justify-start gap-8 py-8">
        <div className="flex flex-wrap items-c justify-center m-auto gap-16">
          <Banner imageUrl={terabyteLogo} imageAlt="" text="Terabyte" />
          <Banner imageUrl={kabumLogo} imageAlt="" text="Kabum!" />
          <Banner imageUrl={pichauLogo} imageAlt="" text="Pichau" />
        </div>
        <div className="flex flex-col items-center text-start w-full max-w-[80%] m-auto gap-8">
          <strong className="text-xl font-semibold">
            Produtos vistos recentemente
          </strong>
          <CarouselSpacing />
        </div>
        <div className="flex flex-col items-center text-start w-full max-w-[80%] m-auto gap-8">
          <strong className="text-xl font-semibold">
            Produtos mais pesquisados
          </strong>
          <CarouselSpacing />
        </div>
      </div>
    </DefaultLayout>
  )
}
