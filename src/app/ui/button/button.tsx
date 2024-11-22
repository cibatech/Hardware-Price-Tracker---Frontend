import { ComponentProps } from "react"
import { Trash } from "lucide-react"

type ButtonProps = ComponentProps<"button">

export function DeleteButton({ ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="flex items-center justify-center p-3 gap-4 bg-green-100 text-green-700 text-sm font-semibold rounded-3xl"
    >
      <Trash />
      {props.children}
    </button>
  )
}
