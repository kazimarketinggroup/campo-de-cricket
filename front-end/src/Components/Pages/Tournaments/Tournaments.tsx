import HeroSection from "../../Shared/HeroSection";
import bgImage from "../../../assets/tournaments/Rectangle 2.png"
import TrustedBy from "../Home/TrustedBy";
import DonateSection from "../Home/DonateSection";
import CalendarSection from "./CalendarSection";
import TournamentsSection from "../Home/TournamentsSection";
import TeamBenefits from "./TeamBenifits";
import TournamentExperience from "./TournamentExperience";

const Tournaments = () => {
  return (
    <div>
      <HeroSection
        layout="left"
        bg={{ type: "image", src: bgImage }}
        overlayOpacity={0.45}
        heading="Where Grassroots Cricket Meets Global Teams"
        headingUnderline={false}
        subLines={[
          "At Campo de Cricket Beas De Segura, tournaments are more than",
          "fixtures — they’re shared experiences.",
        ]}
        buttonLabel="Support the Build"
        buttonHref="/register"
      />
      <TrustedBy/>
      {/* calendar */}
<CalendarSection/>
      {/* tournaments   */}
<TournamentsSection/>
      {/* team service */}
<TeamBenefits/>
      {/* team experience */}
<TournamentExperience/>
      <DonateSection/>
    </div>
  );
};

export default Tournaments;
