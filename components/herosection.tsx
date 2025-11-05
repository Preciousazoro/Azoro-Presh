"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaUser, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

{/* ===== Hero Section ===== */}

  export default function HeroSection() {
    return ( 

      <section
        id="home"
        className="flex flex-1 items-center justify-between flex-col md:flex-row px-8 md:ml-24 md:px-24 py-16 min-h-screen"
      >
        {/* Left Content */}
        <div className="max-w-lg flex flex-col justify-center h-full">
          {/* Follow Me */}
          <div className="flex items-center space-x-5 mb-8 text-gray-300">
            <p className="text-sm text-gray-400 font-medium tracking-wide">Follow Me —</p>
            <FaFacebookF className="hover:text-[#ff004f] cursor-pointer" />
            <FaInstagram className="hover:text-[#ff004f] cursor-pointer" />
            <FaTwitter className="hover:text-[#ff004f] cursor-pointer" />
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold mb-4 leading-tight">
            Hi, I&apos;m <span className="text-[#ff004f]">PRECIOUS</span>
          </h1>
          <h2 className="text-2xl font-semibold mb-5 text-gray-100">
            Frontend Developer
          </h2>

          <p className="text-gray-400 mb-10 leading-relaxed text-[15px]">
            I have high level experience in web design, development knowledge and
            producing quality work.
          </p>

           <div>
             <Link
              href="#about"
              className="inline-flex items-center gap-2 bg-[#ff004f] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#e60047] transition"
              aria-label="More About me"
            >
              <FaUser className="w-4 h-4" />
              <span className="text-sm">More About me!</span>
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-10 mt-14 text-sm text-gray-300">
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-[#25D366] text-2xl" />
              <div>
                <p className="font-medium text-white">Whatsapp</p>
                <p className="text-gray-400 text-[14px]">08122844144</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <MdEmail className="text-[#ff004f] text-2xl" />
              <div>
                <p className="font-medium text-white">Email</p>
                <p className="text-gray-400 text-[14px]">azoroprecious7@icloud.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-16 md:mt-0 relative w-[300px] h-[400px] md:w-[380px] md:h-[500px]">
          <Image
            src="/MyPFP.png"
            alt="Precious"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </section>

      
          )
        };   
          