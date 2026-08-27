// components/DonateSection.tsx
import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../../assets/home/Rectangle 23883.png";
import qrCode from "../../../assets/home/qrcode.png";

const DonateSection: React.FC = () => {
  return (
    <section id="donate" className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden min-h-[320px] md:min-h-[360px] flex items-center">

          {/* Background */}
          <img
            src={bgImage}
            alt="Cricket Stadium"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* Content */}
          <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10 px-6 sm:px-10 md:px-14 py-10 text-white">

            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-xl text-center lg:text-left"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-snug">
                Donate in Cricket, Culture, and Community
              </h2>

              <p className="mt-4 text-gray-200 text-sm sm:text-base leading-relaxed">
                We are raising £20,000 to complete the ground and facilities.
                Your support directly funds construction and helps bring
                international cricket to southern Spain.
              </p>

              {/* ───────────────── Gradient Button ───────────────── */}
              <button
                className="mt-6 group relative inline-block p-[2px] rounded-full transition-all duration-300 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #DD232A, #2252A1)",
                }}
              >
                {/* Full Gradient Fill on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#DD232A] to-[#2252A1]" />

                <span className="relative flex items-center gap-2 px-8 py-2.5 rounded-full bg-[#1a1a1a] text-white text-sm font-bold uppercase tracking-widest group-hover:bg-transparent transition-all duration-300">
                  <span className="relative z-10">Donate Now</span>
                  
                  <svg
                    className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
              {/* ────────────────────────────────────────────────── */}
            </motion.div>

            {/* QR Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <img
                src={qrCode}
                alt="QR Code"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-white p-2 rounded-lg shadow-2xl"
              />
              <p className="text-xs sm:text-sm mt-3 tracking-widest font-bold">
                SCAN TO DONATE
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;