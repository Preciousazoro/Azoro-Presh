"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/preciousazoro",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/azoroprecious/",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/m0st_rugged",
    },
  ];

  return (
    <footer className="w-full border-t border-gray-800 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 md:px-24">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons */}
          <div className="flex gap-6">
            {socialLinks.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-[#ff004f] dark:hover:text-[#ff004f] transition-colors duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.icon}
              </motion.a>
            ))}
          </div>

          {/* Footer Content */}
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              © 2026 AZORO PRECIOUS. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300">
              Designed & built by me.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
