"use client";

import { useEffect, useRef, useCallback } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

// Removed ParticleCanvas in favor of real clinical photography

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  const trustItems = [
    "2000+ Smiles Transformed",
    "15 Years Experience",
    "Advanced CBCT Imaging",
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden z-10 bg-[#040C18]">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity"
          style={{ backgroundImage: 'url("/images/modern-equipment.png")' }}
          role="img"
          aria-label="Modern dental clinic equipment"
        />
        {/* Soft studio lighting radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(4,12,24,0.3)_0%,rgba(4,12,24,1)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#040C18]/60 to-[#040C18]" />
        
        {/* Warm glow behind headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.08)_0%,transparent_70%)] pointer-events-none blur-[60px]" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(197,160,89,0.1)] backdrop-blur-xl border border-[rgba(197,160,89,0.2)] px-5 py-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.1)] mb-8">
            <span className="material-symbols-outlined text-[14px]">workspace_premium</span>
            Award-Winning Maxillofacial Care · Ahmedabad
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-[-0.03em] leading-[1.05] font-display text-white mb-8"
        >
          Excellence in
          <br />
          <span className="text-transparent bg-clip-text" style={{
            backgroundImage: "linear-gradient(135deg, #ffffff 0%, #EAEAEA 50%, #B8D4D1 100%)",
          }}>
            Every Smile.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUp}
          className="max-w-[520px] text-lg font-light text-[#a8b4cc] tracking-wide leading-relaxed mb-10"
        >
          Specialist care in dental implants, maxillofacial surgery, and smile transformation — delivered with technology and compassion.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/contact"
              className="relative overflow-hidden group inline-flex items-center justify-center gap-3 rounded-full bg-[#F4F1EA] px-8 py-4 text-sm font-semibold tracking-wider text-[#1A1D23] shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-all"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="material-symbols-outlined text-[18px] font-extralight">event</span>
              Book a Consultation
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
            <Link
              href="/treatments"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(255,255,255,0.2)] bg-[rgba(26,54,93,0.2)] backdrop-blur-md px-8 py-4 text-sm font-semibold tracking-wider text-[#d6e3ff] hover:border-secondary hover:bg-secondary/10 transition-all"
            >
              <span className="material-symbols-outlined text-[18px] font-extralight">biotech</span>
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeUp}
          className="inline-flex flex-wrap items-center justify-center gap-0 rounded-full bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.08)] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
        >
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center">
              <span className="px-5 sm:px-6 py-3 text-[11px] sm:text-xs font-medium tracking-wider text-[#b3c1d9] whitespace-nowrap">
                {item}
              </span>
              {i < trustItems.length - 1 && (
                <div className="w-px h-4 bg-[rgba(255,255,255,0.15)]" />
              )}
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="animate-bounce-chevron">
          <span className="material-symbols-outlined text-[#a8b4cc]/60 text-[28px]">expand_more</span>
        </div>
      </motion.div>
    </section>
  );
}
