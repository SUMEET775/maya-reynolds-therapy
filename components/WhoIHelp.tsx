import React from "react";
import Image from "next/image";

export default function WhoIHelp() {
  return (
    <section id="who-i-help" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E7E0D6]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Heading Left-Aligned Matching Reference Site */}
        <div className="mb-14 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65]">
            Who I Work With
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#242828] font-normal leading-tight tracking-tight">
           Therapy for Adults Navigating Anxiety, Burnout & Past Experiences
          </h2>
          <p className="text-base sm:text-lg text-[#555E5A] font-light leading-relaxed">
            For high-achieving, self-aware individuals who appear capable and functional on the outside, while quietly navigating constant tension, burnout, or past experiences within.
          </p>
        </div>

        {/* 3 Column Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {/* Card 1: Adults with Anxiety & Panic */}
          <div className="flex flex-col space-y-5">
            <div className="relative aspect-[4/3] w-full rounded-t-[80px] rounded-b-2xl overflow-hidden bg-[#ECE6DC] border border-[#E2DAD0] shadow-xs">
              <Image
                src="/images/anxiety.jpg"
                alt="Therapy for adults with anxiety, stress, and panic in Santa Monica"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-[#242828] font-normal">
                Adults Navigating Anxiety & Panic
              </h3>
              <p className="text-base text-[#555E5A] leading-relaxed font-light">
                Feeling stuck or overwhelmed? I help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, tension in the body, and emotional exhaustion.
              </p>
            </div>
          </div>

          {/* Card 2: High-Achievers & Professionals Facing Burnout */}
          <div className="flex flex-col space-y-5">
            <div className="relative aspect-[4/3] w-full rounded-t-[80px] rounded-b-2xl overflow-hidden bg-[#ECE6DC] border border-[#E2DAD0] shadow-xs">
              <Image
                src="/images/burnout.jpg"
                alt="Support for professional burnout and perfectionism in California"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-[#242828] font-normal">
                High-Achievers Facing Burnout
              </h3>
              <p className="text-base text-[#555E5A] leading-relaxed font-light">
                For entrepreneurs, creatives, and high-achieving professionals dealing with burnout, perfectionism, and relentless internal pressure. Therapy becomes a dedicated space to slow down, reconnect, and develop more sustainable ways of living and working.
              </p>
            </div>
          </div>

          {/* Card 3: Adults Navigating Trauma & Past Experiences */}
          <div className="flex flex-col space-y-5">
            <div className="relative aspect-[4/3] w-full rounded-t-[80px] rounded-b-2xl overflow-hidden bg-[#ECE6DC] border border-[#E2DAD0] shadow-xs">
              <Image
                src="/images/trauma.jpg"
                alt="Trauma recovery and EMDR therapy with Dr. Maya Reynolds"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-serif text-2xl text-[#242828] font-normal">
                Healing from Trauma & Past Experiences
              </h3>
              <p className="text-base text-[#555E5A] leading-relaxed font-light">
                For adults who have experienced single-incident trauma as well as complex, long-standing patterns from childhood, relationships, or chronic stress. Paced carefully with an emphasis on safety, stabilization, and lasting emotional regulation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
