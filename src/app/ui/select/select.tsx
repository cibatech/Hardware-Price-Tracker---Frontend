"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export function Select() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState("Marca")

  const options = ["Asus", "Gigabyte", "MSI", "Asrock"]

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleOptionClick = (option: string) => {
    setSelected(option)
    setIsOpen(false)
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-between w-40 px-4 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-100"
      >
        {selected}
        <span className="ml-2">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-green-500 rounded-lg shadow-lg p-4 flex flex-wrap gap-2 z-10">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionClick(option)}
              className={`px-4 py-2 border border-green-500 rounded-full text-green-500 hover:bg-green-500 hover:text-white ${
                selected === option ? "bg-green-500 text-white" : ""
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
