"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Cookies from "js-cookie"
import { z } from "zod"
import { showErrorToast, showSuccessToast } from "@/components/ui/toasts"

const forgotPasswordFormSchema = z.object({
  code: z.string(),
})

type ForgotPasswordFormData = z.infer<typeof forgotPasswordFormSchema>

export default function SendCode() {
  const { back, push } = useRouter()
  const { register, handleSubmit } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordFormSchema),
  })

  async function handleVeryCode(data: ForgotPasswordFormData) {
    const code = Cookies.get("verificationCode")
    if (code === data.code) {
      showSuccessToast("Código verificado!")
      push("new-password")
    } else {
      showErrorToast("Código inválido!")
    }
  }

  return (
    <div className="flex flex-col text-left justify-center min-h-screen">
      <div className="flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl ">
        <section className="flex items-center gap-4">
          <button
            onClick={() => back()}
            className="flex items-center justify-center size-8 bg-green-700 text-zinc-50 rounded-full"
          >
            <ArrowLeft />
          </button>
          <strong>Código de verificação</strong>
        </section>
        <form
          action=""
          onSubmit={handleSubmit(handleVeryCode)}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Informe o código que foi enviado no seu email.
            </label>
            <Input
              type="text"
              id="code"
              placeholder="Informe o código"
              variant="minimalist"
              {...register("code")}
            />
          </div>
          <Button variant="submit">Confirmar</Button>
        </form>
      </div>
    </div>
  )
}
