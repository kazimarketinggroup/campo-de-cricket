import HeroSection from "../../Shared/HeroSection";
import bgImage from "../../../assets/partnership/Rectangle 2.png"
import TrustedBy from "../Home/TrustedBy";
import WhyPartner from "./WhyPartner";
import PartnershipSteps from "./PartnershipSteps";
import PartnerSection from "./PartnerSection";
import DonateSection from "../Home/DonateSection";

const Partnership = () => {
    return (
        <div>
            <HeroSection
        layout="left"
        bg={{ type: "image", src: bgImage }}
        overlayOpacity={0.45}
        heading="Partner With Purpose. Build Something Lasting."
        headingUnderline={false}
        subLines={[
          "Campo de Cricket Beas De Segura is a grassroots project with global reach. By partnering",
          "with us, you support the growth of cricket, sustainable tourism, and local community",
          "development — while aligning your brand with authenticity, culture, and long-term impact."
        ]}
        buttonLabel="Support the Build"
        buttonHref="/register"
      />

      <TrustedBy/>
<WhyPartner/>
<PartnershipSteps/>
<PartnerSection/>
<DonateSection/>
        </div>
    );
};

export default Partnership;