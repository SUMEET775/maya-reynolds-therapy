import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#DFD8CC]">
      {/* Section 10: Main Footer Grid (Matching Reference Site Section 10) */}
      <div className="bg-[#FAF8F5] py-20 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
            {/* Column 1 (Cols 1 to 5): Logo & Getting Started Paragraph */}
            <div className="md:col-span-5 space-y-5">
              <div>
                <Link href="/" className="font-serif text-2xl sm:text-3xl text-[#242828] font-normal hover:text-[#547A65] transition-colors">
                  Dr. Maya Reynolds, PsyD
                </Link>
                <p className="text-xs font-semibold text-[#547A65] tracking-wider uppercase mt-1">
                  Licensed Clinical Psychologist 
                </p>
              </div>
              <p className="text-base text-[#555E5A] leading-relaxed max-w-md font-light">
                I want to make getting started simple. You’re welcome to come into my office in Santa Monica or schedule virtual appointments from anywhere in California—whatever works best for you.
              </p>
            </div>

            {/* Column 2 (Cols 6 to 7): Explore */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#242828]">
                Explore
              </h4>
              <ul className="space-y-3 text-sm text-[#555E5A]">
                <li>
                  <Link href="/about" className="hover:text-[#547A65] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#who-i-help" className="hover:text-[#547A65] transition-colors">
                    Who I Support
                  </Link>
                </li>
                <li>
                  <Link href="/office" className="hover:text-[#547A65] transition-colors">
                    Our Office
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-[#547A65] transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#547A65] transition-colors">
                    Contact & Booking
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 (Cols 8 to 9): Clinical Focus */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#242828]">
                Clinical Focus
              </h4>
              <ul className="space-y-3 text-sm text-[#555E5A]">
                <li>Trauma & EMDR</li>
                <li>Anxiety & Panic</li>
                <li>Burnout & Stress</li>
                <li>Mindfulness & Somatics</li>
                <li>California Telehealth</li>
              </ul>
            </div>

            {/* Column 4 (Cols 10 to 12): Office & Telehealth */}
            <div className="md:col-span-3 space-y-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#242828]">
                Office & Telehealth
              </h4>
              <address className="not-italic text-sm text-[#555E5A] space-y-2.5 leading-relaxed">
                <p className="font-medium text-[#242828]">
                  123th Street 45 W
                  <br />
                  Santa Monica, CA 90401
                </p>
                <p className="text-xs text-[#707B75]">
                  Quiet, private space designed to feel calm and grounding, with natural light and an uncluttered environment.
                </p>
                <p className="pt-2 text-xs font-medium text-[#547A65]">
                  Serving Santa Monica & Statewide California via Telehealth
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Section 11: Dark Sub-Footer (Matching Reference Site Section 11) */}
      <div className="bg-[#1E2522] py-8 text-white/75 text-xs">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span>|</span>
            <span className="hover:text-white cursor-pointer transition-colors">Disclaimer</span>
          </div>
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. Licensed Clinical Psychologist.
          </p>
        </div>
      </div>
    </footer>
  );
}
