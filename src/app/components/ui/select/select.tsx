import { ChevronDown, ChevronUp } from "lucide-react"
import { ReactNode, useState } from "react"

interface ISelectProps {
  children: ReactNode
  selected: string
  defaultText?: string
  pagePagination?: boolean
}

export function Select({
  children,
  selected,
  defaultText,
  pagePagination,
}: ISelectProps) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => setIsOpen(!isOpen)

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsOpen(false)
    }
  }

  return (
    <div className="relative inline-block" onBlur={handleBlur} tabIndex={0}>
      <button
        onClick={toggleDropdown}
        className={`flex items-center justify-between w-full px-4 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-600 hover:text-white ${
          selected !== defaultText ? "bg-green-700 text-white" : ""
        }`}
      >
        {selected === "" ? "Default" : selected}
        <span className="ml-2">{isOpen ? <ChevronUp /> : <ChevronDown />}</span>
      </button>

      {isOpen && (
        <div
          className={`absolute mt-2 md:w-auto w-full  bg-white border border-green-700 rounded-lg shadow-lg p-4 flex flex-wrap gap-2 z-10 ${
            pagePagination ? "" : "min-w-[12rem]"
          }`}
          tabIndex={-1}
        >
          {children}
        </div>
      )}
    </div>
  )
}
