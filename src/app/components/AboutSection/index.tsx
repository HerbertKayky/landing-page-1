// AboutSection.js
export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 flex flex-col max-w-4xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Sobre mim</h3>
          <p className="mt-4 text-lg">
            Como especialista em motos Honda, ofereço um atendimento
            personalizado e de qualidade para clientes em todo o Brasil. Com
            mais de 400 clientes satisfeitos, meu objetivo é garantir que você
            encontre a moto dos seus sonhos, seja através de consórcio,
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
  );
}
