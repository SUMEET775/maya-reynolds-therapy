import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function FinalCta() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E7E0D6] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Clean 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column (Cols 1 to 7 on Desktop): Copy and CTA Button */}
          <div className="lg:col-span-7 space-y-6 lg:pr-4 text-left">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#547A65]">
                Begin Your Healing Journey
              </p>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] text-[#242828] font-normal leading-tight tracking-tight">
                Finding the right therapist is the first step toward lasting ease.
              </h2>
            </div>

            {/* Mobile/Tablet Image (visible on < lg screens, before information) */}
            <div className="lg:hidden flex justify-center py-2">
              <div className="w-full max-w-[360px]">
                <div className="relative aspect-[4/3] sm:aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-sm border-2 border-[#E7E0D6] bg-[#F2EDE5]">
                  <Image
                    src="/images/final_cta_welcome.jpg"
                    alt="Warm and inviting therapy consultation armchair corner in Santa Monica with Dr. Maya Reynolds"
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-[#555E5A] leading-relaxed font-light">
              Coming to therapy is a courageous decision, and connecting with the right therapist makes all the difference. I understand that your journey is deeply personal, and I’m here to support you with care, warmth, and grounded presence every step of the way.
            </p>

            <p className="text-sm sm:text-base text-[#707B75] leading-relaxed">
              Offering both in-person therapy at my quiet Santa Monica office and secure telehealth sessions for clients located across California.
            </p>

            {/* Pill CTA Button */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-medium text-white bg-[#547A65] rounded-full overflow-hidden shadow-xs transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#547A65]"
              >
                <span className="absolute inset-0 w-full h-full bg-[#3D5B4A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Schedule a Session</span>
              </Link>
            </div>
          </div>

          {/* Desktop Right Column (Cols 8 to 12): visible on lg+ screens */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="w-full max-w-[420px]">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden shadow-sm border-2 border-[#E7E0D6] bg-[#F2EDE5]">
                <Image
                  src="/images/final_cta_welcome.jpg"
                  alt="Warm and inviting therapy consultation armchair corner in Santa Monica with Dr. Maya Reynolds"
                  fill
                  sizes="420px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
