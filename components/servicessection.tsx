"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface Service {
  id: string | number;
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  const services: Service[] = [
    {
      id: 1,
      icon: "ri-rocket-line",
      title: "Web Application Development",
      description:
        "I build fast, responsive, and scalable web apps that improve user experience and performance.",
      details: [
        "Lightning-fast load times for better user retention",
        "Mobile-responsive designs that convert more visitors",
        "Scalable architecture that grows with your business",
        "Enhanced user experience that drives engagement",
      ],
    },
    {
      id: 2,
      icon: "ri-code-box-line",
      title: "Full-Stack Development",
      description:
        "From frontend UI to backend APIs, I handle complete application development.",
      details: [
        "End-to-end solutions saving you time and coordination costs",
        "Seamless integration between frontend and backend systems",
        "Comprehensive testing for reliable, bug-free applications",
        "Single point of contact for faster development cycles",
      ],
    },
    {
      id: 3,
      icon: "ri-robot-line",
      title: "AI Evaluation & Coding Tasks",
      description:
        "I analyze and improve AI-generated code for accuracy, efficiency, and quality.",
      details: [
        "Enhanced code quality that reduces maintenance costs",
        "Optimized performance for faster, more efficient applications",
        "Security improvements to protect your data and users",
        "Clean, documented code that your team can easily maintain",
      ],
    },
    {
      id: 4,
      icon: "ri-briefcase-line",
      title: "Freelance Web Solutions",
      description:
        "Need a dashboard, SaaS, or custom platform? I deliver production-ready solutions.",
      details: [
        "Custom dashboards that provide actionable business insights",
        "SaaS platforms built for scalability and user retention",
        "Rapid prototyping to validate your ideas quickly",
        "Production-ready solutions that generate revenue from day one",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-24 md:ml-24 
                 bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-500"
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
        <h2 className="text-4xl md:text-5xl font-extrabold">What I Do</h2>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl 
                       bg-gray-50 border border-gray-200 
                       dark:bg-[#0f0f0f] dark:border-gray-800
                       hover:border-[#ff004f] hover:-translate-y-3 hover:shadow-[0_10px_30px_#ff004f20]
                       transition-all duration-500 flex flex-col h-full group cursor-pointer"
            onClick={() => openServiceModal(service)}
          >
            <div className="text-[#ff004f] text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
              <i className={service.icon}></i>
            </div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-[#ff004f] transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-6 grow">
              {service.description}
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                openServiceModal(service);
              }}
              className="text-[#ff004f] font-semibold text-sm flex items-center gap-2 hover:gap-3 transition-all self-start"
            >
              View More <span>→</span>
            </button>
          </motion.div>
        ))}

        {/* Modal */}
        {isModalOpen && selectedService && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-[#0f0f0f] 
                         border border-gray-300 dark:border-gray-800 
                         rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative
                         text-gray-900 dark:text-gray-100 transition-colors duration-500"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 text-gray-500 dark:text-gray-400 hover:text-[#ff004f] transition-colors"
                aria-label="Close modal"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>

              <div className="flex items-start gap-6 mb-8">
                <div className="text-[#ff004f] text-4xl">
                  <i className={selectedService.icon}></i>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">
                    {selectedService.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    {selectedService.description}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">What I offer:</h4>
                <ul className="space-y-2">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#ff004f] mt-1">•</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-800">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Interested in this service?
                </p>
                <Link
                  href="#contact"
                  onClick={closeModal}
                  className="inline-flex items-center gap-2 bg-[#ff004f] text-white px-6 py-2.5 rounded-md font-semibold hover:bg-[#e60047] transition"
                >
                  Request a Quote
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}