"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../shadcn-ui/ui/dialog"
import { BellRing } from "lucide-react"
import { Input } from "../../ui/inputs/input"
import { Button } from "../../ui/button/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { creteAlert } from "@/http/alerts/create-alert"
import { useParams } from "next/navigation"
import Cookies from "js-cookie"
import { showErrorToast, showInfoToast, showSuccessToast } from "./toasts"

export const createAlertFormSchema = z.object({
  TargetPrice: z.number().min(1, "Valor inválido!"),
})

type CreateAlertFormSchema = z.infer<typeof createAlertFormSchema>

export function ProductValueModal() {
  const params = useParams()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<CreateAlertFormSchema>({
    resolver: zodResolver(createAlertFormSchema),
  })

  async function handleCreateAlert(data: CreateAlertFormSchema) {
    try {
      const { TargetPrice } = data
      const UserId = Cookies.get("userId")
      const ProdId = params?.id as string

      if (!UserId || !ProdId) {
        console.error("UserId ou ProdId não encontrados.")
        showInfoToast("Faça o login para criar o alerta.")
        return
      }

      const alertData = {
        TargetPrice,
        ProdId,
        UserId,
      }

      await creteAlert(alertData)
      showSuccessToast("Alerta criado!")
    } catch (error) {
      console.log("Error: ", error)
      showErrorToast("Você já ativou as notificações para este produto.")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="size-10" variant="sponsor">
          <BellRing />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(handleCreateAlert)}>
          <DialogHeader>
            <DialogTitle>Definir valor</DialogTitle>
            <DialogDescription>
              Defina o valor desejado e seja notificado assim que o produto
              atingir ou ficar abaixo desse preço.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              type="number"
              placeholder="Digite um valor"
              {...register("TargetPrice", { valueAsNumber: true })}
            />
            {errors.TargetPrice && (
              <span className="text-red-500">{errors.TargetPrice.message}</span>
            )}
          </div>
          <DialogFooter>
            <button
              type="submit"
              disabled={isSubmitting || !!errors.TargetPrice}
              className="flex-1 bg-green-700 text-zinc-50 rounded-3xl py-2"
            >
              Confirmar
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
