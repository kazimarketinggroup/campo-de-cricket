import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

/* images */
import springImg from "../../../assets/home/spring.png";
import autumnImg from "../../../assets/home/autumn.png";
import { Link } from "react-router-dom";

type TabType = "upcoming" | "live" | "past";

interface Tournament {
  title: string;
  date: string;
  location: string;
  start: string;
  image: string;
}

const tournamentData: Record<TabType, Tournament[]> = {
  upcoming: [
    {
      title: "Spring Challenge",
      date: "Expected Dates: 12–15 April, 2026",
      location: "Beas De Segura, Spain",
      start: "Starts in 18 days",
      image: springImg,
    },
    {
      title: "Autumn Cup",
      date: "Expected Dates: 6–9 September, 2026",
      location: "Beas De Segura, Spain",
      start: "Starts in 96 days",
      image: autumnImg,
    },
  ],
  live: [
    {
      title: "Summer League",
      date: "Running: 10–14 July, 2026",
      location: "Beas De Segura, Spain",
      start: "Live Now",
      image: springImg,
    },
  ],
  past: [
    {
      title: "Winter Trophy",
      date: "Played: 2–5 January, 2026",
      location: "Beas De Segura, Spain",
      start: "Completed",
      image: autumnImg,
    },
  ],
};

const TournamentsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("upcoming");

  // Reusable Gradient Border Style
  const gradientBorderStyle = {
    backgroundImage: 'linear-gradient(#f6f6f6, #f6f6f6), linear-gradient(to right, #DD232A, #2252A1)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  };

  return (
    <section className="w-full bg-[#f6f6f6] py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Tournaments at Campo de Cricket
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Play, train, and unwind in a destination that blends competitive
            cricket with relaxation and local charm.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-14">
          {(["upcoming", "live", "past"] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={activeTab !== tab ? gradientBorderStyle : { background: 'linear-gradient(to right, #DD232A, #2252A1)' }}
              className={`px-8 py-2 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 border-2 border-transparent ${
                activeTab === tab ? "text-white shadow-lg" : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {tournamentData[activeTab].map((tournament, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl shadow-md p-5 flex gap-5 items-center"
              >
                <div className="w-[140px] h-[110px] rounded-xl overflow-hidden flex-shrink-0">
                  <img
                    src={tournament.image}
                    alt={tournament.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {tournament.title}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                    <Calendar size={16} />
                    {tournament.date}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm mt-1">
                    <MapPin size={16} />
                    {tournament.location}
                  </div>
                  <p className="text-gray-500 text-sm mt-2 font-medium">
                    {tournament.start}
                  </p>
                  <button className="mt-3 text-blue-700 text-sm font-bold flex items-center gap-1 hover:text-red-600 transition-colors uppercase tracking-tight">
                    Register Your Team <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom Explore Button */}
        <div className="flex justify-center mt-14">
        <Link to="/tournaments">  <button
            style={gradientBorderStyle}
            className="group relative inline-block p-[2px] rounded-full transition-all duration-300 overflow-hidden border-2 border-transparent"
          >
            {/* Hover Background Fill */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#DD232A] to-[#2252A1]" />
            
            <span className="relative flex items-center gap-2 px-8 py-2.5 rounded-full bg-[#f6f6f6] text-gray-700 text-sm font-bold uppercase tracking-widest group-hover:bg-transparent group-hover:text-white transition-all duration-300">
              <span className="relative z-10">Explore Tournaments</span>
              <ArrowUpRight size={18} className="relative z-10 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </button></Link>
        </div>
      </div>
    </section>
  );
};

export default TournamentsSection;