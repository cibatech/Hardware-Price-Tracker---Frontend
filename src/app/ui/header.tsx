"use client"

import { Bell, MapPin, Menu } from "lucide-react"
import logo from "../../../public/logo.svg"
import Image from "next/image"
import Search from "./search"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-green-700 flex items-center justify-between p-2 md:flex-row md:p-6 flex-col gap-6">
      <div className="flex items-center md:justify-center justify-between gap-6">
        <Menu className="flex size-8 md:hidden text-zinc-50" />
        <Link href={""}>
          <Image src={logo} alt="Landscape picture" width={240} height={24} />
        </Link>
        <button className="bg-green-100 flex px-6 py-3 rounded-3xl text-green-700 text-sm md:hidden">
          Entrar
        </button>
      </div>
      <Search />
      <div className="flex w-full items-center justify-between gap-6 md:justify-center md:w-auto">
        <button className="flex items-center gap-2 text-zinc-300">
          <MapPin className="size-6" />
          <span className="font-normal ">Calcular frete</span>
        </button>
        <Link href={""} className="flex gap-2 text-zinc-300">
          <Bell />
          <span>Alertas</span>
        </Link>
        <button className="bg-green-100 hidden px-6 py-3 rounded-3xl text-green-700 text-sm md:flex">
          Entrar
        </button>
      </div>
    </header>
  )
}
