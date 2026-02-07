export type ResearchPaper = {
  title: string
  authors: string
  journal: string
  year: string
  citations: number
  tags: string[]   // ← changed
  abstract: string
  link: string
}

export const papers: ResearchPaper[] = [
  {
    title:
      "Organocatalyzed domino reactions: diversity oriented synthesis of pyran-annulated scaffolds using in situ-developed benzylidenemalononitriles",
    authors: "Abdul Ahad, Maqdoom Farooqui",
    journal: "Research on Chemical Intermediates",
    year: "2017",
    citations: 41,
    tags: [
      "Organic Chemistry",
      "Catalysis",
      "Green Synthesis",
      "Heterocyclic Compounds",
    ],
    abstract:
      "Multicomponent organocatalytic synthesis of pyran-annulated heterocycles using aspartic acid catalyst in aqueous ethanol.",
    link:
      "https://www.researchgate.net/profile/Abdul-Ahad-25/publication/309307641_Organocatalyzed_domino_reactions_diversity_oriented_synthesis_of_pyran-annulated_scaffolds_using_in_situ-developed_benzylidenemalononitriles/links/5fb558f6299bf1a57a45397d/Organocatalyzed-domino-reactions-diversity-oriented-synthesis-of-pyran-annulated-scaffolds-using-in-situ-developed-benzylidenemalononitriles.pdf",
  },

  {
    title:
      "Papaya fruit extract: a potent source for synthesis of bionanoparticle",
    authors:
      "Farooqui Maqdoom, Hashmi Sabeen, Shaikh Zarina",
    journal: "Nanotechnology Research",
    year: "2013",
    citations: 34,
    tags: [
      "Nanotechnology",
      "Green Synthesis",
      "Silver Nanoparticles",
      "Biomaterials",
    ],
    abstract:
      "Eco-friendly biosynthesis of silver nanoparticles using papaya fruit extract as reducing and capping agent.",
    link:
      "https://www.cabidigitallibrary.org/doi/full/10.5555/20133364060",
  },

  {
    title:
      "Removal of copper (II) from aqueous solution and waste water by Prosopis juliflora leaf powder by adsorption",
    authors:
      "Maqdoom Farooqui, Milind Ubale Sureshkumar Hainor",
    journal:
      "International Journal of Application or Innovation in Engineering & Management",
    year: "2013",
    citations: 18,
    tags: [
      "Environmental Chemistry",
      "Adsorption",
      "Wastewater Treatment",
      "Heavy Metals",
    ],
    abstract:
      "Adsorptive removal of copper ions using low-cost Prosopis juliflora biomass.",
    link:
      "https://scholar.google.com/scholar?cluster=8144531607538102066&hl=en&oi=scholarr",
  },

  {
    title:
      "Adsorption studies of heavy metal ion by low cost agricultural by-products: Bajra powder",
    authors:
      "Mazhar Farooqui, Sayyad Sultan, Maqdoom Farooqui, SH Quadri",
    journal: "Indian Journal of Chemical Technology",
    year: "2004",
    citations: 15,
    tags: [
      "Environmental Chemistry",
      "Adsorption",
      "Agricultural Waste",
      "Heavy Metals",
    ],
    abstract:
      "Use of Bajra powder as low-cost adsorbent for removal of toxic heavy metal ions.",
    link:
      "https://scholar.google.com/scholar?cluster=12293924578121242493&hl=en&oi=scholarr",
  },

  {
    title:
      "Glycine Catalyzed Synthesis of 3-Indole Derivatives Mediated by PEG-400 in Water",
    authors: "Abdul Ahad, Maqdoom Farooqui",
    journal: "Chemical Science Transactions",
    year: "2016",
    citations: 13,
    tags: [
      "Organic Chemistry",
      "Catalysis",
      "Indole Derivatives",
      "Green Solvents",
    ],
    abstract:
      "Efficient glycine-catalyzed synthesis of indole derivatives in PEG-400 aqueous medium.",
    link:
      "https://d1wqtxts1xzle7.cloudfront.net/95857880/8db1ea4f16e852704becef88d8cec8d8f3bf-libre.pdf",
  },

  {
    title:
      "Studies on the isotherms, kinetics and thermodynamics of adsorption of crystal violet on low cost materials",
    authors:
      "Abdo Taher, Mohd Mohsin, Mazahar Farooqui, Maqdoom Farooqui",
    journal: "Journal of Advanced Scientific Research",
    year: "2012",
    citations: 13,
    tags: [
      "Adsorption",
      "Dye Removal",
      "Thermodynamics",
      "Wastewater Treatment",
    ],
    abstract:
      "Kinetic and thermodynamic evaluation of crystal violet dye adsorption using low-cost adsorbents.",
    link:
      "https://sciensage.info/index.php/JASR/article/download/73/713",
  },

  {
    title:
      "Determination of gabapentin in bulk drug and in pharmaceutical dosage form by HPLC method",
    authors:
      "B Udaykumar Rao, F Maqdoom, Anna Pratima Nikalje",
    journal: "Journal of the Chilean Chemical Society",
    year: "2009",
    citations: 13,
    tags: [
      "Analytical Chemistry",
      "HPLC",
      "Pharmaceutical Analysis",
      "Drug Quantification",
    ],
    abstract:
      "Validated RP-HPLC method for determination of gabapentin in pharmaceutical formulations.",
    link:
      "https://www.scielo.cl/scielo.php?pid=S0717-97072009000400022&script=sci_arttext&tlng=pt",
  },

  {
    title:
      "Verification of the molar refraction as an additive and constitutive property of binary liquid mixtures of water-ethanol and benzene-ethanol",
    authors:
      "Javed Khan, Maqdoom Farooqui, SH Quadri",
    journal: "Rasayan Journal of Chemistry",
    year: "2011",
    citations: 11,
    tags: [
      "Physical Chemistry",
      "Liquid Mixtures",
      "Refractive Index",
      "Molar Refraction",
    ],
    abstract:
      "Experimental study validating molar refraction properties in binary liquid mixtures.",
    link:
      "https://www.rasayanjournal.co.in/vol-4/issue-4/38.pdf",
  },
]
