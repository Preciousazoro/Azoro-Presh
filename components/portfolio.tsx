  "use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (selectedProject && !target.closest(".modal-content")) {
        setSelectedProject(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="relative flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-20 md:ml-24 
                 bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white transition-colors duration-500"
    >
      {/* ===== Project Modal ===== */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 
                       bg-black/70 dark:bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content relative w-full max-w-4xl max-h-[90vh] overflow-y-auto 
                         bg-white dark:bg-[#121212] border border-gray-300 dark:border-gray-700 
                         rounded-xl shadow-xl transition-all duration-300"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute -top-10 right-0 text-gray-600 dark:text-gray-300 hover:text-[#ff004f] transition-colors"
                aria-label="Close modal"
              >
                <X size={32} />
              </button>

              <div className="relative w-full aspect-video bg-gray-200 dark:bg-black rounded-t-xl overflow-hidden">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-white/70 dark:bg-black/50 backdrop-blur-sm rounded-b-xl transition-colors">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <span>📅 {selectedProject.date}</span>
                  <span>🛠️ {selectedProject.tech}</span>
                  <span>👨‍💻 {selectedProject.role}</span>
                </div>

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block px-6 py-2 bg-[#ff004f] text-white rounded-md hover:bg-[#ff3366] transition-colors"
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Section Header ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[#ff004f] font-semibold mb-2">My Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-extrabold">Recent Works</h2>
      </motion.div>

      {/* ===== Portfolio Grid ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full"
      >
        {[
          {
            title: "Poplox",
            image: "https://i.postimg.cc/zX5HS5mt/Screenshot-2025-11-06-at-1-44-36-AM.png",
            description:
              "Helping creators and brands boost their social media presence with powerful tools designed to grow your audience and engagement.",
            date: "12 Aug 2024",
            tech: "React • Tailwind • Node.js • MongoDB",
            role: "Frontend",
            link: "https://poplox.com/",
          },


          {
            title: "TrustLoan Platform",
            image: "https://i.postimg.cc/qRzrf1tN/Whats-App-Image-2025-11-06-at-2-42-41-AM.jpg",
            description:
              "A Decentralized Fincance (DeFi) platform built to provide short-term crypto loans specifically tailored for active traders. It allows users to borrow digital assets, enabling them to leverage their trading positions",
            date: "22 Jul 2024",
            tech: "React • Express • PostgreSQL",
            role: "Full Stack",
            link: "https://trustloaneth.com/",
          },

          {
            title: "MoonChad",
            image: "https://i.postimg.cc/SR3JF01q/Screenshot-2025-11-06-at-2-52-46-AM.png",
            description:
              "A Meme Coin Project built on a decentralized web platform. This project focuses on the initial launch and distribution phase for a new cryptocurrency token.",
            date: "10 Jan 2025",
            tech: "Next.js • Framer Motion",
            role: "Frontend",
            link: "https://moon-chad.vercel.app/",
          },
          

          {
            title: "Online Library",
            image: "https://i.postimg.cc/kgnknGVP/Whats-App-Image-2025-11-06-at-5-58-58-AM.jpg",
            description:
              "This platform allows people to read important books, View helpful screenshots and PDF's, and watch instructional videos, serving as a comprehensive resource for knowledge and learning.",
            date: "19 Nov 2024",
            tech: "React • Express • PostgreSQL",
            role: "Full Stack",
            link: "https://criminology-and-security-library.onrender.com/",
          },
          

          {
            title: "TaskKash",
            image: "https://i.postimg.cc/cLv36hGK/Screenshot-2025-11-06-at-2-28-07-AM.png",
            description:
              "A modern web-based task and project management platform designed to help users organize tasks, track productivity, and manage workflows efficiently.",
            date: "04 Aug 2025",
            tech: "Next.js • CSS • API Integration",
            role: "Backend",
            link: "https://taskkash-project.onrender.com/",
          },
          

          {
            title: "Gift Card Wave",
            image: "https://i.postimg.cc/Qx5cHSD7/Screenshot-2026-01-25-at-9-00-54-PM.png",
            description:
              "A secure and user-friendly for buying and selling gift cards. The platform facilitates fast, reliable  transactions, allowing users to instantly exchange unwanted gift cards for cash.",
            date: "22 Jul 2024",
            tech: "React • Express • PostgreSQL",
            role: "Frontend Developer",
            link: "https://gift-card-wave.vercel.app/",
          },
          
          {
            title: "Astro Trade",
            image: "https://i.postimg.cc/vT5jqfRH/Screenshot-2026-01-25-at-9-24-39-PM-1.png",
            description:
              "A platform that conects clients with professional traders who manages trades on their behalf. Users can securely hire an experience traders, track trading performance, and let experts handle buying and selling efficiently.",
            date: "12 May 2025",
            tech: "React • Express • PostgreSQL",
            role: "Frontend Developer",
            link: "https://astro-trade-iota.vercel.app/",
          },
          
          {
            title: "Dynamiqerra",
            image: "https://i.postimg.cc/sxK8CyXV/Screenshot-2026-01-25-at-9-41-48-PM.png",
            description:
              "A dynamic digital agancy crafting fast, reliable, and scalable web solutions. Focused on performance, responsive design, and next-gen user experiences.",
            date: "06 Sept 2025",
            tech: "React • Express • PostgreSQL",
            role: "Frontend Developer",
            link: "https://dynamiqerra.com/",
          },
          
        ].map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedProject(project)}
            className="cursor-pointer group relative overflow-hidden rounded-2xl 
                       bg-white dark:bg-[#0e0e0e] border border-gray-200 dark:border-gray-800 
                       hover:border-[#ff004f] transition-all duration-500 
                       hover:-translate-y-2 hover:shadow-[0_0_25px_#ff004f44]"
          >
            {/* Project Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff004f] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Web Developer
              </p>
              <span className="text-[#ff004f] text-sm font-semibold flex items-center gap-2">
                View More <span>↗</span>
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
