"use client";

import { motion } from "framer-motion";

export default function SignatureReveal() {
  return (
    <div className="flex justify-center py-16 overflow-hidden">
      
      <div className="relative inline-block">
        
        {/* SIGNATURE TEXT */}
        <h3
          className="
            text-4xl md:text-5xl
            font-serif italic
            text-[#1375C1]/90
            tracking-wide
          "
        >
          — Dr. Maqdoom Farooqui —
        </h3>

        {/* REVEAL MASK */}
        <motion.div
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 2.2,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="
            absolute
            inset-0
            bg-white
          "
        />

      </div>

    </div>
  );
}
