"use client"

import Image from "next/image"
import gtxImage from "../../../../public/gpu.svg"
import { Pencil, Trash } from "lucide-react"

export function AlertCard() {
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
            R$ 879,00
          </strong>
          <div className="flex items-center justify-center gap-3">
            <button className="p-2 flex items-center justify-center bg-green-100 rounded-3xl ">
              <Trash className="text-green-700" />
            </button>
            <button className="p-2 flex items-center justify-center bg-green-100 rounded-3xl ">
              <Pencil className="text-green-700" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
