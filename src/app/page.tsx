"use-client"

import DefaultLayout from "./ui/default-layout"
import Banner from "./ui/home/banner"
import pichauLogo from "../assets/pichau-logo.svg"
import kabumLogo from "../assets/kabum!-logo.svg"
import terabyteLogo from "../assets/terabyte-logo.svg"
import { CarouselSpacing } from "./ui/home/carousel"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="flex justify-center m-auto py-8 gap-16">
        <Banner imageUrl={terabyteLogo} imageAlt="" text="Terabyte" />
        <Banner imageUrl={kabumLogo} imageAlt="" text="Kabum!" />
        <Banner imageUrl={pichauLogo} imageAlt="" text="Pichau" />
      </div>
      <div className=" flex m-auto">
        <strong>Produtos vistos recentemente</strong>
        <CarouselSpacing />
      </div>
    </DefaultLayout>
  )
}
