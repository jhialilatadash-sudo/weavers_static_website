"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1c2f78] text-white">

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex flex-col lg:flex-row gap-12">

          {/* ================= LEFT SECTION ================= */}
          <div className="lg:w-[38%] space-y-4">

            {/* LOGO */}
            <div className="flex items-center gap-5">
              <Image
                src="/hero/logo1.svg"
                alt="Ministry of Textiles"
                width={120}
                height={120}
                className="object-contain"
              />

              <div>
                <p className="text-sm font-semibold">वस्त्र मंत्रालय</p>
                <p className="text-lg font-bold uppercase leading-tight">
                  Ministry of Textiles
                </p>
                <p className="text-sm opacity-90">
                  भारत सरकार | Govt of India
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-200 max-w-md">
              Discover the beauty of handwoven textiles. Our weavers create
              unique and exquisite pieces using traditional techniques.
              From intricate patterns to vibrant colors, each piece tells a story.
            </p>

            <Link
              href="#"
              className="text-blue-300 hover:text-white text-sm font-medium"
            >
              Read More →
            </Link>

            <div className="inline-flex items-center gap-3 bg-[#0a8cf5]
                            px-5 py-2.5 rounded-full w-fit mt-2">
              <FaPhoneAlt />
              <div>
                <p className="text-xs">Weavers Helpline</p>
                <p className="font-bold">1800111959</p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT LINKS ================= */}
          <div className="flex flex-col sm:flex-row gap-16">

            {/* Useful Links */}
            <div>
              <h4 className="text-base font-semibold mb-4 relative inline-block">
                Useful Links
                <span className="absolute left-0 -bottom-1 w-7 h-[3px] bg-cyan-400"></span>
              </h4>

              <ul className="space-y-2 text-sm text-gray-200">
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">About us</Link></li>
                <li><Link href="#">Schemes</Link></li>
                <li><Link href="#">Events</Link></li>
                <li><Link href="#">Contact</Link></li>
              </ul>
            </div>

            {/* Essentials */}
            <div>
              <h4 className="text-base font-semibold mb-4 relative inline-block">
                Essentials
                <span className="absolute left-0 -bottom-1 w-7 h-[3px] bg-cyan-400"></span>
              </h4>

              <ul className="space-y-2 text-sm text-gray-200">
                <li>Privacy Policy</li>
                <li>Disclaimer</li>
                <li>Help</li>
                <li>Terms & Conditions</li>
                <li>Accessibility Statement</li>
                <li>Copyright Policy</li>
              </ul>
            </div>

            {/* Heading */}
            <div>
              <h4 className="text-base font-semibold mb-4 relative inline-block">
                Heading
                <span className="absolute left-0 -bottom-1 w-7 h-[3px] bg-cyan-400"></span>
              </h4>

              <ul className="space-y-2 text-sm text-gray-200">
                <li>Feedback</li>
                <li>Download Forms</li>
                <li>State Profile</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className="bg-[#172763] text-center text-sm py-3 px-6 text-gray-300">
        © Copyright Content Owned, Maintained and Updated by Weavers Service Centre.
        For any query, please contact concerned departments.
        (Technical Support By Scrumin Technology Pvt. Ltd.)
      </div>

      {/* ================= DESIGN CREDIT ================= */}
      <div className="bg-[#172763] text-center text-sm py-2">
        Designed by{" "}
        <span className="text-blue-400 hover:underline cursor-pointer">
          Scrumin Technology Pvt. Ltd.
        </span>
      </div>

      {/* ================= BACK TO TOP ================= */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-orange-500 text-white
                   p-3 rounded-md shadow-lg hover:bg-orange-600"
      >
        <FaArrowUp />
      </button>

    </footer>
  );
}
