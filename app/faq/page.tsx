import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dr. Maya Reynolds, PsyD",
  description:
    "Common questions about therapy, EMDR, anxiety, burnout, and in-person or telehealth counseling with Dr. Maya Reynolds, PsyD in Santa Monica, CA.",
};

const faqs = [
  {
    question: "What areas and challenges do you specialize in?",
    answer:
      "I specialize in therapy for adults experiencing anxiety, panic, chronic stress, and the lingering effects of earlier life experiences or trauma. I also frequently work with high-achieving professionals, entrepreneurs, and creatives facing severe burnout, perfectionism, and relentless internal pressure.",
  },
  {
    question: "What is your therapeutic approach and what methods do you use?",
    answer:
      "I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive and organized, while always leaving space for reflection, depth, and organic conversation. I integrate evidence-based methods including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented (somatic) techniques to help clients understand both the emotional and physiological sides of what they are experiencing.",
  },
  {
    question: "How does trauma work and EMDR therapy work in your practice?",
    answer:
      "Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel regulated and grounded in their daily lives—not just during sessions. EMDR works by helping your brain reprocess distressing memories so they no longer cause somatic triggers.",
  },
  {
    question: "Do you offer in-person sessions, telehealth, or both?",
    answer:
      "I offer both options. You are welcome to meet in person at my Santa Monica office (123th Street 45 W, Santa Monica, CA 90401), which is a quiet, private consultation space designed to feel calm and grounding with natural light and an uncluttered setting. For clients located anywhere in California who prefer the convenience of counseling from home or office, I also provide secure, HIPAA-compliant telehealth sessions.",
  },
  {
    question: "Who is therapy with you best suited for?",
    answer:
      "Many of the people I work with are thoughtful, self-aware, and high-achieving. On the outside, they often appear completely functional, capable, and composed—yet internally, they feel exhausted, stuck in overthinking, or emotionally on edge. I believe what you are going through is real, valid, and deserving of supportive care.",
  },
  {
    question: "How do I get started or schedule an initial session?",
    answer:
      "Getting started is simple. You can reach out directly using the 'Schedule a Session' button on this page or through the contact section on the homepage. We will schedule an initial conversation to discuss your needs, answer any questions, and determine how we can best work together.",
  },
];

export default function FaqPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242828]">
      <Navbar />

      <main className="flex-grow">
        {/* Unified FAQ Section */}
        <section className="py-16 md:py-24 bg-[#FAF8F5]">
          <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center space-y-5 mb-12 md:mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65]">
                Common Questions & Answers
              </p>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#242828] font-normal leading-tight tracking-tight">
                Frequently Asked Questions
              </h1>

              <p className="text-base sm:text-lg text-[#555E5A] leading-relaxed font-light max-w-2xl mx-auto">
                Clear, transparent information about what to expect from therapy, my clinical approach, and how we work together at my Santa Monica practice and via California telehealth.
              </p>
            </div>

            {/* FAQ Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl border border-[#E7E0D6] p-6 sm:p-8 transition-colors open:shadow-xs"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none select-none font-serif text-xl sm:text-2xl text-[#242828] font-normal tracking-tight">
                    <span className="pr-4">{faq.question}</span>
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EFE9DF] group-open:bg-[#547A65] group-open:text-white text-[#547A65] flex items-center justify-center transition-colors">
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="pt-4 mt-4 border-t border-[#EFE9DF] text-base sm:text-lg text-[#555E5A] leading-relaxed font-light">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Simple Warm Invitation / CTA */}
        <section className="py-16 md:py-24 bg-[#FAF8F5]">
          <div className="max-w-2xl mx-auto px-4 text-center space-y-6">
            <h3 className="font-serif text-3xl sm:text-4xl text-[#242828] font-normal tracking-tight">
              Have a question that wasn’t answered here?
            </h3>
            <p className="text-base text-[#555E5A] leading-relaxed font-light">
              Finding the right therapist is a personal decision. I welcome you to reach out directly to ask questions or schedule an initial conversation.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-[#547A65] rounded-full overflow-hidden shadow-xs transition-colors"
              >
                <span className="absolute inset-0 w-full h-full bg-[#3D5B4A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Schedule a Session</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
