"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { resetPassword } from "@/http/auth/reset-password-user"
import { zodResolver } from "@hookform/resolvers/zod"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import Cookies from "js-cookie"
import { z } from "zod"
import { loginUser } from "@/http/auth/login-user"
import { showErrorToast, showSuccessToast } from "@/components/ui/toasts"

const forgotPasswordFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
})

type ForgotPasswordFormSchema = z.infer<typeof forgotPasswordFormSchema>

export default function NewPassword() {
  const { back, push } = useRouter()
  const { register, handleSubmit } = useForm<ForgotPasswordFormSchema>({
    resolver: zodResolver(forgotPasswordFormSchema),
  })

  async function handleResetPassword(data: ForgotPasswordFormSchema) {
    try {
      const code = Cookies.get("verificationCode") as string

      const formData = {
        UserProvidedCode: code,
        StoredCode: code,
        Email: data.email,
        Password: data.password,
      }

      const response = await resetPassword(formData)

      if (response.Description === "Successfully updated password") {
        await loginUser({
          Email: data.email,
          Password: data.password,
        })

        showSuccessToast("Senha recuperada com sucesso!")
        push("/")
      }
    } catch {
      showErrorToast("Ops! Algo deu errado, tente novamente.")
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
          <strong>Recuperação de senha</strong>
        </section>
        <form
          action=""
          onSubmit={handleSubmit(handleResetPassword)}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Informe o email para recuperar sua senha.
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Informe seu email"
              variant="minimalist"
              {...register("email")}
            />
            <Input
              type="password"
              id="password"
              placeholder="Crie uma nova senha"
              variant="minimalist"
              {...register("password")}
            />
          </div>
          <Button variant="submit">Confirmar</Button>
        </form>
      </div>
    </div>
  )
}
