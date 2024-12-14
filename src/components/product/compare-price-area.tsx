import { ReactNode } from "react"

export function ComparePriceArea({ children }: { children: ReactNode }) {
  return (
    <section
      id="compare-section"
      className="flex justify-center flex-col gap-11 py-8 px-4"
    >
      <strong className="text-xl font-semibold">
        Compare preços em 3 lojas
      </strong>
      <div className="flex gap-8 flex-col">{children}</div>
    </section>
  )
}
