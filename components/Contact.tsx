"use client"

import VisitorCounter from "@/components/VisitorCounter";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        bg-[#2F6EA5]
        text-white
        px-6 md:px-16 lg:px-24
        py-20
        mt-20
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* ───────── TOP TEXT + LINKS ───────── */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            md:items-start
            md:justify-between
            gap-10
          "
        >
          {/* LEFT TEXT */}
          <p
            className="
              max-w-xl
              text-[18px] md:text-[20px]
              leading-relaxed
              text-white/80
              font-medium
            "
          >
            Let’s connect around education, research, innovation,
            mentorship, and academic leadership. From guiding
            institutions to shaping young minds and contributing to
            scientific advancement, meaningful conversations are
            always welcome.
          </p>

          {/* RIGHT LINKS */}
          <div
            className="
              flex items-center
              gap-4 md:gap-6
              text-white
              font-medium
            "
          >
            <a
              href="https://www.linkedin.com/in/dr-maqdoom-farooqui-7aab953b/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
              className="hover:underline"
            >
              linkedin
            </a>

            <span className="w-2 h-2 bg-yellow-400 rounded-full" />

            <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=drmaqdoomfarooqui@gmail.com"
            target="_blank"
            className="hover:underline"
            >
            email
            </a>

             

            <span className="w-2 h-2 bg-yellow-400 rounded-full" />

            <a
              href="https://scholar.google.com/citations?hl=en&user=wOraNEMAAAAJ&view_op=list_works"
              className="hover:underline"
            >
              google scholar
            </a>
          </div>
        </div>

        {/* ───────── BIG HEADING ───────── */}
        <div className="mt-24">
          <h2
            className="
              text-[80px]
              md:text-[140px]
              leading-[0.85]
              font-serif
              tracking-[-0.04em]
            "
          >
            let’s <br />
            connect!
          </h2>
        </div>

        {/* ───────── DIVIDER ───────── */}
        <div className="mt-16 border-t border-white/30" />

        {/* ───────── FOOTER ───────── */}
        <div
          className="
            mt-8
            flex
            flex-col md:flex-row
            md:items-center
            md:justify-between
            gap-4
            text-white/70
            text-sm
          "
        >
          <p>
            Designed & Developed with ❤️ for
            Dr. Maqdoom Farooqui
          </p>

          <p>Updated 2026</p>
          <VisitorCounter />

        </div>
      </div>
    </section>
  )
}
