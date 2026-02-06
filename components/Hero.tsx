"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import Sparkle from "@/components/Sparkle";


const playfair = Playfair_Display({
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[80vh] md:min-h-screen
        flex flex-col items-center justify-start md:justify-center
        text-center
        px-4
        pt-55
        md:pt-0
        overflow-hidden
      "
    >

{/* ✨ Sparkles */}

<Sparkle
  className="
    absolute top-[20%] left-[10%]
    w-10 h-10 md:w-15 md:h-15
    text-yellow-400
  "
/>

<Sparkle
  className="
    absolute top-[60%] left-[20%]
    w-5 h-5 md:w-9 md:h-9
    text-yellow-400
  "
/>

<Sparkle
  className="
    absolute top-[35%] right-[12%]
    w-7 h-7 md:w-9 md:h-9
    text-blue-400
  "
/>



      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
          text-gray-400
          mb-2
          text-base sm:text-lg
        "
      >
        hello there, I’m
      </motion.p>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className={`
          ${playfair.className}
          font-bold
          text-[#1375C1]
          leading-tight
          text-5xl
          sm:text-6xl
          md:text-7xl
          lg:text-8xl
          xl:text-8xl
        `}
      >
        Dr. Maqdoom Farooqui
      </motion.h1>

      {/* Subtitle */}
<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="
    mt-6
    text-gray-600
    text-sm
    sm:text-base
    md:text-lg
    max-w-xl
    flex items-center justify-center flex-wrap
  "
>
  Principal

  <span className="mx-2 text-yellow-400 animate-pulse">✦</span>

  Academic Leader

  <span className="mx-2 text-yellow-400 animate-pulse">✦</span>

  Quranic Scholar
</motion.p>

      
    </section>
  );
}
