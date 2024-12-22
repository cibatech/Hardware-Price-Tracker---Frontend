"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ForgotPassword() {
  const { back } = useRouter()

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
        <form action="" className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Informe o email para recuperar sua senha.
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Informe seu email"
              variant="minimalist"
            />
          </div>
          <Button variant="submit">Confirmar</Button>
        </form>
      </div>
    </div>
  )
}
