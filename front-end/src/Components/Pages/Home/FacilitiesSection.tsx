import React from "react";
import { motion, cubicBezier } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import outfieldImg from "../../../assets/home/outfield.png";
import netsImg from "../../../assets/home/practice-nets.png";
import poolImg from "../../../assets/home/swimming-pool.png";
import changingImg from "../../../assets/home/changing-facilities.png";

interface Facility {
  title: string;
  desc: string;
  img: string;
}

const facilities: Facility[] = [
  {
    title: "Cricket Ground",
    desc: "A professionally prepared pitch set against the Andalusian countryside.",
    img: outfieldImg,
  },
  {
    title: "Practice Nets",
    desc: "Dedicated training areas for teams and academies.",
    img: netsImg,
  },
  {
    title: "Swimming Pool",
    desc: "A place to recover, relax, and enjoy the sun.",
    img: poolImg,
  },
  {
    title: "Changing Facilities",
    desc: "Modern showers, lockers, and social spaces for players and guests.",
    img: changingImg,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: cubicBezier(0.25, 0.46, 0.45, 0.94),
    },
  },
};

const FacilitiesSection: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Cricket Facilities in a Unique Setting
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Play, train, and unwind in a destination that blends competitive
            cricket with relaxation and local charm.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-x-12 gap-y-28"
        >
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <motion.img
                  src={facility.img}
                  alt={facility.title}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-[260px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -bottom-12 left-8 right-8 bg-white rounded-xl shadow-xl p-6 flex items-center justify-between group-hover:shadow-2xl transition"
              >
                <div>
                  <h3 className="text-lg font-semibold text-blue-700">
                    {facility.title}
                  </h3>

                  <p className="text-gray-500 text-sm mt-2 max-w-xs">
                    {facility.desc}
                  </p>
                </div>

                {/* Arrow Button */}
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-lg border border-blue-200 flex items-center justify-center text-blue-600 hover:bg-blue-50 transition"
                >
                  <ArrowUpRight size={18} />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FacilitiesSection;