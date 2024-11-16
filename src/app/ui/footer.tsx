import Image from "next/image"
import logo from "../../../public/logo.svg"

export default function Footer() {
  return (
    <footer className="w-full bg-green-700 p-6 flex justify-center items-center flex-col">
      <Image src={logo} alt="Landscape picture" width={240} height={24} />
      <h1 className="text-base font-semibold text-zinc-200">2024</h1>
    </footer>
  )
}
