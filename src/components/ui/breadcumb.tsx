import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../shadcn-ui/ui/breadcrumb"

interface BreadcrumbDemoProps {
  productTitle?: string
  produtId?: string
  isProductPage: boolean
}

export function BreadcrumbDemo({
  isProductPage,
  productTitle,
  produtId,
}: BreadcrumbDemoProps) {
  return (
    <Breadcrumb className="mx-6 my-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/results">Resultados</BreadcrumbLink>
        </BreadcrumbItem>

        {isProductPage && (
          <>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href={`/product/${produtId}`}
                className="md:max-w-[20rem] max-w-[8rem] truncate"
              >
                {productTitle}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
