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
                className="w-full h-72 object-contain rounded-lg"
              />
              <h4 className="text-2xl font-bold mb-4">{selectedModel.name}</h4>
              <p className="text-lg mb-4">{selectedModel.description}</p>
              <h3 className="text-xl font-bold mb-4">
                Especificações/Ficha Técnica
              </h3>
              <p className="text-lg mb-1 font-medium ">
                Tipo:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.tipo}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Cilindradas:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.cilindrada}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Potência Máxima:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.potenciaMaxima}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Torque Máximo:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.torqueMaximo}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Tranmissão:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.transmissao}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Sistema de Partida:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.sistemaDePartida}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Diâmetro x Curso:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.diametroXCurso}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Relação de compressão:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.relacaoDeCompressao}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Sistema Alimentação:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.sistemaAlimentacao}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Combustível:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.combustivel}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Capacidade:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.capacidade}
                </span>
              </p>
              <p className="text-lg mb-1 font-medium">
                Óleo do Motor:{" "}
                <span className="font-normal">
                  {selectedModel.especificacoes?.oleoDoMotor}
                </span>
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
