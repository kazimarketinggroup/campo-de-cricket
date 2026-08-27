import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    number: "01",
    title: "Community-Led & Authentic",
    description:
      "A grassroots project rooted in real village life.",
  },
  {
    number: "02",
    title: "Growing International Reach",
    description:
      "Regular tournaments attracting teams from across Europe.",
  },
  {
    number: "03",
    title: "Culture-Driven Tourism",
    description:
      "A genuine blend of sport, local culture, and travel.",
  },
  {
    number: "04",
    title: "Built for the Long Term",
    description:
      "Sustainable development with lasting impact, not one-off exposure.",
  },
];

const WhyPartner: React.FC = () => {
  return (
    <section className="py-20 bg-[#f6f7f9] px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-800 mb-4"
        >
          Why Partner With Us
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed mb-16"
        >
          Our partnerships are rooted in shared values. We work with
          organisations and individuals who believe in authentic experiences,
          sustainable development, and the power of sport to bring people
          together.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">

          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >

              {/* Number Box */}
              <div className="w-12 h-12 flex items-center justify-center bg-white shadow-md rounded-md text-[#2b5a9e] font-semibold mb-5 group-hover:scale-110 transition">
                {item.number}
              </div>

              {/* Title */}
              <h3 className="text-gray-800 font-semibold mb-2 text-lg leading-snug">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.description}
              </p>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default WhyPartner;