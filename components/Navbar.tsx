"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E7E0D6] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Therapist Name */}
          <Link href="/" className="flex flex-col group" onClick={closeMenu}>
            <span className="font-serif text-xl sm:text-2xl font-medium tracking-tight text-[#242828] group-hover:text-[#547A65] transition-colors">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="text-xs text-[#6B7570] tracking-wide font-sans">
              Licensed Clinical Psychologist · Santa Monica, CA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-9">
            <Link
              href="/about"
              className="text-[17px] font-medium text-[#363E3B] hover:text-[#547A65] transition-colors"
            >
              About
            </Link>
            <Link
              href="/#specialties"
              className="text-[17px] font-medium text-[#363E3B] hover:text-[#547A65] transition-colors"
            >
              Specialties
            </Link>
            <Link
              href="/office"
              className="text-[17px] font-medium text-[#363E3B] hover:text-[#547A65] transition-colors"
            >
              Our Office
            </Link>
            <Link
              href="/faq"
              className="text-[17px] font-medium text-[#363E3B] hover:text-[#547A65] transition-colors"
            >
              FAQ
            </Link>

            {/* Navbar CTA Button */}
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-6 py-2.5 text-[16px] font-medium text-white bg-[#547A65] rounded-full overflow-hidden shadow-xs transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#547A65] active:outline-none active:ring-0"
            >
              <span className="absolute inset-0 w-full h-full bg-[#3D5B4A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book a Session</span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-[#333B38] hover:bg-[#EFE9DF] transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#547A65] active:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E7E0D6] bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/about"
            onClick={closeMenu}
            className="block px-3 py-2.5 text-lg font-medium text-[#2E3633] hover:bg-[#F2ECE2] rounded-lg transition-colors"
          >
            About
          </Link>
          <Link
            href="/#specialties"
            onClick={closeMenu}
            className="block px-3 py-2.5 text-lg font-medium text-[#2E3633] hover:bg-[#F2ECE2] rounded-lg transition-colors"
          >
            Specialties
          </Link>
          <Link
            href="/office"
            onClick={closeMenu}
            className="block px-3 py-2.5 text-lg font-medium text-[#2E3633] hover:bg-[#F2ECE2] rounded-lg transition-colors"
          >
            Our Office
          </Link>
          <Link
            href="/faq"
            onClick={closeMenu}
            className="block px-3 py-2.5 text-lg font-medium text-[#2E3633] hover:bg-[#F2ECE2] rounded-lg transition-colors"
          >
            FAQ
          </Link>
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={closeMenu}
              className="group relative block w-full text-center px-6 py-3.5 text-base font-medium text-white bg-[#547A65] rounded-full overflow-hidden transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#547A65] active:outline-none active:ring-0"
            >
              <span className="absolute inset-0 w-full h-full bg-[#3D5B4A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book a Session</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
