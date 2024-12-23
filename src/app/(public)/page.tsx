import pichauLogo from "../../assets/pichau-logo.svg"
import kabumLogo from "../../assets/kabum-logo.svg"
import terabyteLogo from "../../assets/terabyte-logo.svg"
import { Banner } from "../../components/home/banner"
import { RecentlyViewedProducts } from "@/components/home/recently-viewed-products"
import { MostSearchedProducts } from "@/components/home/most-searched-products"

export default function Home() {
  return (
    <div className="flex flex-col items-end justify-start gap-8 py-8 flex-1">
      <div className="flex flex-wrap items-center justify-center m-auto gap-16">
        <Banner imageUrl={terabyteLogo} imageAlt="" text="Terabyte" store="TeraByte" />
        <Banner imageUrl={kabumLogo} imageAlt="" text="Kabum!" store="Kabum" />
        <Banner imageUrl={pichauLogo} imageAlt="" text="Pichau" store="Pichau" />
      </div>
      <div className="flex flex-col items-center text-start w-full max-w-[80%] m-auto gap-8">
        <strong className="text-xl font-semibold">
          Produtos vistos recentemente
        </strong>
        <RecentlyViewedProducts />
      </div>
      <div className="flex flex-col items-center text-start w-full max-w-[80%] m-auto gap-8">
        <strong className="text-xl font-semibold">
          Produtos pesquisados recentemente
        </strong>
        <MostSearchedProducts />
      </div>
    </div>
  )
}
