"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">

      {/* 🔶 Top orange bar */}
      <div className="bg-orange-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span>हिंदी में | GOVT OF INDIA</span>

          <button className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-1.5 rounded font-medium">
            <i className="bi bi-person-circle text-lg"></i>
            <span>Log In</span>
          </button>
        </div>
      </div>

      {/* 🔷 Main navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LEFT SIDE */}
          <div className="flex items-center gap-4">

            <div className="leading-tight">
              <p className="text-sm font-semibold">वस्त्र मंत्रालय</p>
              <p className="text-sm font-semibold uppercase">Ministry of</p>
              <p className="text-lg font-bold uppercase">Textiles</p>
            </div>

            <div className="hidden md:block h-12 w-px bg-gray-300"></div>

            <p className="hidden md:block text-sm font-semibold text-blue-700">
              Weavers Service Centre
            </p>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
            <li className="hover:text-orange-500 cursor-pointer border-b-2 border-orange-500">
              Home
            </li>
            <li className="hover:text-orange-500 cursor-pointer">About Us</li>
            <li className="hover:text-orange-500 cursor-pointer">Schemes</li>
            <li className="hover:text-orange-500 cursor-pointer">Events</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>

          {/* 🍔 BURGER BUTTON (MOBILE) */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* 📱 MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 font-medium text-gray-700">
            <p className="border-b pb-2">Home</p>
            <p className="border-b pb-2">About Us</p>
            <p className="border-b pb-2">Schemes</p>
            <p className="border-b pb-2">Events</p>
            <p>Contact</p>
          </div>
        )}
      </nav>
    </header>
  );
}
