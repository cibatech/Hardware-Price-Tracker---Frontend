"use client"

import Image from "next/image"
import gtxImage from "../../../public/gpu.svg"
import { Trash } from "lucide-react"
import { priceFormatter } from "@/lib/formatter"
import { EditValueModal } from "./edit-alert-modal"
import { useAlerts } from "@/contexts/alerts-context"
import { showErrorToast, showSuccessToast } from "../product/ui/toasts"

interface AlertCardProps {
  value: number
  alertId: string
}

export function AlertCard({ alertId, value }: AlertCardProps) {
   const { deleteAlertById } = useAlerts()

   async function handleDeleteAlert() {
     try {
      await deleteAlertById(alertId) 
      showSuccessToast("Alerta deletado com sucesso!")
     } catch (error) {
      console.log(error)
      showErrorToast("Erro ao deletar alerta.")
     }
   }

  return (
    <div className="border border-zinc-300 flex justify-center items-center px-4 py-4 rounded-3xl max-w-[40rem]">
      <div className="size-32 flex items-center justify-center">
        <Image src={gtxImage} alt="" />
      </div>
      <section className="flex flex-col justify-between gap-4">
        <span>
          Placa de video galax geforce gtx 1650 ex plus 1click oc 4gb...
        </span>
        <div className="flex justify-between items-center">
          <strong className="text-xl font-semibold text-green-500">
            {priceFormatter.format(value)}
          </strong>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={handleDeleteAlert}
              className="p-2 flex items-center justify-center bg-green-100 rounded-3xl "
            >
              <Trash className="text-green-700" />
            </button>
            <EditValueModal alertId={alertId} />
          </div>
        </div>
      </section>
    </div>
    
  )
}
