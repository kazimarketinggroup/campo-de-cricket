import React from "react";
import { Headphones, Users, Briefcase, Handshake } from "lucide-react";
import sideImage from "../../../assets/facilities/Image area (3).png";

const features = [
  {
    title: "24/7 On-Site Support",
    description: "Help available anytime for teams, families, and events.",
    icon: <Headphones size={40} className="text-[#2b5a9e]" strokeWidth={1.5} />,
  },
  {
    title: "Cricket-Led Management",
    description: "Run by experienced cricket people who understand the game.",
    icon: <Briefcase size={40} className="text-[#2b5a9e]" strokeWidth={1.5} />,
  },
  {
    title: "Player & Family Comfort",
    description: "Clean, shaded spaces designed for players and families.",
    icon: <Users size={40} className="text-[#2b5a9e]" strokeWidth={1.5} />,
  },
  {
    title: "Purpose-Driven Facilities",
    description: "Every visit supports community growth and development.",
    icon: <Handshake size={40} className="text-[#2b5a9e]" strokeWidth={1.5} />,
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Why Choose Our Facilities
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed text-[15px]">
            When teams, families and visitors use the facilities at Campo De Cricket Beas De Segura,
            they're not just booking a ground — they're stepping into a fully supported cricket experience.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* Image */}
          <div className="relative h-[380px] lg:h-auto overflow-hidden rounded-[28px]">
            <img
              src={sideImage}
              alt="Beas De Segura Landscape"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-[20px] border border-gray-200 hover:border-[#2b5a9e] hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 bg-white"
              >
                <div className="mb-4">{feature.icon}</div>

                <h3 className="text-[18px] font-semibold text-[#2b5a9e] mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-500 text-[14px] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;