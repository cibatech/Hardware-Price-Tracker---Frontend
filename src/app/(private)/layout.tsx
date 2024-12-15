import { Footer } from "@/components/defaultLayout/footer"
import { Header } from "@/components/defaultLayout/header"
import { Navbar } from "@/components/defaultLayout/navbar"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
