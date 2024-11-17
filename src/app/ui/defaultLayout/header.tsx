"use client"

import { Bell, MapPin } from "lucide-react"
import logo from "../../../../public/logo.svg"
import Image from "next/image"
import Search from "../search"
import Link from "next/link"
import { NavbarMobile } from "./navbar-mobile"

export default function Header() {
  return (
    <header className="w-full bg-green-700 flex items-center justify-between p-2 md:flex-row md:p-6 flex-col gap-6">
      <div className="flex items-center md:justify-center justify-between gap-6">
        <button className="bg-transparent">
          <NavbarMobile />
        </button>
        <Link href={""}>
          <Image src={logo} alt="Landscape picture" width={240} height={24} />
        </Link>
        <button className="bg-green-100 flex px-6 py-3 rounded-3xl text-green-700 text-sm md:hidden">
          Entrar
        </button>
      </div>
      <Search />
      <div className="flex w-full items-center justify-between gap-6 md:justify-center md:w-auto">
        <button className="flex items-center gap-2 text-zinc-300 hover:opacity-50 transition-all">
          <MapPin className="size-6" />
          <span className="font-normal text-base">Calcular frete</span>
        </button>
        <Link
          href={""}
          className="flex gap-2 text-zinc-300 hover:opacity-50 transition-all"
        >
          <Bell />
          <span className="font-normal text-base">Alertas</span>
        </Link>
        <button className="bg-green-100 hidden px-6 py-3 rounded-3xl text-green-700 text-base font-semibold md:flex hover:opacity-50 hover:transition-all">
          Entrar
        </button>
      </div>
    </header>
  )
}
