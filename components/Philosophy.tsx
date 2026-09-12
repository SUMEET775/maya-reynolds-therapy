import React from "react";
import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#1E2522]">
      <Image
        src="/images/quote_banner.jpg"
        alt="Santa Monica Pacific ocean horizon at dawn"
        fill
        sizes="100vw"
        className="object-cover object-center opacity-40 mix-blend-luminosity"
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#9BBBA8]">
          My Core Philosophy
        </p>
        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light italic leading-relaxed text-[#F3EFE9]">
          &ldquo;I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a deeper sense of wholeness and ease in their lives.&rdquo;
        </blockquote>
        <p className="text-sm font-sans tracking-wide text-[#CCD8D0] uppercase">
          Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist
        </p>
      </div>
    </section>
  );
}
