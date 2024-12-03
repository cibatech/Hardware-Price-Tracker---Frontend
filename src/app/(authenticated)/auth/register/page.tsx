import Link from "next/link"
import { Button } from "../../../../components/ui/button/button"
import { Input } from "../../../../components/ui/inputs/input"

export default function Register() {
  return (
    <div className="flex flex-col text-left justify-center min-h-screen">
      <div className="flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl ">
        <h1 className="text-xl font-semibold">Cadastro</h1>
        <form action="" className="flex flex-col gap-8 flex-1">
          <div className="flex gap-3 flex-col">
            <span className="text-xs font-semibold text-zinc-600">
              Login e senha necessários para a autenticação
            </span>
            <Input
              type="text"
              placeholder="Informe seu nome"
              variant="minimalist"
            />
            <Input
              type="email"
              placeholder="Informe seu email"
              variant="minimalist"
            />
            <Input
              type="password"
              placeholder="Crie uma senha"
              variant="minimalist"
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
