import React from "react";

export default function SpecialtiesGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (Cols 1 to 4): Heading */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65]">
              Core Practice Pillars
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#242828] font-normal tracking-tight">
              Specialized Care for Anxiety, Trauma &amp; Burnout
            </h3>
          </div>

          {/* Right Column (Cols 5 to 12): 2x2 Grid of 4 Items */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {/* Item 1: Trauma */}
            <div className="space-y-2.5">
              <h4 className="font-serif text-2xl text-[#242828] font-normal">
                Trauma Recovery &amp; Stabilization
              </h4>
              <p className="text-base text-[#555E5A] leading-relaxed font-light">
                We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. Paced carefully with an emphasis on stabilization.
              </p>
            </div>

            {/* Item 2: EMDR */}
            <div className="space-y-2.5">
              <h4 className="font-serif text-2xl text-[#242828] font-normal">
                EMDR Therapy (Trauma Reprocessing)
              </h4>
              <p className="text-base text-[#555E5A] leading-relaxed font-light">
                Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting emotional regulation.
              </p>
            </div>

            {/* Item 3: Anxiety & Panic */}
            <div className="space-y-2.5">
              <h4 className="font-serif text-2xl text-[#242828] font-normal">
                Anxiety, Panic &amp; Nervous System Ease
              </h4>
              <p className="text-base text-[#555E5A] leading-relaxed font-light">
                Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, or difficulty sleeping. We work together to address both the cognitive overthinking and the physiological nervous system signals.
              </p>
            </div>

            {/* Item 4: Burnout & High Internal Pressure */}
            <div className="space-y-2.5">
              <h4 className="font-serif text-2xl text-[#242828] font-normal">
                Burnout, Perfectionism &amp; Pressure
              </h4>
              <p className="text-base text-[#555E5A] leading-relaxed font-light">
                In addition to trauma and anxiety, I frequently support clients dealing with professional burnout, perfectionism, and high internal pressure. Many are entrepreneurs, creatives, or professionals who feel disconnected from themselves after years of pushing through stress.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
