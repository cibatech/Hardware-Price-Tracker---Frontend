import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "../../shadcn-ui/ui/breadcrumb"

export function BreadcrumbDemo() {
  return (
    <Breadcrumb className="mx-6 my-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/" >Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/results">Pesquisa</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="/results/gtx1650">GTX 1650</BreadcrumbLink>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
