interface SelectOptionProps {
  option: string
  isSelected: boolean
  onClick: () => void
}

export function SelectOption({
  option,
  isSelected,
  onClick,
}: SelectOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border rounded-full text-green-500 hover:bg-green-700 hover:text-white ${
        isSelected
          ? "bg-green-700 text-white border-green-700"
          : "border-green-500"
      }`}
    >
      {option}
    </button>
  )
}
