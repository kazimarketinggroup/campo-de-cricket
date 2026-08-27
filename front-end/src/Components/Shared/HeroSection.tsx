/* eslint-disable @typescript-eslint/no-unused-vars */
// components/HeroSection/HeroSection.tsx

import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

type HeroBg =
  | { type: "video"; src: string; poster?: string }
  | { type: "image"; src: string };

type HeroLayout = "center" | "left";

export interface HeroSectionProps {
  bg: HeroBg;
  overlayOpacity?: number;
  layout?: HeroLayout;
  heading: string;
  headingUnderline?: boolean;
  subLines?: string[];
  buttonLabel: string;
  buttonHref: string;
  className?: string;
}

/* ───────────────── Gradient Button ───────────────── */

/* ───────────────── Gradient Button ───────────────── */

const GradientButton: React.FC<{ label: string; href: string }> = ({
  label,
  href,
}) => (
  <Link
    to={href}
    className="group relative inline-block p-[2px] rounded-full transition-all duration-300 overflow-hidden"
    style={{
      background: "linear-gradient(135deg, #DD232A, #2252A1)",
    }}
  >
    {/* This is the background that fades in on hover */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-[#DD232A] to-[#2252A1]" />

    <span className="relative flex items-center gap-2 px-8 py-3 rounded-full bg-white text-black text-sm font-bold uppercase tracking-wider group-hover:bg-transparent group-hover:text-white transition-all duration-300">
      <span className="relative z-10">{label}</span>

      <svg
        className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </span>
  </Link>
);

/* ───────────────── Hero Section ───────────────── */

const HeroSection: React.FC<HeroSectionProps> = ({
  bg,
  
  layout = "center",
  heading,
  subLines = [],
  buttonLabel,
  buttonHref,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);


  return (
    <section
      id="hero"
      className={`relative w-full overflow-hidden ${className}`}
      style={{ minHeight: "100vh" }}
    >
      {/* ───── Background ───── */}

      {bg.type === "video" ? (
        <video
          ref={videoRef}
          src={bg.src}
          poster={bg.poster}
          muted
          loop
          playsInline
          autoPlay
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <img
          src={bg.src}
          alt="hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* ───── Overlay ───── */}

     <div className="absolute inset-0 bg-black/65" />

      {/* ───── Content Container ───── */}

      {/* ───── Content ───── */}

<div className="absolute inset-0 flex items-center top-28 justify-center z-10">

  <div
    className={`
      w-full
      max-w-7xl
      mx-auto
      px-6
      md:px-12
      lg:px-16
      ${
        layout === "center"
          ? "flex flex-col items-center text-center"
          : "flex flex-col items-start text-left"
      }
    `}
  >

    <div className={`${layout === "center" ? "max-w-3xl" : "max-w-3xl"} flex flex-col gap-6`}>

      {/* Heading */}

      <h1 className="text-xl md:text-3xl lg:text-6xl font-semibold leading-tight text-white tracking-tight drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
  {heading}
</h1>

      {/* Sub text */}

      {subLines.length > 0 && (
        <div className="flex flex-col gap-2">
          {subLines.map((line, i) => (
            <p
              key={i}
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "clamp(0.95rem,1.5vw,1.1rem)",
                lineHeight: 1.6,
              }}
            >
              {line}
            </p>
          ))}
        </div>
      )}

      {/* CTA */}

      <div className="pt-2">
        <GradientButton label={buttonLabel} href={buttonHref} />
      </div>

    </div>

  </div>

</div>
    </section>
  );
};

export default HeroSection;


/* ══════════════════════════════════════════════════════════
   USAGE EXAMPLES (copy-paste into any page)
══════════════════════════════════════════════════════════

── Example 1: Center layout with image bg (matches screenshot 1) ──

<HeroSection
  layout="center"
  bg={{ type: "image", src: "/images/stadium-aerial.jpg" }}
  overlayOpacity={0.55}
  heading="Where Cricket Becomes a Destination"
  headingUnderline={true}
  subLines={[
    "A new home for cricket in Beas De Segura, Spain",
    "Where sport, culture, and community come together.",
  ]}
  buttonLabel="Join the Community"
  buttonHref="/community"
/>

── Example 2: Left layout with image bg (matches screenshot 2) ──

<HeroSection
  layout="left"
  bg={{ type: "image", src: "/images/cricket-match.jpg" }}
  overlayOpacity={0.45}
  heading="A Place Where Cricket, Culture, and Community Meet"
  headingUnderline={false}
  subLines={[
    "A grassroots cricket ground in Beas De Segura, built with",
    "community spirit and delivered to international standards.",
  ]}
  buttonLabel="Support the Build"
  buttonHref="/support"
/>

── Example 3: Center layout with video bg ──

<HeroSection
  layout="center"
  bg={{ type: "video", src: "/videos/cricket-highlight.mp4", poster: "/images/poster.jpg" }}
  overlayOpacity={0.6}
  heading="Where Cricket Becomes a Destination"
  subLines={["A new home for cricket in Beas De Segura, Spain"]}
  buttonLabel="Explore Now"
  buttonHref="/explore"
/>

══════════════════════════════════════════════════════════ */