"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, User, Code, Briefcase, Layers, Mail } from "lucide-react";

// Hook for tracking & scrolling to active section
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    console.log(`Attempting to scroll to section: ${sectionId}`);
    const element = document.getElementById(sectionId);
    console.log(`Found element:`, element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    } else {
      console.error(`Section with id "${sectionId}" not found`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "work", "services", "contact"];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { activeSection, scrollToSection };
};

// Sidebar Component
export default function Sidebar() {
  const { activeSection, scrollToSection } = useActiveSection();

  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "services", label: "Services", icon: Layers },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <aside
      className="hidden md:fixed md:flex flex-col justify-between items-center py-8 w-24 
                 bg-background border-r border-border min-h-screen backdrop-blur-md 
                 transition-colors duration-300"
    >
            {/* Logo */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
              >
                <div className="h-12 w-12 rounded-full overflow-hidden shadow-lg shadow-[#ff004f]/30">
                  <img
                    src="/LOGO.png"
                    alt="AP Logo"
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>


      {/* Navigation */}
      <nav className="flex flex-col items-center gap-10">
        {navItems.map(({ id, label, icon: Icon }) => (
          <motion.button
            key={id}
            onClick={() => scrollToSection(id)}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 ${
              activeSection === id
                ? "text-[#ff004f]"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Icon
              className={`w-5 h-5 ${
                activeSection === id ? "text-[#ff004f]" : "text-muted-foreground"
              }`}
            />
            <span className="text-[10px] font-medium tracking-wide uppercase">
              {label}
            </span>

            {activeSection === id && (
              <motion.span
                layoutId="active-dot"
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ff004f]"
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </motion.button>
        ))}
      </nav>

      {/* Bottom Arrow */}
      <div className="flex flex-col items-center mt-16 text-muted-foreground">
        <motion.svg
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
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
        </motion.svg>
      </div>
    </aside>
  );
}
