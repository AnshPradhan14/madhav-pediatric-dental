"use client";

import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import MarqueeStrip from "@/components/MarqueeStrip";
import StatsSection from "@/components/StatsSection";
import TechnologyShowcase from "@/components/TechnologyShowcase";
import TestimonialSlider from "@/components/TestimonialSlider";
import DoctorSection from "@/components/DoctorSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="bg-transparent text-[#d6e3ff]">
      {/* Hero — Deep Navy base */}
      <HeroSection />

      {/* Services — Deep Navy with glass cards */}
      <ServicesSection />

      {/* Before / After Slider */}
      <BeforeAfterSection />

      {/* Marquee — Darker panel strip, contained */}
      <MarqueeStrip />

      {/* Stats — Lighter panel (#0d1c32) for visual rhythm */}
      <StatsSection />

      {/* Technology — Darkest panel (#051525), terminal aesthetic */}
      <TechnologyShowcase />

      {/* Testimonials — Slightly different dark (#0a1828) with frosted cards */}
      <TestimonialSlider />

      {/* Doctor + Clinic Imagery — Back to base canvas */}
      <DoctorSection />

      {/* Contact */}
      <ContactSection />
    </div>
  );
}
