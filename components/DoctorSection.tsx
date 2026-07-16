"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { getDoctors, Doctor } from "@/lib/api";

// Clinic equipment photo from Unsplash — free to use
const CLINIC_IMAGE_URL = "/images/modern-equipment.png";

export default function DoctorSection() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoctors()
      .then(setDoctors)
      .catch((err) => console.error("Failed to fetch doctors:", err))
      .finally(() => setLoading(false));
  }, []);

  const doctor = doctors[0];
  const activeDoctor = doctor || {
    name: "Dr. Ankit Patel",
    qualification: "MDS - Oral & Maxillofacial Surgery",
    description: "Specialist in dental implants and complex surgeries with over 15 years of experience delivering precision care.",
    photo_url: null,
  };

  return (
    <section className="py-24 sm:py-28 relative z-10 w-full overflow-hidden">
      <div className="bg-noise" />
      {/* Left-heavy indigo glow */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 -translate-y-1/2" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        {/* Doctor profile — two-column grid */}
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center mb-20">
          {/* Left: Doctor portrait in glass frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl p-1 bg-gradient-to-br from-secondary/20 via-[rgba(255,255,255,0.05)] to-primary/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <div className="aspect-[4/5] rounded-[1.3rem] overflow-hidden bg-[#0d1c32] relative">
                {loading ? (
                  <div className="w-full h-full bg-white/5 animate-pulse" />
                ) : activeDoctor.photo_url ? (
                  <div
                    className="w-full h-full bg-cover bg-top"
                    style={{ backgroundImage: `url("${activeDoctor.photo_url}")` }}
                    role="img"
                    aria-label={`Portrait of ${activeDoctor.name}`}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#0d1c32]">
                    <span className="material-symbols-outlined text-[#a8b4cc]/20 text-[120px] font-extralight">person</span>
                  </div>
                )}
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#041329] via-transparent to-transparent opacity-70" />
              </div>
            </div>
          </motion.div>

          {/* Right: Credentials */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <Badge icon="clinical_notes">Lead Specialist</Badge>

            {loading ? (
              <>
                <div className="h-10 w-3/4 bg-white/5 rounded-lg animate-pulse" />
                <div className="h-5 w-1/2 bg-white/5 rounded-lg animate-pulse" />
                <div className="h-24 w-full bg-white/5 rounded-lg animate-pulse" />
              </>
            ) : (
              <>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white font-display">
                  {activeDoctor.name}
                </h2>
                <p className="text-secondary font-semibold text-sm uppercase tracking-[0.15em]">
                  {activeDoctor.qualification}
                </p>
                <p className="text-base sm:text-lg font-light text-[#b3c1d9] tracking-wide leading-relaxed max-w-lg">
                  {activeDoctor.description}
                </p>
              </>
            )}

            {/* Achievement pills — flex-wrap prevents clipping */}
            <div className="flex flex-wrap gap-3 mt-1">
              {[
                { label: "MDS Certified", icon: "verified" },
                { label: "15+ Years", icon: "workspace_premium" },
                { label: "2000+ Patients", icon: "people" },
              ].map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-2 rounded-full bg-[rgba(197,160,89,0.1)] border border-[rgba(197,160,89,0.2)] px-4 py-2 text-xs font-semibold text-[#d6e3ff] uppercase tracking-[0.08em] whitespace-nowrap"
                >
                  <span className="material-symbols-outlined text-[#C5A059] text-[14px]">{badge.icon}</span>
                  {badge.label}
                </span>
              ))}
            </div>

            {/* CTA */}
            <motion.div whileHover={{ x: 4 }} className="mt-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-white transition-colors group"
              >
                Meet Our Team
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Clinic imagery strip — breaks monotony with real photos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {[
            {
              url: CLINIC_IMAGE_URL,
              label: "Modern Equipment",
              icon: "precision_manufacturing",
            },
            {
              url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop&q=80",
              label: "Sterile & Comfortable",
              icon: "local_hospital",
            },
            {
              url: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=800&auto=format&fit=crop&q=80",
              label: "Advanced Technology",
              icon: "biotech",
            },
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.08)] shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out transform-gpu"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out transform-gpu group-hover:scale-105"
                style={{ backgroundImage: `url("${img.url}")` }}
                role="img"
                aria-label={img.label}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041329] via-[rgba(4,19,41,0.4)] to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[18px]">{img.icon}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#d6e3ff]">{img.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
