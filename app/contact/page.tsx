"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    sessionType: "in-person",
    primaryFocus: "anxiety",
    preferredTime: "flexible",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate smooth submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242828]">
      <Navbar />

      <main className="flex-grow py-12 sm:py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Heading & Practice Information (Tailored for Dr. Maya Reynolds) */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#547A65] mb-3">
                  Initial Consultation · Santa Monica & Telehealth
                </p>

                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#242828] font-normal leading-tight tracking-tight">
                  Begin Your{" "}
                  <span className="italic text-[#547A65]">
                    Healing Journey
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#555E5A] leading-relaxed font-light mt-5">
                  Reaching out is often the most courageous step, especially
                  when you are used to holding everything together on your own.
                  Please share what you are experiencing below. I personally
                  review every inquiry and will respond within 1–2 business days
                  to discuss your scheduling needs.
                </p>
              </div>

              {/* Thin Divider Line & Dr. Maya's Direct Practice Details */}
              <div className="border-t border-[#DFD8CC] pt-7 space-y-6 text-[15px] sm:text-base text-[#4F5753] font-light leading-relaxed">
                <div>
                  <p className="font-medium text-[#242828]">Dr. Maya Reynolds, PsyD</p>
                  <p className="text-sm text-[#555E5A]">
                    Licensed Clinical Psychologist · PSY #31294
                  </p>
                </div>

                <div>
                  <p className="font-medium text-[#242828]">Santa Monica Office</p>
                  <p>123th Street 45 W</p>
                  <p>Santa Monica, CA 90401</p>
                  <p className="text-xs text-[#7A827E] mt-0.5">
                    Quiet, sound-insulated private suite with easy parking
                  </p>
                </div>

                <div>
                  <p className="font-medium text-[#242828]">California Telehealth</p>
                  <p>Secure, HIPAA-compliant virtual care across California</p>
                </div>

                <div>
                  <p className="font-medium text-[#242828]">Direct Inquiries & Response</p>
                  <p>
                    <a
                      href="mailto:contact@drmayareynolds.com"
                      className="hover:text-[#547A65] transition-colors"
                    >
                      contact@drmayareynolds.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:3105550192"
                      className="hover:text-[#547A65] transition-colors"
                    >
                      (310) 555-0192
                    </a>
                  </p>
                  <p className="text-xs text-[#7A827E] mt-0.5">
                    I personally reply to every inquiry within 1–2 business days
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Beautiful Consultation Form Card */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-10 border border-[#E7E0D6] shadow-xs">
              {submitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#E8F0EB] text-[#547A65] flex items-center justify-center mx-auto shadow-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <div className="space-y-3">
                    <h2 className="font-serif text-2xl sm:text-3xl text-[#242828] font-normal">
                      Thank You, {formData.name}
                    </h2>
                    <p className="text-base text-[#555E5A] leading-relaxed max-w-md mx-auto font-light">
                      Your consultation request has been received. Dr. Maya
                      Reynolds will review your information and reach out by
                      email or phone within 1–2 business days to schedule your
                      initial session.
                    </p>
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          sessionType: "in-person",
                          primaryFocus: "anxiety",
                          preferredTime: "flexible",
                          message: "",
                        });
                      }}
                      className="text-sm font-semibold text-[#547A65] hover:text-[#3D5B4A] underline underline-offset-4 cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-[#2E3633]"
                    >
                      Full Name <span className="text-[#547A65]">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g., Sarah Jenkins"
                      className="w-full px-4 py-3 rounded-xl border border-[#D8D0C5] bg-[#FAF8F5] text-[#242828] placeholder-[#909894] focus:outline-none focus:ring-2 focus:ring-[#547A65] focus:border-transparent transition-all text-base font-light"
                    />
                  </div>

                  {/* Email & Phone Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-[#2E3633]"
                      >
                        Email Address <span className="text-[#547A65]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="sarah@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#D8D0C5] bg-[#FAF8F5] text-[#242828] placeholder-[#909894] focus:outline-none focus:ring-2 focus:ring-[#547A65] focus:border-transparent transition-all text-base font-light"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#2E3633]"
                      >
                        Phone Number <span className="text-[#547A65]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(310) 555-0192"
                        className="w-full px-4 py-3 rounded-xl border border-[#D8D0C5] bg-[#FAF8F5] text-[#242828] placeholder-[#909894] focus:outline-none focus:ring-2 focus:ring-[#547A65] focus:border-transparent transition-all text-base font-light"
                      />
                    </div>
                  </div>

                  {/* Preferred Session Format */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#2E3633]">
                      Preferred Session Format{" "}
                      <span className="text-[#547A65]">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <label
                        className={`flex items-center justify-center p-3 rounded-xl border text-sm font-medium cursor-pointer transition-all text-center ${
                          formData.sessionType === "in-person"
                            ? "bg-[#EAF1EC] border-[#547A65] text-[#2F4F3D] shadow-2xs"
                            : "bg-[#FAF8F5] border-[#D8D0C5] text-[#4F5753] hover:bg-[#F2EDE5]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="sessionType"
                          value="in-person"
                          checked={formData.sessionType === "in-person"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        In-Person (Santa Monica)
                      </label>

                      <label
                        className={`flex items-center justify-center p-3 rounded-xl border text-sm font-medium cursor-pointer transition-all text-center ${
                          formData.sessionType === "telehealth"
                            ? "bg-[#EAF1EC] border-[#547A65] text-[#2F4F3D] shadow-2xs"
                            : "bg-[#FAF8F5] border-[#D8D0C5] text-[#4F5753] hover:bg-[#F2EDE5]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="sessionType"
                          value="telehealth"
                          checked={formData.sessionType === "telehealth"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        Virtual Telehealth (CA)
                      </label>

                      <label
                        className={`flex items-center justify-center p-3 rounded-xl border text-sm font-medium cursor-pointer transition-all text-center ${
                          formData.sessionType === "flexible"
                            ? "bg-[#EAF1EC] border-[#547A65] text-[#2F4F3D] shadow-2xs"
                            : "bg-[#FAF8F5] border-[#D8D0C5] text-[#4F5753] hover:bg-[#F2EDE5]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="sessionType"
                          value="flexible"
                          checked={formData.sessionType === "flexible"}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        Either / Flexible
                      </label>
                    </div>
                  </div>

                  {/* Primary Focus Area & Preferred Availability */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label
                        htmlFor="primaryFocus"
                        className="block text-sm font-medium text-[#2E3633]"
                      >
                        Primary Area of Support
                      </label>
                      <div className="relative">
                        <select
                          id="primaryFocus"
                          name="primaryFocus"
                          value={formData.primaryFocus}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#D8D0C5] bg-[#FAF8F5] text-[#242828] focus:outline-none focus:ring-2 focus:ring-[#547A65] focus:border-transparent transition-all text-base font-light appearance-none cursor-pointer pr-10"
                        >
                          <option value="anxiety">
                            Anxiety & Panic Management
                          </option>
                          <option value="burnout">
                            Burnout & High-Achiever Exhaustion
                          </option>
                          <option value="trauma">
                            Trauma Recovery & EMDR Therapy
                          </option>
                          <option value="perfectionism">
                            Perfectionism & Relentless Pressure
                          </option>
                          <option value="stress">
                            Sleep Disruption & Constant Worry
                          </option>
                          <option value="other">
                            Other / Individual Therapy
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#547A65]">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="preferredTime"
                        className="block text-sm font-medium text-[#2E3633]"
                      >
                        Preferred Availability
                      </label>
                      <div className="relative">
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-[#D8D0C5] bg-[#FAF8F5] text-[#242828] focus:outline-none focus:ring-2 focus:ring-[#547A65] focus:border-transparent transition-all text-base font-light appearance-none cursor-pointer pr-10"
                        >
                          <option value="flexible">Flexible / Any Time</option>
                          <option value="mornings">Mornings (9am – 12pm)</option>
                          <option value="afternoons">
                            Early Afternoons (12pm – 3pm)
                          </option>
                          <option value="late-afternoon">
                            Late Afternoons (3pm – 6pm)
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-[#547A65]">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Brief Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-[#2E3633]"
                    >
                      What brings you to therapy at this time?{" "}
                      <span className="text-[#848E88] font-normal text-xs">
                        (Optional)
                      </span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Feel free to share what you've been experiencing and what you hope to achieve. Only share what feels comfortable."
                      className="w-full px-4 py-3 rounded-xl border border-[#D8D0C5] bg-[#FAF8F5] text-[#242828] placeholder-[#909894] focus:outline-none focus:ring-2 focus:ring-[#547A65] focus:border-transparent transition-all text-base font-light resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group relative w-full inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-[#547A65] rounded-full overflow-hidden shadow-xs transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#547A65] disabled:opacity-70 cursor-pointer"
                    >
                      <span className="absolute inset-0 w-full h-full bg-[#3D5B4A] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                      <span className="relative z-10">
                        {submitting
                          ? "Submitting Inquiry…"
                          : "Submit Consultation Request"}
                      </span>
                    </button>
                  </div>

                  <p className="text-xs text-[#707B75] text-center font-light leading-relaxed">
                    By submitting this form, you acknowledge that communications
                    via this web form are for general scheduling inquiries and
                    do not constitute an established doctor-patient
                    relationship.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
