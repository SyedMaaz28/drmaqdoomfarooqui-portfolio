"use client"

import { ResearchPaper } from "@/lib/researchData"
import { motion } from "framer-motion"

type Props = {
  paper: ResearchPaper
}

/* ───────── TAG COLOR MAP ───────── */
const tagColors: Record<string, string> = {
  "Organic Chemistry": "bg-purple-100 text-purple-700",
  Catalysis: "bg-indigo-100 text-indigo-700",
  "Green Synthesis": "bg-emerald-100 text-emerald-700",
  "Heterocyclic Compounds": "bg-violet-100 text-violet-700",
  "Indole Derivatives": "bg-fuchsia-100 text-fuchsia-700",
  "Green Solvents": "bg-teal-100 text-teal-700",

  Nanotechnology: "bg-cyan-100 text-cyan-700",
  "Silver Nanoparticles": "bg-sky-100 text-sky-700",
  Biomaterials: "bg-blue-100 text-blue-700",

  "Environmental Chemistry": "bg-green-100 text-green-700",
  Adsorption: "bg-cyan-100 text-cyan-700",
  "Wastewater Treatment": "bg-lime-100 text-lime-700",
  "Heavy Metals": "bg-teal-200 text-teal-800",
  "Agricultural Waste": "bg-stone-100 text-stone-700",
  "Dye Removal": "bg-orange-100 text-orange-700",

  "Analytical Chemistry": "bg-pink-100 text-pink-700",
  HPLC: "bg-rose-100 text-rose-700",
  "Pharmaceutical Analysis": "bg-red-100 text-red-700",
  "Drug Quantification": "bg-orange-200 text-orange-800",

  "Physical Chemistry": "bg-indigo-100 text-indigo-700",
  "Liquid Mixtures": "bg-blue-200 text-blue-800",
  "Refractive Index": "bg-cyan-200 text-cyan-800",
  "Molar Refraction": "bg-teal-200 text-teal-800",

  Thermodynamics: "bg-orange-100 text-orange-700",
}

export default function ResearchCard({ paper }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}

      whileHover={{
        y: -6,            // reduced movement
        scale: 1.01,     // lighter scale
      }}

      className="
  h-[260px]
  flex flex-col justify-between
  rounded-2xl

  bg-white/90
  shadow-md shadow-black/5

  p-7
  hover:shadow-xl
  hover:-translate-y-1
  transition-all duration-300
"

    >
      {/* TOP */}
      <div>
        {/* TAGS */}
        <div className="flex flex-wrap gap-2">
          {paper.tags.slice(0, 4).map((tag, i) => (
            <span
              key={i}
              className={`
                text-xs px-3 py-1 rounded-full font-medium
                ${tagColors[tag] || "bg-gray-100 text-gray-700"}
              `}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="mt-4 text-lg font-semibold text-gray-900 leading-snug line-clamp-2">
          {paper.title}
        </h3>

        {/* AUTHORS */}
        <p className="text-sm text-gray-600 mt-2 line-clamp-1">
          {paper.authors}
        </p>

        {/* JOURNAL */}
        <p className="text-sm text-gray-500 mt-1 line-clamp-1">
          {paper.journal} • {paper.year}
        </p>
      </div>

      {/* FOOTER */}
      <div className="flex items-center justify-between mt-4">
        <span className="text-sm font-medium  text-amber-700 px-4 py-1.5 rounded-full">
          ⭐ {paper.citations} citations
        </span>

        <a
          href={paper.link}
          target="_blank"
          className="text-blue-600 font-medium text-sm hover:underline"
        >
          View Paper →
        </a>
      </div>
    </motion.div>
  )
}
