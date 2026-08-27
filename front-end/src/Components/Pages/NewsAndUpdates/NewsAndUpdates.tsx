import HeroSection from "../../Shared/HeroSection";
import bgImage from "../../../assets/News/Rectangle 2.png";
import TrustedBy from "../Home/TrustedBy";
import BlogSection from "./BlogSection";
import LatestNewsSection from "../Home/LatestNewsSection";
import DonateSection from "../Home/DonateSection";
const NewsAndUpdates = () => {
    return (
        <div>
            <HeroSection
        layout="left"
        bg={{ type: "image", src: bgImage }}
        overlayOpacity={0.45}
        heading="News & Updates from the Ground"
        headingUnderline={false}
        subLines={[
          "A grassroots cricket ground in Beas De Segura, built with community spirit and delivered to international standards.",
        ]}
        buttonLabel="Support the Build"
        buttonHref="/partnerships"
      />

<TrustedBy/>
<BlogSection/>
<LatestNewsSection/>
<DonateSection/>
        </div>
    );
};

export default NewsAndUpdates;