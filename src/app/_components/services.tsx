"use client";
import { WhatsappLogo } from "@phosphor-icons/react";
import useEmblaCarousel from "embla-carousel-react";
import {
  CarTaxiFront,
  ChevronLeft,
  ChevronRight,
  Clock,
  Hotel,
  Scissors,
  Syringe,
} from "lucide-react";

const services = [
  {
    title: "Banho e Tosa",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis, itaque hic facere nesciunt illum illo voluptates",
    duration: "1h30",
    price: "$100",
    icon: <Scissors />,
    linkText: "olá, vi no site e gostaria de mais informações",
  },
  {
    title: "Vacinação do seu pet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis, itaque hic facere nesciunt illum illo voluptates",
    duration: "30 min",
    price: "$50",
    icon: <Syringe />,
    linkText: "olá, vi no site sobre e gostaria de mais informações",
  },
  {
    title: "Táxi pet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis, itaque hic facere nesciunt illum illo voluptates",
    duration: "30 min",
    price: "$50",
    icon: <CarTaxiFront />,
    linkText: "olá, vi no site sobre e gostaria de mais informações",
  },
  {
    title: "Hotel pet",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis blanditiis, itaque hic facere nesciunt illum illo voluptates",
    duration: "30 min",
    price: "$50",
    icon: <Hotel />,
    linkText: "olá, vi no site sobre e gostaria de mais informações",
  },
];

export function Services() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {services.map((item, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                >
                  <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className="flex-1 flex items-start justify-between">
                      <div className="flex gap-3">
                        <span className="text-3xl">{item.icon}</span>
                        <div>
                          <h3 className="font-bold text-xl my-1">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm select-none">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                      <a
                        href="#"
                        className="flex items-center justify-center gap-2 hover:opacity-60 duration-300"
                      >
                        <WhatsappLogo className="w-5 h-5" />
                        Entrar em contato
                      </a>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 cursor-pointer absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={scrollNext}
            className="bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 cursor-pointer absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
