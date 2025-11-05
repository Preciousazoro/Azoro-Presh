
"use client"

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Sidebar() {
  return (
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
  );
}
