import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../shadcn-ui/ui/sheet"
import { hardwareComponetsList } from "@/constants"
import { Menu } from "lucide-react"
import Link from "next/link"

export function NavbarMobile() {
  return (
    <div className="grid grid-cols-2 gap-2">
      <Sheet>
        <SheetTrigger asChild>
          <Menu className="flex size-8 md:hidden text-zinc-50" />
        </SheetTrigger>
        <SheetContent side={"top"}>
          <SheetHeader>
            <SheetTitle>
              <SheetDescription />
            </SheetTitle>
          </SheetHeader>
          <div>
            <ul className="flex flex-col items-center gap-6">
              {hardwareComponetsList.map((component, index) => (
                <li
                  key={index}
                  className="hover:transition-all hover:opacity-50"
                >
                  <Link href={""}>{component}</Link>
                </li>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
