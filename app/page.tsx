import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import Pricing from "@/components/home/Pricing";
import ServicesSection from "@/components/home/ServicesSection";
import WellnessSection from "@/components/home/WellnessSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WellnessSection />
      <Pricing />
      <Footer />
    </div>
  );
}
