import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import WhoIHelp from "@/components/WhoIHelp";
import Philosophy from "@/components/Philosophy";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import ApproachSection from "@/components/ApproachSection";
import SpecialtiesGrid from "@/components/SpecialtiesGrid";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#242828]">
      {/* 1. Navbar */}
      <Navbar />

      <main className=" grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Intro Section */}
        <IntroSection />

        {/* 4. "Who I help" Cards */}
        <WhoIHelp />

        {/* 5. Core Philosophy Quote */}
        <Philosophy />

        {/* 6. Areas of Expertise / Clinical Focus */}
        <AreasOfExpertise />

        {/* 7. "How I work" / Approach Section */}
        <ApproachSection />

        {/* 8. "My specialties" Grid */}
        <SpecialtiesGrid />

        {/* 9. Final CTA Section */}
        <FinalCta />
      </main>

      {/* 10. Footer */}
      <Footer />
    </div>
  );
}
