"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

export default function UserNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const router = useRouter();

  const navItems: NavItem[] = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Work", href: "#work", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleScroll = () => {
    const sections = ["home", "about", "work", "contact"];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      router.push(href, { scroll: false });
    }
  };

  const isActive = (href: string) => {
    const sectionId = href.replace("#", "");
    return (
      activeSection === sectionId ||
      pathname === href ||
      (href !== "/" && pathname?.startsWith(`${href}/`))
    );
  };

  return (
    <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[999] w-[92%] max-w-md md:hidden">
      <div className="relative bg-white/10 dark:bg-black/50 backdrop-blur-2xl border border-white/10 dark:border-gray-800 rounded-3xl px-2 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex justify-around items-center transition-all duration-500">
        {navItems.map(({ name, href, icon: Icon }) => {
          const active = isActive(href);
          return (
            <button
              key={name}
              onClick={(e) => scrollToSection(e, href)}
              className={`relative flex flex-col items-center justify-center w-full py-2 rounded-2xl transition-all duration-300 ${
                active
                  ? "text-[#ff004f] scale-105"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {/* Active background bubble */}
              {active && (
                <span className="absolute inset-0 bg-[#ff004f]/10 blur-sm rounded-2xl transition-all duration-300"></span>
              )}

              {/* Icon */}
              <Icon
                className={`w-5 h-5 relative z-10 transition-transform duration-300 ${
                  active ? "scale-110" : "group-hover:scale-110"
                }`}
                strokeWidth={active ? 2.5 : 2}
              />

              {/* Label */}
              <span
                className={`text-[0.7rem] mt-1 font-medium tracking-wide relative z-10 ${
                  active ? "text-white" : "text-gray-400"
                }`}
              >
                {name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Glow effect underneath nav */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-6 bg-[#ff004f]/40 blur-3xl opacity-40"></div>
    </nav>
  );
}






// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { Home, User, Briefcase, Mail } from "lucide-react";
// import { useEffect, useState } from "react";

// type NavItem = {
//   name: string;
//   href: string;
//   icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
// };

// export default function UserNav() {
//   const pathname = usePathname();
//   const [activeSection, setActiveSection] = useState("home");
//   const router = useRouter();

//   const navItems: NavItem[] = [
//     { name: "Home", href: "#home", icon: Home },
//     { name: "About", href: "#about", icon: User },
//     { name: "Work", href: "#work", icon: Briefcase },
//     { name: "Contact", href: "#contact", icon: Mail },
//   ];

//   const handleScroll = () => {
//     const sections = ["home", "about", "work", "contact"];
    
//     for (const section of sections) {
//       const element = document.getElementById(section);
//       if (element) {
//         const rect = element.getBoundingClientRect();
//         if (rect.top <= 100 && rect.bottom >= 100) {
//           setActiveSection(section);
//           break;
//         }
//       }
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (e: React.MouseEvent, href: string) => {
//     e.preventDefault();
//     const sectionId = href.replace('#', '');
//     const element = document.getElementById(sectionId);
//     if (element) {
//       window.scrollTo({
//         top: element.offsetTop - 80,
//         behavior: 'smooth',
//       });
//       setActiveSection(sectionId);
//       router.push(href, { scroll: false });
//     }
//   };

//   const isActive = (href: string) => {
//     const sectionId = href.replace('#', '');
//     return activeSection === sectionId || 
//            (pathname === href || (href !== '/' && pathname?.startsWith(`${href}/`)));
//   };

//   return (
//     <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-md mx-auto md:hidden">
//       <div className="bg-white/10 dark:bg-black/80 backdrop-blur-lg border border-gray-200 dark:border-gray-800 rounded-2xl p-1.5 shadow-lg dark:shadow-black/30 transition-colors duration-300">
//         <div className="flex justify-between items-center px-1 sm:px-2">
//           {navItems.map(({ name, href, icon: Icon }) => {
//             const active = isActive(href);
//             return (
//               <a
//                 key={name}
//                 href={href}
//                 onClick={(e) => scrollToSection(e, href)}
//                 className={`flex flex-col items-center justify-center w-full py-2.5 px-1 rounded-xl transition-all duration-300 group ${
//                   active 
//                     ? 'bg-[#ff004f]/10 dark:bg-gray-800 text-[#ff004f]' 
//                     : 'text-gray-600 dark:text-gray-400 hover:text-[#ff004f] dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50'
//                 }`}
//               >
//                 <div className="relative p-2">
//                   <Icon 
//                     className={`w-5 h-5 transition-transform duration-300 ${
//                       active ? 'scale-110' : 'group-hover:scale-110'
//                     }`} 
//                     strokeWidth={active ? 2.5 : 2}
//                   />
//                   {active && (
//                     <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#ff004f] rounded-full"></span>
//                   )}
//                 </div>
//                 <span className={`text-xs font-medium mt-1 ${
//                   active ? 'text-white' : 'text-gray-400'
//                 }`}>
//                   {name}
//                 </span>
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// }