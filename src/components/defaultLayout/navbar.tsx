import { hardwareCategories } from "@/constants"
import Link from "next/link"

export function Navbar() {
  return (
    <div className="w-full justify-center bg-green-700 hidden md:flex">
      <ul className="flex gap-8 py-3 text-zinc-50 flex-wrap justify-center">
        {hardwareCategories.map((component, index) => (
          <li key={index} className="hover:transition-all hover:opacity-50">
            <Link href={`/results?categoria=${component.value}`}>
              {component.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
