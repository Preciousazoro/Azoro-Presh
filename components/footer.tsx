"use client";

import { Twitter, Facebook, Instagram } from "lucide-react";
import { useActiveSection } from "./sidebar";
import { motion } from "framer-motion";

export default function Footer() {
  const { scrollToSection } = useActiveSection();

  return (
    <footer className="w-full border-t border-gray-800 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white py-12 md:py-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-24 relative">
        {/* ===== SOCIAL ICONS (TOP RIGHT - DESKTOP) ===== */}
<div className="hidden md:flex absolute right-8 md:right-24 top-0 items-center gap-6 text-2xl">
  {[
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/azoroprecious/",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/m0strugged/",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/m0st_rugged",
    },
  ].map((item, index) => (
    <motion.a
      key={index}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 dark:text-gray-400 hover:text-[#ff004f] dark:hover:text-[#ff004f] transition-colors"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
    >
      {item.icon}
    </motion.a>
  ))}
</div>


        {/* ===== FOOTER CONTENT ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-10">
          {/* LEFT — NAME + ROLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-1xl sm:text-2xl font-extrabold tracking-wide text-[#ff004f] whitespace-nowrap">
              AZORO PRECIOUS
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base font-medium mt-1">
              Web Developer
            </p>
          </motion.div>

          {/* CENTER — NAVIGATION LINKS */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center gap-8 sm:gap-10 text-base sm:text-lg font-semibold"
          >
            {[
              { label: "Services", id: "services" },
              { label: "Work", id: "work" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-[#ff004f] dark:hover:text-[#ff004f] transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </motion.ul>

          {/* RIGHT (empty for symmetry on desktop) */}
          <div></div>
        </div>

       {/* ===== SOCIAL ICONS (MOBILE) ===== */}
<div className="flex md:hidden justify-center mt-10 gap-8 text-2xl">
  {[
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://www.facebook.com/azoroprecious/",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://www.instagram.com/m0strugged/",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/m0st_rugged",
    },
  ].map((item, index) => (
    <motion.a
      key={index}
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-500 dark:text-gray-400 hover:text-[#ff004f] dark:hover:text-[#ff004f] transition-colors"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
    >
      {item.icon}
    </motion.a>
  ))}
</div>


        {/* ===== COPYRIGHT ===== */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-500 tracking-wide mt-8 md:mt-16"
        >
          © {new Date().getFullYear()} MrPRESH CODE. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
