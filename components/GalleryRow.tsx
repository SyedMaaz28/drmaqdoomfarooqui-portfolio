"use client"

import { motion } from "framer-motion"

type Props = {
  images: string[]
  reverse?: boolean
}

export default function GalleryRow({
  images,
  reverse = false,
}: Props) {
  /* Duplicate images for infinite loop */
  const loopImages = [...images, ...images]

  return (
    <div className="overflow-hidden relative py-6">
      <motion.div
        className="flex gap-8 w-max"
        animate={{
          x: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loopImages.map((src, i) => {
          const rotation =
            i % 2 === 0 ? "rotate-2" : "-rotate-2"

          return (
            <div
              key={i}
              className={`
                relative
                h-[320px] w-[220px]
                rounded-2xl
                overflow-hidden
                shadow-lg
                bg-white
                ${rotation}
              `}
            >
              <img
                src={src}
                alt=""
                className="
                  h-full w-full
                  object-cover
                "
              />
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
