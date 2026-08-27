import React from "react";
import { MessageSquare, Target, ClipboardCheck, Handshake } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Express your interest",
    // Swapped icons to match the image precisely
    icon: <MessageSquare size={32} className="text-[#2b4ea2]" />,
    top: "80px", // Lower
    left: "5%",
    highlight: false,
  },
  {
    id: "02",
    title: "Discuss goals and alignment",
    icon: <Target size={32} className="text-[#2b4ea2]" />,
    top: "30px", // Higher
    left: "28%",
    highlight: true,
  },
  {
    id: "03",
    title: "Agree on scope and support",
    icon: <ClipboardCheck size={32} className="text-[#2b4ea2]" />,
    top: "80px", // Lower
    left: "52%",
    highlight: false,
  },
  {
    id: "04",
    title: "Activate the partnership together",
    icon: <Handshake size={32} className="text-[#2b4ea2]" />,
    top: "30px", // Higher
    left: "76%",
    highlight: true,
  },
];

const PartnershipSteps: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-[36px] font-semibold text-gray-800 tracking-tight">
          How to Become a Partner
        </h2>

        <p className="text-gray-500 text-[15px] mt-3 max-w-xl mx-auto leading-relaxed">
          Becoming a partner is easy process: share your interest, discuss
          goals, and collaborate together.
        </p>

        {/* Timeline Container */}
        <div className="relative mt-20 h-[320px]">

          {/* Curved dashed path - Adjusted for better alignment with circles */}
          <svg
            className="absolute w-full h-full left-0 top-0"
            viewBox="0 0 1000 200"
            fill="none"
            preserveAspectRatio="none"
          >
            <path
              d="M10 130 Q150 20 320 80 T600 120 T950 40"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="6 6"
              fill="none"
            />

            {/* Arrowhead at the end of the path */}
            <path
              d="M940 45 L955 35 L958 52"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </svg>

          {/* Steps */}
          {steps.map((step) => (
            <div
              key={step.id}
              className="absolute flex flex-col items-center text-center w-[220px] transition-all duration-500"
              style={{ top: step.top, left: step.left }}
            >
              {/* White Circle with Shadow */}
              <div className="relative w-[110px] h-[110px] bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.05)] border border-gray-100 flex items-center justify-center z-10">
                
                {/* Step Number Badge */}
                <span className="absolute top-1 right-1 bg-[#2b4ea2] text-white text-[11px] font-bold w-7 h-7 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {step.id}
                </span>

                <div className="transform transition-transform hover:scale-110 duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Title - Matches the color highlighting in your image */}
              <h3
                className={`mt-6 text-[17px] font-bold leading-tight max-w-[180px] ${
                  step.highlight ? "text-[#2b4ea2]" : "text-gray-700"
                }`}
              >
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipSteps;