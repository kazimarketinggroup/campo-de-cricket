import HeroSection from "../../Shared/HeroSection";
import TeamRegistrationForm from "./RegisterForm";
import bgImage from "../../../assets/facilities/Rectangle 2.png";

const Register = () => {
    return (
        <div>
            <HeroSection
        layout="center"
        bg={{ type: "image", src: bgImage }}
        overlayOpacity={0.55}
        heading="Register Your Team"
        headingUnderline={true}
        subLines={[
          "Join the growing cricket community at Campo de Cricket Beas De Segura.",
          "Secure your spot in upcoming tournaments and friendly matches.",
        ]}
        buttonLabel="Join the Community"
        buttonHref="/community"
      />
            <TeamRegistrationForm/>
        </div>
    );
};

export default Register;