import Image from "next/image";

import { Check, MapPin } from "lucide-react";
import about1 from "../../../public/about-1.png";
import about2 from "../../../public/about-2.png";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1}
                alt="foto do cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>
            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 overflow-hidden border-white">
              <Image
                src={about2}
                alt="foto do gato"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
              repellendus cupiditate eum consequuntur, repellat aperiam ducimus
              dolorem quidem temporibus voluptatum asperiores? Dolor
              necessitatibus optio debitis error vel eius deserunt at.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Aberto desde 2022.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com mais de 10 veterinarios.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade.
              </li>
              <a
                href="#"
                className="flex items-center gap-2 cursor-pointer hover:opacity-65 duration-300"
              >
                <MapPin className="text-red-500" />
                Endereço da loja.
              </a>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
