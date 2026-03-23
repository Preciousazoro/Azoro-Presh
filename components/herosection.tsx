"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useActiveSection } from "./sidebar";

export default function HeroSection() {
  const { scrollToSection } = useActiveSection();

  return (
    <section
      id="home"
      className="flex items-center justify-center min-h-screen px-6 sm:px-8 md:px-8 lg:px-16 xl:px-20 2xl:px-24 py-16 md:ml-24
                 bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-500"
    >
      <div className="w-full max-w-7xl xl:max-w-8xl 2xl:max-w-9xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col animate-fadeInUp">
            
            {/* Top Badge */}
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                Available for Remote Work • AI Evaluation • Freelance
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6 mb-8 text-gray-600 dark:text-gray-300">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                Follow Me —
              </p>

              <a
                href="https://www.facebook.com/azoroprecious/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff004f] transition-colors"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com/m0strugged/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff004f] transition-colors"
              >
                <FaInstagram />
              </a>

              <a
                href="https://x.com/m0st_rugged"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ff004f] transition-colors"
              >
                <FaTwitter />
              </a>
            </div>

            {/* Heading */}
            <div className="mb-6">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hi, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold leading-tight">
                <span className="text-[#ff004f]">AZORO PRECIOUS</span>
              </h1>
            </div>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-medium mb-8 text-gray-700 dark:text-gray-200 max-w-2xl lg:max-w-3xl xl:max-w-4xl leading-relaxed">
              I build fast, scalable web applications using React, Next.js, and Node.js that help businesses grow and launch faster.
            </h2>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#ff004f] text-white font-semibold rounded-lg hover:bg-[#e60047] transition-all duration-300 transform hover:scale-105 shadow-lg"
                aria-label="Hire Me"
              >
                Hire Me
              </button>
              <button
                onClick={() => {
                  console.log("Scrolling to work section...");
                  scrollToSection("work");
                }}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#ff004f] font-semibold rounded-lg border-2 border-[#ff004f] hover:bg-[#ff004f] hover:text-white transition-all duration-300 transform hover:scale-105"
                aria-label="View My Work"
              >
                View My Work
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-8 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center space-x-3">
                <MdEmail className="text-[#ff004f] text-xl" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    azoroprecious@outlook.com
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaWhatsapp className="text-[#ff004f] text-xl" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">WhatsApp</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    08122844144
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end animate-fadeInUp animate-delay-200">
            <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[420px] md:w-[360px] md:h-[480px] lg:w-[400px] lg:h-[520px] xl:w-[450px] xl:h-[580px] 2xl:w-[500px] 2xl:h-[640px]">
              <div className="absolute inset-0 bg-linear-to-br from-[#ff004f]/20 to-transparent rounded-2xl blur-xl"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 shadow-2xl">
                <Image
                  src="/MyPhoto.png"
                  alt="Azoro Precious"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}