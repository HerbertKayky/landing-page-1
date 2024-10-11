"use client";
import { Model } from "@/utils/Models.type";
import Image from "next/image";
import { useState } from "react";

export default function Models({ models }: { models: Model[] }) {
  const [selectedModel, setSelectedModel] = useState<Model | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (model: Model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedModel(null);
    setIsModalOpen(false);
  };

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
            <div
              key={model.id}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal(model)}
            >
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

        {isModalOpen && selectedModel && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-7 rounded-lg shadow-lg max-w-2xl w-full">
              <Image
                src={selectedModel.image}
                alt={`Modelo ${selectedModel.name}`}
                width={500}
                height={300}
                className="w-full h-96 object-cover rounded-lg"
              />
              <h4 className="text-2xl font-bold mb-4">{selectedModel.name}</h4>
              <p className="text-lg mb-4">{selectedModel.description}</p>
              <p className="text-lg mb-4">
                Cilindradas: {selectedModel.especificacoes?.Cilindrada || "N/A"}
              </p>

              <button
                onClick={closeModal}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
