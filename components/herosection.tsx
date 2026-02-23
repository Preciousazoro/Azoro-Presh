"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaUser, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useActiveSection } from "./sidebar";

export default function HeroSection() {
  const { scrollToSection } = useActiveSection();

  return (
    <section
      id="home"
      className="flex flex-1 items-center justify-between flex-col md:flex-row px-8 md:ml-24 md:px-24 py-16 min-h-screen
                 bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-500"
    >
      {/* Left Content */}
      <div className="max-w-lg flex flex-col justify-center h-full">

        {/* Follow Me */}
        <div className="flex items-center space-x-5 mb-8 text-gray-600 dark:text-gray-300">
  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
    Follow Me —
  </p>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/azoroprecious/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF className="hover:text-[#ff004f] cursor-pointer transition-colors" />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/m0strugged/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram className="hover:text-[#ff004f] cursor-pointer transition-colors" />
  </a>

  {/* Twitter / X */}
  <a
    href="https://x.com/m0st_rugged"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaTwitter className="hover:text-[#ff004f] cursor-pointer transition-colors" />
  </a>
</div>


        <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
          Hi, I&apos;m <span className="text-[#ff004f]">PRECIOUS</span>
        </h1>

        <h2 className="text-2xl font-semibold mb-5 text-gray-700 dark:text-gray-200">
          Web Developer
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-[15px]">
          I have high level experience in web design, development knowledge and
          producing quality work.
        </p>

        <div>
          <button
            onClick={() => scrollToSection("about")}
            className="inline-flex items-center gap-2 bg-[#ff004f] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#e60047] transition"
            aria-label="More About me"
          >
            <FaUser className="w-4 h-4" />
            <span className="text-sm">More About me!</span>
          </button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-10 mt-14 text-sm text-gray-600 dark:text-gray-300">
          {/* WhatsApp */}
          <div className="flex items-center space-x-3">
            <FaWhatsapp className="text-[#25D366] text-2xl" />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Whatsapp</p>
              <p className="text-gray-600 dark:text-gray-400 text-[14px]">
                08122844144
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <MdEmail className="text-[#ff004f] text-2xl" />
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Email</p>
              <p className="text-gray-600 dark:text-gray-400 text-[14px]">
                azoroprecious7@icloud.com
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-16 md:mt-0 relative w-[300px] h-[400px] md:w-[380px] md:h-[500px]">
        <Image
          src="/MyPhoto.png"
          alt="Precious"
          fill
          className="object-cover rounded-2xl border border-gray-200 dark:border-gray-800 transition-colors"
          priority
        />
      </div>
    </section>
  );
}