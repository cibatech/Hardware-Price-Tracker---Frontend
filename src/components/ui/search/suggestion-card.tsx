"use client"

import { redirect } from "next/navigation"

interface SuggestionItemProps {
  suggestionTitle: string
  suggestionCategory: string
  suggestionRedirectProductPageById: string
}

export function SuggestionItem({
  suggestionTitle,
  suggestionCategory,
  suggestionRedirectProductPageById,
}: SuggestionItemProps) {
  function handleRedirectToProductPage() {
    redirect(`/results/?query=${suggestionTitle}`)
  }

  return (
    <div
      className="flex justify-between rounded-3xl border px-4 py-3 w-full cursor-pointer"
      onClick={handleRedirectToProductPage}
    >
      <strong className="max-w-[13rem] truncate overflow-hidden text-ellipsis">
        {suggestionTitle}
      </strong>
      <span className="text-green-700">em {suggestionCategory}</span>
    </div>
  )
}
