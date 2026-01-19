"use client";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="bg-[#0D1852] py-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-white">

        <p className="text-lg mb-3 text-blue-200">
          Useful Online Services
        </p>

        <h2 className="text-4xl font-bold mb-16">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD */}
          <div className="bg-white text-gray-700 rounded-md shadow-xl overflow-hidden
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-[#008BF9] text-white font-semibold text-center py-3">
              Office Address
            </div>

            <div className="p-6 space-y-4 text-sm">
              <p>
                Weaving Dreams into Reality. Handcrafted with passion and
                tradition.
              </p>

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-600" />
                <p>
                  <span className="font-semibold text-[#1C2B78]">
                    Address:
                  </span>{" "}
                  <span className="text-[#666666]">
                    Plot-91, Saheed Nagar, Bhubaneswar
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white text-gray-700 rounded-md shadow-xl overflow-hidden
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-[#9773FF] text-white font-semibold text-center py-3">
              Phone Number
            </div>

            <div className="p-6 space-y-4 text-sm">
              <p>
                Weaving Dreams into Reality. Handcrafted with passion and
                tradition.
              </p>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                <p>
                  <span className="font-semibold text-[#1C2B78]">
                    Help Line:
                  </span>{" "}
                  <span className="border border-blue-400 px-3 py-1 rounded-full text-[#666666]">
                    1800 11 1959
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white text-gray-700 rounded-md shadow-xl overflow-hidden
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-[#55AC68] text-white font-semibold text-center py-3">
              Message Us
            </div>

            <div className="p-6 space-y-4 text-sm">
              <p>
                Weaving Dreams into Reality. Handcrafted with passion and
                tradition.
              </p>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <p>
                  <span className="font-semibold text-[#1C2B78]">
                    Email:
                  </span>{" "}
                  <span className="text-[#666666]">
                    email@email.com
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* CARD */}
          <div className="bg-white text-gray-700 rounded-md shadow-xl overflow-hidden
                          transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <div className="bg-[#E88060] text-white font-semibold text-center py-3">
              Feedback / Donate
            </div>

            <div className="p-6 space-y-4 text-sm">
              <p>
                Weaving Dreams into Reality. Handcrafted with passion and
                tradition.
              </p>

              <div className="flex items-center gap-3">
                <FaGlobe className="text-blue-600" />
                <p>
                  <span className="font-semibold text-[#1C2B78]">
                    Visit:
                  </span>{" "}
                  <span className="text-[#666666]">
                    www.weaversfeedback.com
                  </span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
