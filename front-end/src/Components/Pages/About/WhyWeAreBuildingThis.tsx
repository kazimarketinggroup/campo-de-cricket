import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import image from "../../../assets/about/Rectangle 23883.png";

export default function WhyWeAreBuildingThis() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.92, x: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-14 lg:gap-20"
      >
        {/* Text Content */}
        <div>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6"
          >
            Why We're Building This
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-[15px] leading-relaxed max-w-lg"
          >
            Cricket has always been about more than runs and wickets — it's
            about people, belonging, and shared moments. Campo de Cricket Beas
            De Segura was born from a belief that grassroots cricket deserves
            the same care, respect, and welcome as the world's best venues. By
            combining the spirit of community cricket with the warmth of Spanish
            hospitality, this project brings the game to a place where culture,
            landscape, and people matter.
          </motion.p>
        </div>

        {/* Image */}
        <motion.div variants={imageVariants} className="w-full">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
            <motion.img
              src={image}
              alt="Cricket stadium"
              className="w-full h-[260px] md:h-[340px] lg:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}