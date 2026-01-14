"use client";

import Image from "next/image";

const people = [
  {
    name: "Shri Name Name",
    position: "Position",
    about: "Anything About",
    image: "/hero/prof.jpg.svg",
  },
  {
    name: "Shri Name Name",
    position: "Position",
    about: "Anything About",
    image: "/hero/prof.jpg.svg",
  },
  {
    name: "Shri Name Name",
    position: "Position",
    about: "Anything About",
    image: "/hero/prof.jpg.svg",
  },
];

export default function HeadOfState() {
  return (
    <section className="bg-[#1E2F78] py-16 px-5">
      {/* Heading */}
      <div className="text-center text-white mb-16">
        <p className="text-lg opacity-80">Weavers Service Centers</p>
        <h2 className="text-4xl font-bold mt-2">Head Of State</h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* LEFT CARDS */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-3">
          {people.map((person, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-xl overflow-hidden"
            >
              {/* BLUE FRAME */}
              <div className="relative h-72 bg-[#4FACFE]">
                {/* IMAGE (INSET → FULL ON HOVER) */}
                <div className="group absolute inset-0">
                  <div
                    className="
                      absolute
                      inset-6
                      rounded-lg
                      overflow-hidden
                      transition-all
                      duration-700
                      ease-in-out
                      group-hover:inset-0
                    "
                  >
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* TEXT */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#1E2F78]">
                  {person.name}
                </h3>

                <p className="text-blue-600 mt-1 text-sm">
                  {person.position}
                </p>

                <p className="text-gray-600 mt-4 text-sm">
                  {person.about}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE PANEL */}
        <div className="space-y-6">
          {/* WHO */}
          <div className="bg-white rounded shadow overflow-hidden">
            <h4 className="bg-orange-500 text-white px-4 py-3 font-semibold">
              Who
            </h4>
            <ul className="p-4 space-y-3 text-gray-700">
              <li>Mission & Vision</li>
              <li>Who is Who</li>
              <li>Organisational Chart</li>
            </ul>
          </div>

          {/* ANYTHING ELSE */}
          <div className="bg-white rounded shadow overflow-hidden">
            <h4 className="bg-blue-500 text-white px-4 py-3 font-semibold">
              Anything Else
            </h4>
            <ul className="p-4 space-y-3 text-gray-700">
              <li>Any Person</li>
              <li>Any Person</li>
              <li>Any Person</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
