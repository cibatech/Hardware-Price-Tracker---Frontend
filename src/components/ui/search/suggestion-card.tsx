"use client"

import { useRouter } from "next/navigation"

interface SuggestionItemProps {
  suggestionTitle: string
  suggestionCategory: string
  suggestionProductId: string
}

export function SuggestionItem({
  suggestionTitle,
  suggestionCategory,
  suggestionProductId,
}: SuggestionItemProps) {
  const router = useRouter()

  function handleRedirectToPage() {
    if (window.location.pathname === "/") {
      router.push(`/results/?query=${suggestionTitle}`)
    } else {
      router.push(`/product/${suggestionProductId}`)
    }
  }

  return (
    <div
      className="flex justify-between rounded-3xl border px-4 py-3 w-full cursor-pointer"
      onClick={handleRedirectToPage}
    >
      <strong className="max-w-[13rem] truncate overflow-hidden text-ellipsis">
        {suggestionTitle}
      </strong>
      <span className="text-green-700">em {suggestionCategory}</span>
    </div>
  )
}
