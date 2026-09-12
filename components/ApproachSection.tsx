import React from "react";
import Image from "next/image";

export default function ApproachSection() {
  return (
    <div id="approach">
      {/* Section 6: How I Work (Text Left, Two Paragraph Columns, Image Right) */}
      <section className="py-20 md:py-28 bg-[#F5F0E8] border-b border-[#E7E0D6]">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content Column (Cols 1 to 8) */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65]">
                  How We Work Together
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#242828] font-normal leading-snug tracking-tight">
                  A warm, collaborative, and grounded approach to healing.
                </h2>
              </div>

              {/* Mobile Image (visible on < lg screens) */}
              <div className="lg:hidden flex justify-center py-2">
                <div className="w-full max-w-[320px]">
                  <div className="relative aspect-3/4 w-full rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-sm border-2 border-[#E2DAD0] bg-[#FAF8F5]">
                    <Image
                      src="/images/approach.jpg"
                      alt="A warm, grounded, and collaborative approach to therapy with Dr. Maya Reynolds"
                      fill
                      sizes="(max-width: 1024px) 100vw, 320px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Two Paragraphs Side-by-Side Under Heading (Matching Reference Site) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base sm:text-lg text-[#4F5753] leading-relaxed">
                <div>
                  <p>
                    Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
                  </p>
                </div>
                <div>
                  <p>
                    Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
                  </p>
                </div>
              </div>

            </div>

            {/* Desktop Right Image Column (Cols 9 to 12) */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="relative aspect-3/4 w-full max-w-90 rounded-t-[140px] rounded-b-3xl overflow-hidden shadow-sm border-2 border-[#E2DAD0] bg-[#FAF8F5]">
                <Image
                  src="/images/approach.jpg"
                  alt="A warm, grounded, and collaborative approach to therapy with Dr. Maya Reynolds"
                  fill
                  sizes="360px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Transition Banner (Image Left, Heading Right - Matching Reference Site Section 7) */}
      <section className="py-20 md:py-24 bg-[#FAF8F5]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Image Half (Cols 1 to 6) */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[16/10] w-full rounded-[2rem] overflow-hidden shadow-sm border border-[#E2DAD0] bg-[#F2EDE5]">
                <Image
                  src="/images/trauma.jpg"
                  alt="Grounding Pacific coastal landscape in Santa Monica California"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Heading Half (Cols 7 to 12) */}
            <div className="lg:col-span-6 lg:pl-6">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#242828] font-normal leading-snug tracking-tight">
                A space to slow down, reconnect, and develop more sustainable ways of living and working.
              </h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
