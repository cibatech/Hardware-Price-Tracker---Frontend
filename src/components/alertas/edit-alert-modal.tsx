"use client"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/react-dialog"
import { Pencil } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { DialogHeader, DialogFooter } from "../shadcn-ui/ui/dialog"
import { Input } from "../ui/inputs/input"
import { useAlerts } from "@/contexts/alerts-context"
import { showErrorToast, showSuccessToast } from "../product/ui/toasts"

export const editAlertFormSchema = z.object({
  TargetPrice: z.number(),
})

export type EditAlertFormSchema = z.infer<typeof editAlertFormSchema>

export function EditValueModal({ alertId }: { alertId: string }) {
  const { editAlertById } = useAlerts()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<EditAlertFormSchema>({
    resolver: zodResolver(editAlertFormSchema),
  })

  async function handleEditAlert(data: EditAlertFormSchema) {
    try {
      await editAlertById(alertId, data)
      console.log("alerta atualizado!")
      showSuccessToast("Valor atualizado com sucesso!")
    } catch (error) {
      console.log(error)
      showErrorToast("Ops! Ocorreu algum erro.")
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="p-2 flex items-center justify-center bg-green-100 rounded-3xl ">
          <Pencil className="text-green-700" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] z-50" asChild>
        <form onSubmit={handleSubmit(handleEditAlert)}>
          <DialogHeader>
            <DialogTitle>Alterar valor</DialogTitle>
            <DialogDescription>
              Defina o valor desejado para alterar o preço.
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
