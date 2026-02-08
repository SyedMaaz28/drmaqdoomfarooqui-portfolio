"use client"
import Sparkle from "@/components/Sparkle";

import { motion } from "framer-motion"

const duas = [
  {
    arabic:
      "رَبِّ يَسِّرْ وَلَا تُعَسِّرْ وَتَمِّمْ بِالْخَيْرِ",
    translation:
      "My Lord, make it easy and do not make it difficult, and complete it with goodness.",
  },
  {
    arabic:
      "وَأُفَوِّضُ أَمْرِي إِلَى اللَّهِ ۚ إِنَّ اللَّهَ بَصِيرٌ بِالْعِبَادِ",
    translation:
      "I entrust my affairs to Allah. Indeed, Allah is All-Seeing of His servants.",
  },
  {
    arabic:
      "وَلَمْ أَكُن بِدُعَائِكَ رَبِّ شَقِيًّا",
    translation:
      "And never have I been disappointed in my supplication to You, my Lord.",
  },
  {
    arabic:
      "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي",
    translation:
      "My Lord, expand for me my chest, ease my task, and untie the knot from my tongue so they may understand my speech.",
  },
]

export default function QuranSection() {
  return (
    <section
      id="quranicteachings"
      className="
        relative
        py-0
        px-6 md:px-16 lg:px-24
        overflow-hidden
        bg-gradient-to-b
        from-transparent
        via-blue-50/30
        to-transparent
        backdrop-blur-[1px]
      "
    >

      {/* HEADING */}
      <h2 className="text-3xl font-bold text-center mb-12 text-[#1375C1]">
        Quranic Teachings
      </h2>
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
      {/* BACKGROUND PATTERN */}
      {/* <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:22px_22px]" /> */}

      <div className="relative max-w-6xl mx-auto text-center">

        {/* ───────── AYAH ───────── */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
            text-5xl md:text-6xl
            text-slate-900
            leading-loose
            mb-6
          "
          style={{ fontFamily: "Amiri, serif" }}
        >
          وَرَتِّلِ ٱلْقُرْءَانَ تَرْتِيلًا
        </motion.h2>

        <p className="text-lg italic text-gray-600 mb-12">
          “Recite the Qur’an with measured recitation.”
        </p>

        {/* DIVIDER */}
        <div className="h-[2px] w-24 mx-auto mb-14 bg-gradient-to-r from-blue-400 to-blue-700" />

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="
            text-gray-700
            text-lg
            leading-relaxed
            mb-20
            max-w-3xl
            mx-auto
          "
        >
          Alongside his academic leadership, Dr. Maqdoom
          Farooqui has devoted decades to the teaching of
          the Holy Qur’an, guiding students in recitation,
          reflection, and spiritual discipline.
          His sessions begin not merely with instruction,
          but with remembrance grounding knowledge in
          humility, clarity, and divine reliance.
        </motion.p>

        {/* ───────── DUAS GRID ───────── */}
        <div className="grid md:grid-cols-2 gap-8 mb-28">

          {duas.map((dua, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
              }}
              viewport={{ once: true }}
              className="
                p-8
                rounded-2xl
                bg-white/80
                backdrop-blur-sm
                border border-blue-100 hover:border-[#1375C1]/40
                shadow-md
                hover:shadow-xl
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              {/* ARABIC */}
              <p
                className="
                  text-2xl
                  leading-loose
                  text-slate-900
                  mb-4
                "
                style={{
                  fontFamily: "Amiri, serif",
                }}
              >
                {dua.arabic}
              </p>

              {/* TRANSLATION */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {dua.translation}
              </p>
            </motion.div>
          ))}

        </div>

        {/* ───────── IMAGE STRIP ───────── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
            flex
            justify-center
            flex-wrap
            gap-8
            mb-20
          "
        >
          {[
            "/quran/1.jpeg",
            "/quran/2.jpeg",
            "/quran/3.jpeg",
            "/quran/4.jpeg",
            "/quran/5.jpeg",
          ].map((src, i) => (
            <div
              key={i}
              className={`
                w-[180px] h-[260px]
                rounded-2xl
                overflow-hidden
                shadow-lg
                border border-white/40
                bg-white
                transform
                ${i % 2 === 0 ? "rotate-2" : "-rotate-2"}
                hover:rotate-0
                hover:scale-105
                transition-all duration-500
              `}
            >
              <img
                src={src}
                alt="Quran Teaching"
                className="
                  w-full h-full
                  object-cover
                "
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        {/* ───────── CTA ───────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 text-gray-500">
            Explore Qur’anic Teaching & Spiritual Work
          </h3>

          <a
            href="/quranic-work"
            className="
              inline-block
              px-8 py-3
              rounded-full
              bg-[#1375C1]
              text-white
              font-medium
              hover:bg-[#1375C1]
              transition
              shadow-lg
            "
          >
            View Complete Work →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
