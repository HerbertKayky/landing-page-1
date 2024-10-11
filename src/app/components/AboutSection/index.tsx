import Image from "next/image";
import Link from "next/link";
import wppIcon from "/public/wppIcon.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row max-w-5xl items-center">
        <div className="md:w-1/2 text-center md:text-left md:pr-6">
          <h3 className="text-3xl font-bold">Sobre mim</h3>
          <p className="mt-4 text-lg">
            Como especialista em motos Honda, ofereço um atendimento
            personalizado e de qualidade para clientes em todo o Brasil. Com
            mais de 400 clientes satisfeitos, meu objetivo é garantir que você
            encontre a moto dos seus sonhos, seja através de consórcio,
            financiamento ou à vista. Estou aqui para ajudar você a fazer a
            melhor escolha e proporcionar a melhor experiência de compra!
          </p>
          <div className="inline-flex items-center px-6 py-2 rounded-lg bg-green-600 gap-3 mt-6 transition-transform hover:scale-105 justify-center md:justify-start">
            <Image
              src={wppIcon}
              alt="WhatsApp"
              width={40}
              priority
              quality={100}
            />
            <Link
              href="https://wa.me/5581993296809"
              className="text-xl font-medium text-white"
            >
              Entre em contato
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="/man-taking-selfie.jpg"
            alt="Foto do vendedor"
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
