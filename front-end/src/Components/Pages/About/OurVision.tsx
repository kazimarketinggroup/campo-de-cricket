import { motion, useInView, easeOut } from "framer-motion";
import { useRef } from "react";
import image from "../../../assets/about/Rectangle 23900.png";

import arena from "../../../assets/about/Arena.png";
import worldCup from "../../../assets/about/World Cup.png";
import trust from "../../../assets/about/Trust.png";
import criketer from "../../../assets/about/Cricketer.png";
import pepoleWorking from "../../../assets/about/People Working Together.png";
import bibery from "../../../assets/about/Bribery.png";

const visionItems = [
  {
    title: "Credible Grassroots Venue",
    desc: "A cricket ground run with professionalism while keeping the grassroots spirit alive.",
    icon: arena,
    side: "left",
  },
  {
    title: "Four Annual Tournaments",
    desc: "Hosting competitive and social teams from across Europe throughout the year.",
    icon: worldCup,
    side: "left",
  },
  {
    title: "High-Quality Facilities",
    desc: "Pitch, nets, changing rooms, and recovery spaces designed for players' comfort and performance.",
    icon: trust,
    side: "left",
  },
  {
    title: "Cricket-Led Sports Tourism",
    desc: "A destination combining cricket with local heritage, food, and cultural experiences.",
    icon: criketer,
    side: "right",
  },
  {
    title: "Community Engagement",
    desc: "Opportunities for locals and visitors to connect, volunteer, and participate in the game.",
    icon: pepoleWorking,
    side: "right",
  },
  {
    title: "Positive Economic Impact",
    desc: "Supporting local businesses and creating sustainable livelihoods through sports tourism.",
    icon: bibery,
    side: "right",
  },
];

const leftItems = visionItems.filter((i) => i.side === "left");
const rightItems = visionItems.filter((i) => i.side === "right");

export default function OurVision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const fadeItem = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const imageAnim = {
    hidden: { opacity: 0, scale: 0.92 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={fadeItem} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Our Vision
          </h2>

          <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto">
            Our vision is to create a credible grassroots cricket venue run to
            professional standards — a place that attracts teams from across
            Europe and beyond while remaining deeply rooted in village life.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 items-center">

          {/* LEFT ITEMS */}
          <motion.div variants={container} className="flex flex-col gap-12">
            {leftItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                whileHover={{ x: 6 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50">
                  <img src={item.icon} alt="" className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CENTER IMAGE */}
          <motion.div variants={imageAnim} className="flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl">
              <img
                src={image}
                alt="Vision"
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-transparent" />

              <div className="absolute bottom-4 left-4 text-white text-xl font-bold tracking-[0.25em]">
                VISION
              </div>
            </div>
          </motion.div>

          {/* RIGHT ITEMS */}
          <motion.div variants={container} className="flex flex-col gap-12">
            {rightItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeItem}
                whileHover={{ x: -6 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-50">
                  <img src={item.icon} alt="" className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-[16px] font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}