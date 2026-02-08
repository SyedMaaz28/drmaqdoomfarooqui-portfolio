"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Sparkle from "@/components/Sparkle";



const items = [
  {
    year: "1982",
    title: "School Education",
    place: "St. Francis de Sales (SFS School)",
    desc: "Completed school education.",
  },
  {
    year: "BSc",
    title: "Bachelor of Science",
    place: "Maulana Azad College, Aurangabad",
    desc: "Undergraduate studies in Science.",
  },
  {
    year: "MSc",
    title: "Master of Science",
    place: "Maulana Azad College, Aurangabad",
    desc: "Postgraduate specialization in Chemistry.",
  },
  {
    year: "PhD",
    title: "Doctorate in Chemistry",
    place: "Maulana Azad College, Aurangabad",
    desc: "Doctoral research in Chemistry.",
  },
  {
    year: "Principal",
    title: "Principal",
    place: "Maulana Azad College of Arts,Science & Commerce, Aurangabad",
    //     desc: "Doctoral research in Chemistry.",
  },
  {
    year: "Principal",
    title: "Principal",
    place: "Dr.Rafiq Zakaria College for Women, Aurangabad",
    //     desc: "Doctoral research in Chemistry.",
  },
];

export default function WorkHistory() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
  });

  return (
    <section
      ref={ref}
      id="workhistory"
      className="
    py-20 px-6
    max-w-6xl mx-auto
    bg-gradient-to-b
    from-transparent
    via-blue-50/30
    to-transparent
    backdrop-blur-[1px]
  "
    >
      {/* TITLE */}
      {/* <h2 className="text-center text-[#1375C1] tracking-widest uppercase mb-20"> */}
      <h2 className="text-3xl font-bold text-center mb-12 text-[#1375C1]">
        Work History
      </h2>

      <div className="relative">
                  {/* ✨ Floating Sparkles */}
          {/* ✅ CHANGED: Sparkles responsive for mobile */}

<Sparkle
  className="
    absolute top-0 left-2
    md:-top-5 md:-left-10
    w-6 h-6 md:w-10 md:h-10
    text-yellow-400
  "
/>

<Sparkle
  className="
    absolute top-2 right-2
    md:top-10 md:-right-8
    w-5 h-5 md:w-6 md:h-6
    text-blue-400
  "
/>

<Sparkle
  className="
    absolute bottom-2 left-4
    md:bottom-10 md:-left-10
    w-4 h-4 md:w-5 md:h-5
    text-yellow-400
  "
/>
        {/* ✅ ONE CENTER LINE (desktop + mobile) */}
        <motion.div
          style={{ scaleY }}
          className="
    origin-top
    absolute left-1/2 top-0 -translate-x-1/2
    w-[3px] h-full
    bg-[#1375C1]
  "
        />

        {items.map((item, i) => {
          const isLeft = i % 2 === 0;

          return (
            //   <div key={i} className="relative mb-3">
            <div key={i} className="relative mb-10 md:mb-1">
              {/* ================= DOT ================= */}
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
    absolute left-1/2 -translate-x-1/2
    top-3 md:top-18
    z-10 w-4 h-4
    bg-[#1375C1]
    rounded-full
    border-4 border-white
    shadow
  "
              />

              {/* ===== CONNECTOR LINE (DESKTOP ONLY) ===== */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: 40 }}
                transition={{ duration: 0.6 }}
                className={`
    hidden md:block
    absolute top-20
    h-[2px] bg-gray-300
    ${
      isLeft
        ? "right-1/2 w-20" // ← LEFT card → line goes LEFT
        : "left-1/2 w-10" // ← RIGHT card → line goes RIGHT
    }
  `}
              />

              {/* ================= CARD ROW ================= */}
              <div
                className={`
                  flex
                  justify-center
                  items-center
                  w-full
                `}
              >
                {/* LEFT SIDE */}
                {isLeft && (
                  <div className="hidden md:flex w-1/2 justify-end pr-10">
                    <Card item={item} />
                  </div>
                )}

                {/* CENTER SPACE */}
                <div className="hidden md:block w-1/2" />

                {/* RIGHT SIDE */}
                {!isLeft && (
                  //         <div className="hidden md:block w-1/2 pl-10">
                  <div className="hidden md:block w-1/2 ml-20">
                    <Card item={item} />
                  </div>
                )}

                {/* ================= MOBILE CARD ================= */}
                <div className="md:hidden w-full mt-6">
                  <Card item={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ================= CARD COMPONENT (Reusable) ================= */
function Card({ item }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
      }}
      transition={{ duration: 0.7 }}
      className="
bg-white
backdrop-blur-md
shadow-lg
    rounded-2xl
    p-5
    w-full
    max-w-[400px]
    border border-blue-100 hover:border-[#1375C1]/40

  "
    >
      <p className="text-[#1375C1] font-semibold">{item.year}</p>

      <h3 className="text-xl font-semibold mt-1">{item.title}</h3>

      <p className="text-gray-500 pt-1">{item.place}</p>

      <p className="text-gray-600 mt-2">{item.desc}</p>
    </motion.div>
  );
}
