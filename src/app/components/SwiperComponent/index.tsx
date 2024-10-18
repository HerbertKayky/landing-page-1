"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const SwiperComponent = () => {
  const clients = [
    {
      photo: "1.webp",
      quote: "A experiência foi incrível, a moto dos meus sonhos!",
    },
    {
      photo: "2.webp",
      quote:
        "Estou muito satisfeita com minha nova Honda, superou minhas expectativas!",
    },
    {
      photo: "3.webp",
      quote: "Comprei minha Honda aqui e não poderia estar mais feliz!",
    },
    {
      photo: "4.webp",
      quote: "O Gustavo me ajudou a encontrar a moto perfeita para mim!",
    },
    {
      photo: "5.webp",
      quote: "Moto excelente e atendimento impecável. Recomendo!",
    },
    {
      photo: "6.webp",
      quote: "A compra da minha Honda foi rápida e tranquila. Adorei!",
    },
    {
      photo: "7.webp",
      quote:
        "Achei a moto perfeita para minhas aventuras. Obrigada pelo atendimento!",
    },
    {
      photo: "8.webp",
      quote: "Atendimento de primeira e uma moto que faz a diferença!",
    },
    {
      photo: "9.webp",
      quote: "Foi a melhor decisão! Minha Honda está rodando perfeitamente!",
    },
    {
      photo: "10.webp",
      quote: "Confiança total no vendedor e no produto. Honda é Honda!",
    },
    {
      photo: "11.webp",
      quote:
        "A moto dos meus sonhos e um atendimento que fez toda a diferença!",
    },
  ];

  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      navigation
      modules={[Pagination, Navigation]}
      className="mt-10"
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {clients.map((client, index) => (
        <SwiperSlide
          key={index}
          className="bg-gray-50 p-6 rounded-lg shadow-lg"
        >
          <img
            src={`/clients/${client.photo}`}
            alt={`Cliente ${index + 1}`}
            className="w-full h-auto object-cover rounded-lg"
          />
          <p className="mt-4 text-center text-lg italic">"{client.quote}"</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
