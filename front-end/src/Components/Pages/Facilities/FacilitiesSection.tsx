import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import cricketBg1 from "../../../assets/facilities/Frame 14177.png";
import netsBg from "../../../assets/facilities/Image area.png";
import canopyBg from "../../../assets/facilities/Image area (1).png";
import foodBg from "../../../assets/facilities/Image area (2).png";
import culturalBg from "../../../assets/facilities/Image area (3).png";

import teamImg from "../../../assets/facilities/Frame 14179.png";
import stadiumImg from "../../../assets/facilities/Frame 14177.png";
import { Link } from "react-router-dom";

const facilitiesData = [
  {
    id: "Cricket Ground",
    title: "The Cricket Ground",
    description:
      "Our cricket ground sits at the heart of the project — a natural playing surface shaped by care, patience, and respect for the game. Designed for competitive fixtures and tournament play, the ground offers a true cricketing experience in an environment few players ever forget. Surrounded by open countryside and mountain views, matches here feel both intimate and special. This is grassroots cricket, prepared to professional standards, where every run scored contributes not just to the game — but to the growth of the local community.",
    mainImg: cricketBg1,
    sideImages: [teamImg, stadiumImg],
    imageLeft: false,
  },
  {
    id: "Training Nets",
    title: "Training Nets",
    description:
      "Our cricket ground sits at the heart of the project — a natural playing surface shaped by care, patience, and respect for the game. Designed for competitive fixtures and tournament play, the ground offers a true cricketing experience in an environment few players ever forget. Surrounded by open countryside and mountain views, matches here feel both intimate and special. This is grassroots cricket, prepared to professional standards, where every run scored contributes not just to the game — but to the growth of the local community.",
    mainImg: netsBg,
    imageLeft: true,
  },
  {
    id: "Canopy Tents & Spectator Areas",
    title: "Canopy Tents & Spectator Areas",
    description:
      "Our cricket ground sits at the heart of the project — a natural playing surface shaped by care, patience, and respect for the game. Designed for competitive fixtures and tournament play, the ground offers a true cricketing experience in an environment few players ever forget. Surrounded by open countryside and mountain views, matches here feel both intimate and special. This is grassroots cricket, prepared to professional standards, where every run scored contributes not just to the game — but to the growth of the local community.",
    mainImg: canopyBg,
    imageLeft: false,
  },
  {
    id: "Food & Canteen Facilities",
    title: "Food & Canteen Facilities",
    description:
      "Our cricket ground sits at the heart of the project — a natural playing surface shaped by care, patience, and respect for the game. Designed for competitive fixtures and tournament play, the ground offers a true cricketing experience in an environment few players ever forget. Surrounded by open countryside and mountain views, matches here feel both intimate and special. This is grassroots cricket, prepared to professional standards, where every run scored contributes not just to the game — but to the growth of the local community.",
    mainImg: foodBg,
    imageLeft: true,
  },
  {
    id: "Cultural Accommodation",
    title: "Cultural Accommodation",
    description:
      "Our cricket ground sits at the heart of the project — a natural playing surface shaped by care, patience, and respect for the game. Designed for competitive fixtures and tournament play, the ground offers a true cricketing experience in an environment few players ever forget. Surrounded by open countryside and mountain views, matches here feel both intimate and special. This is grassroots cricket, prepared to professional standards, where every run scored contributes not just to the game — but to the growth of the local community.",
    mainImg: culturalBg,
    imageLeft: false,
  },
];

const FacilitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(facilitiesData[0].id);

  const activeContent = facilitiesData.find((tab) => tab.id === activeTab)!;

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
          Our Facilities
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {facilitiesData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#2b5a9e] text-white border-[#2b5a9e]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#2b5a9e]"
              }`}
            >
              {tab.id}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45 }}
            className={`flex flex-col ${
              activeContent.imageLeft ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-10`}
          >
            {/* Text */}
            <div className="flex-1 space-y-5">
              <h3 className="text-3xl md:text-4xl font-semibold text-gray-800">
                {activeContent.title}
              </h3>

              <p className="text-gray-500 text-[15px] leading-relaxed max-w-lg">
                {activeContent.description}
              </p>

              {/* ───────────────── Branded Learn More Button ───────────────── */}
<Link to="/about"><button
  className="group mt-3 relative inline-block p-[2px] rounded-full transition-all duration-300 overflow-hidden"
  style={{
    background: "linear-gradient(135deg, #DD232A, #2252A1)",
  }}
>
  {/* Hover Background Fill Layer */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#DD232A] to-[#2252A1]" />

  <span className="relative flex items-center gap-3 px-6 py-2 rounded-full bg-white text-gray-700 text-sm font-bold uppercase tracking-widest group-hover:bg-transparent group-hover:text-white transition-all duration-300">
    <span className="relative z-10">Learn More</span>

    {/* The Red Icon Circle - Inverts on hover */}
    <span className="relative z-10 flex items-center justify-center w-6 h-6 bg-[#DD232A] text-white rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-[#DD232A]">
      <ArrowRight size={14} strokeWidth={3} />
    </span>
  </span>
</button></Link>
{/* ────────────────────────────────────────────────────────── */}
            </div>

            {/* Images */}
            <div className="flex-1 w-full">

              {activeTab === "Cricket Ground" ? (
                <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[420px]">
                  <div className="row-span-2 overflow-hidden rounded-2xl shadow-lg">
                    <img
                      src={activeContent.mainImg}
                      alt=""
                      className="w-full h-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={activeContent.sideImages?.[0]}
                      alt=""
                      className="w-full h-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>

                  <div className="overflow-hidden rounded-2xl shadow-md">
                    <img
                      src={activeContent.sideImages?.[1]}
                      alt=""
                      className="w-full h-full object-cover transition duration-700 hover:scale-105"
                    />
                  </div>
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl shadow-xl h-[420px]">
                  <img
                    src={activeContent.mainImg}
                    alt={activeContent.title}
                    className="w-full h-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
              )}

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FacilitiesSection;