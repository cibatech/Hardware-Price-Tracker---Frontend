"use client"

import { LogOut, Pencil } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../shadcn-ui/ui/popover"
import { logout } from "@/app/(authenticated)/auth/login/action"
import { showErrorToast, showSuccessToast } from "../product/ui/toasts"
import { ReactNode } from "react"

export function PopoverUserInfo({children}: {children: ReactNode}) {
  async function handleUserLogout() {
    try {
      await logout()
      showSuccessToast("Usuário deslogado com sucesso!")
    } catch {
      showErrorToast("Erro ao sair.")
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        className="rounded-3xl w-80 max-w-[22rem] shadow-none py-5 px-4 gap-3"
        align="end"
        sideOffset={20}
        side="top"
      >
        <div className="flex justify-between items-center">
          <strong className="font-semibold text-green-700">
            Ismael Henrique
          </strong>
          <button
            className="bg-green-100 p-2 rounded-full"
            onClick={handleUserLogout}
          >
            <LogOut className="text-green-700" />
          </button>
        </div>

        <button className="bg-green-100 text-green-700 rounded-3xl flex items-center gap-4 p-3 font-semibold">
          Alterar senha
          <Pencil />
        </button>
      </PopoverContent>
    </Popover>
  )
}
