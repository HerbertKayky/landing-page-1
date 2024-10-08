import Image from "next/image";
import Link from "next/link";

import wppIcon from "/public/wppIcon.png";

import SwiperComponent from "./components/SwiperComponent";

export default function Motorac() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-[#C53030] text-white py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-medium">
            Gustavo Igor - Consultor Motorac
          </h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#about" className="hover:underline">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#models" className="hover:underline">
                  Modelos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen bg-gray-300 text-white flex items-center justify-center"
        style={{ backgroundImage: 'url("/honda.avif")' }}
      >
        {/* O overlay com o gradiente */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="relative text-center backdrop-blur-md bg-white/0 p-8 rounded-lg">
          <h2 className="text-5xl font-bold">Encontre a sua próxima Honda</h2>
          <p className="mt-4 text-xl">
            Compre sua moto dos sonhos com o melhor vendedor da Motorac Toritama
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 px-6 py-3 bg-[#C53030] text-white rounded-lg shadow-lg hover:bg-red-700 transition"
          >
            Entre em contato agora
          </a>
        </div>
      </section>

      {/* About the Seller Section */}
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 flex flex-col max-w-4xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Sobre mim</h3>
            <p className="mt-4 text-lg">
              Como especialista em motos Honda, ofereço um atendimento
              personalizado e de qualidade para clientes em todo o Brasil.
              Com mais de 400 clientes satisfeitos, meu objetivo é garantir que
              você encontre a moto dos seus sonhos, seja através de consórcio,
              financiamento ou à vista. Estou aqui para ajudar você a fazer a
              melhor escolha e proporcionar a melhor experiência de compra!
            </p>
          </div>
          <div className="flex justify-center mt-10">
            <img
              src="/man-taking-selfie.jpg"
              alt="Foto do vendedor"
              className="rounded-full w-48 h-48 object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-3xl font-bold">Clientes Satisfeitos</h3>
            <p className="mt-4 text-lg">
              Veja alguns dos clientes felizes que compraram suas motos com
              nossa ajuda.
            </p>
          </div>

          <SwiperComponent />
        </div>
      </section>

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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#C53030] text-white">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold">Entre em Contato</h3>
          <p className="mt-4 text-lg">
            Quer saber mais sobre algum modelo ou agendar um test ride? Fale
            diretamente comigo agora.
          </p>
          <div className="inline-flex items-center px-6 py-2 rounded-lg bg-green-600 gap-3 mt-10 transition-transform hover:scale-105">
            <Image
              src={wppIcon}
              alt="WhatsApp"
              width={40}
              priority={true}
              quality={100}
            />
            <Link
              className="text-quase text-xl font-medium"
              href="https://wa.me/SEU_NUMERO"
            >
              Entre em contato
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2024 Herbert Kayky - Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
