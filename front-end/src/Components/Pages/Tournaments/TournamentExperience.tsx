import React from "react";
import { Home, Utensils, Clock, Trophy } from "lucide-react";
import tournamentImg from "../../../assets/facilities/Rectangle 117.png";

const experienceFeatures = [
  {
    title: "Stay With The Village",
    description:
      "Cultural accommodation with local families for a more personal experience.",
    icon: <Home size={20} className="text-white" />,
  },
  {
    title: "Eat & Socialise Locally",
    description: "Shared meals, local food, and relaxed social evenings.",
    icon: <Utensils size={20} className="text-white" />,
  },
  {
    title: "Time To Rest & Recover",
    description: "Comfortable spaces for downtime between matches.",
    icon: <Clock size={20} className="text-white" />,
  },
  {
    title: "Cricket As The Connector",
    description: "Matches bring people together — culture makes it memorable.",
    icon: <Trophy size={20} className="text-white" />,
  },
];

const TournamentExperience: React.FC = () => {
  return (
    <section className="py-10 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
                The Tournament Experience
              </h2>

              <p className="text-gray-500 text-[14px] leading-relaxed max-w-lg">
                Between matches, teams and families enjoy the pace and beauty of village life.
                Cricket becomes the anchor for shared meals, conversations and discovery.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6">
              {experienceFeatures.map((item, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-10 h-10 bg-[#2b5a9e] rounded-md flex items-center justify-center">
                    {item.icon}
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-[#2b5a9e] font-semibold text-[14px]">
                      {item.title}
                    </h4>

                    <p className="text-gray-500 text-[12px] leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden lg:block">
            <div className="relative h-[300px] w-full overflow-hidden rounded-[26px]">
              <img
                src={tournamentImg}
                alt="Aerial view of cricket facility"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TournamentExperience;