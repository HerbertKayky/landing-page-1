import { Model } from "@/utils/Models.type";
import Image from "next/image";

export default function Models({ models }: { models: Model[] }) {
  return (
    <section id="models" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Modelos Disponíveis</h3>
          <p className="mt-4 text-lg">
            Escolha entre uma variedade de modelos Honda e encontre a moto
            perfeita para você.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {models.map((model) => (
            <div key={model.id} className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={model.image}
                alt={`Modelo ${model.name}`}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="mt-4 text-2xl font-bold">{model.name}</h4>
              <p className="mt-2 text-lg">{model.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
