import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import cricketField from "../../../assets/home/Rectangle 23883.png"; // your image

const CricketStorySection: React.FC = () => {
  return (
    <section className="bg-[#f3f3f3] py-14">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src={cricketField}
            alt="Cricket Field"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Why Campo de Cricket Beas De Segura Exists
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Tucked between olive groves and mountain air, a once-quiet field
            has been transformed into a destination. Campo de Cricket Beas De
            Segura is not just another pitch, it’s a place where grassroots
            cricket takes root in Spain, while offering teams and families a
            premium standard of hospitality. Built with passion, designed for
            community, and open to the world.
          </p>

          {/* ───────────────── Gradient Button ───────────────── */}
          <Link
            to="/about"
            className="group relative inline-block p-[2px] rounded-full transition-all duration-300 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #DD232A, #2252A1)",
            }}
          >
            {/* Hover Background Fill */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#DD232A] to-[#2252A1]" />
            
            <span className="relative flex items-center gap-2 px-8 py-2.5 rounded-full bg-[#f3f3f3] text-gray-800 text-sm font-bold uppercase tracking-widest group-hover:bg-transparent group-hover:text-white transition-all duration-300">
              <span className="relative z-10">Our Story</span>
              
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
          </Link>
          {/* ────────────────────────────────────────────────── */}

        </motion.div>
      </div>
    </section>
  );
};

export default CricketStorySection;