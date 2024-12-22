import Link from "next/link"
import { ReactNode } from "react"

interface ILinkButton {
  children: ReactNode
  redirectLink: string
}

export function LinkButton({ children, redirectLink }: ILinkButton) {
  return (
    <Link
      href={redirectLink}
      target="_blank"
      className="flex items-center justify-center px-14 md:py-4 py-2 gap-4 w-14 text-nowrap text-sm font-semibold rounded-lg text-zinc-50 bg-green-700 hover:bg-green-500 transition-all"
    >
      {children}
    </Link>
  )
}
