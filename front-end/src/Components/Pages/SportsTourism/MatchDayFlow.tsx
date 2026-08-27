import React from "react";
import { motion } from "framer-motion";
import { FileText, Umbrella, Flag } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Morning: Match Time",
    description:
      "The day begins on the field, with competitive matches played in a calm rural setting.",
    icon: <FileText size={48} className="text-[#2b5a9e]" />,
  },
  {
    number: "2",
    title: "Afternoon: Rest & Recharge",
    description:
      "Lunch is shared, bodies recover, and players relax in shaded areas or return to their accommodation.",
    icon: <Umbrella size={48} className="text-[#2b5a9e]" />,
  },
  {
    number: "3",
    title: "Evening: Culture & Connection",
    description:
      "Guests enjoy local food, village walks, or shared meals with hosts — turning a matchday into a memorable experience.",
    icon: <Flag size={48} className="text-[#2b5a9e]" />,
  },
];

const MatchdayFlow: React.FC = () => {
  return (
    <section className="py-20 bg-[#f2f4f8] px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-gray-800 mb-3">
            Sample Matchday-To-Experience Flow
          </h2>

          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            A Balance Of Competition And Connection. A Matchday Flows From Focused Cricket
            To Relaxed Rest And Shared Cultural Moments — Balancing Competition With Connection.
          </p>
        </motion.div>

        {/* Flow Line */}
        <div className="relative">

          {/* Curved Line */}
          <svg
            className="absolute top-8 left-0 w-full hidden lg:block"
            height="80"
            viewBox="0 0 1200 80"
            fill="none"
          >
            <path
              d="M0 40 C300 80 900 0 1200 40"
              stroke="#1f2937"
              strokeWidth="2"
              fill="transparent"
            />
          </svg>

          {/* Steps */}
          <div className="grid md:grid-cols-3 gap-12 relative">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >

                {/* Number Circle */}
                <div className="w-14 h-14 rounded-full bg-[#2b5a9e] text-white flex items-center justify-center text-lg font-semibold mb-6 shadow-md">
                  {step.number}.
                </div>

                {/* Icon */}
                <div className="mb-4">
                  {step.icon}
                </div>

                {/* Title */}
                <h4 className="text-gray-800 font-semibold mb-2">
                  {step.title}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default MatchdayFlow;