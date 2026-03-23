"use client";

import { motion } from "framer-motion";
import { Code, Palette, Server, 
  // React & Next.js
  Box, 
  // Node.js
  Server as NodeIcon,
  // JavaScript
  Code2,
  // Tailwind CSS
  Palette as CssIcon,
  // Shadcn/UI
  Layout,
  // API
  Zap,
  // Database
  Database,
  // TypeScript
  FileCode,
  // AI
  Brain } from "lucide-react";

export default function Experience() {
  const skillsData = {
    advanced: [
      { name: "React", icon: Box, color: "text-cyan-500" },
      { name: "Next.js", icon: Box, color: "text-gray-800 dark:text-white" },
      { name: "Node.js", icon: NodeIcon, color: "text-green-600" },
      { name: "JavaScript (ES6+)", icon: Code2, color: "text-yellow-500" },
    ],
    intermediate: [
      { name: "Tailwind CSS", icon: CssIcon, color: "text-cyan-600" },
      { name: "Shadcn/UI", icon: Layout, color: "text-slate-600" },
      { name: "API Integration", icon: Zap, color: "text-purple-500" },
      { name: "MongoDB / PostgreSQL", icon: Database, color: "text-green-700" },
    ],
    basic: [
      { name: "TypeScript", icon: FileCode, color: "text-blue-600" },
      { name: "AI Prompt Evaluation", icon: Brain, color: "text-pink-500" },
    ],
  };

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
        <h2 className="text-4xl md:text-5xl font-extrabold">Skills</h2>
      </motion.div>

      {/* ===== Skills Section ===== */}
      <div className="w-full max-w-6xl space-y-12">
        {/* Advanced Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Advanced
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillsData.advanced.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(255, 0, 79, 0.2)" 
                  }}
                  className="bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 
                           rounded-lg p-4 flex flex-col items-center justify-center gap-3 
                           hover:border-[#ff004f] transition-all duration-300 cursor-pointer group"
                >
                  <IconComponent className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Intermediate Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Intermediate
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillsData.intermediate.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(255, 0, 79, 0.2)" 
                  }}
                  className="bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 
                           rounded-lg p-4 flex flex-col items-center justify-center gap-3 
                           hover:border-[#ff004f] transition-all duration-300 cursor-pointer group"
                >
                  <IconComponent className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Basic / Learning Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Basic / Learning
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillsData.basic.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 10px 25px rgba(255, 0, 79, 0.2)" 
                  }}
                  className="bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 
                           rounded-lg p-4 flex flex-col items-center justify-center gap-3 
                           hover:border-[#ff004f] transition-all duration-300 cursor-pointer group"
                >
                  <IconComponent className={`w-8 h-8 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}