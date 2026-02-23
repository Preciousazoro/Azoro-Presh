"use client";

import { motion } from "framer-motion";
import { Code, Palette, Server } from "lucide-react";

export default function Experience() {
  const skills = [
    { name: "Next.js", level: 80 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Shadcn/UI", level: 70 },
  ];

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 py-16 md:py-24 md:ml-24 
                 bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white transition-colors duration-500"
    >
      {/* ===== Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#ff004f] font-semibold mb-2 uppercase tracking-wide">
          My Abilities
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold">My Experience</h2>
      </motion.div>

      {/* ===== Content Grid ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
        {/* === Left Column: Roles === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {/* Frontend Developer */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg group-hover:bg-[#ff004f]/10 transition">
              <Code className="text-[#ff004f] w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                More than 2 years
              </p>
            </div>
          </div>

          {/* UI/UX Designer */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg group-hover:bg-[#ff004f]/10 transition">
              <Palette className="text-[#ff004f] w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Web App Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                More than 1 year
              </p>
            </div>
          </div>

          {/* Backend Developer */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg group-hover:bg-[#ff004f]/10 transition">
              <Server className="text-[#ff004f] w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Backend Developer</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">1 year</p>
            </div>
          </div>
        </motion.div>

        {/* === Right Column: Skills === */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {skills.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
                <span className="text-[#ff004f] font-semibold">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded-full overflow-hidden">
                <motion.div
                  className="h-2 bg-[#ff004f] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}









// "use client"



// export default function Experience() {
//   return (
//  <section
//         id="experience"
//         className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-20 md:ml-24 bg-[#0a0a0a] text-white"
//       >
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-[#ff004f] font-semibold mb-2">My Abilities</p>
//           <h2 className="text-4xl md:text-5xl font-extrabold">My Experience</h2>
//         </div>

//         {/* Two Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
//           {/* ===== Left Column ===== */}
//           <div className="space-y-10">
//             {/* Frontend Developer */}
//             <div className="flex items-start gap-4">
//               <div className="text-[#ff004f] text-2xl">{`{}`}</div>
//               <div>
//                 <h3 className="text-xl font-semibold">Frontend Developer</h3>
//                 <p className="text-gray-400 text-sm">More than 2 years</p>
//               </div>
//             </div>

//             {/* UI/UX Designer */}
//             <div className="flex items-start gap-4">
//               <div className="text-[#ff004f] text-2xl">📘</div>
//               <div>
//                 <h3 className="text-xl font-semibold">UI / UX Design</h3>
//                 <p className="text-gray-400 text-sm">More than 1 year</p>
//               </div>
//             </div>

//             {/* Backend Developer */}
//             <div className="flex items-start gap-4">
//               <div className="text-[#ff004f] text-2xl">💻</div>
//               <div>
//                 <h3 className="text-xl font-semibold">Backend Developer</h3>
//                 <p className="text-gray-400 text-sm">1 year </p>
//               </div>
//             </div>
//           </div>

//           {/* ===== Right Column (Skill Bars) ===== */}
//           <div className="space-y-8">
//             {/* Skill Item */}
//             {[
//               { name: "Next.js", level: 70 },
//               { name: "React", level: 80 },
//               { name: "Node.js", level: 75 },
//               { name: "Tailwind CSS", level: 85 },
//               { name: "Shadcn/ui", level: 65 },
//             ].map((skill) => (
//               <div key={skill.name}>
//                 <div className="flex justify-between mb-2">
//                   <span className="font-medium">{skill.name}</span>
//                   <span className="text-[#ff004f] font-semibold">{skill.level}%</span>
//                 </div>
//                 <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
//                   <div
//                     className="h-2 bg-[#ff004f] rounded-full transition-all duration-700 ease-in-out"
//                     style={{ width: `${skill.level}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//   )
// };
   