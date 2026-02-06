"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Sparkle from "@/components/Sparkle";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-10 md:py-10
        px-6 md:px-50
        max-w-7xl mx-auto
      "
    >
      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest uppercase text-[#1375C1] mb-3">
            About
          </p>

          {/* ✅ CHANGED: Word-by-word reveal */}
          <motion.p
            className="
    text-gray-600
    leading-relaxed
    text-base md:text-lg
    max-w-xl
  "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: { staggerChildren: 0.08 },
              },
            }}
          >
            {"Dr. Maqdoom Farooqui is a distinguished academician and administrator serving as the Principal of Dr. Rafiq Zakaria College for Women in Aurangabad (Chhatrapati Sambhajinagar). A Ph.D. holder and active researcher with 37+ publications in Chemistry, he is deeply involved in the Maulana Azad Education Trust and is widely recognized for his contributions to women’s education, academic leadership, and community engagement."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: { opacity: 1, y: 0,transition: { duration: 0.6 , ease: "easeOut"} },
                  }}
                  className="inline-block mr-1"
                >
                  {word}
                </motion.span>
              ))}
          </motion.p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">


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
    absolute top-6 right-2
    md:top-10 md:-right-8
    w-5 h-5 md:w-6 md:h-6
    text-blue-400
  "
/>

<Sparkle
  className="
    absolute bottom-4 left-4
    md:bottom-10 md:-left-10
    w-4 h-4 md:w-5 md:h-5
    text-yellow-400
  "
/>


          {/* Blue Accent Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
            absolute
            w-[260px] h-[340px]
            md:w-[320px] md:h-[420px]
            bg-[#1375C1]
            rounded-[60%]
            translate-x-6 translate-y-6
          "
          ></motion.div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
    relative
    w-[260px] h-[340px]
    md:w-[320px] md:h-[420px]
    rounded-[50%]
    overflow-hidden
    border-4 border-white
    shadow-xl
  "
          >
            <Image
              src="/sir.png"
              alt="Dr Maqdoom Farooqui"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
