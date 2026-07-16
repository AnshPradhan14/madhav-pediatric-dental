"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 2000, suffix: "+", label: "Patients Treated", icon: "people" },
  { value: 98, suffix: "%", label: "Satisfaction Rate", icon: "thumb_up" },
  { value: 15, suffix: "", label: "Years of Excellence", icon: "workspace_premium" },
  { value: 6, suffix: "", label: "Specialist Doctors", icon: "medical_services" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);

    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-display tracking-tight tabular-nums">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    /* Alternate background: slightly lighter panel for visual rhythm */
    <section className="py-20 sm:py-24 relative z-10 w-full overflow-hidden bg-[#0d1c32]">
      <div className="bg-noise" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(95,168,160,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col items-center text-center py-8 sm:py-10 px-4 rounded-2xl border border-transparent hover:border-[rgba(95,168,160,0.15)] hover:bg-[rgba(26,54,93,0.3)] transition-all duration-500"
            >
              <span className="material-symbols-outlined text-secondary/60 text-[28px] mb-3 group-hover:text-secondary transition-colors duration-300">{stat.icon}</span>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <span className="mt-2 text-xs sm:text-sm font-semibold text-[#b3c1d9] uppercase tracking-[0.15em]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
