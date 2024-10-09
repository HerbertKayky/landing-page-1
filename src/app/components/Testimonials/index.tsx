// Testimonials.js

import SwiperComponent from "../SwiperComponent";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-3xl font-bold">Clientes Satisfeitos</h3>
          <p className="mt-4 text-lg">
            Veja alguns dos clientes felizes que conquistaram sua tão sonhada
            Honda 0KM
          </p>
        </div>
        <SwiperComponent />
      </div>
    </section>
  );
}
