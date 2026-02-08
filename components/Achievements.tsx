"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ===== COUNT UP ===== */
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

/* ===== SPARKLE ===== */
function Sparkle({ className }: { className: string }) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3, repeat: Infinity }}
      className={`absolute text-yellow-400 ${className}`}
    >
      ✦
    </motion.div>
  );
}

/* ===== MAIN ===== */
export default function Achievements() {
  return (
    <section
      id="achievements"
      className="
        relative
        py-32 px-6
        max-w-6xl mx-auto
        text-center
        overflow-hidden
      "
    >
      {/* SPARKLES */}
      <Sparkle className="top-20 left-10 text-3xl" />
      <Sparkle className="bottom-10 right-10 text-2xl" />

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-20 text-[#1375C1]"
      >
        Achievements & Impact
      </motion.h2>

      {/* ===== STATS GRID ===== */}
      <div className="grid md:grid-cols-4 gap-8 mb-24 ">
        <Card number={37} label="Research Publications" />
        <Card number={25} label="Years NCC Captain" />
        <Card number={13} label="PhD Scholars Guided" />
        <Card number={3} label="Chemistry Books Published" />
      </div>

      {/* ===== HONORS ===== */}
      {/* <div className="max-w-3xl mx-auto text-left space-y-6">
        <Honor text="Awarded D.Litt from the University of South America" />
        <Honor text="Patent holder recognized by the Australian Government" />
        <Honor text="Active member of charitable organisations like Selfless Helping Hands" />
        <Honor text="PhD reviewer for Anna University (Chennai) and Bharatiyar University (Coimbatore)" />
      </div> */}
      {/* ===== PREMIUM HONORS GRID ===== */}
<div className="
  grid
  md:grid-cols-2
  gap-8
  max-w-5xl
  mx-auto
  mt-10
  
">
  <PremiumHonor
    title="Doctorate Honor"
    text="Awarded D.Litt from the University of South America"
  />

  <PremiumHonor
    title="International Patent"
    text="Patent holder recognized by the Australian Government"
  />

  <PremiumHonor
    title="Scholarly Contribution"
    text="Published multiple chemistry books for academic learning"
  />

  <PremiumHonor
    title="Research Leadership"
    text="Guided 13 PhD scholars and served as reviewer for Anna & Bharatiyar Universities"
  />

  <PremiumHonor
    title="National Service"
    text="Served as NCC Captain for 25 years"
  />

  <PremiumHonor
    title="Community Impact"
    text="Active member of charitable organisations like Selfless Helping Hands"
  />
</div>

    </section>
  );
}

/* ===== CARD ===== */
function Card({ number, label }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      viewport={{ once: true }}
      className="
        bg-white
        rounded-2xl
        p-8
        shadow-md
        border border-blue-100
      "
    >
      <p className="text-4xl font-bold text-[#1375C1]">
        <CountUp to={number} />
      </p>

      <p className="mt-3 text-gray-600 text-sm">
        {label}
      </p>
    </motion.div>
  );
}

/* ===== HONOR ROW ===== */
// function Honor({ text }: { text: string }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{
//         y: -6,
//         boxShadow: "0px 15px 35px rgba(19,117,193,0.15)",
//       }}
//       viewport={{ once: true }}
//       className="
//         relative
//         bg-gradient-to-br
//         from-white
//         to-blue-50/40
//         border border-blue-100
//         rounded-xl
//         p-6
//         shadow-sm
//         transition
//       "
//     >
//       {/* Accent bar */}
//       <div className="
//         absolute left-0 top-0
//         h-full w-1.5
//         bg-[#1375C1]
//         rounded-l-xl
//       " />

//       <p className="text-gray-700 leading-relaxed pl-3">
        
//         {text}
//       </p>
//     </motion.div>
//   );
// }


// function PremiumHonor({
//   title,
//   text,
// }: {
//   title: string;
//   text: string;
// }) {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       whileHover={{
//         y: -8,
//         boxShadow: "0px 20px 50px rgba(19,117,193,0.18)",
//       }}
//       viewport={{ once: true }}
//       className="
//         relative
//         bg-gradient-to-br
//         from-white
//         to-blue-50/30
//         border border-blue-100
//         rounded-2xl
//         p-8
//         shadow-md
//         overflow-hidden
//         transition
//       "
//     >
//       {/* Medal Icon */}
//       <div className="text-3xl mb-4">
//         🎖
//       </div>

//       {/* Title */}
//       <h3 className="
//         font-semibold
//         text-[#1375C1]
//         mb-2
//         tracking-wide
//       ">
//         {title}
//       </h3>

//       {/* Text */}
//       <p className="text-gray-600 leading-relaxed">
//         {text}
//       </p>

//       {/* Glow Accent */}
//       <div className="
//         absolute
//         -bottom-10 -right-10
//         w-32 h-32
//         bg-[#1375C1]/10
//         rounded-full
//         blur-2xl
//       " />
//     </motion.div>
//   );
// }

function PremiumHonor({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        boxShadow: "0px 25px 60px rgba(0,0,0,0.15)",
      }}
      viewport={{ once: true }}
      className="
        relative
        bg-gradient-to-br
        from-white
        to-[#f9fbff]
        border
        border-[#e6ecf5]
        rounded-2xl
        p-8
        shadow-md
        overflow-hidden
        transition
      "
    >
      {/* Gold Accent Line */}
      <div className="
        absolute top-0 left-0
        h-1 w-full
        bg-gradient-to-r
        from-yellow-300
        via-yellow-400
        to-yellow-300
      " />

      {/* Watermark Seal */}
<div
  className="
    absolute inset-0
    flex items-center justify-center
    opacity-[0.03]
    pointer-events-none
    text-[120px]
    font-serif
    text-[#1375C1]
  "
>
  🎓
</div>


      {/* Medal */}
      <div className="text-4xl mb-4">
        🏅
      </div>

      {/* Title */}
      <h3 className="
        font-serif
        text-xl
        text-[#1375C1]
        mb-3
      ">
        {title}
      </h3>

      {/* Text */}
      <p className="
        text-gray-600
        leading-relaxed
        text-[15px]
      ">
        {text}
      </p>
    </motion.div>
  );
}
