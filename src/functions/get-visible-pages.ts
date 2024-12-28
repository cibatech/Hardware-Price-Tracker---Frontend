export const getVisiblePages = (
  totalPages: number,
  currentPage: number
): (number | string)[] => {
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
