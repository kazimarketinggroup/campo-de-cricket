import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import image from "../../../assets/partnership/Rectangle 24075.png";

const PartnerSection: React.FC = () => {
  const [phone, setPhone] = useState("");

  return (
    <section
      className="relative w-full min-h-screen  flex flex-col items-center justify-center bg-cover bg-center py-20"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Heading - Outside the card as per image */}
      <h2 className="relative z-10 text-white text-[38px] font-medium mb-10 tracking-tight">
        Become Our Partner
      </h2>

      {/* Glassmorphism Card */}
      <div className="relative z-10 w-full max-w-[720px] px-10 py-12 rounded-[40px] backdrop-blur-md bg-white/10 border border-white/20 text-white">
        
        <form className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <label className="text-sm font-light ml-1">Full name *</label>
            <input
              type="text"
              placeholder="Full name"
              className="w-full px-6 py-3 rounded-full bg-transparent border border-white/40 placeholder-white/50 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-sm font-light ml-1">Email *</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-6 py-3 rounded-full bg-transparent border border-white/40 placeholder-white/50 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          {/* Phone + Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-light ml-1">Phone Number *</label>
              <div className="phone-input-container">
                <PhoneInput
                  country={"es"} // Set to Spain or your preference
                  value={phone}
                  onChange={(val) => setPhone(val)}
                  inputStyle={{
                    width: '100%',
                    height: '50px',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.4)',
                    borderRadius: '9999px',
                    color: 'white',
                    paddingLeft: '60px'
                  }}
                  buttonStyle={{
                    background: 'transparent',
                    border: 'none',
                    borderRadius: '9999px',
                    paddingLeft: '10px'
                  }}
                  dropdownStyle={{
                    color: '#000'
                  }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-light ml-1">Company Name *</label>
              <input
                type="text"
                placeholder="Write Down"
                className="w-full px-6 py-3 rounded-full bg-transparent border border-white/40 placeholder-white/50 focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <label className="text-sm font-light ml-1">Your Message</label>
            <textarea
              rows={5}
              placeholder="Write Down..."
              className="w-full px-6 py-4 rounded-[25px] bg-transparent border border-white/40 placeholder-white/50 focus:outline-none focus:border-white transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
         
<div className="flex justify-center pt-4">
  <button
    type="submit"
    className="group relative inline-block p-[2px] rounded-full transition-all duration-300 overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #DD232A, #2252A1)",
    }}
  >
    {/* Hover Background Fill Layer */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#DD232A] to-[#2252A1]" />

    <span className="relative flex items-center gap-4 px-8 py-2.5 rounded-full bg-white text-gray-800 text-sm font-bold uppercase tracking-widest group-hover:bg-transparent group-hover:text-white transition-all duration-300">
      <span className="relative z-10">Let's Work Together</span>

      {/* The Red Icon Circle - Inverts on hover */}
      <span className="relative z-10 flex items-center justify-center w-7 h-7 bg-[#DD232A] text-white rounded-full transition-all duration-300 group-hover:bg-white group-hover:text-[#DD232A]">
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="transform group-hover:translate-x-0.5 transition-transform"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </span>
    </span>
  </button>
</div>

        </form>
      </div>

      {/* Global CSS fix for the phone input flag background */}
      <style>{`
        .phone-input-container .flag-dropdown:hover, 
        .phone-input-container .flag-dropdown.open {
          background: transparent !important;
        }
        .phone-input-container .selected-flag:hover {
          background: transparent !important;
        }
      `}</style>
    </section>
  );
};

export default PartnerSection;