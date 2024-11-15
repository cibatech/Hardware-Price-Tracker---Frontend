"use-client"

import logo from "../../../public/logo.svg"
import Image from "next/image"
import Search from "./search"
import { Bell, MapPin } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full bg-green-700 flex">
      <Image src={logo} alt="Landscape picture" width={240} height={24} />
      <Search />
      <div>
        <button className="flex gap-2 text-zinc-300">
          <MapPin />
          <span>Calcular frete</span>
        </button>
        <Link href={""} className="flex gap-2 text-zinc-300">
          <Bell />
          <span>Alertas</span>
        </Link>
        <button className="bg-green-100 px-6 py-3 rounded-3xl text-green-700">
          Entrar
        </button>
      </div>
    </header>
  )
}
