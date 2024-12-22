import { ComponentProps } from "react"
import clsx from "clsx"

type ButtonVariants = "delete" | "submit" | "secondary" | "rounded" | "filter" | "sponsor"
type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariants
}

export function Button({ variant = "delete", ...props }: ButtonProps) {
  const buttonClass = clsx(
    "flex items-center justify-center p-3 gap-4 text-sm font-semibold rounded-3xl ",
    {
      "bg-green-100 hover:tex-green-100  text-green-700 w-full hover:bg-green-600 hover:text-zinc-50 transition-all":
        variant === "delete",
      "bg-green-700 flex-1 text-zinc-50 ": variant === "submit",
      "bg-green-700 rounded-lg text-zinc-200 w-full hover:bg-green-500": variant === "secondary",
      "bg-green-100 text-green-700 px-6 text-nowrap": variant === "rounded",
      "bg-green-700 rounded-lg text-zinc-200 md:hidden": variant === "filter",
      "bg-green-700 rounded-lg text-zinc-200 size-10 hover:bg-green-500": variant === "sponsor"
    }
  )

  return (
    <button {...props} className={buttonClass}>
      {props.children}
    </button>
  )
}
