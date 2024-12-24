"use client"

import Image from "next/image"
import { redirect } from "next/navigation"

export interface IBannerProps {
  imageUrl: string
  imageAlt: string
  text: string
  store: "TeraByte" | "Pichau" | "Kabum"
}

export function Banner({ imageUrl, imageAlt, text, store }: IBannerProps) {

  function handleRedirectToProductPage() {
    redirect(`/results?loja=${store}`)
  }
  return (
    <div
      className="flex flex-col justify-center items-center border border-zinc-300 px-16 py-12 rounded-3xl gap-6 hover:shadow-md cursor-pointer"
      onClick={handleRedirectToProductPage}
    >
      <div className="rounded-full size-[10rem] bg-zinc-100 flex items-center justify-center">
        <Image src={imageUrl} alt={imageAlt} />
      </div>
      <strong className="text-2xl font-semibold text-black">{text}</strong>
    </div>
  )
}
