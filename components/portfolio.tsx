  "use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ExternalLink, Github } from "lucide-react";

// Fallback component for broken images
const ImageWithFallback = ({ src, alt, ...props }: any) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <Image
      {...props}
      src={hasError ? "/images/placeholder.svg" : imgSrc}
      alt={alt}
      onError={() => {
        setHasError(true);
      }}
      unoptimized={src.startsWith("https://")}
    />
  );
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Debug: Log project count
  const projects = [
    {
      title: "Cetadel Assets",
      image: "https://i.postimg.cc/g2hhYQ6V/Screenshot-2026-03-23-at-9-13-56-PM.png",
      description: "CETADEL ASSETS is a leading financial services company specializing in asset management and investment solutions.",
      tech: "Next.js, Node.js, MongoDB, Tailwind CSS",
      role: "Frontend Developer",
      result: "Improved team productivity by 40% and reduced task completion time by 35%",
      liveLink: "https://citadel-assets.vercel.app/",
      codeLink: "#"
    },
    {
      title: "TaskKash",
      image: "https://i.postimg.cc/cLv36hGK/Screenshot-2025-11-06-at-2-28-07-AM.png",
      description: "A modern task and project management platform that helps users organize tasks, track productivity, and manage workflows efficiently with real-time collaboration features.",
      tech: "Next.js, Node.js, MongoDB, Tailwind CSS",
      role: "Full-stack Developer",
      result: "Improved team productivity by 40% and reduced task completion time by 35%",
      liveLink: "https://taskkash.xyz",
      codeLink: "https://github.com/username/taskkash"
    },

    {
      title: "MoonChad",
      image: "https://i.postimg.cc/SR3JF01q/Screenshot-2025-11-06-at-2-52-46-AM.png",
      description: "A decentralized meme coin project built on blockchain technology, focusing on secure token distribution and community-driven development.",
      tech: "Next.js, React, Solidity, Web3.js",
      role: "Frontend Developer",
      result: "Successfully launched with 10,000+ token holders in first week",
      liveLink: "https://moon-chad.vercel.app/",
      codeLink: "https://github.com/username/moonchad"
    },

    {
      title: "TrustLoan Platform",
      image: "https://i.postimg.cc/qRzrf1tN/Whats-App-Image-2025-11-06-at-2-42-41-AM.jpg",
      description: "A decentralized finance (DeFi) platform providing short-term crypto loans for traders, enabling leveraged positions with smart contract security.",
      tech: "React, Express, PostgreSQL, Web3.js",
      role: "Backend Developer",
      result: "Processed $2M+ in loans with 99.9% uptime and zero security incidents",
      liveLink: "https://trustloaneth.com/",
      codeLink: "https://github.com/username/trustloan"
    },

    {
      title: "Online Library",
      image: "https://i.postimg.cc/kgnknGVP/Whats-App-Image-2025-11-06-at-5-58-58-AM.jpg",
      description: "A comprehensive digital library platform offering books, PDFs, and instructional videos for criminology and security studies.",
      tech: "React, Express, PostgreSQL, AWS S3",
      role: "Full Stack Developer",
      result: "Served 5,000+ students with 1,000+ educational resources",
      liveLink: "https://criminology-and-security-library.onrender.com/",
      codeLink: "https://github.com/username/online-library"
    },

    {
      title: "Gift Card Wave",
      image: "https://i.postimg.cc/Qx5cHSD7/Screenshot-2026-01-25-at-9-00-54-PM.png",
      description: "A secure marketplace for buying and selling gift cards, featuring instant transactions and automated verification systems.",
      tech: "React, Express, PostgreSQL, Stripe API",
      role: "Frontend Developer",
      result: "Facilitated $500K+ in transactions with 95% user satisfaction",
      liveLink: "https://gift-card-wave.vercel.app/",
      codeLink: "https://github.com/username/gift-card-wave"
    },

    {
      title: "Astro Trade",
      image: "https://i.postimg.cc/vT5jqfRH/Screenshot-2026-01-25-at-9-24-39-PM-1.png",
      description: "A platform connecting clients with professional traders for managed trading services with performance tracking and secure fund handling.",
      tech: "React, Express, PostgreSQL, REST APIs",
      role: "Frontend Developer",
      result: "Managed $1M+ in client assets with 15% average returns",
      liveLink: "https://astro-trade-iota.vercel.app/",
      codeLink: "https://github.com/username/astro-trade"
    },

    {
      title: "Dynamiqerra",
      image: "https://i.postimg.cc/sxK8CyXV/Screenshot-2026-01-25-at-9-41-48-PM.png",
      description: "A dynamic digital agency crafting fast, reliable, and scalable web solutions focused on performance, responsive design, and next-gen user experiences.",
      tech: "React, Express, PostgreSQL, Framer Motion",
      role: "Frontend Developer",
      result: "Delivered 20+ high-performance websites with 99% client satisfaction",
      liveLink: "https://dynamiqerra.com/",
      codeLink: "https://github.com/username/dynamiqerra"
    },

    {
      title: "Poplox",
      image: "https://i.postimg.cc/zX5HS5mt/Screenshot-2025-11-06-at-1-44-36-AM.png",
      description: "Helping creators and brands boost their social media presence with powerful tools designed to grow your audience and engagement.",
      tech: "React, Tailwind, Node.js, MongoDB",
      role: "Frontend Developer",
      result: "Grew 100+ creator accounts by average 300% follower increase",
      liveLink: "https://poplox.com/",
      codeLink: "https://github.com/username/poplox"
    }
  ];

  // Debug log in development
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
    console.log(`Rendering ${projects.length} projects`);
  }

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
                <ImageWithFallback
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 bg-white/70 dark:bg-black/50 backdrop-blur-sm rounded-b-xl transition-colors">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Description</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedProject.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Tech Stack</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedProject.tech}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Role</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{selectedProject.role}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">Key Result</h4>
                  <p className="text-sm text-green-600 dark:text-green-400 font-medium">✓ {selectedProject.result}</p>
                </div>

                <div className="flex gap-3">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff004f] text-white rounded-md hover:bg-[#ff3366] transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View Live
                    </a>
                  )}
                  {selectedProject.codeLink && (
                    <a
                      href={selectedProject.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
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
        {projects.map((project, index) => (
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
            <div className="relative w-full h-56 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff004f] transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {project.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-500">
                  {project.role}
                </span>
                <span className="text-[#ff004f] text-sm font-semibold flex items-center gap-1">
                  View Details <span>↗</span>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
