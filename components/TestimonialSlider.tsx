"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  {
    id: 1,
    content: "An entirely different class of dental care. The clinic feels like a premium lounge, and the precision of their work is unmatched. Completely anxiety-free experience.",
    author: "Rahul Sharma",
    role: "Implant Patient",
    treatment: "Dental Implants",
    rating: 5,
  },
  {
    id: 2,
    content: "Got my digital smile design done here. The 3D scanning technology and painless laser procedures exceeded my expectations. Truly world-class.",
    author: "Anjali Mehta",
    role: "Cosmetic Patient",
    treatment: "Smile Design",
    rating: 5,
  },
  {
    id: 3,
    content: "Ultra-modern facility with an incredibly professional team. Every detail from diagnostics to post-op care is managed flawlessly. Nikol's premier clinic.",
    author: "Vikram Shah",
    role: "Maxillofacial Patient",
    treatment: "Maxillofacial Surgery",
    rating: 5,
  },
  {
    id: 4,
    content: "My children actually look forward to their dental visits now! The team is incredibly gentle and the colorful, tech-forward environment puts kids at ease instantly.",
    author: "Priya Patel",
    role: "Parent",
    treatment: "Pediatric Care",
    rating: 5,
  },
  {
    id: 5,
    content: "From the CBCT scan to the final crown placement — everything happened in a single day. Unbelievable efficiency without compromising on quality.",
    author: "Amit Desai",
    role: "Crown Patient",
    treatment: "CAD/CAM Crowns",
    rating: 5,
  },
];

export default function TestimonialSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval>>(null);

  const scrollNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 400;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (el.scrollLeft >= maxScroll - 20) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      el.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(scrollNext, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, scrollNext]);

  const scrollPrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: -400, behavior: "smooth" });
  };

  return (
    /* Alternate background: deep soft navy with a warm inner glow */
    <section className="py-24 sm:py-28 relative overflow-hidden z-10 bg-[#0d1726]">
      {/* Subtle top & bottom dividers */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(197,160,89,0.2)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(197,160,89,0.2)] to-transparent" />
      
      {/* Warm trust-building glow instead of a solid brown background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(197,160,89,0.06)_0%,transparent_70%)] pointer-events-none blur-[60px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10 w-full">
        <SectionHeader
          badge="Patient Experiences"
          badgeIcon="verified_user"
          title="Words From"
          gradientText="Our Patients"
          subtitle="Hear from our community about their experience at Madhav Dental."
        />

        <div className="relative">
          {/* Edge fade masks — fixes the cut-off card slivers */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-4 w-12 sm:w-20 z-10 bg-gradient-to-r from-[#0d1726] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-4 w-12 sm:w-20 z-10 bg-gradient-to-l from-[#0d1726] to-transparent" />

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="group min-w-[300px] sm:min-w-[360px] max-w-[360px] snap-start flex flex-col
                  rounded-3xl p-7 sm:p-8
                  bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)]
                  shadow-[0_4px_20px_rgba(0,0,0,0.3)]
                  hover:-translate-y-1 hover:border-[rgba(255,255,255,0.16)] hover:bg-[rgba(255,255,255,0.07)]
                  hover:shadow-[0_12px_32px_rgba(0,0,0,0.4)]
                  transition-all duration-500 cursor-default"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-secondary text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[15px] text-[#d6e3ff] font-light leading-relaxed tracking-wide mb-6 flex-1">
                  &ldquo;{t.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-5 border-t border-[rgba(255,255,255,0.08)]">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[rgba(26,54,93,0.8)] border border-secondary/30 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary/70 text-[20px] font-light">person</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm font-display">{t.author}</p>
                    <p className="text-[10px] text-[#86a0cd] font-semibold uppercase tracking-[0.15em] mt-0.5">{t.role} · {t.treatment}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-3 mt-8">
            <button
              onClick={scrollPrev}
              className="h-11 w-11 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] flex items-center justify-center text-[#b3c1d9] hover:text-white hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_16px_rgba(100,255,218,0.2)] transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <span className="material-symbols-outlined text-[20px] font-light">west</span>
            </button>
            <button
              onClick={scrollNext}
              className="h-11 w-11 rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.04)] flex items-center justify-center text-[#b3c1d9] hover:text-white hover:border-secondary/50 hover:bg-secondary/10 hover:shadow-[0_0_16px_rgba(100,255,218,0.2)] transition-all duration-300"
              aria-label="Next testimonial"
            >
              <span className="material-symbols-outlined text-[20px] font-light">east</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
