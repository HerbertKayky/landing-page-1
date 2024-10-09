// HeroSection.js
export default function HeroSection() {
    return (
      <section className="relative bg-cover bg-center h-screen bg-gray-300 text-white flex items-center justify-center"
        style={{ backgroundImage: 'url("/honda.avif")' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
        <div className="relative text-center backdrop-blur-md bg-white/0 p-8 rounded-lg">
          <h2 className="text-5xl font-bold">Encontre a sua próxima Honda</h2>
          <p className="mt-4 text-xl">Compre sua moto dos sonhos com o melhor vendedor da Motorac Toritama</p>
          <a href="#contact" className="inline-block mt-8 px-6 py-3 bg-[#C53030] text-white rounded-lg shadow-lg hover:bg-red-700 transition">Entre em contato agora</a>
        </div>
      </section>
    );
  }
  