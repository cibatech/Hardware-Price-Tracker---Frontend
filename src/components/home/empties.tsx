import Image from "next/image"
import emptySearchProductsImage from "../../assets/empty-search-products.svg"
import emptyViewProductsImage from "../../assets/empty-view-products.svg"

export function EmptySearchForProducts() {
  return (
    <div className="flex flex-col items-center gap-6 ">
      <Image src={emptySearchProductsImage} alt="emptySearchProductsImage" />
      <span className="text-center">
        Você não pesquisou por nenhum produto ainda.
      </span>
    </div>
  )
}

export function EmptyViewProducts() {
  return (
    <div className="flex flex-col items-center gap-6 ">
      <Image src={emptyViewProductsImage} alt="emptyViewProductsImage" />
      <span className="text-center">
        Você não pesquisou por nenhum produto ainda.
      </span>
    </div>
  )
}
