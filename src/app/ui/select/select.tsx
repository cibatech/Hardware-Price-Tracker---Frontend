"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { ReactNode, useState } from "react"

interface ISelectProps {
  children: ReactNode
}

export function Select({ children }: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("Marca")

  const toggleDropdown = () => setIsOpen(!isOpen)

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-40 px-4 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-100 ${
          selected === "Marca" ? "bg-green-500 text-white" : ""
        }`}
      >
        {selected}
        <span className="ml-2">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-green-500 rounded-lg shadow-lg p-4 flex flex-wrap gap-2 z-10">
          {children}
        </div>
      )}
    </div>
  )
}
