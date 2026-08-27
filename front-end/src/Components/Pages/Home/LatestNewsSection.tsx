import React from "react";
import { motion } from "framer-motion";
import { Calendar, User, ArrowUpRight } from "lucide-react";

/* IMPORT IMAGES */
import mainNews from "../../../assets/home/mainNews.png";
import news1 from "../../../assets/home/news1.png";
import news2 from "../../../assets/home/news2.png";
import news3 from "../../../assets/home/news3.png";

interface NewsItem {
  title: string;
  date: string;
  image: string;
}

const sideNews: NewsItem[] = [
  {
    title: "2026 Tournament Dates Announced",
    date: "October 2, 2025",
    image: news1,
  },
  {
    title: "Crowdfunding Progress Update",
    date: "October 2, 2025",
    image: news2,
  },
  {
    title: "2026 Tournament Dates Announced",
    date: "January 2, 2026",
    image: news3,
  },
];

const LatestNewsSection: React.FC = () => {
  return (
    <section className="w-full bg-[#f5f5f5] pb-10 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            Latest News From Us
          </h2>

          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm md:text-base">
            Stories, updates, and highlights from Campo de Cricket Beas De Segura —
            following the build, tournaments, and community.
          </p>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT FEATURED NEWS */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={mainNews}
                alt="news"
                className="w-full h-[360px] object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="mt-5">

              <div className="flex items-center gap-4 text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <User size={16} />
                  Admin
                </div>

                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  October 2, 2025
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mt-3">
                Breaking Ground in Beas De Segura
              </h3>

            </div>
          </motion.div>

          {/* RIGHT SIDE NEWS LIST */}
          <div className="space-y-6">

            {sideNews.map((news, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl shadow-sm p-4 flex gap-4 items-center cursor-pointer"
              >

                {/* Image */}
                <div className="w-[110px] h-[80px] rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="flex items-center gap-4 text-gray-400 text-xs">

                    <div className="flex items-center gap-1">
                      <User size={14} />
                      Admin
                    </div>

                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {news.date}
                    </div>

                  </div>

                  <h4 className="text-gray-800 font-medium mt-1 text-sm md:text-base">
                    {news.title}
                  </h4>

                  <button className="flex items-center gap-1 text-blue-600 text-sm mt-2 hover:underline">
                    Read More
                    <ArrowUpRight size={14} />
                  </button>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;