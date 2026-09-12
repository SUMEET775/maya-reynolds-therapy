import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 lg:py-28 border-b border-[#E7E0D6] overflow-hidden bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Clean 2-Column Layout: Left Portrait, Right Headline & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center">
          {/* Column 1 (Left - Cols 1 to 5): Primary Portrait of Dr. Maya Reynolds */}
          <div className="order-1 lg:order-1 lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-[340px] sm:max-w-[380px] lg:max-w-[420px]">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border-2 border-[#E7E0D6] shadow-sm bg-[#F2EDE5]">
                <Image
                  src="/images/dr-maya-reynolds.png"
                  alt="Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist in Santa Monica"
                  fill
                  priority
                  sizes="(max-width: 1024px) 380px, 420px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Column 2 (Right - Cols 6 to 12): Eyebrow, Single H1, H2, Bio Intro, CTA */}
          <div className="order-2 lg:order-2 lg:col-span-7 space-y-6 lg:pl-2">
            <p className="text-sm sm:text-[15px] font-medium tracking-wide text-[#486D5A]">
              Licensed Clinical Psychologist · In-Person in Santa Monica &amp; Telehealth Across California
            </p>

            {/* Single H1 on page for primary headline & emotional resonance */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[50px] text-[#242828] font-normal leading-[1.18] tracking-tight">
              A grounded space to heal from anxiety, burnout, and{" "}
              <span className="italic font-normal">past experiences</span>.
            </h1>

           
            <p className="text-base sm:text-lg text-[#555E5A] leading-relaxed font-light max-w-2xl">
              Specialized therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Helping high-achieving, thoughtful individuals move from exhaustion to grounded resilience.
            </p>

            {/* CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm sm:text-base font-medium text-white bg-[#547A65] rounded-full overflow-hidden shadow-xs transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#547A65]"
              >
                <span className="absolute inset-0 w-full h-full bg-[#3D5B4A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Schedule a Session</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
