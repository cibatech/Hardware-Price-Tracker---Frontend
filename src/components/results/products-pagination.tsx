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
import { useEffect, useState } from "react"
import { getVisiblePages } from "@/functions/get-visible-pages"

export function PaginationDemo({ totalPages }: { totalPages: number }) {
  const [visiblePages, setVisiblePages] = useState<(number | string)[]>([])
  const { params, searchParams } = useFilters()
  const pathname = usePathname()
  const currentPage = Number(searchParams.get("page")) || 1

  const createPageURL = (pageNumber: number | string) => {
    params.set("page", pageNumber.toString())
    return `${pathname}?${params.toString()}`
  }

  useEffect(() => {
    const totalVisiblePages = getVisiblePages(totalPages, currentPage)
    setVisiblePages(totalVisiblePages)
  }, [currentPage, totalPages])

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
