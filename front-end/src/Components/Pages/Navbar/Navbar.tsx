/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../../assets/logo/logo.png";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Tournaments", to: "/tournaments" },
  { label: "Sports Tourism", to: "/sports-tourism" },
  { label: "Partnerships", to: "/partnerships" },
  { label: "News", to: "/news" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  // Gradient Style Constants
  const gradientBorderStyle = {
    backgroundImage: 'linear-gradient(white, white), linear-gradient(to right, #DD232A, #2252A1)',
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
  };

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom;
        setHidden(heroBottom <= 20);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[9999] w-[calc(100%-40px)] max-w-6xl transition-all duration-500 ease-in-out ${
        hidden ? "-translate-y-32 opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <nav
        className={`relative flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-xl border border-white/20"
            : "bg-white shadow-md border border-transparent"
        }`}
      >
        {/* Logo */}
        <NavLink to="/" className="flex-shrink-0 transition-transform hover:scale-105 active:scale-95">
          <img src={logo} alt="Logo" className="h-10 md:h-12 w-auto object-contain" />
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-[13px] font-semibold  tracking-wider transition-all duration-200 rounded-full ${
                    isActive
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#donate"
            style={gradientBorderStyle}
            className="group relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-gray-700 border-2 border-transparent transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Donate Now</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DD232A] to-[#2252A1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <NavLink
            to="/register"
            style={gradientBorderStyle}
            className="group relative px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest text-gray-700 border-2 border-transparent transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Register Team</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DD232A] to-[#2252A1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none group"
          aria-label="Toggle Menu"
        >
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 flex flex-col gap-2 xl:hidden origin-top"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `px-5 py-3 rounded-xl text-sm font-bold uppercase tracking-wide transition-all ${
                      isActive ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-50"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}

              <div className="h-[1px] bg-gray-100 my-4" />

              <div className="grid grid-cols-2 gap-4">
                <NavLink
                  to="/donate"
                  style={gradientBorderStyle}
                  className="group relative py-4 rounded-2xl text-center font-black text-[10px] uppercase tracking-tighter text-gray-700 border-2 border-transparent overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">Donate Now</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#DD232A] to-[#2252A1] opacity-0 group-hover:opacity-100 transition-opacity" />
                </NavLink>

                <NavLink
                  to="/register"
                  style={gradientBorderStyle}
                  className="group relative py-4 rounded-2xl text-center font-black text-[10px] uppercase tracking-tighter text-gray-700 border-2 border-transparent overflow-hidden"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors">Register Team</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#DD232A] to-[#2252A1] opacity-0 group-hover:opacity-100 transition-opacity" />
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;