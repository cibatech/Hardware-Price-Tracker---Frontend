"use client"

import Link from "next/link"
import { Button } from "../../../../components/ui/button"
import { Input } from "../../../../components/ui/input"
import { useForm } from "react-hook-form"
import { loginUser } from "@/http/auth/login-user"
import { redirect } from "next/navigation"
import { LoginFormData } from "@/@types/auth"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const loginFormSchema = z.object({
  Email: z.string().email("Digite o email corretamente."),
  Password: z.string().min(1, "Digite sua senha."),
})

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  async function handleUserLogin(data: LoginFormData) {
    await loginUser(data)
    redirect("/")
  }

  return (
    <div className="flex flex-col text-left justify-center min-h-screen">
      <div className="flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl ">
        <h1 className="text-xl font-semibold">Login</h1>
        <form
          action=""
          onSubmit={handleSubmit(handleUserLogin)}
          className="flex flex-col gap-8 flex-1"
        >
          <div className="flex gap-3 flex-col">
            <span className="text-xs font-semibold text-zinc-600">
              Login, senha e nome necessários para a autenticação
            </span>

            <Input
              type="email"
              placeholder="Informe seu email"
              variant="minimalist"
              {...register("Email")}
            />
            {errors.Email && (
              <p className="text-red-500 text-sm">{errors.Email.message}</p>
            )}
            <Input
              type="password"
              placeholder="Crie uma senha"
              variant="minimalist"
              {...register("Password")}
            />
            {errors.Password && (
              <p className="text-red-500 text-sm">{errors.Password.message}</p>
            )}
          </div>
          <Link
            href="/auth/forgot-password"
            className="text-center text-balance underline"
          >
            Esqueci a senha
          </Link>
          <Button variant="submit">Confirmar</Button>
        </form>
        <span className="text-center">
          Ainda não tenho uma conta -{" "}
          <Link href="/auth/register" className="text-balance underline">
            Cadrastar
          </Link>
        </span>
      </div>
    </div>
  )
}
