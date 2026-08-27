import HeroSection from "../../Shared/HeroSection";
import image from "../../../assets/about/Rectangle 2.png";
import TrustedBy from "../Home/TrustedBy";
import WhyWeAreBuildingThis from "./WhyWeAreBuildingThis";
import OurVision from "./OurVision";
import MeetOurMembers from "./MeetOurMembers";
import DonateSection from "../Home/DonateSection";
import FAQSection from "./FaqSection";

const About = () => {
  return (
    <div>
      <HeroSection
        layout="left"
        bg={{ type: "image", src: image }}
        overlayOpacity={0.45}
        heading="A Place Where Cricket, Culture, and Community Meet"
        
        subLines={[
          "A grassroots cricket ground in Beas De Segura, built with",
          "community spirit and delivered to international standards.",
        ]}
        buttonLabel="Support the Build"
        buttonHref="/partnerships"
      />
      <TrustedBy/>
      <WhyWeAreBuildingThis/>
      <OurVision/>
      <MeetOurMembers/>
      <DonateSection/>
      <FAQSection/>
    </div>
  );
};

export default About;
