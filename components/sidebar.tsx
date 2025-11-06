
"use client"

import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'work', 'services', 'contact'];
      const scrollPosition = window.scrollY + 200;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection, setActiveSection, scrollToSection };
};

export default function Sidebar() {
  const { activeSection, setActiveSection, scrollToSection } = useActiveSection();
  return (
    <aside className="hidden md:fixed md:flex flex-col justify-between items-center py-10 w-24 bg-[#0e0e0e] border-r border-gray-800 min-h-screen">
        {/* Logo + Nav */}
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="h-12 w-12 rounded-full bg-[#ff004f] flex items-center justify-center text-lg font-bold text-white mb-16">
            AP
          </div>

          {/* Navbar */}
          <nav className="flex flex-col items-center gap-18 font-bold tracking-wider uppercase text-[14px]">
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
                className={`relative -rotate-90 font-bold ${
                  activeSection === item.id.toLowerCase()
                    ? "text-[#ff004f]"
                    : "text-gray-400 hover:text-white"
                } cursor-pointer transition-colors`}
              >
                {item.label}
                {activeSection === item.id.toLowerCase() && (
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
  );
}
