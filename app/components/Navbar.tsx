"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">

      {/* 🔶 TOP BAR */}
      <div className="bg-orange-500 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <span>हिंदी में | GOVT OF INDIA</span>

          <button className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-1.5 rounded font-medium">
            Log In
          </button>
        </div>
      </div>

      {/* 🔷 NAVBAR */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LEFT LOGO AREA */}
          <div className="flex items-center gap-4">
            <div className="leading-tight">
              <p className="text-sm font-semibold">वस्त्र मंत्रालय</p>
              <p className="text-sm font-semibold uppercase">
                Ministry of
              </p>
              <p className="text-lg font-bold uppercase">
                Textiles
              </p>
            </div>

            <div className="hidden md:block h-12 w-px bg-gray-300"></div>

            <p className="hidden md:block text-sm font-semibold text-blue-700">
              Weavers Service Centre
            </p>
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium">

            <li>
              <Link
                href="/"
                className="hover:text-orange-500 border-b-2 border-orange-500"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/about"
                className="hover:text-orange-500"
              >
                About Us
              </Link>
            </li>

            <li>
              <Link
                href="/schemes"
                className="hover:text-orange-500"
              >
                Schemes
              </Link>
            </li>

            <li>
              <Link
                href="/events"
                className="hover:text-orange-500"
              >
                Events
              </Link>
            </li>

            <li>
              <Link
                href="/contact"
                className="hover:text-orange-500"
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* 🍔 MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* 📱 MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-white border-t px-6 py-4 space-y-4 font-medium text-gray-700">

            <Link href="/" onClick={() => setOpen(false)}>
              <p className="border-b pb-2">Home</p>
            </Link>

            <Link href="/about" onClick={() => setOpen(false)}>
              <p className="border-b pb-2">About Us</p>
            </Link>

            <Link href="/schemes" onClick={() => setOpen(false)}>
              <p className="border-b pb-2">Schemes</p>
            </Link>

            <Link href="/events" onClick={() => setOpen(false)}>
              <p className="border-b pb-2">Events</p>
            </Link>

            <Link href="/contact" onClick={() => setOpen(false)}>
              <p>Contact</p>
            </Link>

          </div>
        )}
      </nav>
    </header>
  );
}
