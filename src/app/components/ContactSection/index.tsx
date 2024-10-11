import Image from "next/image";
import Link from "next/link";
import wppIcon from "/public/wppIcon.png";

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 bg-[#C53030] text-white">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-3xl font-bold">Entre em Contato</h3>
        <p className="mt-4 text-lg">
          Quer saber mais sobre algum modelo ou agendar um test ride? <br />{" "}
          Fale diretamente comigo agora.
        </p>
        <div className="inline-flex items-center px-6 py-2 rounded-lg bg-green-600 gap-3 mt-10 transition-transform hover:scale-105">
          <Image
            src={wppIcon}
            alt="WhatsApp"
            width={40}
            priority
            quality={100}
          />
          <Link
            href="https://wa.me/5581993296809"
            className="text-quase text-xl font-medium"
          >
            Entre em contato
          </Link>
        </div>
      </div>
    </section>
  );
}
