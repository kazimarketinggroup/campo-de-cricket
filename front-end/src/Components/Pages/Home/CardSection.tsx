import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react"; // Install lucide-react or use a simple SVG
import { Link } from "react-router-dom";

// Mocking icons - replace these with your actual SVG components or image paths
const cards = [
  {
    id: "01",
    title: "For Players",
    description:
      "A welcoming venue with proper nets, player facilities, and a pool to unwind, grassroots spirit with professional care.",
    icon: "🏏",
    accent: "bg-red-500",
    bgImage: "../../../assets/home/card1 (1).png",
  },
  {
    id: "02",
    title: "For The Village",
    description:
      "New livelihoods through sports tourism, authentic stays, food, and culture that benefit locals.",
    icon: "🏘️",
    accent: "bg-green-500",
    bgImage: "../../../assets/home/card1 (2).png",
  },
  {
    id: "03",
    title: "For Supporters",
    description:
      "Your donation turns vision into wickets, nets, and memories. You’re not just funding a ground, you’re shaping a legacy.",
    icon: "🏟️",
    accent: "bg-blue-600",
    bgImage: "../../../assets/home/card1 (3).png",
  },
  {
    id: "04",
    title: "For Culture",
    description:
      "We respect and celebrate the heritage of Beas De Segura, welcoming visiting teams into local traditions & everyday village life.",
    icon: "🏁",
    accent: "bg-gray-800",
    bgImage: "../../../assets/home/card1 (4).png",
  },
];

const CardSection: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-10">
          <div className="flex-1">
            <h2 className="text-[42px] font-medium leading-[1.1] text-gray-900">
              Why bring cricket to <br /> Beas de segura
            </h2>
          </div>

          <div className="flex-1 flex flex-col items-end">
            <p className="text-[#4b5563] text-sm leading-relaxed max-w-lg mb-6 text-right">
              Cricket has always been about more than runs and wickets, it's
              about people. In Beas De Segura, the game is bringing together two
              worlds: the grassroots love of cricket and the premium welcome of
              Andalusian culture.
            </p>
            <Link to="/about">
              <button
                className="group relative inline-block p-[2px] rounded-full transition-all duration-300 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #DD232A, #2252A1)",
                }}
              >
                {/* Hover Background Fill */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#DD232A] to-[#2252A1]" />

              <span className="relative flex items-center gap-3 px-6 py-2 rounded-full bg-white text-gray-700 text-sm font-bold uppercase tracking-widest group-hover:bg-transparent group-hover:text-white transition-all duration-300">
                <span className="relative z-10">Learn More</span>

                {/* The Red Icon Circle */}
                <span className="relative z-10 flex items-center justify-center w-6 h-6 bg-[#DD232A] text-white rounded-full transition-colors duration-300 group-hover:bg-white group-hover:text-[#DD232A]">
                  <ArrowRight size={14} strokeWidth={3} />
                </span>
              </span>
            </button></Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative min-h-[320px] rounded-xl overflow-hidden shadow-sm border border-gray-100 group"
              style={{
                backgroundImage: `url(${card.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* The "Color Splash" in top right corner */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 blur-3xl opacity-40 -mr-10 -mt-10 ${card.accent}`}
              />

              <div className="relative z-10 p-8 flex flex-col h-full">
                {/* ID Number */}
                <span className="text-gray-500 font-medium text-sm mb-12">
                  {card.id}
                </span>

                {/* Icon Area */}
                <div className="mb-6 text-4xl">
                  {/* If using images: <img src={card.icon} alt="" className="w-12 h-12" /> */}
                  {card.icon}
                </div>

                {/* Text Content */}
                <div className="mt-auto">
                  <h3 className="text-[22px] font-semibold text-gray-900 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-[13px] leading-[1.6] text-gray-600 font-normal">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Subtle background image overlay like in your screenshot */}
              <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none grayscale"
                style={{
                  backgroundImage: `url('/path-to-your-cricket-pattern.png')`,
                  backgroundSize: "cover",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
