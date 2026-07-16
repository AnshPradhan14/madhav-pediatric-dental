"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function BeforeAfterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  
  // Motion value for the slider position (0 to 100%)
  const sliderPosition = useMotionValue(50);
  
  // Update container width on resize
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    sliderPosition.set(percentage);
  };

  // Convert motion value to clip path for the "after" image
  const clipPath = useTransform(sliderPosition, (val) => `inset(0 ${100 - val}% 0 0)`);
  const handleLeft = useTransform(sliderPosition, val => `${val}%`);

  return (
    <section className="py-24 sm:py-32 relative z-10 w-full overflow-hidden bg-canvas">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <SectionHeader
            badge="Real Results"
            badgeIcon="compare"
            title="Experience The"
            gradientText="Transformation"
            subtitle="Drag the slider to see actual patient results from our Digital Smile Design procedures."
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] sm:aspect-[16/9] rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[rgba(255,255,255,0.05)] select-none touch-none"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerMove={handlePointerMove}
            onPointerCancel={handlePointerUp}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            {/* Before Image (Background) */}
            <div className="absolute inset-0">
              <img 
                src="/images/dental-before.png" 
                alt="Before treatment" 
                loading="lazy"
                className="w-full h-full object-cover grayscale-[30%] opacity-90"
                draggable={false}
              />
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 glass-card px-4 py-2 rounded-full text-xs font-bold tracking-widest text-white border border-[rgba(255,255,255,0.1)]">
                BEFORE
              </div>
            </div>

            {/* After Image (Foreground, clipped) */}
            <motion.div 
              className="absolute inset-0 z-10"
              style={{ clipPath }}
            >
              <img 
                src="/images/dental-after.png" 
                alt="After treatment" 
                loading="lazy"
                className="w-full h-full object-cover brightness-110 contrast-110"
                draggable={false}
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-secondary text-[#051525] px-4 py-2 rounded-full text-xs font-bold tracking-widest shadow-[0_0_15px_rgba(100,255,218,0.5)]">
                AFTER
              </div>
            </motion.div>

            {/* Slider Handle */}
            <motion.div 
              className="absolute top-0 bottom-0 z-20 w-1 bg-secondary shadow-[0_0_10px_rgba(100,255,218,0.5)]"
              style={{ left: handleLeft, translateX: "-50%" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary text-[#051525] flex items-center justify-center shadow-[0_0_20px_rgba(100,255,218,0.5)]">
                <span className="material-symbols-outlined text-[20px]">swap_horiz</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
