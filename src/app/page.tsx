import Image from "next/image";
import Link from "next/link";

import wppIcon from "/public/wppIcon.png";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";

export default function Motorac() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <Testimonials />

      {/* Models Section */}
      <section id="models" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Modelos Disponíveis</h3>
            <p className="mt-4 text-lg">
              Escolha entre uma variedade de modelos Honda e encontre a moto
              perfeita para você.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {/* Model 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/pop.webp"
                alt="Modelo Honda 1"
                className="w-full h-48 object-cover  rounded-lg"
              />
              <h4 className="mt-4 text-2xl font-bold">Pop 110</h4>
              <p className="mt-2 text-lg">
                Uma moto versátil e robusta, perfeita para qualquer aventura.
              </p>
            </div>
            {/* Model 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/biz.webp"
                alt="Modelo Honda 2"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-2xl font-bold">Biz 125</h4>
              <p className="mt-2 text-lg">
                Desempenho e economia para o seu dia a dia na cidade.
              </p>
            </div>
            {/* Model 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/fan.webp"
                alt="Modelo Honda 3"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-2xl font-bold">Fan 160</h4>
              <p className="mt-2 text-lg">
                Com design arrojado e força para encarar qualquer terreno.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/bros.webp"
                alt="Modelo Honda 3"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-2xl font-bold">Bros 160</h4>
              <p className="mt-2 text-lg">
                Com design arrojado e força para encarar qualquer terreno.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/xre.webp"
                alt="Modelo Honda 3"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-2xl font-bold">XRE 190</h4>
              <p className="mt-2 text-lg">
                Com design arrojado e força para encarar qualquer terreno.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/sahara.webp"
                alt="Modelo Honda 3"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-2xl font-bold">Sahara 300</h4>
              <p className="mt-2 text-lg">
                Com design arrojado e força para encarar qualquer terreno.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/twister.webp"
                alt="Modelo Honda 3"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-2xl font-bold">Twister 300F</h4>
              <p className="mt-2 text-lg">
                Com design arrojado e força para encarar qualquer terreno.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src="/nc.webp"
                alt="Modelo Honda 3"
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-2xl font-bold">NC 750X</h4>
              <p className="mt-2 text-lg">
                Com design arrojado e força para encarar qualquer terreno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
