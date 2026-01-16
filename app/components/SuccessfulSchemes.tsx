"use client";

import Image from "next/image";

const schemes = [
  {
    title: "Handloom Development Institute (HDI)",
    desc: "Located in various states, HDIs offer training, technical assistance, and market access to weavers.",
    img: "/hero/sch1.svg",
  },
  {
    title: "National Institute of Fashion Technology (NIFT)",
    desc: "Located in various states, HDIs offer training, technical assistance, and market access to weavers.",
    img: "/hero/sch2.svg",
  },
  {
    title: "Export Promotion Council for Handicrafts (EPCH)",
    desc: "Located in various states, HDIs offer training, technical assistance, and market access to weavers.",
    img: "/hero/sch3.svg",
  },
  {
    title: "Indian Institute of Handloom Technology (IIHT)",
    desc: "Located in various states, HDIs offer training, technical assistance, and market access to weavers.",
    img: "/hero/sch4.svg",
  },
];

export default function SuccessfulSchemes() {
  return (
    <section className="bg-[#1f2f7a] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-white/80 mb-3 text-sm">
          Useful GOVT Schemes For Weavers
        </p>

        <h2 className="text-center text-white text-4xl font-bold mb-16">
          Successful Schemes
        </h2>

        {/* ✅ NARROW + CENTERED GRID */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5 justify-center">
          {schemes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-sm shadow-xl overflow-hidden
                         flex flex-col
                         transition-transform duration-300 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={320}
                className="w-full h-44 object-cover
                           transition-transform duration-300
                           hover:scale-105"
              />

              {/* CONTENT */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-blue-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.desc}
                </p>

                <a
                  href="#"
                  className="text-blue-600 text-sm font-medium mt-auto hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
