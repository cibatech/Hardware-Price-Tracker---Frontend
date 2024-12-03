import { hardwareComponetsList } from "@/constants"
import Link from "next/link"

export function Navbar() {
  return (
    <div className="w-full justify-center bg-green-700 hidden md:flex">
      <ul className="flex gap-8 py-3 text-zinc-50">
        {hardwareComponetsList.map((component, index) => (
          <li key={index} className="hover:transition-all hover:opacity-50">
            <Link href={""}>{component}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
