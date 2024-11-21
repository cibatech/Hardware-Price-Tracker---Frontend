"use client"

interface IInputProps {
  type: "string"
  placeholder?: string
}

export function Input({type,placeholder}:IInputProps) {
  return (
    <div className="flex-1 border border-green-700 rounded-3xl p-2">
      <input
        type={type}
        
        placeholder={placeholder}
        className="flex-1 w-full outline-none"
       
      />
    </div>
  )
}