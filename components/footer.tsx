"use client"

import { Twitter, Facebook, Instagram } from 'lucide-react';



export default function Footer() {
  return (

    <footer className="w-full bg-black text-white mt-10 sm:mt-16 md:mt-24 border-t border-gray-800 py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-8 md:px-24 relative">
    {/* ===== SOCIAL ICONS (TOP RIGHT on desktop) ===== */}
    <div className="hidden md:flex absolute right-8 md:right-24 top-0 items-center gap-6 text-2xl">
      <a href="#" className="hover:text-[#ff004f] transition">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Twitter className="w-6 h-6" />
      </a>
    </div>

    {/* ===== FOOTER GRID ===== */}
    <div className="grid grid-cols-1 md:grid-cols-3 items-center text-center md:text-left gap-10">
      {/* LEFT — NAME + ROLE */}
      <div>
        <h2 className="text-4xl font-extrabold tracking-wide">MR PRESH</h2>
        <p className="text-gray-400 text-base font-medium mt-1">
          Full Stack Developer
        </p>
      </div>

      {/* CENTER — NAVIGATION */}
      <ul className="flex justify-center gap-10 text-lg font-semibold">
        <li>
          <a href="#services" className="hover:text-[#ff004f] transition">Services</a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-[#ff004f] transition">Work</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-[#ff004f] transition">Contact</a>
        </li>
      </ul>

      {/* EMPTY COLUMN (for layout balance on desktop) */}
      <div></div>
    </div>

    {/* ===== SOCIAL ICONS (BOTTOM CENTER on mobile) ===== */}
    <div className="flex md:hidden justify-center mt-10 gap-8 text-2xl">
      <a href="#" className="hover:text-[#ff004f] transition">
        <Facebook className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="hover:text-[#ff004f] transition">
        <Twitter className="w-6 h-6" />
      </a>
    </div>

    {/* COPYRIGHT */}
    <p className="text-center text-xs text-gray-500 tracking-wide mt-8 md:mt-16">
      © MrPRESH CODE. All rights reserved
    </p>
  </div>
</footer>

  )
};

