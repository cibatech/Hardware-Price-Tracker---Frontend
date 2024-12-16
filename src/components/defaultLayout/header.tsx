"use client"

import logo from "../../../public/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { Bell } from "lucide-react"
import { NavbarMobile } from "./navbar-mobile"
import { Search } from "../ui/search/search"
import Cookies from "js-cookie"
import { PopoverUserInfo } from "./popover-user-info"

function getInitials(name: string): string {
  return name
    .split(" ") 
    .map((word) => word.charAt(0).toUpperCase()) 
    .join("") 
    .toUpperCase()
}

export function Header() {
  const userId = Cookies.get("userId")
  console.log("userId:", userId)

  const isLogged = userId !== undefined

  const userName = "Ismael Gonçalves"
  const userInitials = getInitials(userName)

  return (
    <header className="w-full bg-green-700 flex items-center justify-between p-2 md:flex-row md:p-6 flex-col gap-6">
      <div className="flex items-center md:justify-center justify-between gap-6">
        <button className="bg-transparent">
          <NavbarMobile />
        </button>
        <Link href={"/"}>
          <Image src={logo} alt="Landscape picture" width={240} height={24} />
        </Link>

        {isLogged ? (
          <PopoverUserInfo>
            <button className="bg-green-100 flex size-10 rounded-full text-green-700 text-sm md:hidden justify-center items-center font-semibold">
              {userInitials}
            </button>
          </PopoverUserInfo>
        ) : (
          <Link
            href="/auth/login"
            className="bg-green-100 hidden px-6 py-3 rounded-3xl text-green-700 text-base font-semibold md:flex hover:opacity-50 hover:transition-all"
          >
            Entrar
          </Link>
        )}
      </div>
      <Search />
      <div className="flex w-full items-center justify-between gap-6 md:justify-center md:w-auto">
        <Link
          href={"/alerts"}
          className="flex gap-2 text-zinc-300 hover:opacity-50 transition-all"
        >
          <Bell />
          <span className="font-normal text-base">Alertas</span>
        </Link>
        {isLogged ? (
          <PopoverUserInfo>
            <button className="bg-green-100 hidden size-10 rounded-full text-green-700 text-base font-semibold md:flex hover:opacity-50 hover:transition-all justify-center items-center">
              {userInitials}
            </button>
          </PopoverUserInfo>
        ) : (
          <Link
            href="/auth/login"
            className="bg-green-100 hidden px-6 py-3 rounded-3xl text-green-700 text-base font-semibold md:flex hover:opacity-50 hover:transition-all"
          >
            Entrar
          </Link>
        )}
      </div>
    </header>
  )
}
