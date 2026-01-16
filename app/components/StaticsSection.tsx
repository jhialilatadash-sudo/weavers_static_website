"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const menuItems = [
  "Overview",
  "Demography",
  "Divisions",
  "Districts",
  "Cluster",
  "Block",
  "Gram Panchayat",
  "Villages",
];

const contentData: Record<string, string> = {
  Overview:
    "The Government of India has implemented numerous schemes to support weavers and the handloom industry. These schemes provide financial assistance, infrastructure development, training, and market access to weavers. Some of the key initiatives include the National Handloom Development Programme (NHDP), India Handloom Brand Scheme, and the Handloom Export Promotion Council (HEPC). Additionally, there are regional-specific schemes, financial assistance programs, and skill development initiatives to cater to the diverse needs of weavers across the country. Weavers can benefit from these schemes by accessing grants, loans, training programs, and marketing support.",
  Demography:
    "Demography includes population distribution, age groups, literacy rate, gender ratio, and growth trends across the state.",
  Divisions:
    "Administrative divisions help in governance and planning by dividing the state into manageable regions.",
  Districts:
    "District-level statistics include population, resources, and development indicators.",
  Cluster:
    "Clusters represent focused regions of economic or administrative importance.",
  Block:
    "Blocks are sub-district administrative units responsible for development.",
  "Gram Panchayat":
    "Gram Panchayats form the backbone of rural local governance.",
  Villages:
    "Village-level data includes households, population, and infrastructure.",
};

export default function StatisticsSection() {
  const [active, setActive] = useState("Overview");

  return (
    <section className="bg-[#eef7fb] py-8">
      {/* TOP HEADING */}
      <div className="text-center mb-8 px-3">
        <p className="text-[#008BF9] text-xs font-medium tracking-wide uppercase">
          Explore The State
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1C2B78] mt-1">
          Statistics Format
        </h2>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex justify-center px-3">
        <div className="w-full max-w-7xl flex flex-col md:flex-row gap-4">
          
          {/* LEFT MENU CARD */}
          <div className="w-full md:w-[18%] bg-white border rounded-md overflow-hidden min-h-[450px]">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`w-full text-left px-3 py-2 border-b text-[14px] transition
                  ${
                    active === item
                      ? "bg-[#1C6ED5] text-white font-medium"
                      : "text-slate-700 hover:bg-blue-50"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT CARD */}
          <div className="w-full md:w-[82%] bg-white border rounded-md min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col md:flex-row gap-6 p-4 md:p-5 h-full"
              >
                {/* TEXT */}
                <div className="w-full md:w-[58%]">
                  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#0b2c6d] mb-2">
                    {active}
                  </h3>

                  <p className="text-slate-700 text-[15px] leading-[1.7] text-justify">
                    {contentData[active]}
                  </p>

                  <a
                    href="#"
                    className="inline-block mt-4 text-[#0b5ed7] font-medium text-[14px] hover:underline"
                  >
                    Read More →
                  </a>
                </div>

                {/* IMAGE */}
                <div className="w-full md:w-[42%] flex items-center">
                  <div className="relative w-full h-[260px] md:h-[320px]">
                    <Image
                      src="/hero/map.svg"
                      alt="Odisha Map"
                      fill
                      priority
                      className="object-cover rounded-sm"
                    />
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
