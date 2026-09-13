import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Dr. Maya Reynolds, PsyD | Clinical Psychologist in Santa Monica",
  description:
    "Learn about Dr. Maya Reynolds, PsyD, a licensed clinical psychologist in Santa Monica, CA offering grounded therapy for anxiety, burnout, and trauma.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242828]">
      <Navbar />

      <main className="flex-grow">
        {/* 1. About Her (Hero) */}
        <section className="py-16 md:py-24 border-b border-[#E7E0D6] bg-[#FAF8F5]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Photo Aligned with Top of Bio */}
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <div className="w-full max-w-[220px] sm:max-w-[280px] md:max-w-[320px] lg:max-w-[380px]">
                  <div className="relative aspect-[3/4] w-full rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-[#E7E0D6] shadow-sm bg-[#F2EDE5]">
                    <Image
                      src="/images/dr-maya-reynolds.png"
                      alt="Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist in Santa Monica"
                      fill
                      priority
                      sizes="(max-width: 640px) 220px, (max-width: 1024px) 320px, 380px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Bio: About Her */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65]">
                  About Dr. Maya Reynolds
                </p>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#242828] font-normal leading-snug tracking-tight">
                  A compassionate space to slow down, heal, and find steady ground.
                </h1>

                <h2 className="text-base sm:text-lg font-medium text-[#404945]">
                  Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist
                </h2>

                <div className="space-y-4 text-base sm:text-lg text-[#555E5A] leading-relaxed font-light">
                  <p>
                    I’m a licensed clinical psychologist based in Santa Monica, California. I provide individual therapy for adults who feel overwhelmed by anxiety, chronic stress, or the lingering effects of earlier life experiences.
                  </p>
                  <p>
                    Many of the people I work with are thoughtful, self-aware, and high-achieving. From the outside, they often appear capable and &ldquo;functional&rdquo;—yet internally, they quietly battle constant worry, physical tension, sleep disruptions, or emotional exhaustion.
                  </p>
                  <p>
                    I believe what you are experiencing is real, valid, and deserving of support. My goal is not just symptom relief, but helping you develop insight, self-trust, and a deeper sense of wholeness and ease in your life.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* 2. What She Does (Clean 2-Column Overview) */}
        <section className="py-16 md:py-24 bg-[#F5F0E8] border-b border-[#E7E0D6]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65] mb-2">
                What I Do
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#242828] font-normal tracking-tight">
                How I support my clients
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {/* Who I Work With */}
              <div className="bg-[#FAF8F5] p-8 md:p-10 rounded-2xl border border-[#E7E0D6] space-y-4">
                <h3 className="font-serif text-2xl text-[#242828] font-normal">
                  Who I Work With
                </h3>
                <p className="text-base text-[#555E5A] leading-relaxed font-light">
                  My practice focuses on adults navigating:
                </p>
                <ul className="space-y-3.5 text-base text-[#4F5753] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#547A65] text-lg leading-none mt-1">•</span>
                    <span><strong className="font-medium text-[#242828]">Anxiety & Panic:</strong> Managing persistent worry, somatic tension in the body, and feeling constantly on edge.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#547A65] text-lg leading-none mt-1">•</span>
                    <span><strong className="font-medium text-[#242828]">Burnout & Perfectionism:</strong> Supporting entrepreneurs, creatives, and high-achievers exhausted by unrelenting pressure.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#547A65] text-lg leading-none mt-1">•</span>
                    <span><strong className="font-medium text-[#242828]">Trauma & Past Experiences:</strong> Working through single-incident or complex relational trauma with safe, gentle pacing.</span>
                  </li>
                </ul>
              </div>

              {/* How We Work Together */}
              <div className="bg-[#FAF8F5] p-8 md:p-10 rounded-2xl border border-[#E7E0D6] space-y-4">
                <h3 className="font-serif text-2xl text-[#242828] font-normal">
                  My Therapeutic Approach
                </h3>
                <p className="text-base text-[#555E5A] leading-relaxed font-light">
                  I take a warm, collaborative, and grounded approach that integrates mind and body:
                </p>
                <ul className="space-y-3.5 text-base text-[#4F5753] font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-[#547A65] text-lg leading-none mt-1">•</span>
                    <span><strong className="font-medium text-[#242828]">EMDR Therapy:</strong> Evidence-based trauma reprocessing to help heal distressing memories and reduce somatic triggers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#547A65] text-lg leading-none mt-1">•</span>
                    <span><strong className="font-medium text-[#242828]">Cognitive-Behavioral Therapy (CBT):</strong> Fostering insight to shift automatic worry loops and self-critical thought patterns.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#547A65] text-lg leading-none mt-1">•</span>
                    <span><strong className="font-medium text-[#242828]">Mindfulness & Somatics:</strong> Calming nervous system reactions and rebuilding bodily ease in everyday life.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* 4. Warm, Simple CTA */}
        <section className="py-16 md:py-20 bg-[#FAF8F5]">
          <div className="max-w-2xl mx-auto px-4 text-center space-y-4">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#242828] font-normal tracking-tight">
              Finding the right therapist makes all the difference.
            </h3>
            <p className="text-base text-[#555E5A] leading-relaxed font-light">
              Reaching out is a courageous first step. I welcome you to connect and schedule an initial session.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
