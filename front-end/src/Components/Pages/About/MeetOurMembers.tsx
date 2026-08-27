import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const members = [
  {
    name: "John Edward",
    role: "CEO",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  },
  {
    name: "Sofia Reyes",
    role: "Head of Events",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80",
  },
  {
    name: "Emma Clarke",
    role: "Operations Manager",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
  },
  {
    name: "Marco Delgado",
    role: "Head Coach",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
  },
  {
    name: "Aria Fontaine",
    role: "Community Lead",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
  },
  {
    name: "Liam Torres",
    role: "Facilities Director",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
  },
];

export default function MeetOurMembers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-white py-20">

      {/* HEADER */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-16 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Meet Our Members
        </h2>

        <p className="text-gray-500 max-w-lg mx-auto">
          Our vision is to create a credible grassroots cricket venue run to
          professional standards — attracting teams from across Europe and beyond.
        </p>
      </motion.div>

      {/* MOBILE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 lg:hidden">
        {members.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative rounded-2xl overflow-hidden"
          >
            <img
              src={member.image}
              className="w-full h-[340px] object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-6 left-5 text-white">
              <p className="font-semibold text-lg">{member.name}</p>
              <p className="text-sm text-white/80">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* DESKTOP ACCORDION */}
      <div
        className="hidden lg:flex w-full h-[520px] gap-[8px] px-[8px]"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {members.map((member, i) => {
          const active = hoveredIndex === i;
          const defaultFirst = hoveredIndex === null && i === 0;

          return (
            <motion.div
              key={i}
              layout
              onMouseEnter={() => setHoveredIndex(i)}
              animate={{
                flex:
                  hoveredIndex === null
                    ? i === 0
                      ? 3
                      : 1
                    : active
                    ? 4
                    : 1,

                height: active ? "540px" : "520px",
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
            >
              {/* IMAGE */}
              <img
                src={member.image}
                className="absolute inset-0 w-full h-full object-cover"
                draggable={false}
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* TEXT */}
              <motion.div
                animate={{
                  opacity: active || defaultFirst ? 1 : 0,
                  y: active || defaultFirst ? 0 : 20,
                }}
                transition={{ duration: 0.4 }}
                className="absolute bottom-6 left-6 text-white"
              >
                <p className="text-lg font-semibold">
                  {member.name}
                </p>
                <p className="text-sm text-white/80">
                  {member.role}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}