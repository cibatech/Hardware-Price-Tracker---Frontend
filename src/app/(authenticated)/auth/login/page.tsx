import Link from "next/link"
import { Button } from "../../../../components/ui/button/button"
import { Input } from "../../../../components/ui/inputs/input"

export default function Login() {
  return (
    <div className="flex flex-col text-left justify-center min-h-screen">
      <div className="flex flex-col text-left justify-center m-auto gap-8 bg-zinc-50 border border-zinc-200 p-8 w-auto md:w-1/3 rounded-3xl ">
        <h1 className="text-xl font-semibold">Login</h1>
        <form action="" className="flex flex-col gap-8 flex-1">
          <div className="flex gap-3 flex-col">
            <span className="text-xs font-semibold text-zinc-600">
              Login, senha e nome necessários para a autenticação
            </span>

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
