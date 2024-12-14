"use client"

import { usePathname } from "next/navigation"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../shadcn-ui/ui/pagination"
import { useFilters } from "@/hooks/useFilters"

export function PaginationDemo({ totalPages }: { totalPages: number }) {
  const { params, searchParams } = useFilters()
  const pathname = usePathname()
  const currentPage = Number(searchParams.get("page")) || 1

  const createPageURL = (pageNumber: number | string) => {
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  const getVisiblePages = (totalPages: number, currentPage: number) => {
    const pages: (number | string)[] = []
    const range = 1

    if (currentPage > 1) pages.push("prev")
    if (currentPage > range + 1) pages.push(1)
    if (currentPage > range + 2) pages.push("ellipsis-start")

    for (
      let i = Math.max(1, currentPage - range);
      i <= Math.min(totalPages, currentPage + range);
      i++
    ) {
      pages.push(i)
    }

    if (currentPage < totalPages - range - 1) pages.push("ellipsis-end")
    if (currentPage < totalPages - range) pages.push(totalPages)
    if (currentPage < totalPages) pages.push("next")

    return pages
  }

  const visiblePages = getVisiblePages(totalPages, currentPage)

  return (
    <Pagination>
      <PaginationContent>
        {visiblePages.map((page, index) => {
          if (page === "prev") {
            return (
              <PaginationItem key="prev">
                <PaginationPrevious href={createPageURL(currentPage - 1)} />
              </PaginationItem>
            )
          }
          if (page === "next") {
            return (
              <PaginationItem key="next">
                <PaginationNext href={createPageURL(currentPage + 1)} />
              </PaginationItem>
            )
          }
          if (page === "ellipsis-start" || page === "ellipsis-end") {
            return (
              <PaginationItem key={`ellipsis-${index}`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          }
          return (
            <PaginationItem key={page}>
              <PaginationLink
                href={createPageURL(page)}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        })}
      </PaginationContent>
    </Pagination>
  )
}
