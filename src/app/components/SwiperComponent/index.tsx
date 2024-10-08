"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const SwiperComponent = () => {
  const clients = [
    { photo: "1.webp", quote: "Excelente atendimento e qualidade nas motos!" },
    { photo: "2.webp", quote: "Minha Honda é incrível, estou muito feliz!" },
    { photo: "3.webp", quote: "A melhor escolha que fiz foi comprar aqui!" },
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
