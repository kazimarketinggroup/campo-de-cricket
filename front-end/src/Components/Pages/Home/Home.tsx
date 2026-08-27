import HeroSection from "../../Shared/HeroSection";
import video from "../../../assets/home/stadium.mp4";
import TrustedBy from "./TrustedBy";
import CricketStorySection from "./CricketStorySection";
import CardSection from "./CardSection";
import DonateSection from "./DonateSection";
import FacilitiesSection from "./FacilitiesSection";
import TournamentsSection from "./TournamentsSection";
import LatestNewsSection from "./LatestNewsSection";
const Home = () => {
  return (
    <div>
      <HeroSection
        layout="center"
        bg={{
          type: "video",
          src: video,
          poster: "/images/poster.jpg",
        }}
        overlayOpacity={0.6}
        heading="Where Cricket Becomes a Destination"
        subLines={["A new home for cricket in Beas De Segura, SpainWhere sport, ","culture, and community come together."]}
        buttonLabel="Explore Now"
        buttonHref="/about"
      />

      <TrustedBy/>
      <CricketStorySection/>
      <CardSection/>
      <DonateSection/>
      <FacilitiesSection/>
      <TournamentsSection/>
      <LatestNewsSection/>
    </div>
  );
};

export default Home;
