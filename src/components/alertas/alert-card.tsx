"use client"

import Image from "next/image"
import imageIndisponible from "../../assets/image-indisponible.svg"
import { Pencil, Trash } from "lucide-react"
import { priceFormatter } from "@/lib/formatter"
import { EditValueModal } from "./edit-alert-modal"
import { useAlerts } from "@/contexts/alerts-context"
import { showErrorToast, showSuccessToast } from "../ui/toasts"
import { useState } from "react"

interface AlertCardProps {
  value: number
  alertId: string
  alertName: string
  alertImageUrl: string
}

export function AlertCard({
  alertId,
  value,
  alertImageUrl,
  alertName,
}: AlertCardProps) {
  const [isFilterModalOpen, setFilterModalOpen] = useState(false)
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
    <div>
      <div className="border border-zinc-300 flex justify-center items-center gap-3 px-4 py-4 rounded-3xl max-w-[40rem]">
        <div className="size-32 flex items-center justify-center">
          <Image
            src={alertImageUrl || imageIndisponible}
            alt=""
            width={128}
            height={128}
          />
        </div>
        <section className="flex flex-col justify-between gap-4">
          <span>{alertName}</span>
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
              <button
                onClick={() => setFilterModalOpen(true)}
                className="p-2 flex items-center justify-center bg-green-100 rounded-3xl "
              >
                <Pencil className="text-green-700" />
              </button>
            </div>
          </div>
        </section>
      </div>
      {isFilterModalOpen && (
        <EditValueModal
          closeFilterModal={() => setFilterModalOpen(false)}
          alertId={alertId}
        />
      )}
    </div>
  )
}
