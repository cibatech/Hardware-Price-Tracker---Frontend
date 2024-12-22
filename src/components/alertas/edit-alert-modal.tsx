"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "../ui/input"
import { useAlerts } from "@/contexts/alerts-context"
import { showErrorToast, showSuccessToast } from "../product/ui/toasts"
import { Button } from "../ui/button"

export const editAlertFormSchema = z.object({
  TargetPrice: z.number(),
})

export type EditAlertFormSchema = z.infer<typeof editAlertFormSchema>

interface FilterModalProps {
  closeFilterModal: () => void
  alertId: string
}

export function EditValueModal({
  alertId,
  closeFilterModal,
}: FilterModalProps) {
  const { editAlertById } = useAlerts()
  const modalRef = useRef<HTMLDivElement | null>(null)

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
      closeFilterModal()
    } catch (error) {
      console.log(error)
      showErrorToast("Ops! Ocorreu algum erro.")
    }
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeFilterModal()
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeFilterModal()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [closeFilterModal])

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div ref={modalRef} className="bg-white rounded-lg w-11/12 max-w-md p-6">
        <header className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <strong className="text-xl font-semibold">
              Alterar valor do alerta
            </strong>
          </div>
          <button onClick={closeFilterModal} className="text-zinc-900">
            <X />
          </button>
        </header>
        <div className="flex flex-col gap-4 w-full">
          <form onSubmit={handleSubmit(handleEditAlert)}>
            <p className="text-zinc-600">
              Defina o valor desejado para alterar o preço.
            </p>
            <div className="grid gap-4 py-4">
              <Input
                type="number"
                placeholder="Digite um valor"
                {...register("TargetPrice", { valueAsNumber: true })}
              />
              {errors.TargetPrice && (
                <span className="text-red-500">
                  {errors.TargetPrice.message}
                </span>
              )}
            </div>

            <Button
              variant="secondary"
              type="submit"
              disabled={isSubmitting || !!errors.TargetPrice}
              className="flex-1 bg-green-700 text-zinc-50 rounded-3xl py-2"
            >
              Confirmar
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
