import React from "react";
import { motion } from "framer-motion";
import facilityLandscape from "../../../assets/facilities/Rectangle 117.png";

const purposeCards = [
  {
    title: "Respect for the Game",
    description:
      "Facilities are built to honour cricket's traditions, ensuring fair play, care, and authenticity at every level.",
    bgColor: "bg-[#D9E1EC]",
    titleColor: "text-gray-900",
  },
  {
    title: "Rooted in Local Culture",
    description:
      "Design and development reflect the character of Beas De Segura, celebrating village life and cultural heritage.",
    bgColor: "bg-[#E9EFF6]",
    titleColor: "text-gray-800",
  },
  {
    title: "Grassroots Spirit, Premium Care",
    description:
      "A thoughtful balance between simple beginnings and high-quality standards, improved season by season through community support.",
    bgColor: "bg-[#F3F7FA]",
    titleColor: "text-gray-800",
  },
];

const BuiltWithPurpose: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#444] tracking-tight">
            Built With Purpose
          </h2>

          <p className="text-gray-500 text-[15px] max-w-xl mx-auto leading-relaxed">
            As the ground grows, so will the facilities — shaped by community,
            supported by donors, and improved season by season.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Cards */}
          <div className="space-y-3">
            {purposeCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`${card.bgColor} p-6 rounded-xl hover:scale-[1.02] transition-transform`}
              >
                <h3 className={`text-lg font-semibold ${card.titleColor} mb-2`}>
                  {card.title}
                </h3>

                <p className="text-gray-600 text-[14px] leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[360px] lg:h-[420px] overflow-hidden rounded-[32px]"
          >
            <img
              src={facilityLandscape}
              alt="Facility aerial view"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BuiltWithPurpose;