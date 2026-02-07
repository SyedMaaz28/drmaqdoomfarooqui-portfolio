"use client"

import { useState, useMemo } from "react"
import { papers } from "@/lib/researchData"
import ResearchCard from "./ResearchCard"
import { motion } from "framer-motion"

export default function Research() {
  /* ───────── TAG STATE ───────── */
  const [selectedTags, setSelectedTags] =
    useState<string[]>([])

  /* ───────── UNIQUE TAGS ───────── */
  const allTags = Array.from(
    new Set(
      papers.flatMap((p) => p.tags)
    )
  )

  /* ───────── FILTER LOGIC (OR) ───────── */
  const filteredPapers = useMemo(() => {
    return papers.filter((paper) =>
      selectedTags.length === 0 ||
      selectedTags.some((tag) =>
        paper.tags.includes(tag)
      )
    )
  }, [selectedTags])

  /* ───────── TAG TOGGLE ───────── */
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    )
  }

  return (
    <section
      id="research"
      className="
        py-24
        px-6 md:px-16 lg:px-24
        bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]

      "
    >
      {/* HEADING */}
      <h2 className="text-3xl font-bold text-center mb-12 text-[#1375C1]">
        Research & Publications
      </h2>

      {/* ───────── TAG FILTER ───────── */}
      <div className="flex flex-wrap gap-3 justify-center mb-16">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`
              px-4 py-1.5 rounded-full
              text-sm font-medium
              border transition-all duration-300

              ${
                selectedTags.includes(tag)
                  ? "bg-[#1375C1] text-white shadow-md scale-105"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* ───────── GRID ───────── */}
      <motion.div
        layout="position"   /* smoother than full layout */
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
        className="
          grid md:grid-cols-2 gap-12
        "
      >
        {filteredPapers.map(
          (paper, index) => (
            <motion.div
              key={paper.title}
              layout="position"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.04,
              }}
            >
              <ResearchCard
                paper={paper}
                onClick={() => {}}
              />
            </motion.div>
          )
        )}
      </motion.div>

      {/* ───────── SCHOLAR LINK ───────── */}
      <div className="text-center mt-16">
        <a
          href="https://scholar.google.com/citations?user=wOraNEMAAAAJ&hl=en"
          target="_blank"
          className="
            text-[#1375C1] font-medium
            hover:underline
          "
        >
          View All Publications on Google Scholar →
        </a>
      </div>
    </section>
  )
}
