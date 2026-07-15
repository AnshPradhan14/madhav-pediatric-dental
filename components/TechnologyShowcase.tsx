"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";

const technologies = [
  {
    title: "CBCT 3D Cone Beam Imaging",
    description: "Full volumetric 3D scans for surgical planning, implant placement, and pathology detection with sub-millimeter accuracy.",
    icon: "view_in_ar",
    detail: "0.09mm resolution",
  },
  {
    title: "Digital Intraoral Scanner",
    description: "No messy impressions — true-color 3D mapping of the entire oral cavity within minutes.",
    icon: "3d_rotation",
    detail: "< 2 min scan",
  },
  {
    title: "CAD/CAM Same-Day Crowns",
    description: "Computer-designed, milled-on-site ceramic restorations delivered in a single appointment.",
    icon: "precision_manufacturing",
    detail: "1-visit restoration",
  },
  {
    title: "Laser Dentistry",
    description: "Minimally invasive soft tissue procedures — virtually painless, rapid healing, zero noise.",
    icon: "flare",
    detail: "No drill, no pain",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function TechnologySection() {
  return (
    /* Alternate background: solid deep navy for a "control room" feel */
    <section className="py-24 sm:py-28 relative z-10 w-full overflow-hidden bg-[#051525]">
      <div className="bg-noise" />
      {/* Top and bottom accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-secondary/3 rounded-full blur-[180px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* Left: Editorial text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.div variants={fadeIn}>
              <Badge icon="memory" className="mb-6">Precision Technology</Badge>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white font-display mb-6">
              Where Precision{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6e3ff] to-secondary">
                Meets Care
              </span>
            </motion.h2>
            <motion.p variants={fadeIn} className="text-base sm:text-lg font-light text-[#b3c1d9] tracking-wide leading-relaxed max-w-lg mb-10">
              Our clinic operates at the forefront of dental technology, enabling minimally invasive procedures with maximal precision and predictable outcomes.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col gap-5">
              {technologies.slice(0, 2).map((tech) => (
                <div key={tech.title} className="flex gap-4 group items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 border border-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-[#051525] group-hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all duration-400">
                    <span className="material-symbols-outlined text-[22px] font-light">{tech.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-display mb-1 text-sm sm:text-base">{tech.title}</h4>
                    <p className="text-sm text-[#b3c1d9] font-light leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Differentiated "terminal-style" tech card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="rounded-2xl bg-[#0a1e30] border border-secondary/15 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(100,255,218,0.05)] overflow-hidden"
          >
            {/* Terminal header bar */}
            <div className="flex items-center gap-2 px-6 py-3.5 bg-[#061626] border-b border-secondary/10">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-[rgba(255,255,255,0.1)]" />
                <div className="h-3 w-3 rounded-full bg-[rgba(255,255,255,0.1)]" />
                <div className="h-3 w-3 rounded-full bg-secondary/60 shadow-[0_0_8px_rgba(100,255,218,0.4)]" />
              </div>
              <span className="ml-2 text-[10px] font-bold uppercase tracking-[0.25em] text-[#86a0cd]">Technology Stack · Active</span>
            </div>

            <div className="flex flex-col p-2">
              {technologies.map((tech, i) => (
                <div
                  key={tech.title}
                  className="group flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-secondary/5 transition-all duration-300 cursor-default"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10 border border-secondary/20 text-secondary group-hover:bg-secondary group-hover:text-[#051525] group-hover:border-secondary transition-all duration-300">
                    <span className="material-symbols-outlined text-[20px] font-light">{tech.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-white font-display text-sm mb-0.5 truncate">{tech.title}</h4>
                    <p className="text-xs text-[#86a0cd] font-light truncate">{tech.description}</p>
                  </div>
                  <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-secondary/70 bg-secondary/10 border border-secondary/20 px-2.5 py-1 rounded-full group-hover:text-secondary group-hover:bg-secondary/15 transition-colors">
                    {tech.detail}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
