import HeroSection from "../../Shared/HeroSection";
import bgImage from "../../../assets/sportsTourism/Rectangle 2.png";
import TrustedBy from "../Home/TrustedBy";
import CricketSensePlace from "./CricketSensePlace";
import MatchdayFlow from "./MatchDayFlow";
import FacilitiesSection from "../Home/FacilitiesSection";
import DonateSection from "../Home/DonateSection";

const SportsTourism = () => {
    return (
        <div>
            <HeroSection
        layout="left"
        bg={{ type: "image", src: bgImage }}
        overlayOpacity={0.45}
        heading="A Place Where Cricket, Culture, and Community Meet"
        headingUnderline={false}
        subLines={[
          "A grassroots cricket ground in Beas De Segura, built with",
          "community spirit and delivered to international standards",
        ]}
        buttonLabel="Support the Build"
        buttonHref="/register"
      />
      <TrustedBy/>
      <CricketSensePlace/>
      <MatchdayFlow/>
      <FacilitiesSection/>
      <DonateSection/>
        </div>
    );
};

export default SportsTourism;