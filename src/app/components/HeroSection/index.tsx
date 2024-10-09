import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen bg-gray-300 text-white flex items-center justify-center">
      <Image
        src="/honda.avif"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="z-0"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
      <div className="relative z-20 text-center backdrop-blur-md bg-white/0 p-8 rounded-lg">
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
  );
}
