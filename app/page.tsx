
"use client";

import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import UserNav from "../components/navview";
import Sidebar from "@/components/sidebar";
import HeroSection from "../components/herosection";
import AboutSection from "../components/aboutsection";
import QualificationSection from "../components/qualificationsection";
import Experience from "../components/experience";
import Portfolio from "../components/portfolio";
import Services from "../components/servicessection";
import ContactSection from "@/components/contactsection";
import Footer from "../components/footer";

function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="fixed top-4 right-4 z-50">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  details: string[];
}




export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const services: Service[] = [
    {
      id: 1,
      title: "Frontend Development",
      description: "I build fast, responsive, and visually appealing interfaces using modern technologies like React, Next.js, and Tailwind CSS.",
      icon: "ri-window-fill",
      details: [
        "Responsive web design",
        "Single Page Applications (SPA) development",
        "Progressive Web Apps (PWA)",
        "UI/UX implementation",
        "Performance optimization"
      ]
    },
    {
      id: 2,
      title: "Backend Development",
      description: "Clean, scalable backend systems with Node.js, Express, REST APIs, authentication, databases, and cloud deployments.",
      icon: "ri-code-s-slash-line",
      details: [
        "RESTful API development",
        "Database design & optimization",
        "Authentication & authorization",
        "Serverless architecture",
        "API documentation"
      ]
    },
    {
      id: 3,
      title: "Full-Stack Solutions",
      description: "Complete end-to-end solutions — from UI/UX and APIs to database architecture, integrations, and deployment.",
      icon: "ri-server-line",
      details: [
        "End-to-end web applications",
        "Database architecture",
        "Third-party integrations",
        "CI/CD pipeline setup",
        "Cloud deployment & scaling"
      ]
    }
  ];

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="flex flex-col bg-black text-white scroll-smooth">
      {/* ===== Theme Toggle ===== */}
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>

      {/* ===== Sidebar ===== */}
      <Sidebar />

      {/* ===== Hero Section ===== */}
      <HeroSection />

      {/* ===== About Section ===== */}
      <AboutSection />


      {/* ===== Qualifications Section ===== */}
      <QualificationSection />


      {/* ===== Experience / Abilities Section ===== */}
      <Experience />      


      {/* ===== Portfolio Section (Animated) ===== */}
      <Portfolio />


      {/* ===== Services Section ===== */}
      <Services />


      {/* ===== Contact Section ===== */}
      <ContactSection />

      {/* ===== Navview ===== */}
      <UserNav />

      {/* ===== Footer ===== */}
      <Footer />


    </main>
  );
}







