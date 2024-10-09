import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ReactNode } from "react";
interface HomeLayoutProps {
  children: ReactNode; // This can accept any valid React node
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
