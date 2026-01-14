"use client";

import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    image: "/hero/hero1.jpg",
    title: "Weavers Festival 2024",
    subtitle: "Discover an unparalleled journey",
    button: "Explore →",
  },
  {
    image: "/hero/hero1.jpg", // SAME IMAGE
    title: "Join Our Community",
    subtitle:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    button: "Contact Us",
  },
  {
    image: "/hero/hero3.jpg", // SAME IMAGE AGAIN
    title: "Discover our service",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    button: "Our Services",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // Right arrow → next slide
  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  // Left arrow → previous slide
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative h-[70vh] w-full overflow-hidden">

      {/* SLIDER */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative min-w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              sizes="100vw"
              className="object-cover"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-20 text-white text-4xl bg-black/40 hover:bg-black/60 p-3 rounded-full"
      >
        ‹
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-20 text-white text-4xl bg-black/40 hover:bg-black/60 p-3 rounded-full"
      >
        ›
      </button>

      {/* TEXT CONTENT (CHANGES PER SLIDE) */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6 text-white max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#D3CAFF]">
          {slides[index].title}
        </h1>

        <p className="text-lg mb-6 max-w-2xl">
          {slides[index].subtitle}
        </p>

        <button className="bg-blue-600 px-6 py-3 rounded font-semibold hover:bg-blue-700 transition">
          {slides[index].button}
        </button>
      </div>

    </section>
  );
}
