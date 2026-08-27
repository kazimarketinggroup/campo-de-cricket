import logo1 from "../../../assets/logo/Logo01.png";
import logo2 from "../../../assets/logo/Logo02.png";
import logo3 from "../../../assets/logo/Logo03.png";
import logo4 from "../../../assets/logo/Logo04.png";
import logo5 from "../../../assets/logo/Logo05.png";
import logo6 from "../../../assets/logo/Logo06.png";

const logos: string[] = [logo1, logo2, logo3, logo4, logo5, logo6];

const TrustedBy: React.FC = () => {
  return (
    <section className="w-full bg-gray-100 py-16 overflow-hidden">
      <div className=" mx-auto ">

        {/* Title */}
        <p className="text-center text-gray-500 text-3xl font-medium mb-8">
          Trusted By
        </p>

        {/* Marquee Wrapper */}
        <div className="relative overflow-hidden">

          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="partner logo"
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustedBy;