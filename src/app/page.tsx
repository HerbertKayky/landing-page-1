import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import { ModelsSection } from "./components/ModelsSection";

export default function Motorac() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <Testimonials />
      <ModelsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
