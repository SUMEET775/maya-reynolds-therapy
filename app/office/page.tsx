import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "A Calm Space for Healing | Dr. Maya Reynolds, PsyD · Santa Monica, CA",
  description:
    "Explore the quiet, private Santa Monica therapy office of Dr. Maya Reynolds, PsyD. Designed for calm, natural light, and grounded in-person & telehealth counseling.",
};

export default function OfficePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242828]">
      <Navbar />

      <main className=" grow">
        {/* Office Presentation Section */}
        <section className="pt-8 sm:pt-12 pb-16 md:pb-24 bg-[#FAF8F5]">
          <div className="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header - Compact so images are immediately visible on entry */}
            <div className="text-center space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65]">
                The Consultation Space · Santa Monica, CA
              </p>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#242828] font-normal leading-tight tracking-tight">
                A Calm Space for Healing
              </h1>

              <p className="text-base sm:text-lg text-[#555E5A] leading-relaxed font-light max-w-2xl mx-auto">
                A quiet, private sanctuary designed with natural light, organic textures, and peaceful discretion—helping you feel grounded from the moment you arrive.
              </p>
            </div>

            {/* 2 Images Showcase - Prominently visible upon entering */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-14 md:mb-16">
              <div className="space-y-3">
                <div className="relative aspect-16/11 w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2DAD0] shadow-sm bg-[#F2EDE5]">
                  <Image
                    src="/images/office1.jpeg"
                    alt="Dr. Maya Reynolds quiet Santa Monica therapy office with natural light and exposed brick"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-[#555E5A] text-center font-light">
                  A private, quiet setting with soft natural light and warm brick to encourage calm and reflection.
                </p>
              </div>

              <div className="space-y-3">
                <div className="relative aspect-16/11 w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2DAD0] shadow-sm bg-[#F2EDE5]">
                  <Image
                    src="/images/office2.jpeg"
                    alt="Dr. Maya Reynolds comfortable, private therapy room in Santa Monica with olive tree and seating"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-[#555E5A] text-center font-light">
                  Uncluttered and organic atmosphere designed to help clients feel immediately supported and safe.
                </p>
              </div>
            </div>

            {/* Description & Core Pillars */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65]">
                    Thoughtful Design
                  </p>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#242828] font-normal tracking-tight">
                    What Clients Can Expect
                  </h2>
                </div>
                
                <div className="space-y-4 text-base sm:text-lg text-[#4F5753] leading-relaxed font-light">
                  <p>
                    My office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them exhale and feel more at ease when they arrive.
                  </p>
                  <p>
                    Therapy requires vulnerability, and vulnerability requires safety. Every detail of the physical environment has been thoughtfully arranged to ensure discretion, acoustic privacy, and a peaceful separation from the outside world.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-white bg-[#547A65] rounded-full overflow-hidden shadow-xs transition-colors"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#3D5B4A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10">Schedule an In-Person Session</span>
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#F5F0E8] p-7 sm:p-8 rounded-3xl border border-[#E7E0D6] space-y-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65] mb-1">
                    Visiting Information
                  </p>
                  <h3 className="font-serif text-2xl text-[#242828] font-normal">
                    Location & Session Options
                  </h3>
                </div>

                <div className="space-y-3.5 text-sm sm:text-base text-[#4F5753]">
                  <div>
                    <p className="font-medium text-[#242828]">Santa Monica Address</p>
                    <p className="text-[#555E5A] font-light">123th Street 45 W, Santa Monica, CA 90401</p>
                  </div>
                  <hr className="border-[#E5DFD5]" />
                  <div>
                    <p className="font-medium text-[#242828]">In-Person Care</p>
                    <p className="text-[#555E5A] font-light">Dedicated, one-on-one sessions in a peaceful Santa Monica consultation setting.</p>
                  </div>
                  <hr className="border-[#E5DFD5]" />
                  <div>
                    <p className="font-medium text-[#242828]">California Telehealth</p>
                    <p className="text-[#555E5A] font-light">Secure, HIPAA-compliant virtual sessions for clients located anywhere across California.</p>
                  </div>
                  <hr className="border-[#E5DFD5]" />
                  <div>
                    <p className="font-medium text-[#242828]">Privacy & Discretion</p>
                    <p className="text-[#555E5A] font-light">Sound-insulated consultation room with confidential, appointment-only visits.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
