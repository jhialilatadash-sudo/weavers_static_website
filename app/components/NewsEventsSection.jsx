"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const spotlightImages = [
  "/hero/newsimg1.svg",
  "/hero/newsimg2.svg",
];

const announcementImages = [
  "/hero/newsimg1.svg",
  "/hero/newsimg2.svg",
];

export default function NewsEventsSection() {
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [announcementIndex, setAnnouncementIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotlightIndex((p) =>
        p === spotlightImages.length - 1 ? 0 : p + 1
      );
      setAnnouncementIndex((p) =>
        p === announcementImages.length - 1 ? 0 : p + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#eef7fb] py-20">
      {/* ✅ MOBILE FULL WIDTH — DESKTOP EXTRA LEFT SPACE */}
      <div className="max-w-7xl mx-auto px-4 lg:pl-24 lg:pr-6">

        {/* HEADING */}
        <div className="text-center mb-14">
          <p className="text-[#008BF9] mb-2">
            Spotlights & Announcements
          </p>
          <h2 className="text-3xl font-bold text-[#1C2B78]">
            Weavers News and Events
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_0.95fr_0.45fr] gap-5 items-stretch">

          {/* ================= SPOTLIGHT ================= */}
          <div className="flex flex-col h-full">
            <div className="bg-[#1c2b78] text-white text-center py-2 font-semibold">
              Spotlight
            </div>

            {/* IMAGE */}
            <div className="bg-white p-3">
              <div className="relative h-[230px] overflow-hidden rounded-sm">
                <div
                  className="flex h-full transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: `translateX(-${spotlightIndex * 100}%)`,
                  }}
                >
                  {spotlightImages.map((img, i) => (
                    <div key={i} className="min-w-full relative h-full">
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="bg-white shadow-xl flex flex-col flex-1">
              <ul className="p-6 text-sm space-y-2 list-disc list-inside">
                {[
                  "National Handloom Development Programme (NHDP)",
                  "Notification",
                  "India Handloom Brand Scheme",
                  "National Handloom Weavers' Welfare Fund",
                  "Handloom Export Promotion Council (HEPC)",
                  "Guidelines for uploading accessible documents",
                  "Pradhan Mantri Jan Dhan Yojana (PMJDY)",
                  "Skill India Mission",
                  "National Food Security Act (NFSA)",
                  "National Handicrafts Development Corporation (NHDC)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 cursor-pointer transition hover:text-orange-500 hover:animate-pulse"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="px-6 pb-5 text-blue-600 font-medium mt-auto">
                View More →
              </div>
            </div>
          </div>

          {/* ================= ANNOUNCEMENT ================= */}
          <div className="flex flex-col h-full">
            <div className="bg-[#1c2b78] text-white text-center py-2 font-semibold">
              Announcement
            </div>

            <div className="bg-white p-3">
              <div className="relative h-[230px] overflow-hidden rounded-sm">
                <div
                  className="flex h-full transition-transform duration-1000 ease-in-out"
                  style={{
                    transform: `translateX(-${announcementIndex * 100}%)`,
                  }}
                >
                  {announcementImages.map((img, i) => (
                    <div key={i} className="min-w-full relative h-full">
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white shadow-xl flex flex-col flex-1">
              <ul className="p-6 text-sm space-y-2 list-disc list-inside">
                {[
                  "National Handloom Development Programme (NHDP)",
                  "Notification",
                  "India Handloom Brand Scheme",
                  "National Handloom Weavers' Welfare Fund",
                  "Handloom Export Promotion Council (HEPC)",
                  "Guidelines for uploading accessible documents",
                  "Skill India Mission",
                  "National Food Security Act (NFSA)",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-gray-700 cursor-pointer transition hover:text-orange-500 hover:animate-pulse"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <div className="px-6 pb-5 text-blue-600 font-medium mt-auto">
                View More →
              </div>
            </div>
          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="space-y-6 self-start">

            <div className="bg-white shadow-md">
              <div className="bg-[#0a8cf5] text-white px-4 py-2 font-semibold">
                Central Government Websites
              </div>
              <ul className="p-5 text-sm space-y-2 list-disc list-inside text-gray-700">
                <li>Departments</li>
                <li>Directorates</li>
                <li>Organisations & Board Lists</li>
                <li>Weave The Future</li>
                <li>Tenders</li>
                <li>Weaver Support Center</li>
                <li>Handloom Development Center</li>
                <li>Other Links</li>
             
              </ul>
            </div>

            <div className="bg-white shadow-md">
              <div className="bg-[#9b7cff] text-white px-4 py-2 font-semibold">
                Documents for citizens
              </div>
              <ul className="p-5 text-sm space-y-2 list-disc list-inside text-gray-700">
                <li>Government Orders</li>
                <li>Loom Life</li>
                <li>Handloom Heaven</li>
              </ul>
            </div>

            <div className="bg-white shadow-md">
              <div className="bg-[#ea825f] text-white px-4 py-2 font-semibold">
                Citizen Charter
              </div>
              <ul className="p-5 text-sm space-y-2 list-disc list-inside text-gray-700">
                <li>Police Department</li>
                <li>Directorate of Silk</li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
