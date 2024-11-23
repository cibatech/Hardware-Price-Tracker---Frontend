import { ComponentProps } from "react"
import clsx from "clsx"

type ButtonVariants = "delete" | "submit" | "secondary" 
type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariants
}

export function Button({ variant = "delete", ...props }: ButtonProps) {
  const buttonClass = clsx(
    "flex items-center justify-center p-3 gap-4 text-sm font-semibold rounded-3xl",
    {
      "bg-green-100 text-green-700": variant === "delete",
      "bg-green-700 text-zinc-50 flex-1": variant === "submit",
      "bg-gray-100 text-gray-700": variant === "secondary",
    }
  )

  return (
    <button {...props} className={buttonClass}>

      {props.children}
    </button>
  )
}
