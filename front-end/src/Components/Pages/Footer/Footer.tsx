import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import logo from "../../../assets/logo/logo.png";

// Import your navigation links constant
const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Tournaments", to: "/tournaments" },
  { label: "Sports Tourism", to: "/sports-tourism" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "News", to: "/news" },
];

// SVG Icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer 
      className="w-full text-white pt-16 pb-8 relative overflow-hidden" 
      style={{ 
        background: `
          radial-gradient(circle at 0% 100%, rgba(221, 35, 42, 0.35) 0%, transparent 40%), 
          radial-gradient(circle at 100% 30%, rgba(34, 82, 161, 0.25) 0%, transparent 50%),
          linear-gradient(145deg, #051937, #001229)
        ` 
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col gap-6">
            <Link to="/">
              <img src={logo} alt="Campo De Cricket" className="w-40 h-auto" />
            </Link>
            <p className="text-gray-300 text-[13px] leading-relaxed max-w-sm">
              Campo de Cricket Beas De Segura is a community-driven cricket ground in Beas De Segura, Jaén, Spain. 
              We host international tournaments, support sports tourism, and celebrate local culture.
            </p>

            {/* Mailing List */}
            <div className="mt-4">
              <p className="text-white font-medium text-sm mb-3">Join our mailing list</p>
              <div 
                className="inline-flex items-center rounded-full p-[1px] w-full max-w-sm"
                style={{ background: "linear-gradient(to right, #DD232A, #2252A1)" }}
              >
                <div className="flex items-center bg-white rounded-full w-full overflow-hidden">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="flex-1 bg-transparent px-5 py-2 text-gray-800 text-sm outline-none placeholder-gray-400"
                  />
                  <button
                    className="group relative px-7 py-2 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300"
                    style={{ backgroundColor: "#DD232A" }}
                  >
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(to right, #DD232A, #2252A1)" }}
                    />
                    <span className="relative z-10">Send</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="hidden lg:block lg:col-span-1" />

          {/* Company Column - Using NAV_LINKS */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm mb-6 tracking-wide">Company</h3>
            <ul className="space-y-4">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-white text-[13px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quick Links Column - Using the rest of NAV_LINKS */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm mb-6 tracking-wide">Explore</h3>
            <ul className="space-y-4">
              {NAV_LINKS.slice(4).map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-gray-300 hover:text-white text-[13px] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-white text-[13px] transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10">
          <p className="text-gray-400 text-[11px]">
            © 2026 Campo De Cricket. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-[11px] uppercase tracking-[0.2em]">Follow On :</span>
            <div className="flex items-center gap-3">
              {[<FacebookIcon />, <InstagramIcon />, <XIcon />, <LinkedInIcon />].map((icon, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-white transition-all hover:scale-110">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 text-gray-400 text-[11px]">
            <Link to="/copyright" className="hover:text-white transition-colors">Copyright</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}