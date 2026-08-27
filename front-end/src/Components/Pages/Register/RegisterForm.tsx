import{ useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Users, User, Calendar, MessageSquare, ArrowRight } from "lucide-react";
import bgImage from "../../../assets/partnership/Rectangle 24075.png";

const TeamRegistrationForm = () => {
  const [phone, setPhone] = useState("");

  const sectionLabel =
    "flex items-center gap-2 text-[10px] font-semibold text-white uppercase tracking-wider mb-4 border-l-4 border-[#DD232A] pl-2";

  const label =
    "block text-[12px] text-white/80 mb-1 ml-1";

  const input =
    "w-full px-4 py-2 rounded-full bg-transparent border border-white/40 text-white placeholder-white/50 text-sm outline-none focus:border-white focus:ring-1 focus:ring-white/20";

  return (
    <section
      className="relative w-full bg-cover bg-center py-12 px-4"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl md:text-3xl font-semibold mb-2">
            Team Registration
          </h1>
          <p className="text-white/70 text-xs md:text-sm">
            Fill the form and our team will contact you within 48 hours.
          </p>
        </div>

        {/* Card */}
        <div className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 md:p-8 shadow-xl">

          <form className="space-y-8">

            {/* TEAM DETAILS */}
            <div>
              <div className={sectionLabel}>
                <Users size={14} />
                Team Details
              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className={label}>Team Name *</label>
                  <input
                    type="text"
                    placeholder="Team name"
                    className={input}
                  />
                </div>

                <div>
                  <label className={label}>Team Size *</label>
                  <select className={input}>
                    <option className="text-black">Select size</option>
                    <option className="text-black">11 Players</option>
                    <option className="text-black">15 Players</option>
                  </select>
                </div>

              </div>
            </div>

            {/* CAPTAIN */}
            <div>
              <div className={sectionLabel}>
                <User size={14} />
                Captain Information
              </div>

              <div className="space-y-4">

                <div>
                  <label className={label}>Captain Name *</label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className={input}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">

                  <div>
                    <label className={label}>Email *</label>
                    <input
                      type="email"
                      placeholder="Email"
                      className={input}
                    />
                  </div>

                  <div>
                    <label className={label}>Phone *</label>

                    <PhoneInput
                      country={"es"}
                      value={phone}
                      onChange={(val) => setPhone(val)}
                      inputStyle={{
                        width: "100%",
                        height: "36px",
                        background: "transparent",
                        border: "1px solid rgba(255,255,255,0.4)",
                        borderRadius: "9999px",
                        color: "white",
                        fontSize: "14px",
                        paddingLeft: "55px",
                      }}
                      buttonStyle={{
                        background: "transparent",
                        border: "none",
                      }}
                      dropdownStyle={{ color: "#000" }}
                    />

                  </div>

                </div>

              </div>
            </div>

            {/* PREFERENCES */}
            <div>
              <div className={sectionLabel}>
                <Calendar size={14} />
                Preferences
              </div>

              <div className="grid md:grid-cols-2 gap-4">

                <div>
                  <label className={label}>Start Date</label>
                  <input
                    type="date"
                    className={`${input} text-white/70`}
                  />
                </div>

                <div>
                  <label className={label}>Tournament</label>
                  <select className={input}>
                    <option className="text-black">Select</option>
                    <option className="text-black">Spring Challenge</option>
                    <option className="text-black">Summer League</option>
                  </select>
                </div>

              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <div className={sectionLabel}>
                <MessageSquare size={14} />
                Additional Info
              </div>

              <textarea
                rows={3}
                placeholder="Write message..."
                className="w-full px-4 py-3 rounded-xl bg-transparent border border-white/40 text-white placeholder-white/50 text-sm outline-none focus:border-white resize-none"
              />
            </div>

            {/* BUTTON */}
            <div className="flex justify-center pt-2">
              <button
                type="submit"
                className="flex items-center gap-3 px-8 py-2.5 rounded-full bg-gradient-to-r from-[#DD232A] to-[#2252A1] text-white text-sm font-semibold hover:opacity-90 transition"
              >
                Submit
                <ArrowRight size={16} />
              </button>
            </div>

            <p className="text-center text-[10px] text-white/40">
              By registering you agree to Campo de Cricket terms.
            </p>

          </form>

        </div>
      </div>

      <style>{`
        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(1);
          cursor: pointer;
        }
      `}</style>
    </section>
  );
};

export default TeamRegistrationForm;