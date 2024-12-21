"use client";

import { useMostSearchedProductsContexts } from "@/contexts/most-searched-products-context";

import { useRouter } from "next/navigation";

export interface SuggestionItemProps {
  suggestionTitle: string;
  suggestionCategory: string;
  suggestionProductId: string;
  suggetionProductImageUrl: string;
  suggestionProductStore: string;
  suggestionProductPrice: number;
}

export function SuggestionItem({
  suggestionTitle,
  suggestionCategory,
  suggestionProductId,
  suggestionProductStore,
  suggetionProductImageUrl,
  suggestionProductPrice,
}: SuggestionItemProps) {
  const router = useRouter();
  const { addProductInMostSearchedProductsContextList } =
    useMostSearchedProductsContexts();

  function handleRedirectToPage() {
    router.push(`/product/${suggestionProductId}`);
  }

  const product = {
    suggestionTitle,
    suggestionCategory,
    suggestionProductId,
    suggestionProductStore,
    suggetionProductImageUrl,
    suggestionProductPrice,
  };

  function handleAddProductInMostSearchedProductsContextList() {
    handleRedirectToPage();
    addProductInMostSearchedProductsContextList(product);
  }

  return (
    <div
      className="flex justify-between rounded-3xl border px-4 py-3 w-full cursor-pointer"
      onClick={handleAddProductInMostSearchedProductsContextList}
    >
      <strong className="max-w-[13rem] truncate overflow-hidden text-ellipsis">
        {suggestionTitle}
      </strong>
      <span className="text-green-700">em {suggestionCategory}</span>
    </div>
  );
}
