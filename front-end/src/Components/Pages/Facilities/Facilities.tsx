import HeroSection from "../../Shared/HeroSection";
import bgImage from "../../../assets/facilities/Rectangle 2.png";
import TrustedBy from "../Home/TrustedBy";
import FacilitiesSection from "./FacilitiesSection";
import WhyChooseSection from "./WhyChooseSection";
import DonateSection from "../Home/DonateSection";
import BuiltWithPurpose from "./BuiltWithPurpose";

const Facilities = () => {
  return (
    <div>
      <HeroSection
        layout="center"
        bg={{ type: "image", src: bgImage }}
        overlayOpacity={0.55}
        heading="Where Cricket Is Played and Life Is Shared"
        headingUnderline={true}
        subLines={[
          "At Campo de Cricket Beas De Segura, our facilities are designed to do more than host a",
          "match. They’re built to bring people together.",
        ]}
        buttonLabel="Join the Community"
        buttonHref="/register"
      />
      <TrustedBy/>
      <FacilitiesSection/>
      <WhyChooseSection/>
      <DonateSection/>
      <BuiltWithPurpose/>
    </div>
  );
};

export default Facilities;
