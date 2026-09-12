import React from "react";

export default function AreasOfExpertise() {
  return (
    <section id="specialties" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#E7E0D6]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (Cols 1 to 4): Heading */}
          <div className="lg:col-span-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65]">
              Focus Areas & Modalities
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#242828] font-normal tracking-tight">
              Clinical Focus & Expertise
            </h3>
          </div>

          {/* Right Column (Cols 5 to 12): Two Columns of Tags with Horizontal Dividers */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0 text-base sm:text-lg text-[#2E3633]">
            {/* Tag Column A */}
            <div>
              <div className="py-3.5 font-light">Anxiety & Panic</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-light">Single-Incident & Complex Trauma</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-light">Professional Burnout</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-light">Perfectionism & High Internal Pressure</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-light">Sleep Disruption & Constant Worry</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-light">Relational Confidence & Emotional Safety</div>
              <hr className="border-[#E5DFD5]" />
            </div>

            {/* Tag Column B */}
            <div>
              <div className="py-3.5 font-light">Eye Movement Desensitization and Reprocessing (EMDR)</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-light">Cognitive-Behavioral Therapy (CBT)</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-light">Mindfulness-Based Practices</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-light">Body-Oriented & Somatic Techniques</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-light">California Telehealth Sessions</div>
              <hr className="border-[#E5DFD5]" />
              <div className="py-3.5 font-serif italic text-[#606E67]">…and more.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
