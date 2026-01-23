"use client";

import Image from "next/image";
import Link from "next/link";

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

            {/* DESCRIPTION */}
            <p className="text-sm leading-relaxed text-gray-200 max-w-md">
              Discover the beauty of handwoven textiles. Our weavers create
              unique and exquisite pieces using traditional techniques.
              From intricate patterns to vibrant colors, each piece tells a story.
            </p>

            {/* READ MORE */}
            <Link
              href="#"
              className="inline-block text-blue-300 hover:text-white
                         text-sm font-medium"
            >
              Read More →
            </Link>

            {/* ================= HELPLINE BUTTON ================= */}
            <div className="mt-4">

              <div className="relative inline-flex items-center">

                {/* WHITE CIRCLE ICON */}
                <div
                  className="absolute -left-5 flex items-center justify-center
                             w-11 h-11 rounded-full bg-white shadow-md"
                >
                  <i className="bi bi-telephone-outbound-fill text-[#0a8cf5] text-lg"></i>
                </div>

                {/* BLUE BUTTON */}
                <div
                  className="flex items-center
                             bg-[#007bff] text-white
                             pl-10 pr-6 py-2
                             rounded-full font-medium"
                >
                  <div className="leading-tight">
                    <p className="text-xs">Weavers Helpline</p>
                    <p className="text-md font-bold">1800111959</p>
                  </div>
                </div>

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

    </footer>
  );
}
