import { ComponentProps } from "react"
import clsx from "clsx"

type ButtonVariants = "delete" | "submit" | "secondary" | "rounded"
type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariants
}

export function Button({ variant = "delete", ...props }: ButtonProps) {
  const buttonClass = clsx(
    "flex items-center justify-center p-3 gap-4 text-sm font-semibold rounded-3xl ",
    {
      "bg-green-100 text-green-700": variant === "delete",
      "bg-green-700 flex-1": variant === "submit",
      "bg-green-700 rounded-lg text-zinc-200": variant === "secondary",
      "bg-green-100 text-green-700 px-6 text-nowrap": variant === "rounded",
    }
  )

  return (
    <button {...props} className={buttonClass}>
      {props.children}
    </button>
  )
}
