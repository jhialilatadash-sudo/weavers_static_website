"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  /* ================= LIVE TIME ================= */
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const date = now.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setTime(`${date} | ${time}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  /* ================= SCROLL ================= */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="w-full">

        {/* ================= TOP BAR ================= */}
        {!scrolled && (
          <div className="bg-[#FF6600] text-white text-sm">
            <div className="max-w-7xl mx-auto px-4 md:px-10 py-2 flex justify-between items-center">

              {/* LEFT TEXT + TIME */}
              <div className="flex items-center gap-4 font-medium">
                <span>हिंदी में | GOVT OF INDIA</span>
                <span className="opacity-90">{time}</span>
              </div>

              {/* LOGIN */}
              <button className="bg-yellow-400 text-black px-4 py-1 rounded flex items-center font-medium">
                <i className="bi bi-person-circle me-3 text-lg"></i>
                Log In
              </button>
            </div>
          </div>
        )}

        {/* ================= NAVBAR ================= */}
        <nav
          className={`bg-white fixed left-0 w-full z-50 shadow transition-all duration-300 ${
            scrolled ? "top-0" : "top-[40px]"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-10 py-6 flex justify-between items-center">

            {/* ================= LEFT LOGOS ================= */}
            <div className="flex items-center gap-3">

              <img
                src="/hero/finalleft.svg"
                alt="Ministry of Textiles"
                className="h-14 md:h-16 w-auto object-contain"
              />

              <div className="h-8 md:h-9 w-[1px] bg-gray-300" />

              <img
                src="/hero/leftfinal2.svg"
                alt="Weavers Service Centre"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </div>

            {/* ================= DESKTOP MENU ================= */}
            <ul className="hidden md:flex gap-10 font-medium text-gray-700">
              <li className="text-orange-600 border-b-2 border-orange-600 pb-1">
                <Link href="#home">Home</Link>
              </li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#schemes">Schemes</Link></li>
              <li><Link href="#events">Events</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setOpen(true)}
            >
              ☰
            </button>
          </div>
        </nav>

        {/* SPACER */}
        <div className="h-[95px]" />
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 h-full w-full bg-[#ff884d] z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-between items-center px-6 py-5 text-white">
          <span className="font-semibold">Menu</span>
          <button className="text-3xl" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>

        <div className="flex flex-col mt-6 text-white text-lg font-medium space-y-6 px-6">
          <Link href="#home" onClick={() => setOpen(false)}>Home</Link>
          <Link href="#about" onClick={() => setOpen(false)}>About Us</Link>
          <Link href="#schemes" onClick={() => setOpen(false)}>Schemes</Link>
          <Link href="#events" onClick={() => setOpen(false)}>Events</Link>
          <Link href="#contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      </div>
    </>
  );
}
