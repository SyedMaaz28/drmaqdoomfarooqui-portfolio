"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ===== COUNT UP COMPONENT ===== */
function CountUp({ to }: { to: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1500;
    const increment = to / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= to) {
        setCount(to);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}+</span>;
}

/* ===== MAIN SECTION ===== */
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="
        py-32 px-6
        max-w-6xl mx-auto
        text-center
      "
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
       className="text-4xl font-bold text-center mb-20 text-[#1375C1]"
      >
        Achievements & Impact
      </motion.h2>

      {/* GRID */}
      <div
        className="
          grid
          md:grid-cols-4
          gap-10
        "
      >
        {/* CARD 1 */}
        <Card number={37} label="Research Publications" />

        {/* CARD 2 */}
        <Card number={40} label="Years in Education" />

        {/* CARD 3 */}
        <Card number={5} label="Institutions Guided" />

        {/* CARD 4 */}
        <Card number={1000} label="Students Mentored" />
      </div>
    </section>
  );
}

/* ===== CARD ===== */
function Card({
  number,
  label,
}: {
  number: number;
  label: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        boxShadow: "0px 25px 50px rgba(0,0,0,0.12)",
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        bg-white
        rounded-2xl
        p-10
        shadow-md
        border border-blue-100
      "
    >
      <p
        className="
          text-4xl font-bold
          text-[#1375C1]
        "
      >
        <CountUp to={number} />
      </p>

      <p className="mt-3 text-gray-600">
        {label}
      </p>
    </motion.div>
  );
}
