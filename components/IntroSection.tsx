import React from "react";
import Image from "next/image";

export default function IntroSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5F0E8] border-b border-[#E7E0D6]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* 2-Column Responsive Layout: Heading & Text Left, Image Starting at the Top on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column (Cols 1 to 7): Heading & Supporting Copy */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#242828] font-normal leading-snug tracking-tight">
              You don’t have to keep holding it all together on your own.
            </h2>

            {/* Mobile/Tablet Image (visible on < lg screens, before text) */}
            <div className="lg:hidden flex justify-center pt-2 pb-4">
              <div className="w-full max-w-[340px]">
                <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border-2 border-[#E2DAD0] shadow-sm bg-[#FAF8F5]">
                  <Image
                    src="/images/holding-together.jpg"
                    alt="A thoughtful adult resting peacefully and releasing the weight of emotional overwhelm in therapy"
                    fill
                    sizes="(max-width: 1024px) 100vw, 340px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 text-base text-[#4F5753] leading-relaxed">
              <div className="space-y-4">
                <p>
                  <span className="font-medium text-[#242828]">At my Santa Monica practice,</span> I provide a warm, grounded space to help you find real relief. I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
                </p>
                <p>
                  Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
                </p>
              </div>

              <div className="space-y-4">
                <p>
                  First and foremost, I believe what you’re going through is real, valid, and worthy of support. My work often focuses on anxiety, panic, trauma, and burnout.
                </p>
                <p>
                  Clients frequently come to me feeling “functional” on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they’re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Right Column (Cols 8 to 12): visible on lg+ screens */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="w-full max-w-[420px]">
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden border-2 border-[#E2DAD0] shadow-sm bg-[#FAF8F5]">
                <Image
                  src="/images/holding-together.jpg"
                  alt="A thoughtful adult resting peacefully and releasing the weight of emotional overwhelm in therapy"
                  fill
                  sizes="420px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
