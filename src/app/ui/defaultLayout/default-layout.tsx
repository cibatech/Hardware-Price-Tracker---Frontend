import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
