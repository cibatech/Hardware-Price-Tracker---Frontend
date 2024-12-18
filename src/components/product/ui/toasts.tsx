import { Check, Info, XCircle } from "lucide-react"
import { toast } from "sonner"

export function showSuccessToast(message: string) {
  toast(
    <div className="flex items-center gap-4 rounded-xl">
      <div className="flex items-center justify-center size-10 px-2 bg-green-100 rounded-full ">
        <Check className="text-green-700" size={24} />
      </div>
      <span className="font-semibold"> {message}</span>
    </div>,
    {
      className:
        "bg-white border border-zinc-300 rounded-xl shadow-md p-4 flex items-center",
    }
  )
}

export function showErrorToast(message: string) {
  toast(
    <div className="flex items-center gap-4 rounded-xl">
      <div className="flex items-center justify-center size-10 px-2 bg-red-100 rounded-full ">
        <XCircle className="text-red-700" size={24} />
      </div>
      <span className="font-semibold">{message}</span>
    </div>,
    {
      className:
        "bg-white border border-zinc-300 rounded-xl shadow-md p-4 flex items-center",
    }
  )
}


export function showInfoToast(message: string) {
  toast(
    <div className="flex items-center gap-3 rounded-xl">
      <div className="flex items-center justify-center size-10 px-2 bg-blue-100 rounded-full ">
        <Info className="text-blue-700" size={24} />
      </div>
      <span className="font-semibold">{message}</span>
    </div>,
    {
      className:
        "bg-white border border-zinc-300 rounded-xl shadow-md p-4 flex items-center",
    }
  )
}
