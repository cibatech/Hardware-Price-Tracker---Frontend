"use client"

import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import {
  getUserProfile,
  GetUserProfileResponse,
} from "@/http/auth/get-user-profile"
import { getInitials } from "@/functions/get-initials"
import { showInfoToast } from "../product/ui/toasts"
import Link from "next/link"
import Image from "next/image"
import { Bell } from "lucide-react"
import logo from "../../../public/logo.svg"
import { NavbarMobile } from "./navbar-mobile"
import { Search } from "../ui/search/search"
import { PopoverUserInfo } from "./popover-user-info"

export function Header() {
  const [isLogged, setIsLogged] = useState(false)
  const [userId, setUserId] = useState<string | undefined>(undefined)
  const [userProfileData, setUserProfileData] =
    useState<GetUserProfileResponse | null>(null)

  useEffect(() => {
    const storedUserId = Cookies.get("userId")
    setUserId(storedUserId)
    setIsLogged(!!storedUserId)
  }, [])

  useEffect(() => {
    if (userId) {
      getUserProfile(userId).then(setUserProfileData)
    }
  }, [userId])

  const userName = userProfileData?.response.UserName
  const userInitials = getInitials(userName || "")

  async function verifyToRedirect() {
    if (!isLogged) {
      showInfoToast(
        "É necessário ter uma conta para acessar a página de alertas."
      )
    }
  }

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
          <PopoverUserInfo userName={userName!}>
            <button className="bg-green-100 flex size-10 rounded-full text-green-700 text-sm md:hidden justify-center items-center font-semibold">
              {userInitials}
            </button>
          </PopoverUserInfo>
        ) : (
          <Link
            href="/auth/login"
            className="bg-green-100 md:hidden px-6 py-3 rounded-3xl text-green-700 text-base font-semibold flex hover:opacity-50 hover:transition-all"
          >
            Entrar
          </Link>
        )}
      </div>
      <Search />
      <div className="flex w-full items-center justify-between gap-6 md:justify-center md:w-auto">
        <Link
          href={isLogged ? "/alerts" : "#"}
          className="flex gap-2 text-zinc-300 hover:opacity-50 transition-all"
          onClick={verifyToRedirect}
        >
          <Bell />
          <span className="font-normal text-base">Alertas</span>
        </Link>
        {isLogged ? (
          <PopoverUserInfo userName={userName!}>
            <button className="bg-green-100 hidden size-10 rounded-full text-green-700 text-base font-semibold md:flex hover:opacity-50 hover:transition-all justify-center items-center">
              {!userInitials && "..."}
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
