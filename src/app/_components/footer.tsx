import golden from "../../../public/golden.png";
import natural from "../../../public/natural.png";
import primier from "../../../public/primier.png";
import royal from "../../../public/royal.png";
import whiskas from "../../../public/whiskas.png";

import Image from "next/image";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

export function Footer() {
  return (
    <section className="bg-[#E84C3D] py-16 text-white">
      <div className="container mx-auto py-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center">
            Macas que trabalhamos
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  height={50}
                  width={100}
                  quality={100}
                  style={{ width: "auto", height: "auto" }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">Cuidando do seu melhor amigo com amor e dedicação</p>
            <a href="#" className="bg-green-500 px-4 py-2 rounded-md">
              Contato via WhatsApp
            </a>
          </div>
          div
        </footer>
      </div>
    </section>
  );
}
