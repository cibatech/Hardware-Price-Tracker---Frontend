"use client"

import Link from "next/link"

export default function Navbar() {
  return (
    <div className="w-full justify-center bg-green-700 hidden md:flex">
      <ul className="flex gap-8 py-3 text-zinc-50">
        <li>
          <Link href={""}>Processador</Link>
        </li>
        <li>
          <Link href={""}>Placa de vídeo</Link>
        </li>
        <li>
          <Link href={""}>Fonte</Link>
        </li>
        <li>
          <Link href={""}>Cooler</Link>
        </li>
        <li>
          <Link href={""}>Armazenamento</Link>
        </li>
        <li>
          <Link href={""}>Memória RAM</Link>
        </li>
        <li>
          <Link href={""}>Placa mãe</Link>
        </li>
      </ul>
    </div>
  )
}
