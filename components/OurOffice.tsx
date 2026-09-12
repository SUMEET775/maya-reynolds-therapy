import React from "react";
import Image from "next/image";

export default function OurOffice() {
  return (
    <section id="office" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E7E0D6]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65]">
            Santa Monica Office
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#242828] font-normal leading-snug tracking-tight">
            A Calm Space for Healing
          </h2>
          <p className="text-base sm:text-lg text-[#555E5A] leading-relaxed font-light">
            Therapy is a deeply personal experience, and having an environment that prioritizes emotional safety, quiet comfort, and complete privacy makes all the difference.
          </p>
        </div>

        {/* 2-Column Grid: Details Left, 2 Images Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (Cols 1 to 6): Supporting Copy & Practice Setting Details */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[#4F5753] leading-relaxed font-light">
              My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
            </p>

            {/* In-Person & Hybrid Session Details */}
            <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-2xl border border-[#E7E0D6] space-y-4">
              <h3 className="font-serif text-xl sm:text-2xl text-[#242828] font-normal">
                In-Person & Telehealth Availability
              </h3>
              <p className="text-sm sm:text-base text-[#555E5A] leading-relaxed font-light">
                Sessions are held in person at my Santa Monica practice at{" "}
                <span className="font-medium text-[#242828]">123th Street 45 W, Santa Monica, CA 90401</span>. For clients across California, I also provide secure, confidential virtual sessions.
              </p>
              <div className="pt-1 flex flex-wrap gap-2 text-xs font-medium text-[#547A65]">
                <span className="bg-[#E6EFEA] px-3 py-1.5 rounded-full">In-Person Therapy</span>
                <span className="bg-[#E6EFEA] px-3 py-1.5 rounded-full">California Telehealth</span>
                <span className="bg-[#E6EFEA] px-3 py-1.5 rounded-full">Confidential & Private</span>
              </div>
            </div>

            {/* Safety, Comfort, and Privacy Callouts */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#547A65] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#242828] text-base">Privacy & Confidentiality</h4>
                  <p className="text-sm text-[#555E5A] font-light leading-relaxed">
                    A dedicated, quiet setting built for discretion and comfort, allowing you to speak openly and without distraction.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-2.5 h-2.5 rounded-full bg-[#547A65] mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-[#242828] text-base">Grounded, Unhurried Pacing</h4>
                  <p className="text-sm text-[#555E5A] font-light leading-relaxed">
                    Designed without the sterile feel of a clinical clinic. A soothing space where you have time to catch your breath.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Cols 7 to 12): 2 Office Images */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="relative aspect-[3/4] w-full rounded-[1.75rem] overflow-hidden border border-[#E2DAD0] shadow-sm bg-[#F2EDE5]">
                <Image
                  src="/images/office1.jpeg"
                  alt="Dr. Maya Reynolds quiet Santa Monica consultation office with natural light"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-[#707B75] text-center font-light">
                Private consultation setting with gentle, natural lighting.
              </p>
            </div>

            <div className="space-y-3">
              <div className="relative aspect-[3/4] w-full rounded-[1.75rem] overflow-hidden border border-[#E2DAD0] shadow-sm bg-[#F2EDE5]">
                <Image
                  src="/images/office2.jpeg"
                  alt="Dr. Maya Reynolds comfortable and private therapy room in Santa Monica"
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-[#707B75] text-center font-light">
                Uncluttered environment designed for emotional safety and ease.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
