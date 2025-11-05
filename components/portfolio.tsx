        "use client"
        
        import { motion } from "framer-motion"
        import Image from "next/image"
        import { useState } from "react"
        
        export default function Portfolio() {
          const [selectedProject, setSelectedProject] = useState<any>(null);
          return (
           
            <section
          id="work"
          className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-20 md:ml-24 bg-black text-white"
        >
          {/* React State for Modal */}
          {typeof window !== "undefined" && (
            <></>
          )}
          {/* State Hook */}
          {/* Place this at the top of your component in your final code:
              const [selectedProject, setSelectedProject] = useState<any>(null);
          */}

          {/* Section Header */}
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

          {/* Portfolio Data */}
          {(() => {
            const projects = [
              {
                title: "E-commerce Web App",
                image: "/projects/ecommerce.png",
                description:
                  "A modern online shopping platform with cart, checkout, and product filtering.",
                date: "12 Aug 2024",
                tech: "React • Tailwind • Node.js • MongoDB",
                role: "Full Stack",
                link: "#",
              },
              {
                title: "Restaurant Website",
                image: "/projects/restaurant.png",
                description:
                  "A stylish restaurant website with menu, booking, and location pages.",
                date: "04 May 2024",
                tech: "Next.js • CSS • API Integration",
                role: "Frontend",
                link: "#",
              },
              {
                title: "Portfolio Website",
                image: "/projects/portfolio.png",
                description:
                  "A modern personal portfolio designed for developers & creatives.",
                date: "10 Jan 2025",
                tech: "Next.js • Framer Motion",
                role: "Frontend",
                link: "#",
              },
              {
                title: "Blog Platform",
                image: "/projects/blog.png",
                description:
                  "A full-featured blog system with markdown and admin dashboard.",
                date: "22 Jul 2024",
                tech: "React • Express • PostgreSQL",
                role: "Full Stack",
                link: "#",
              },
              {
                title: "Task Manager App",
                image: "/projects/taskmanager.png",
                description:
                  "A productivity app for managing daily tasks with categories and timers.",
                date: "30 Mar 2024",
                tech: "Next.js • Firebase",
                role: "Full Stack",
                link: "#",
              },
              {
                title: "Landing Page Design",
                image: "/projects/landingpage.png",
                description:
                  "A high-converting modern landing page designed for startups.",
                date: "14 Sept 2024",
                tech: "HTML • CSS • JavaScript",
                role: "Frontend",
                link: "#",
              },
            ];

            return (
              <>
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
                      className="cursor-pointer group relative overflow-hidden rounded-2xl bg-[#0e0e0e] border border-gray-800 hover:border-[#ff004f] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_25px_#ff004f44]"
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
                        <p className="text-sm text-gray-400 mb-3">Full Stack Development</p>
                        <span className="text-[#ff004f] text-sm font-semibold flex items-center gap-2">
                          View More <span>↗</span>
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* ===== Modal (Opens on Click) ===== */}
                {selectedProject && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-9999"
                    onClick={() => setSelectedProject(null)}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-[#121212] w-[90%] md:w-[70%] lg:w-[60%] rounded-2xl p-8 border border-gray-800 shadow-xl relative"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Close Button */}
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute right-5 top-5 text-gray-400 hover:text-[#ff004f] text-xl"
                      >
                        ✕
                      </button>

                      <div className="flex flex-col md:flex-row gap-8">
                        {/* Modal Image */}
                        <div className="w-full md:w-1/2 h-64 bg-black rounded-lg overflow-hidden relative">
                          <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Modal Details */}
                        <div className="w-full md:w-1/2">
                          <h3 className="text-xl font-bold mb-3 text-white">
                            {selectedProject.title}
                          </h3>

                          <p className="text-gray-400 mb-6 leading-relaxed">
                            {selectedProject.description}
                          </p>

                          <div className="space-y-2 text-sm text-gray-300">
                            <p>
                              <span className="text-[#ff004f]">Created — </span>
                              {selectedProject.date}
                            </p>
                            <p>
                              <span className="text-[#ff004f]">Technologies — </span>
                              {selectedProject.tech}
                            </p>
                            <p>
                              <span className="text-[#ff004f]">Role — </span>
                              {selectedProject.role}
                            </p>
                            <p>
                              <span className="text-[#ff004f]">View — </span>
                              <a
                                href={selectedProject.link}
                                target="_blank"
                                className="text-[#ff004f] hover:underline"
                              >
                                {selectedProject.link}
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </>
            );
          })()}
        </section>

          )
        };
        