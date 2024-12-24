import Image from "next/image"
import emptySearchProductsImage from "../../assets/empty-search-products.svg"
import emptyViewProductsImage from "../../assets/empty-view-products.svg"

export interface EmptyProductsProps {
  variant: "search" | "view" 
}

export function EmptyProducts({ variant }: EmptyProductsProps) {
  let imageUrl
  let text

  if (variant === "search") {
    imageUrl = emptySearchProductsImage
    text = "Você não pesquisou por nenhum produto ainda."
  } else {
    imageUrl = emptyViewProductsImage
    text = "Você não visualizou nenhum produto ainda."
  }

  return (
    <div className="flex flex-col items-center gap-6 ">
      <Image src={imageUrl} alt={`empty-${variant}-products`} />
      <span className="text-center">{text}</span>
    </div>
  )
}
