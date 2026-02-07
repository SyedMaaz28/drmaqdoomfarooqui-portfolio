// "use client";

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const links = [
//   { name: "Home", id: "home" },
//   { name: "About", id: "about" },
//   { name: "Achievements", id: "achievements" },
//   { name: "Work History", id: "workhistory" },
//   { name: "Research", id: "research" },
//   { name: "Quranic Teaching", id: "quranicteachings" },
//   { name: "Gallery", id: "media" },
//   { name: "Contact", id: "contact" },
// ];

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       {/* DESKTOP NAV */}
// <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
//   <nav className="
//     flex items-center gap-8
//     px-10 py-4
//     rounded-full
//     bg-white/70 backdrop-blur-xl
//     shadow-[0_8px_30px_rgba(0,0,0,0.08)]
//     border border-gray-200
//     text-sm font-medium
//   ">

//     {links.map(link => (
//       <a
//         key={link.id}
//         href={`#${link.id}`}
//         className="
//           whitespace-nowrap
//           text-gray-700
//           hover:text-black
//           transition-colors
//           animate-pulse
//         "
//       >
//         {link.name}
//       </a>
//     ))}

//   </nav>
// </div>


//       {/* MOBILE BUTTON */}
//       <div className="md:hidden fixed top-5 right-5 z-50">
//         <button
//           onClick={() => setOpen(!open)}
//           className="
//             bg-white/80 backdrop-blur-md
//             p-3 rounded-full
//             shadow-md border
//           "
//         >
//           {open ? <X size={20} /> : <Menu size={20} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       <AnimatePresence>
//         {open && (
//           <>
//             {/* Blur BG */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               onClick={() => setOpen(false)}
//               className="
//                 fixed inset-0
//                 bg-black/20 backdrop-blur-sm
//                 z-40 md:hidden
//               "
//             />

//             {/* Card */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95, y: -10 }}
//               animate={{ opacity: 1, scale: 1, y: 0 }}
//               exit={{ opacity: 0, scale: 0.95, y: -10 }}
//               transition={{ duration: 0.25 }}
//               className="
//     fixed
//     top-5 right-5 left-5
//     bg-white
//     rounded-3xl
//     shadow-xl
//     p-6
//     z-50
//     md:hidden
//   "
//             >
//               {/* TOP BAR */}
//               <div className="flex justify-end">
//                 <button
//                   onClick={() => setOpen(false)}
//                   className="
//         border border-gray-300
//         rounded-full
//         p-2
//         hover:bg-gray-100
//         transition
//       "
//                 >
//                   <X size={18} />
//                 </button>
//               </div>

//               {/* Links */}
//               <div className="flex flex-col gap-6 text-lg font-medium mt-4">
//                 {links.map((link) => (
//                   <a
//                     key={link.id}
//                     href={`#${link.id}`}
//                     onClick={() => setOpen(false)}
//                     className="hover:text-[#1375C1]"
//                   >
//                     {link.name}
//                   </a>
//                 ))}
//               </div>

//               {/* Footer */}
//               <p className="mt-10 text-sm text-gray-400">
//                 Dr. Maqdoom Farooqui Portfolio
//               </p>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Achievements", id: "achievements" },
  { name: "Work History", id: "workhistory" },
  { name: "Research", id: "research" },
  { name: "Quranic Teaching", id: "quranicteachings" },
  { name: "Gallery", id: "media" },
  { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  // Scroll Spy
  useEffect(() => {
    const sections = links.map(link =>
      document.getElementById(link.id)
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3,    // For Tuning Highlight
      }
    );

    sections.forEach(sec => sec && observer.observe(sec));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* DESKTOP NAV */}
      <div className="hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <nav className="
          flex items-center gap-8
          px-10 py-4
          rounded-full
          bg-white/70 backdrop-blur-xl
          shadow-[0_8px_30px_rgba(0,0,0,0.08)]
          border border-gray-200
          text-sm font-medium
        ">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`
                whitespace-nowrap
                transition-colors
                ${
                  active === link.id
                    ? "text-[#1375C1] font-semibold"
                    : "text-gray-600 hover:text-black"
                }
              `}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* MOBILE BUTTON */}
      <div className="md:hidden fixed top-10 right-10 z-60">
        <button
          onClick={() => setOpen(!open)}
          className="
            bg-white/80 backdrop-blur-md
            p-3 rounded-full
            shadow-md border
          "
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="
                fixed top-5 right-5 left-5
                bg-white rounded-3xl shadow-xl
                p-6 z-50 md:hidden
              "
            >
              <div className="flex flex-col gap-6 text-lg font-medium">
                {links.map(link => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className={
                      active === link.id
                        ? "text-[#1375C1]"
                        : ""
                    }
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <p className="mt-10 text-sm text-gray-400">
                Dr. Maqdoom Farooqui Portfolio
              </p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
