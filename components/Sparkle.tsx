"use client";

import { motion } from "framer-motion";

export default function Sparkle({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.svg
      animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
        fill="currentColor"
      />
    </motion.svg>
  );
}
