"use client"

import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import Link from "next/link"
import Image from "next/image"
import { Bell } from "lucide-react"
import logo from "../../assets/logo.svg"
import { NavbarMobile } from "./navbar-mobile"
import { Search } from "../ui/search/search"
import { PopoverUserInfo } from "./popover-user-info"
import {
  getUserProfile,
  GetUserProfileResponse,
} from "@/http/auth/get-user-profile"
import { showInfoToast, showSuccessToast } from "../ui/toasts"
import { getInitials } from "@/functions/get-initials"

export function Header() {
  const [isLogged, setIsLogged] = useState(false)
  const [userProfileData, setUserProfileData] =
    useState<GetUserProfileResponse | null>(null)

  useEffect(() => {
    const userId = Cookies.get("userId")
    setIsLogged(Boolean(userId))

    async function fetchUserProfile() {
      if (userId) {
        try {
          const data = await getUserProfile(userId)
          setUserProfileData(data)
        } catch (error) {
          console.error("Failed to fetch user profile data:", error)
        }
      }
    }

    if (userId) {
      fetchUserProfile()
    }
  }, [])

  function handleLogout() {
    setIsLogged(false)
    setUserProfileData(null)
    showSuccessToast("Você foi deslogado com sucesso.")
  }

  const userName = userProfileData?.response.UserName
  const userInitials = getInitials(userName)

  function verifyToRedirect() {
    if (!isLogged) {
      showInfoToast(
        "É necessário ter uma conta para acessar a página de alertas."
      )
    }
  }

  return (
    <header className="w-full bg-green-700 flex items-center justify-between p-2 md:flex-row md:p-6 flex-col gap-6">
      <div className="flex items-center md:justify-center justify-between gap-6">
        <NavbarMobile />
        <Link href="/">
          <Image src={logo} alt="Logo" width={240} height={24} />
        </Link>

        {isLogged ? (
          <PopoverUserInfo userName={userName || ""} onLogout={handleLogout}>
            <button className="bg-green-100 flex size-10 rounded-full text-green-700 text-sm md:hidden justify-center items-center font-semibold">
              {userInitials || "..."}
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
          href="/alerts"
          className="flex gap-2 text-zinc-300 hover:opacity-50 transition-all"
          onClick={verifyToRedirect}
        >
          <Bell />
          <span className="font-normal text-base">Alertas</span>
        </Link>
        {isLogged ? (
          <PopoverUserInfo userName={userName || ""} onLogout={handleLogout}>
            <button className="bg-green-100 hidden size-10 rounded-full text-green-700 text-base font-semibold md:flex hover:opacity-50 hover:transition-all justify-center items-center">
              {userInitials || "..."}
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
