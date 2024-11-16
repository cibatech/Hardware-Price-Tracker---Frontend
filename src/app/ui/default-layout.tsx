import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
