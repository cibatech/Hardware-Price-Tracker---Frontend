"use client"

import Link from "next/link"
import { Button } from "../../../../components/ui/button/button"
import { Input } from "../../../../components/ui/inputs/input"
import { useForm } from "react-hook-form"
import { registerUser } from "@/http/auth/register-user"
import { RegisterData } from "@/@types/auth"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { showErrorToast, showSuccessToast } from "@/components/product/ui/toasts"

const registerFormSchema = z.object({
  Email: z.string().email(),
  Password: z.string(),
  UserName: z.string()
})

export default function Register() {
  const { handleSubmit, register } = useForm<RegisterData>({
    resolver: zodResolver(registerFormSchema),
  })

  async function handleUserRegister(data: RegisterData) {
    console.log(data)
    try {
      await registerUser(data)
      showSuccessToast("Usuário registrado!")
    } catch (error) {
      console.log(error)
      showErrorToast("Error ao registrar usuário.")
    }
  }

  return (
    <div className="flex flex-col text-left justify-center min-h-screen">
      <div className="flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl ">
        <h1 className="text-xl font-semibold">Cadastro</h1>
        <form
          action=""
          onSubmit={handleSubmit(handleUserRegister)}
          className="flex flex-col gap-8 flex-1"
        >
          <div className="flex gap-3 flex-col">
            <span className="text-xs font-semibold text-zinc-600">
              Login e senha necessários para a autenticação
            </span>
            <Input
              type="text"
              placeholder="Informe seu nome"
              variant="minimalist"
              {...register("UserName")}
            />
            <Input
              type="email"
              placeholder="Informe seu email"
              variant="minimalist"
              {...register("Email")}
            />
            <Input
              type="password"
              placeholder="Crie uma senha"
              variant="minimalist"
              {...register("Password")}
            />
          </div>
          <Button variant="submit">Confirmar</Button>
        </form>
        <span className="text-center">
          Já tenho uma conta -{" "}
          <Link href="/auth/login" className="text-balance underline">
            Entrar
          </Link>
        </span>
      </div>
    </div>
  )
}
