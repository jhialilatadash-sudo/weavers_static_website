"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function WeaversEvents() {
  return (
    <section className="bg-[#1C2B78] py-16">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">

        <p className="tracking-widest text-lg mb-2 text-[#DCE2FF]">
          Weavers Events
        </p>

        <h2 className="text-4xl font-bold mb-14 ">
          Discovered The Undiscovered
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-10">

          {/* LEFT CARD */}
          <motion.div
            initial={{ x: -120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ y: -8 }}
            className="group w-[280px] rounded-xl overflow-hidden shadow-xl bg-white"
          >
            <div className="relative overflow-hidden">
              <Image
                src="/hero/ev1.svg"
                alt=""
                width={600}
                height={800}
                className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* GRADIENT OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-[#1f2f7a]/90
                via-[#1f2f7a]/40
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              " />
            </div>

            <div className="py-3 text-[#1f2f7a] font-semibold text-center">
              Textile Design Conclave
            </div>
          </motion.div>

          {/* MIDDLE */}
          <div className="flex flex-col gap-6">

            {/* CARD 1 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="group w-[260px] rounded-xl overflow-hidden shadow-xl bg-white"
            >
              <div className="relative overflow-hidden">
                <Image
                  src="/hero/ev2.svg"
                  alt=""
                  width={500}
                  height={300}
                  className="w-full h-[160px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#1f2f7a]/90
                  via-[#1f2f7a]/40
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                " />
              </div>

              <div className="py-2 text-[#1f2f7a] font-semibold text-center">
                Loom Love
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              whileHover={{ y: -8 }}
              className="group w-[260px] rounded-xl overflow-hidden shadow-xl bg-white"
            >
              <div className="relative overflow-hidden">
                <Image
                  src="/hero/ev4.svg"
                  alt=""
                  width={500}
                  height={300}
                  className="w-full h-[160px] object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#1f2f7a]/90
                  via-[#1f2f7a]/40
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                  duration-500
                " />
              </div>

              <div className="py-2 text-[#1f2f7a] font-semibold text-center">
                Textile Talk
              </div>
            </motion.div>

          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ y: -8 }}
            className="group w-[280px] rounded-xl overflow-hidden shadow-xl bg-white"
          >
            <div className="relative overflow-hidden">
              <Image
                src="/hero/ev3.svg"
                alt=""
                width={600}
                height={800}
                className="w-full h-[340px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="
                absolute inset-0
                bg-gradient-to-t
                from-[#1f2f7a]/90
                via-[#1f2f7a]/40
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-500
              " />
            </div>

            <div className="py-3 text-[#1f2f7a] font-semibold text-center">
              Handloom Heritage Workshop
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
