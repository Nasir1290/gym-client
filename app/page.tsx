"use client"
import AboutSection from "@/components/home/AboutSection";
import HeroSection from "@/components/home/HeroSection";
import Pricing from "@/components/home/Pricing";
import ServicesSection from "@/components/home/ServicesSection";
import WellnessSection from "@/components/home/WellnessSection";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos"; // Import AOS
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 400 }); // Customize AOS initialization
  }, []);
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
