"use client";

import { useState } from "react";
import Image from "next/image";

const initialCards = [
  {
    title: "India Handloom",
    desc: "This initiative was introduced to encourage multinational and national companies to manufacture their products.",
    img: "/hero/ini1.svg",
  },
  {
    title: "Ministry Of Textile",
    desc: "This initiative was introduced to encourage multinational and national companies to manufacture their products.",
    img: "/hero/ini2.svg",
  },
  {
    title: "Incredible India",
    desc: "This initiative was introduced to encourage multinational and national companies to manufacture their products.",
    img: "/hero/ini3.svg",
  },
  {
    title: "India Handloom",
    desc: "This initiative was introduced to encourage multinational and national companies to manufacture their products.",
    img: "/hero/ini4.svg",
  },
];

const CARD_WIDTH = 260;
const GAP = 24;
const SLIDE_DISTANCE = CARD_WIDTH + GAP;

export default function InitiativesSlider() {
  const [cards, setCards] = useState(initialCards);
  const [sliding, setSliding] = useState(false);
  const [offset, setOffset] = useState(0);

  const next = () => {
    if (sliding) return;

    setSliding(true);
    setOffset(-SLIDE_DISTANCE);

    setTimeout(() => {
      setCards((prev) => {
        const copy = [...prev];
        const first = copy.shift();
        copy.push(first);
        return copy;
      });

      setOffset(0);
      setSliding(false);
    }, 500);
  };

  const prev = () => {
    if (sliding) return;

    setSliding(true);

    setCards((prev) => {
      const copy = [...prev];
      const last = copy.pop();
      copy.unshift(last);
      return copy;
    });

    setOffset(-SLIDE_DISTANCE);

    setTimeout(() => {
      setOffset(0);
      setSliding(false);
    }, 500);
  };

  return (
    <section className="bg-[#EDF7FE] py-20 relative overflow-hidden">

      {/* ✅ RIGHT SIDE DECORATIVE IMAGE */}
    <div
  className="absolute opacity-100 pointer-events-none z-0
             right-[-400px] top-[120px]"
>
  <img
    src="/hero/back2.svg"
    alt=""
    className="w-[600px]"
  />
</div>

      {/* HEADING */}
      <p className="text-center text-blue-500 mb-3 relative z-10">
        More Development Endeavours
      </p>

      <h2 className="text-center text-4xl font-bold text-[#0F2A72] mb-16 relative z-10">
        Indian Government Initiatives
      </h2>

      {/* ARROWS */}
      <button
        onClick={prev}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-20
                   bg-blue-400 text-white w-11 h-11 rounded-full
                   flex items-center justify-center shadow"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-20
                   bg-blue-400 text-white w-11 h-11 rounded-full
                   flex items-center justify-center shadow"
      >
        ›
      </button>

      {/* VIEWPORT */}
      <div className="max-w-[1400px] mx-auto px-16 overflow-hidden relative z-10">

        {/* SLIDER ROW */}
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(${offset}px)`,
          }}
        >
          {cards.map((item, i) => (
            <div
              key={i}
              className="min-w-[260px] bg-white rounded-xl shadow-md"
            >
              {/* IMAGE */}
              <div className="h-48 flex items-center justify-center border-b">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={130}
                  height={90}
                  className="object-contain"
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">
                <h3 className="text-lg font-semibold text-[#0F2A72] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-7 mb-5">
                  {item.desc}
                </p>

                <span className="text-blue-500 text-sm font-medium cursor-pointer">
                  Read More →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
