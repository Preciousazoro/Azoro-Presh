
"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaUser, FaAward, FaHeadset, FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Facebook, Instagram, Twitter } from "lucide-react";

{/* ===== Footer ===== */}
<footer className="w-full bg-black text-white mt-24 border-t border-gray-800 py-16">
  <div className="max-w-7xl mx-auto px-8 md:px-24 relative">

    {/* ===== SOCIAL ICONS (TOP RIGHT) ===== */}
    <div className="absolute right-8 md:right-24 top-0 flex items-center gap-6 text-2xl">
      <a href="#" className="hover:text-[#ff004f] transition">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Twitter className="w-6 h-6" />
      </a>
    </div>

    {/* ===== FOOTER GRID ===== */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-10">

      {/* LEFT — NAME + ROLE */}
      <div>
        <h2 className="text-4xl font-extrabold tracking-wide">MR PRESH</h2>
        <p className="text-gray-400 text-base font-medium mt-1">
          Full Stack Developer
        </p>
      </div>

      {/* CENTER — NAVIGATION */}
      <ul className="flex justify-center gap-10 text-lg font-semibold">
        <li>
          <a href="#services" className="hover:text-[#ff004f] transition">Services</a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-[#ff004f] transition">Work</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#ff004f] transition">Contact</a>
        </li>
      </ul>

      {/* EMPTY COLUMN — ensures perfect centering */}
      <div></div>
    </div>

    {/* COPYRIGHT */}
    <p className="text-center text-xs text-gray-500 tracking-wide mt-16">
      ULTRA CODE. All rights reserved
    </p>
  </div>
</footer>


export default function Home() {
  const [loading, setLoading] = useState(false);
  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <main className="flex flex-col bg-black text-white scroll-smooth">
      {/* ===== Sidebar ===== */}
      <aside className="hidden md:fixed md:flex flex-col justify-between items-center py-10 w-24 bg-[#0e0e0e] border-r border-gray-800 min-h-screen">
        {/* Logo + Nav */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="h-12 w-12 rounded-full bg-[#ff004f] flex items-center justify-center text-lg font-bold text-white mb-16">
            AP
          </div>

          {/* Navbar */}
          <nav className="flex flex-col items-center gap-16 font-semibold tracking-wider uppercase text-[13px]">
            {[
              { label: "Home", id: "home" },
              { label: "About", id: "about" },
              { label: "Skills", id: "skills" },
              { label: "Work", id: "work" },
              { label: "Services", id: "services" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative -rotate-90 ${
                  item.label === "Home"
                    ? "text-[#ff004f] font-bold"
                    : "text-gray-400 hover:text-white"
                } cursor-pointer transition-colors`}
              >
                {item.label}
                {item.label === "Home" && (
                  <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ff004f]" />
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Bottom Icon */}
        <div className="flex flex-col items-center mt-16 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5l6 6m0 0l-6 6m6-6H4.5"
            />
          </svg>
        </div>
      </aside>

      {/* ===== Hero Section ===== */}
      <section
        id="home"
        className="flex flex-1 items-center justify-between flex-col md:flex-row px-8 md:ml-24 md:px-24 py-16 min-h-screen"
      >
        {/* Left Content */}
        <div className="max-w-lg flex flex-col justify-center h-full">
          {/* Follow Me */}
          <div className="flex items-center space-x-5 mb-8 text-gray-300">
            <p className="text-sm text-gray-400 font-medium tracking-wide">Follow Me —</p>
            <FaFacebookF className="hover:text-[#ff004f] cursor-pointer" />
            <FaInstagram className="hover:text-[#ff004f] cursor-pointer" />
            <FaTwitter className="hover:text-[#ff004f] cursor-pointer" />
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
            Hi, I&apos;m <span className="text-[#ff004f]">PRECIOUS</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-5 text-gray-100">
            Frontend Developer
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed text-[15px]">
            I have high level experience in web design, development knowledge and
            producing quality work.
          </p>

           <div>
             <button
              className="inline-flex items-center gap-2 bg-[#ff004f] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#e60047] transition"
              aria-label="More About me"
            >
              <FaUser className="w-4 h-4" />
              <span className="text-sm">More About me!</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-10 mt-14 text-sm text-gray-300">
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-[#25D366] text-2xl" />
              <div>
                <p className="font-medium text-white">Whatsapp</p>
                <p className="text-gray-400 text-[14px]">08122844144</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MdEmail className="text-[#ff004f] text-2xl" />
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="text-gray-400 text-[14px]">azoroprecious7@icloud.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-16 md:mt-0 relative w-[300px] h-[400px] md:w-[380px] md:h-[500px]">
          <Image
            src="/MyPFP.png"
            alt="Precious"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </section>

      {/* ===== About Section ===== */}
      <section
        id="about"
        className="flex flex-col md:flex-row items-center justify-between px-8 md:px-24 py-20 md:ml-24 min-h-screen bg-black"
      >
        {/* Left Image */}
       <div className="hidden md:relative md:block w-[280px] h-[400px] md:w-[360px] md:h-[500px] mb-10 md:mb-0">
        <Image
          src="/ABOUT-PFP.PNG"
          alt="About Precious"
          fill
          className="object-cover rounded-xl"
        />
      </div>


        {/* Right Content */}
        <div className="max-w-2xl md:pl-16">
          <p className="text-[#ff004f] font-semibold mb-1">My Intro</p>
          <h2 className="text-4xl font-extrabold mb-6">About me</h2>

          <h3 className="text-xl font-bold mb-4">
            Hi, I'm AZORO PRECIOUS, based in Nigeria
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed text-[15px]">
            Hi, I'm AZORO PRECIOUS. An enthusiastic and skilled web developer driven
            by a passion for building interactive, intuitive, and visually captivating
            websites. I specialize in creating responsive and high-performing web
            platforms that offer exceptional usability and engagement.
          </p>
          <p className="text-gray-400 mb-6 leading-relaxed text-[15px]">
            With more than 3 years of practical experience working with tools and
            frameworks like HTML, CSS, JavaScript, React, and Node.js, I enjoy
            tackling challenging projects and constantly upgrading my skills to keep
            pace with the ever-changing tech landscape.
          </p>
          <p className="text-gray-400 mb-10 leading-relaxed text-[15px]">
            My aim is to design digital experiences that combine aesthetic appeal with
            smooth functionality, ensuring users enjoy both beauty and ease of use.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-[#111] p-5 rounded-lg text-center border border-gray-800 hover:border-[#ff004f] transition">
              <FaAward className="text-[#ff004f] text-2xl mx-auto mb-2" />
              <h4 className="font-semibold">Experience</h4>
              <p className="text-gray-400 text-sm">2+ Years</p>
            </div>

            <div className="bg-[#111] p-5 rounded-lg text-center border border-gray-800 hover:border-[#ff004f] transition">
              <FaCheckCircle className="text-[#ff004f] text-2xl mx-auto mb-2" />
              <h4 className="font-semibold">Completed</h4>
              <p className="text-gray-400 text-sm">5+ Projects</p>
            </div>

            <div className="bg-[#111] p-5 rounded-lg text-center border border-gray-800 hover:border-[#ff004f] transition">
              <FaHeadset className="text-[#ff004f] text-2xl mx-auto mb-2" />
              <h4 className="font-semibold">Support</h4>
              <p className="text-gray-400 text-sm">Online 24/7</p>
            </div>
          </div>

          <Link 
            href="#contact" 
            className="bg-[#ff004f] text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#e60047] transition"
          >
            <FaUser className="w-4 h-4" />
            Contact me
          </Link>
        </div>
      </section>


      {/* ===== Qualifications Section ===== */}
      <section
        id="skills"
        className="flex flex-col items-center justify-center px-8 md:px-24 py-20 md:ml-24 bg-black text-white"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff004f] font-semibold mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">Qualifications</h2>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* ===== Education Column ===== */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
              <span className="text-[#ff004f] text-lg">🎓</span> Education
            </h3>

            {/* Item 1 */}
            <div className="relative pl-8 border-l-2 border-gray-800 mb-10">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#ff004f] rounded-full"></span>
              <h4 className="font-semibold text-lg">
                Godfrey Okoye University (Thinkers Corner, Enugu)
              </h4>
              <p className="text-gray-400 text-sm mb-1">
                BSc in Computer Science
              </p>
              <p className="text-[#ff004f] text-sm flex items-center gap-1 mt-2">
                <span>📅</span> 2021 – 2025
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 border-l-2 border-gray-800">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#ff004f] rounded-full"></span>
              <h4 className="font-semibold text-lg">Udemy Course</h4>
              <p className="text-gray-400 text-sm mb-1">
                Complete web development course
              </p>
              <p className="text-[#ff004f] text-sm flex items-center gap-1 mt-2">
                <span>📅</span> 2023 – 2024
              </p>
            </div>
          </div>

          {/* ===== Experience Column ===== */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
              <span className="text-[#ff004f] text-lg">💼</span> Experience
            </h3>

            {/* Item 1 */}
            <div className="relative pl-8 border-l-2 border-gray-800 mb-10">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#ff004f] rounded-full"></span>
              <h4 className="font-semibold text-lg">
                Freelance Web Developer (Remote)
              </h4>
              <p className="text-gray-400 text-sm mb-1">
                Designed and developed responsive, user-friendly websites using HTML, CSS,
                JavaScript, React, and Node.js.
              </p>
              <p className="text-[#ff004f] text-sm flex items-center gap-1 mt-2">
                <span>📅</span> 2024 – 2025
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 border-l-2 border-gray-800">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#ff004f] rounded-full"></span>
              <h4 className="font-semibold text-lg">Frontend Developer</h4>
              <p className="text-gray-400 text-sm mb-1">
                Contributed to the design and implementation of Poplox Website.
              </p>
              <p className="text-[#ff004f] text-sm flex items-center gap-1 mt-2">
                <span>📅</span> 2024 – 2025
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* ===== Experience / Abilities Section ===== */}
      <section
        id="experience"
        className="flex flex-col items-center justify-center px-8 md:px-24 py-20 md:ml-24 bg-[#0a0a0a] text-white"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff004f] font-semibold mb-2">My Abilities</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">My Experience</h2>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-6xl">
          {/* ===== Left Column ===== */}
          <div className="space-y-10">
            {/* Frontend Developer */}
            <div className="flex items-start gap-4">
              <div className="text-[#ff004f] text-2xl">{`{}`}</div>
              <div>
                <h3 className="text-xl font-semibold">Frontend Developer</h3>
                <p className="text-gray-400 text-sm">More than 2 years</p>
              </div>
            </div>

            {/* UI/UX Designer */}
            <div className="flex items-start gap-4">
              <div className="text-[#ff004f] text-2xl">📘</div>
              <div>
                <h3 className="text-xl font-semibold">UI / UX Design</h3>
                <p className="text-gray-400 text-sm">More than 1 year</p>
              </div>
            </div>

            {/* Backend Developer */}
            <div className="flex items-start gap-4">
              <div className="text-[#ff004f] text-2xl">💻</div>
              <div>
                <h3 className="text-xl font-semibold">Backend Developer</h3>
                <p className="text-gray-400 text-sm">1 year </p>
              </div>
            </div>
          </div>

          {/* ===== Right Column (Skill Bars) ===== */}
          <div className="space-y-8">
            {/* Skill Item */}
            {[
              { name: "Next.js", level: 70 },
              { name: "React", level: 80 },
              { name: "Node.js", level: 75 },
              { name: "Tailwind CSS", level: 85 },
              { name: "Shadcn/ui", level: 65 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[#ff004f] font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                  <div
                    className="h-2 bg-[#ff004f] rounded-full transition-all duration-700 ease-in-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ===== Portfolio Section (Animated) ===== */}
        <section
          id="work"
          className="flex flex-col items-center justify-center px-8 md:px-24 py-20 md:ml-24 bg-black text-white"
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
                    className="fixed inset-0 bg-black/70 backdrop-blur-lg flex items-center justify-center z-[9999]"
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


      {/* ===== Services Section ===== */}
      <section
        id="services"
        className="flex flex-col items-center justify-center px-8 md:px-24 py-24 md:ml-24 bg-black text-white"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#ff004f] font-semibold mb-2">Services</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">What I Offer</h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">

          {/* Service 1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-[#ff004f] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="text-[#ff004f] text-3xl mb-6">
              {/* Replace with your icon */}
              <i className="ri-window-fill"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Frontend Development</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              I build fast, responsive, and visually appealing interfaces using modern
              technologies like React, Next.js, and Tailwind CSS.
            </p>
            <span className="text-[#ff004f] font-semibold text-sm flex items-center gap-2">
              View More <span>→</span>
            </span>
          </motion.div>

          {/* Service 2 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-[#ff004f] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="text-[#ff004f] text-3xl mb-6">
              <i className="ri-code-s-slash-line"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Backend Development</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Clean, scalable backend systems with Node.js, Express, REST APIs,
              authentication, databases, and cloud deployments.
            </p>
            <span className="text-[#ff004f] font-semibold text-sm flex items-center gap-2">
              View More <span>→</span>
            </span>
          </motion.div>

          {/* Service 3 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-[#ff004f] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="text-[#ff004f] text-3xl mb-6">
              <i className="ri-server-line"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Full-Stack Solutions</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Complete end-to-end solutions — from UI/UX and APIs to database
              architecture, integrations, and deployment.
            </p>
            <span className="text-[#ff004f] font-semibold text-sm flex items-center gap-2">
              View More <span>→</span>
            </span>
          </motion.div>

        </div>
      </section>


      {/* ===== Contact Section ===== */}
        <section
          id="contact"
          className="flex flex-col items-center justify-center px-8 md:px-24 py-24 md:ml-24 bg-black text-white"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[#ff004f] font-semibold mb-2">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-extrabold">Contact me</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full max-w-6xl">

            {/* LEFT SIDE – CONTACT OPTIONS */}
            <div className="flex flex-col gap-8">
              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-[#ff004f] transition-all"
              >
                <div className="text-center">
                  <i className="ri-mail-line text-4xl text-[#ff004f] mb-4"></i>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-gray-400 text-sm mb-3">azoroprecious7@icloud.com</p>
                  <a href="mailto:azoroprecious7@icloud.com"
                    className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
                  >
                    Write me → 
                  </a>
                </div>
              </motion.div>

              {/* WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-[#ff004f] transition-all"
              >
                <div className="text-center">
                  <i className="ri-whatsapp-line text-4xl text-[#ff004f] mb-4"></i>
                  <h3 className="font-bold text-lg">Whatsapp</h3>
                  <p className="text-gray-400 text-sm mb-3">08122844144</p>
                  <a href="https://wa.me/08122844144"
                    target="_blank"
                    className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
                  >
                    Write me → 
                  </a>
                </div>
              </motion.div>

              {/* Messenger */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[#0f0f0f] border border-gray-800 hover:border-[#ff004f] transition-all"
              >
                <div className="text-center">
                  <i className="ri-messenger-line text-4xl text-[#ff004f] mb-4"></i>
                  <h3 className="font-bold text-lg">Messenger</h3>
                  <p className="text-gray-400 text-sm mb-3">user.fb123</p>
                  <a href="#"
                    className="text-[#ff004f] text-sm font-semibold flex justify-center items-center gap-1 hover:gap-2 transition-all"
                  >
                    Write me → 
                  </a>
                </div>
              </motion.div>
            </div>



 <motion.form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });

          if (res.ok) {
            toast.success("✅ Message sent successfully!");
            form.reset();
          } else {
            toast.error("❌ Failed to send message. Please try again.");
          }
        } catch (error) {
          toast.error("⚠️ Something went wrong. Please try again later.");
        } finally {
          setLoading(false);
        }
      }}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex flex-col gap-6"
    >
      <input
        type="text"
        name="username"
        placeholder="Username"
        required
        className="w-full p-4 bg-transparent border border-gray-700 rounded-lg text-white focus:border-[#ff004f] outline-none transition-all"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        className="w-full p-4 bg-transparent border border-gray-700 rounded-lg text-white focus:border-[#ff004f] outline-none transition-all"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone"
        className="w-full p-4 bg-transparent border border-gray-700 rounded-lg text-white focus:border-[#ff004f] outline-none transition-all"
      />

      <textarea
        rows={6}
        name="message"
        placeholder="Message"
        required
        className="w-full p-4 bg-transparent border border-gray-700 rounded-lg text-white focus:border-[#ff004f] outline-none transition-all"
      ></textarea>

      <button
          type="submit"
          disabled={loading}
          className={`mt-4 bg-[#ff004f] text-white px-8 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 w-full sm:w-fit ${
            loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#e10046]"
          }`}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <i className="ri-send-plane-fill"></i> Send Message
            </>
          )}
        </button>
    </motion.form>


        </div>
        </section>


      {/* ===== Footer ===== */}
        <footer className="w-full bg-black text-white mt-24 border-t border-gray-800 py-16">
  <div className="max-w-7xl mx-auto px-8 md:px-24 relative">
    {/* ===== SOCIAL ICONS (TOP RIGHT on desktop) ===== */}
    <div className="hidden md:flex absolute right-8 md:right-24 top-0 items-center gap-6 text-2xl">
      <a href="#" className="hover:text-[#ff004f] transition">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Twitter className="w-6 h-6" />
      </a>
    </div>

    {/* ===== FOOTER GRID ===== */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-10">
      {/* LEFT — NAME + ROLE */}
      <div>
        <h2 className="text-4xl font-extrabold tracking-wide">MR PRESH</h2>
        <p className="text-gray-400 text-base font-medium mt-1">
          Full Stack Developer
        </p>
      </div>

      {/* CENTER — NAVIGATION */}
      <ul className="flex justify-center gap-10 text-lg font-semibold">
        <li>
          <a href="#services" className="hover:text-[#ff004f] transition">Services</a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-[#ff004f] transition">Work</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#ff004f] transition">Contact</a>
        </li>
      </ul>

      {/* EMPTY COLUMN (for layout balance on desktop) */}
      <div></div>
    </div>

    {/* ===== SOCIAL ICONS (BOTTOM CENTER on mobile) ===== */}
    <div className="flex md:hidden justify-center mt-10 gap-8 text-2xl">
      <a href="#" className="hover:text-[#ff004f] transition">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Twitter className="w-6 h-6" />
      </a>
    </div>

    {/* COPYRIGHT */}
    <p className="text-center text-xs text-gray-500 tracking-wide mt-8 md:mt-16">
      © MrPRESH CODE. All rights reserved
    </p>
  </div>
</footer>

    </main>
  );
}







