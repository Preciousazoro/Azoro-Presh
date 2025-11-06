"use client";

import Image from "next/image";
import { FaUser, FaHeadset, FaAward, FaCheckCircle } from "react-icons/fa";
import { useActiveSection } from "./sidebar";

export default function AboutSection() {
  const { scrollToSection } = useActiveSection();

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-20 md:ml-24 min-h-screen 
      bg-white text-gray-900 dark:bg-black dark:text-gray-100 transition-colors duration-300"
    >
      {/* Left Image */}
      <div className="hidden md:relative md:block w-[280px] h-[400px] md:w-[360px] md:h-[500px] mb-10 md:mb-0">
        <Image
          src="/ABOUT-PFP.PNG"
          alt="About Precious"
          fill
          className="object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Right Content */}
      <div className="max-w-2xl md:pl-16">
        <p className="text-[#ff004f] font-semibold mb-1">My Intro</p>
        <h2 className="text-4xl font-extrabold mb-6">About me</h2>

        <h3 className="text-xl font-bold mb-4">
          Hi, I'm AZORO PRECIOUS, based in Nigeria
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-[15px]">
          Hi, I’m AZORO PRECIOUS, a passionate web developer dedicated to
          crafting interactive, intuitive, and visually engaging websites. I
          focus on building responsive, high-performance web platforms that
          prioritize both usability and user experience.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-[15px]">
          With over two years of hands-on experience working with technologies
          like HTML, CSS, Next.js, React, Node.js, Tailwind CSS, and Shadcn/UI.
          I thrive on tackling challenging projects and continually expanding my
          skills to stay ahead in the ever-evolving tech landscape.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-[15px]">
          My goal is to create digital experiences that seamlessly blend
          aesthetics with functionality, ensuring users enjoy both beauty and
          effortless navigation.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-100 dark:bg-[#111] p-5 rounded-lg text-center border border-gray-300 dark:border-gray-800 hover:border-[#ff004f] transition">
            <FaAward className="text-[#ff004f] text-2xl mx-auto mb-2" />
            <h4 className="font-semibold">Experience</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">2+ Years</p>
          </div>

          <div className="bg-gray-100 dark:bg-[#111] p-5 rounded-lg text-center border border-gray-300 dark:border-gray-800 hover:border-[#ff004f] transition">
            <FaCheckCircle className="text-[#ff004f] text-2xl mx-auto mb-2" />
            <h4 className="font-semibold">Completed</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              5+ Projects
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-[#111] p-5 rounded-lg text-center border border-gray-300 dark:border-gray-800 hover:border-[#ff004f] transition">
            <FaHeadset className="text-[#ff004f] text-2xl mx-auto mb-2" />
            <h4 className="font-semibold">Support</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Online 24/7
            </p>
          </div>
        </div>

        <button
  onClick={() => scrollToSection("contact")}
  className="w-full bg-[#ff004f] text-white px-10 py-3 rounded-md font-semibold flex items-center justify-center gap-2 
             hover:bg-[#e60047] transition"
>
  <FaUser className="w-4 h-4" />
  Contact me
</button>

      </div>
    </section>
  );
}

// "use client"

// import Image from 'next/image';
// import Link from 'next/link';
// import { FaUser, FaHeadset, FaAward, FaCheckCircle } from 'react-icons/fa';
// import { useActiveSection } from './sidebar';

// export default function AboutSection() {
//   const { scrollToSection } = useActiveSection();
//   return (

//       <section
//         id="about"
//         className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-24 py-12 sm:py-16 md:py-20 md:ml-24 min-h-screen bg-black"
//       >
//         {/* Left Image */}
//        <div className="hidden md:relative md:block w-[280px] h-[400px] md:w-[360px] md:h-[500px] mb-10 md:mb-0">
//         <Image
//           src="/ABOUT-PFP.PNG"
//           alt="About Precious"
//           fill
//           className="object-cover rounded-xl"
//         />
//       </div>

//         {/* Right Content */}
//         <div className="max-w-2xl md:pl-16">
//           <p className="text-[#ff004f] font-semibold mb-1">My Intro</p>
//           <h2 className="text-4xl font-extrabold mb-6">About me</h2>

//           <h3 className="text-xl font-bold mb-4">
//             Hi, I'm AZORO PRECIOUS, based in Nigeria
//           </h3>
//           <p className="text-gray-400 mb-6 leading-relaxed text-[15px]">
//             Hi, I'm AZORO PRECIOUS. An enthusiastic and skilled web developer driven
//             by a passion for building interactive, intuitive, and visually captivating
//             websites. I specialize in creating responsive and high-performing web
//             platforms that offer exceptional usability and engagement.
//           </p>
//           <p className="text-gray-400 mb-6 leading-relaxed text-[15px]">
//             With more than 3 years of practical experience working with tools and
//             frameworks like HTML, CSS, JavaScript, React, and Node.js, I enjoy
//             tackling challenging projects and constantly upgrading my skills to keep
//             pace with the ever-changing tech landscape.
//           </p>
//           <p className="text-gray-400 mb-10 leading-relaxed text-[15px]">
//             My aim is to design digital experiences that combine aesthetic appeal with
//             smooth functionality, ensuring users enjoy both beauty and ease of use.
//           </p>

//           {/* Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
//             <div className="bg-[#111] p-5 rounded-lg text-center border border-gray-800 hover:border-[#ff004f] transition">
//               <FaAward className="text-[#ff004f] text-2xl mx-auto mb-2" />
//               <h4 className="font-semibold">Experience</h4>
//               <p className="text-gray-400 text-sm">2+ Years</p>
//             </div>

//             <div className="bg-[#111] p-5 rounded-lg text-center border border-gray-800 hover:border-[#ff004f] transition">
//               <FaCheckCircle className="text-[#ff004f] text-2xl mx-auto mb-2" />
//               <h4 className="font-semibold">Completed</h4>
//               <p className="text-gray-400 text-sm">5+ Projects</p>
//             </div>

//             <div className="bg-[#111] p-5 rounded-lg text-center border border-gray-800 hover:border-[#ff004f] transition">
//               <FaHeadset className="text-[#ff004f] text-2xl mx-auto mb-2" />
//               <h4 className="font-semibold">Support</h4>
//               <p className="text-gray-400 text-sm">Online 24/7</p>
//             </div>
//           </div>

//           <button
//             onClick={() => scrollToSection('contact')}
//             className="bg-[#ff004f] text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 hover:bg-[#e60047] transition"
//           >
//             <FaUser className="w-4 h-4" />
//             Contact me
//           </button>
//         </div>
//       </section>

//   )
// };
