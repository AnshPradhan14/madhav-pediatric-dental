"use client";

import { motion, Variants } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  { title: "Dental Implants", desc: "Permanent tooth replacement with precision-placed titanium implants and digital surgical guides for optimal outcomes.", icon: "dentistry", featured: true },
  { title: "Smile Design / Cosmetic", desc: "Complete smile transformation using digital face scanning, predictive modeling, and porcelain veneer artistry.", icon: "face_retouching_natural", featured: true },
  { title: "Orthodontics / Braces", desc: "Invisible aligners and modern bracket systems for teeth alignment at any age.", icon: "straighten" },
  { title: "Root Canal Treatment", desc: "Painless endodontic therapy with rotary instruments and apex locators.", icon: "healing" },
  { title: "Maxillofacial Surgery", desc: "Corrective jaw surgery and facial trauma reconstruction by board-certified surgeons.", icon: "surgical" },
  { title: "Pediatric Dentistry", desc: "Gentle, fear-free dental care tailored for children in a comforting environment.", icon: "child_care" },
  { title: "Teeth Whitening", desc: "Professional-grade whitening treatments for a brighter, more confident smile.", icon: "light_mode", featured: true },
  { title: "Emergency Dental Care", desc: "Round-the-clock emergency dental services — trauma, infection, severe pain. We're here when you need us most.", icon: "emergency", featured: true },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 sm:py-28 relative z-10 w-full overflow-hidden bg-[#f8f9fa]">
      {/* Soft warm radial background gradient to break flatness */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,89,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,54,93,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <SectionHeader
          badge="Our Specialities"
          badgeIcon="dataset"
          title="Treatments Designed"
          gradientText="Around You"
          subtitle="Comprehensive dental care powered by cutting-edge technology and delivered by experienced MDS specialists."
          theme="light"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr"
        >
          {services.map((s, i) => {
            const colSpan = s.featured
              ? "lg:col-span-2"
              : s.fullWidth
              ? "sm:col-span-2 lg:col-span-4"
              : "lg:col-span-1";

            return (
              <motion.div
                key={s.title}
                variants={itemVariants}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 min-h-[240px] transition-all duration-500
                  bg-white border border-[#e5e7eb]
                  shadow-[0_8px_20px_rgba(0,0,0,0.03)]
                  hover:-translate-y-1 hover:border-[#1a365d]/20
                  hover:shadow-[0_20px_40px_rgba(26,54,93,0.08)]
                  cursor-pointer ${colSpan}`}
              >
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f8f9fa] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                <div className="relative z-10 flex flex-col flex-1 justify-between">
                  <div>
                    <motion.div
                      className="mb-5 inline-flex items-center justify-center rounded-2xl border border-[#f1f3f5] bg-[#f8f9fa] p-3.5 text-[#1a365d] group-hover:bg-[#1a365d] group-hover:text-white transition-all duration-500 shadow-sm"
                      whileHover={{ scale: 1.08, rotate: -3 }}
                    >
                      <span className="material-symbols-outlined text-[28px] font-light">{s.icon}</span>
                    </motion.div>

                    <h4 className={`mb-2.5 font-bold text-[#111827] transition-colors duration-300 font-display ${s.featured || s.fullWidth ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}>
                      {s.title}
                    </h4>

                    <p className="text-sm font-normal text-[#4b5563] leading-relaxed group-hover:text-[#1f2937] transition-colors duration-300">
                      {s.desc}
                    </p>
                  </div>

                  <div className="mt-5 flex w-fit items-center gap-1.5 text-xs font-bold tracking-wider text-[#1a365d] opacity-0 translate-y-2 uppercase group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    Learn More
                    <span className="material-symbols-outlined text-[14px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
