import Navbar from "@/app/components/ui/Navbar";
import Footer from "@/app/components/ui/footer";
import { ReactNode } from "react";

export default function ClientLayout ({children}: {children: ReactNode}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
