"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-10 md:py-10
        px-6 md:px-30
        max-w-7xl mx-auto
      "
    >
      <div className="grid md:grid-cols-2 gap-6 items-center">

        {/* LEFT CONTENT */}
        <div>
          {/* <p className="text-lg mb-4 text-[#1375C1]"> */}
          <p className="text-sm tracking-widest uppercase text-[#1375C1] mb-3">
            About
          </p>

          <h2 className="
            text-2xl md:text-3xl
            font-semibold
            leading-snug
            text-gray-600
            mb-6
          ">
            Dr. Maqdoom Farooqui is a prominent academician 
            and administrator dedicated to empowering women 
            through education.
          </h2>

          <p className="text-gray-500 leading-relaxed mb-4">
            He currently serves as the Principal of 
            <span className="font-medium"> Dr. Rafiq Zakaria College for Women</span> 
            in Aurangabad (Chhatrapati Sambhajinagar).
          </p>

          <p className="text-gray-500 leading-relaxed mb-4">
            A key figure in the Maulana Azad Education Trust, 
            he has also held leadership roles at 
            Maulana Azad College of Arts, Science & Commerce.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Holding a Ph.D., he actively contributes to research 
            with 37+ publications in Chemistry and frequently 
            speaks at academic and social forums.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">

          {/* Blue Accent Background */}
          <div className="
            absolute
            w-[260px] h-[340px]
            md:w-[320px] md:h-[420px]
            bg-[#1375C1]
            rounded-[50%]
            translate-x-6 translate-y-6
          " />

          {/* Portrait */}
          <div className="
            relative
            w-[260px] h-[340px]
            md:w-[320px] md:h-[420px]
            rounded-[50%]
            overflow-hidden
            border-4 border-white
            shadow-xl
          ">
            <Image
              src="/sir.png"   // ← replace with actual image
              alt="Dr Maqdoom Farooqui"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
