"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Skeleton } from '@/components/Skeleton';
import { getDoctors, Doctor } from '@/lib/api';

export default function Home() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDoctors()
      .then(setDoctors)
      .catch(err => console.error("Failed to fetch doctors:", err))
      .finally(() => setLoading(false));
  }, []);

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <>
      <HeroSection />

      {/* Why Choose Us / About Summary */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">About Our Clinic</h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Madhav Pediatric Dental Care is a state-of-the-art facility providing comprehensive dental care for families in Ahmedabad, led by experienced MDS specialists.
            </p>
          </motion.div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: 'medical_services', title: 'MDS Doctors', desc: 'Expert care by board-certified specialists in Pediatric and Maxillofacial surgery.' },
              { icon: 'precision_manufacturing', title: 'Advanced Equipment', desc: 'Utilizing the latest technology for painless and precise dental treatments.' },
              { icon: 'sentiment_satisfied', title: 'Child Friendly', desc: 'A warm, playful environment designed to make children feel at ease.' },
              { icon: 'e911_emergency', title: 'Emergency Care', desc: 'Swift and responsive dental support for any urgent oral health issues.' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-slate-100 bg-background-light p-8 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all group"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                </div>
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-24 bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet Our Specialists</h2>
              <p className="mt-2 text-slate-600">Our board-certified experts are dedicated to your family's smiles.</p>
            </motion.div>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-bold text-primary flex items-center gap-1 hover:underline group"
              href="/about"
            >
              View Full Team
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </motion.a>
          </div>

          {loading ? (
            <div className="grid gap-10 md:grid-cols-2">
              {[1, 2].map((i) => (
                <div key={i} className="overflow-hidden rounded-3xl bg-white border border-slate-100">
                  <Skeleton className="aspect-[16/10] w-full" />
                  <div className="p-8">
                    <Skeleton className="h-8 w-1/2 mb-2" />
                    <Skeleton className="h-6 w-1/3 mb-4" />
                    <Skeleton className="h-3 w-full mb-2" />
                    <Skeleton className="h-3 w-4/5" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-10 md:grid-cols-2">
              {doctors.slice(0, 2).map((doc, i) => (
                <motion.div
                  key={doc.id}
                  variants={fadeInScale}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/50 group border border-slate-100 hover:border-primary/20 transition-all duration-300"
                >
                  <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: doc.photo_url ? `url("${doc.photo_url}")` : undefined }}
                    >
                      {!doc.photo_url && (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-slate-300 text-6xl font-light">person</span>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                      <p className="text-white text-sm font-medium">Expert in {doc.specialization}</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{doc.specialization}</p>
                    <h3 className="text-2xl font-black text-slate-900 mb-4">{doc.name}</h3>
                    <p className="text-[15px] text-slate-500 leading-relaxed truncate-2-lines">{doc.description}</p>
                  </div>
                </motion.div>
              ))}
              {doctors.length === 0 && <p className="text-slate-400">Our team information is being updated.</p>}
            </div>
          )}
        </div>
      </section>

      <ServicesSection />

      <TestimonialSlider />

      <GallerySection />

      <ContactSection />
    </>
  );
}
