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
            title: "Boosting Website",
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
              "A full-featured blog system with markdown and admin dashboard.",
            date: "22 Jul 2024",
            tech: "React • Express • PostgreSQL",
            role: "Full Stack",
            link: "https://trustloaneth.onrender.com",
          },

          {
            title: "Airdrop Website",
            image: "https://i.postimg.cc/SR3JF01q/Screenshot-2025-11-06-at-2-52-46-AM.png",
            description:
              "A modern personal portfolio designed for developers & creatives.",
            date: "10 Jan 2025",
            tech: "Next.js • Framer Motion",
            role: "Frontend",
            link: "#",
          },
          

          {
            title: "Online Library",
            image: "https://i.postimg.cc/kgnknGVP/Whats-App-Image-2025-11-06-at-5-58-58-AM.jpg",
            description:
              "A full-featured blog system with markdown and admin dashboard.",
            date: "22 Jul 2024",
            tech: "React • Express • PostgreSQL",
            role: "Full Stack",
            link: "https://trustloaneth.onrender.com",
          },
          

          {
            title: "Engagement Website",
            image: "https://i.postimg.cc/cLv36hGK/Screenshot-2025-11-06-at-2-28-07-AM.png",
            description:
              "A stylish restaurant website with menu, booking, and location pages.",
            date: "04 May 2024",
            tech: "Next.js • CSS • API Integration",
            role: "Backend",
            link: "https://taskkash-project.onrender.com/",
          },
          

          {
            title: "School Management System",
            image: "https://i.postimg.cc/mrR3z6LS/Screenshot-2025-11-06-at-9-16-02-PM.png",
            description:
              "A full-featured blog system with markdown and admin dashboard.",
            date: "22 Jul 2024",
            tech: "React • Express • PostgreSQL",
            role: "Full Stack",
            link: "#",
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

  
  
  
  
  
  
  
  
  
  //       "use client"
        
  //       import { motion, AnimatePresence } from "framer-motion"
  //       import Image from "next/image"
  //       import { useState, useEffect } from "react"
  //       import { X } from "lucide-react"
        
  //       export default function Portfolio() {
  //         const [selectedProject, setSelectedProject] = useState<any>(null);
  //         // Close modal when clicking outside
  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     const target = event.target as HTMLElement;
  //     if (selectedProject && !target.closest('.modal-content')) {
  //       setSelectedProject(null);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [selectedProject]);

  // return (
  //   <section
  //     id="work"
  //     className="relative flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-20 md:ml-24 bg-black text-white"
  //   >
  //     {/* Project Modal */}
  //     <AnimatePresence>
  //       {selectedProject && (
  //         <motion.div 
  //           className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
  //           initial={{ opacity: 0 }}
  //           animate={{ opacity: 1 }}
  //           exit={{ opacity: 0 }}
  //           onClick={() => setSelectedProject(null)}
  //         >
  //           <motion.div 
  //             className="modal-content relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-transparent rounded-lg"
  //             initial={{ scale: 0.9, opacity: 0 }}
  //             animate={{ scale: 1, opacity: 1 }}
  //             exit={{ scale: 0.9, opacity: 0 }}
  //             onClick={(e) => e.stopPropagation()}
  //           >
  //             <button 
  //               onClick={() => setSelectedProject(null)}
  //               className="absolute -top-10 right-0 text-white hover:text-[#ff004f] transition-colors"
  //               aria-label="Close modal"
  //             >
  //               <X size={32} />
  //             </button>
  //             <div className="relative w-full aspect-video bg-black/50 rounded-t-lg overflow-hidden">
  //               <Image
  //                 src={selectedProject.image}
  //                 alt={selectedProject.title}
  //                 fill
  //                 className="object-contain"
  //               />
  //             </div>
  //             <div className="p-6 bg-black/50 backdrop-blur-sm rounded-b-lg">
  //               <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
  //               <p className="text-gray-300 mb-4">{selectedProject.description}</p>
  //               <div className="flex flex-wrap gap-4 text-sm text-gray-400">
  //                 <span>📅 {selectedProject.date}</span>
  //                 <span>🛠️ {selectedProject.tech}</span>
  //                 <span>👨‍💻 {selectedProject.role}</span>
  //               </div>
  //               {selectedProject.link && (
  //                 <a 
  //                   href={selectedProject.link} 
  //                   target="_blank" 
  //                   rel="noopener noreferrer"
  //                   className="mt-4 inline-block px-6 py-2 bg-[#ff004f] text-white rounded-md hover:bg-[#ff3366] transition-colors"
  //                 >
  //                   View Project
  //                 </a>
  //               )}
  //             </div>
  //           </motion.div>
  //         </motion.div>
  //       )}
  //     </AnimatePresence>

  //         {/* Section Header */}
  //         <motion.div
  //           initial={{ opacity: 0, y: 40 }}
  //           whileInView={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.6 }}
  //           viewport={{ once: true }}
  //           className="text-center mb-16"
  //         >
  //           <p className="text-[#ff004f] font-semibold mb-2">My Portfolio</p>
  //           <h2 className="text-4xl md:text-5xl font-extrabold">Recent Works</h2>
  //         </motion.div>

  //         {/* Portfolio Data */}
  //         {(() => {
  //           const projects = [
  //             {
  //               title: "Boosting Website",
  //               image: "https://i.postimg.cc/zX5HS5mt/Screenshot-2025-11-06-at-1-44-36-AM.png",
  //               description:
  //                 "Helping creators and brands boost their social media presence with powerful tools designed to grow your audience and engagement.",
  //               date: "12 Aug 2024",
  //               tech: "React • Tailwind • Node.js • MongoDB",
  //               role: "Frontend",
  //               link: "https://poplox.com/",
  //             },
  //             {
  //               title: "Engagement Website",
  //               image: "https://i.postimg.cc/cLv36hGK/Screenshot-2025-11-06-at-2-28-07-AM.png",
  //               description:
  //                 "A stylish restaurant website with menu, booking, and location pages.",
  //               date: "04 May 2024",
  //               tech: "Next.js • CSS • API Integration",
  //               role: "Backend",
  //               link: "https://taskkash-project.onrender.com/",

  //             },
  //             {
  //               title: "Airdrop Website",
  //               image: "https://i.postimg.cc/SR3JF01q/Screenshot-2025-11-06-at-2-52-46-AM.png",
  //               description:
  //                 "A modern personal portfolio designed for developers & creatives.",
  //               date: "10 Jan 2025",
  //               tech: "Next.js • Framer Motion",
  //               role: "Frontend",
  //               link: "#",
  //             },
  //             {
  //               title: "TrustLoan Platform",
  //               image: "https://i.postimg.cc/qRzrf1tN/Whats-App-Image-2025-11-06-at-2-42-41-AM.jpg",
  //               description:
  //                 "A full-featured blog system with markdown and admin dashboard.",
  //               date: "22 Jul 2024",
  //               tech: "React • Express • PostgreSQL",
  //               role: "Full Stack",
  //               link: "https://trustloaneth.onrender.com",
  //             },
  //             {
  //               title: "Task Manager App",
  //               image: "/projects/taskmanager.png",
  //               description:
  //                 "A productivity app for managing daily tasks with categories and timers.",
  //               date: "30 Mar 2024",
  //               tech: "Next.js • Firebase",
  //               role: "Full Stack",
  //               link: "#",
  //             },
  //             {
  //               title: "Landing Page Design",
  //               image: "/projects/landingpage.png",
  //               description:
  //                 "A high-converting modern landing page designed for startups.",
  //               date: "14 Sept 2024",
  //               tech: "HTML • CSS • JavaScript",
  //               role: "Frontend",
  //               link: "#",
  //             },
  //           ];

  //           return (
  //             <>
  //               {/* ===== Portfolio Grid ===== */}
  //               <motion.div
  //                 initial={{ opacity: 0 }}
  //                 whileInView={{ opacity: 1 }}
  //                 transition={{ duration: 0.8, delay: 0.2 }}
  //                 viewport={{ once: true }}
  //                 className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full"
  //               >
  //                 {projects.map((project, index) => (
  //                   <motion.div
  //                     key={index}
  //                     initial={{ opacity: 0, y: 40 }}
  //                     whileInView={{ opacity: 1, y: 0 }}
  //                     transition={{ duration: 0.6, delay: index * 0.1 }}
  //                     viewport={{ once: true }}
  //                     onClick={() => setSelectedProject(project)}
  //                     className="cursor-pointer group relative overflow-hidden rounded-2xl bg-[#0e0e0e] border border-gray-800 hover:border-[#ff004f] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_#ff004f44]"
  //                   >
  //                     {/* Project Image */}
  //                     <div className="relative w-full h-56 overflow-hidden">
  //                       <Image
  //                         src={project.image}
  //                         alt={project.title}
  //                         fill
  //                         className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
  //                       />
  //                     </div>

  //                     {/* Card Content */}
  //                     <div className="p-5">
  //                       <h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff004f] transition-colors">
  //                         {project.title}
  //                       </h3>
  //                       <p className="text-sm text-gray-400 mb-3">Full Stack Development</p>
  //                       <span className="text-[#ff004f] text-sm font-semibold flex items-center gap-2">
  //                         View More <span>↗</span>
  //                       </span>
  //                     </div>
  //                   </motion.div>
  //                 ))}
  //               </motion.div>

  //               {/* ===== Modal (Opens on Click) ===== */}
  //               {selectedProject && (
  //                 <motion.div
  //                   initial={{ opacity: 0 }}
  //                   animate={{ opacity: 1 }}
  //                   exit={{ opacity: 0 }}
  //                   className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-9999"
  //                   onClick={() => setSelectedProject(null)}
  //                 >
  //                   <motion.div
  //                     initial={{ scale: 0.8, opacity: 0 }}
  //                     animate={{ scale: 1, opacity: 1 }}
  //                     exit={{ scale: 0.8, opacity: 0 }}
  //                     transition={{ duration: 0.3 }}
  //                     className="bg-[#121212] w-[90%] md:w-[70%] lg:w-[60%] rounded-2xl p-8 border border-gray-800 shadow-xl relative"
  //                     onClick={(e) => e.stopPropagation()}
  //                   >
  //                     {/* Close Button */}
  //                     <button
  //                       onClick={() => setSelectedProject(null)}
  //                       className="absolute right-5 top-5 text-gray-400 hover:text-[#ff004f] text-xl"
  //                     >
  //                       ✕
  //                     </button>

  //                     <div className="flex flex-col md:flex-row gap-8">
  //                       {/* Modal Image */}
  //                       <div className="w-full md:w-1/2 h-64 bg-black rounded-lg overflow-hidden relative">
  //                         <Image
  //                           src={selectedProject.image}
  //                           alt={selectedProject.title}
  //                           fill
  //                           className="object-cover"
  //                         />
  //                       </div>

  //                       {/* Modal Details */}
  //                       <div className="w-full md:w-1/2">
  //                         <h3 className="text-xl font-bold mb-3 text-white">
  //                           {selectedProject.title}
  //                         </h3>

  //                         <p className="text-gray-400 mb-6 leading-relaxed">
  //                           {selectedProject.description}
  //                         </p>

  //                         <div className="space-y-2 text-sm text-gray-300">
  //                           <p>
  //                             <span className="text-[#ff004f]">Created — </span>
  //                             {selectedProject.date}
  //                           </p>
  //                           <p>
  //                             <span className="text-[#ff004f]">Technologies — </span>
  //                             {selectedProject.tech}
  //                           </p>
  //                           <p>
  //                             <span className="text-[#ff004f]">Role — </span>
  //                             {selectedProject.role}
  //                           </p>
  //                           <p>
  //                             <span className="text-[#ff004f]">View — </span>
  //                             <a
  //                               href={selectedProject.link}
  //                               target="_blank"
  //                               rel="noopener noreferrer"
  //                               className="text-[#ff004f] hover:underline"
  //                               onClick={(e) => e.stopPropagation()} // prevent modal from closing
  //                             >
  //                               {selectedProject.link}
  //                             </a>

  //                           </p>
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </motion.div>
  //                 </motion.div>
  //               )}
  //             </>
  //           );
  //         })()}
  //       </section>

  //         )
  //       };
        