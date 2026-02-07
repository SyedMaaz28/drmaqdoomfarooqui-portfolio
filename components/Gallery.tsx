"use client"

import { useEffect, useRef, useState } from "react"

const images = [
  "/gallery/1.jpeg",
  "/gallery/2.jpeg",
  "/gallery/3.jpeg",
  "/gallery/4.jpeg",
  "/gallery/5.jpeg",
]

const loopImages = [...images, ...images]

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  /* Start animation only when visible */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      id="gallery"
      className="
        py-30 mb-40
        overflow-hidden
        bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]
       
      "
    >
      {/* HEADING */}
      <h2 className="text-4xl font-bold text-center mb-20 text-[#1375C1]">
        Gallery
      </h2>

      {/* WRAPPER */}
      <div className="relative w-full overflow-hidden">
        {/* TRACK */}
        <div
          className={`
            flex gap-10 w-max px-10
            will-change-transform
            [transform:translate3d(0,0,0)]

            ${
              start
                ? "[animation:marquee_35s_linear_infinite]"
                : ""
            }
          `}
        >
          {loopImages.map((src, i) => (
            <div
              key={i}
              className="
                w-[220px] h-[360px]
                flex-shrink-0
                rounded-3xl
                overflow-hidden
                shadow-lg
                border border-blue-300 hover:border-[#1375C1]/40
                bg-white/30
                transition-transform duration-500
                hover:scale-105 hover:rotate-0
              "
              style={{
                transform:
                  i % 2 === 0
                    ? "rotate(-3deg)"
                    : "rotate(3deg)",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={src}
                alt="gallery"
                loading="lazy"   /* Lazy load */
                draggable={false}
                className="
                  w-full h-full
                  object-cover
                  pointer-events-none
                  select-none
                "
                style={{
                  transform: "translateZ(0)",
                }}
              />
            </div>
          ))}
        </div>

        

       {/* LEFT FADE */}
        <div
        className="
            pointer-events-none
            absolute top-0 left-0
            h-full w-20
            bg-gradient-to-r
            from-white/80
            to-transparent
        "
        />

        {/* RIGHT FADE */}
        <div
        className="
            pointer-events-none
            absolute top-0 right-0
            h-full w-20
            bg-gradient-to-l
            from-white/80
            to-transparent
        "
        />
        </div>


      {/* KEYFRAMES */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translate3d(0,0,0);
          }
          100% {
            transform: translate3d(-50%,0,0);
          }
        }
      `}</style>
    </section>
  )
}
