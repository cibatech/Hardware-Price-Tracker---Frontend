"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { ReactNode, useState } from "react"

interface ISelectProps {
  children: ReactNode
  selected: string
  defaultText: string
}

export function Select({ children, selected, defaultText }: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleBlur = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 100)
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        onBlur={handleBlur}
        className={`flex items-center justify-between w-full px-4 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-600 ${
          selected !== defaultText  ? "bg-green-700 text-white" : ""
        }`}
      >
        {selected === "" ? "Default" : selected}
        <span className="ml-2">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 md:w-48 w-full bg-white border border-green-700 rounded-lg shadow-lg p-4 flex flex-wrap gap-2 z-10">
          {children}
        </div>
      )}
    </div>
  )
}
