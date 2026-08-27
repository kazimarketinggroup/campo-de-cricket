import React from "react";
import { CheckCircle2 } from "lucide-react";
import teamPhoto from "../../../assets/facilities/Frame 14179.png";

const benefits = [
  "Guaranteed fixtures",
  "Access to the ground, nets, and changing facilities",
  "Match organisation and support staff",
  "Player and spectator comfort areas",
  "A welcoming, well-run tournament environment",
];

const TeamBenefits: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-[#F4F6FC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image */}
          <div className="relative overflow-hidden rounded-[24px]">
            <img
              src={teamPhoto}
              alt="Teams standing with trophy"
              className="w-full h-[260px] md:h-[300px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-4 lg:pl-10">
            
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                What Teams Receive
              </h2>

              <p className="text-gray-500 text-[14px] leading-relaxed max-w-md">
                Between matches, teams and families enjoy village life.
                Cricket becomes the anchor for shared meals,
                conversations and discovery.
              </p>
            </div>

            <ul className="space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2
                    size={20}
                    className="text-[#2b5a9e] fill-[#2b5a9e]/10"
                    strokeWidth={2.5}
                  />

                  <span className="text-gray-700 text-[14px] font-medium">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamBenefits;