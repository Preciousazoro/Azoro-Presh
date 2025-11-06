"use client"

import { FaGraduationCap, FaLaptopCode, FaCalendarAlt, FaMapMarkerAlt, FaAward } from 'react-icons/fa';
import { SiUdemy } from 'react-icons/si';

export default function QualificationSection() {
  return (

    <section
        id="skills"
        className="flex flex-col items-center justify-center px-8 md:px-24 py-20 md:ml-24 bg-black text-white"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#ff004f] font-semibold mb-2">My Journey</p>
          <h2 className="text-4xl md:text-5xl font-extrabold">Qualifications</h2>
        </div>

        {/* Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
          {/* ===== Education Column ===== */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
              <FaGraduationCap className="text-[#ff004f]" /> Education
            </h3>

            {/* Item 1 */}
            <div className="relative pl-8 border-l-2 border-gray-800 mb-10">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#ff004f] rounded-full"></span>
              <h4 className="font-semibold text-lg">
                Godfrey Okoye University (Thinkers Corner, Enugu)
              </h4>
              <p className="text-gray-400 text-sm mb-1">
                BSc in Computer Science
              </p>
              <p className="text-[#ff004f] text-sm flex items-center gap-1 mt-2">
                <FaCalendarAlt className="text-[#ff004f]" /> 2021 – 2025
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 border-l-2 border-gray-800">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#ff004f] rounded-full"></span>
              <h4 className="font-semibold text-lg">Udemy Course</h4>
              <p className="text-gray-400 flex gap-1 text-sm mb-1">
                <FaAward className="text-[#ff004f]" /> Web Development course
              </p>
              <p className="text-[#ff004f] text-sm flex items-center gap-1 mt-2">
                <FaCalendarAlt className="text-[#ff004f]" /> 2023 – 2024
              </p>
            </div>
          </div>

          {/* ===== Experience Column ===== */}
          <div>
            <h3 className="text-xl font-bold flex items-center gap-2 mb-8">
              <FaLaptopCode className="text-[#ff004f]" /> Experience
            </h3>

            {/* Item 1 */}
            <div className="relative pl-8 border-l-2 border-gray-800 mb-10">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#ff004f] rounded-full"></span>
              <h4 className="font-semibold text-lg">
                Freelance Web Developer (Remote)
              </h4>
              <p className="text-gray-400 text-sm mb-1">
                Designed and developed responsive, user-friendly websites using HTML, CSS,
                JavaScript, React, and Node.js.
              </p>
              <p className="text-[#ff004f] text-sm flex items-center gap-1 mt-2">
                <FaCalendarAlt className="text-[#ff004f]" /> 2024 – 2025
              </p>
            </div>

            {/* Item 2 */}
            <div className="relative pl-8 border-l-2 border-gray-800">
              <span className="absolute -left-[9px] top-1.5 w-4 h-4 bg-[#ff004f] rounded-full"></span>
              <h4 className="font-semibold text-lg">Frontend Developer</h4>
              <p className="text-gray-400 text-sm mb-1">
                Contributed to the design and implementation of Poplox Website.
              </p>
              <p className="text-[#ff004f] text-sm flex items-center gap-1 mt-2">
                <FaCalendarAlt className="text-[#ff004f]" /> 2024 – 2025
              </p>
            </div>
          </div>
        </div>
      </section>

  )
};



      