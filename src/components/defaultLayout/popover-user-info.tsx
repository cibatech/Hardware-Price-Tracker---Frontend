import { LogOut, Pencil } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../shadcn-ui/ui/popover"
import { logout } from "@/app/(authenticated)/auth/login/action"
import { showErrorToast } from "../ui/toasts"
import { ReactNode } from "react"
import Link from "next/link"

export function PopoverUserInfo({
  children,
  userName,
  onLogout,
}: {
  children: ReactNode
  userName: string
  onLogout?: () => void
}) {
  async function handleUserLogout() {
    try {
      await logout() // action to logout
      if (onLogout) onLogout() // function to call when the user logout
    } catch {
      showErrorToast("Erro ao sair.")
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        className="rounded-3xl w-80 max-w-[22rem] shadow-none py-5 px-4 gap-3"
        align="end"
        sideOffset={20}
        side="top"
      >
        <div className="flex justify-between items-center">
          <strong className="font-semibold text-green-700">{userName}</strong>
          <button
            className="bg-green-100 p-2 rounded-full"
            onClick={handleUserLogout}
          >
            <LogOut className="text-green-700" />
          </button>
        </div>

        <Link
          href="auth/forgot-password"
          className="bg-green-100 text-green-700 rounded-3xl flex items-center gap-4 p-3 font-semibold w-44"
        >
          Alterar senha
          <Pencil />
        </Link>
      </PopoverContent>
    </Popover>
  )
}
