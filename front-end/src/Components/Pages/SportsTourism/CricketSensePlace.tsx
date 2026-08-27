import React, { useRef, useState } from "react";
import { Play } from "lucide-react";
import video from "../../../assets/home/stadium.mp4";

const CricketSensePlace: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="py-16 px-6 bg-[#efefef]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl font-semibold text-gray-800 mb-3">
          Cricket With A Sense Of Place
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm max-w-2xl mx-auto mb-10 leading-relaxed">
          Beas De Segura Offers Something Rare: Authentic Village Life,
          Unspoiled Landscapes, And Warm Hospitality. Combined With Cricket,
          It Creates A Travel Experience That Feels Personal, Meaningful,
          And Unforgettable.
        </p>

        {/* Video Container */}
        <div className="relative w-full lg:w-1/2 mx-auto rounded-xl overflow-hidden shadow-md">

          <video
            ref={videoRef}
            className="w-full h-[320px] object-cover"
            controls={playing}
          >
            <source src={video} type="video/mp4" />
          </video>

          {!playing && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/80 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition">
                <Play size={28} className="text-white ml-1" />
              </div>
            </button>
          )}

        </div>

      </div>
    </section>
  );
};

export default CricketSensePlace;