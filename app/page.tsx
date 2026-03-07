"use client";

import { useEffect, useState } from 'react';
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
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

  return (
    <>
      <HeroSection />
      {/* Why Choose Us / About Summary */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl">About Our Clinic</h2>
            <p className="mx-auto max-w-2xl text-slate-600">
              Madhav Pediatric Dental Care is a state-of-the-art facility providing comprehensive dental care for families in Ahmedabad, led by experienced MDS specialists.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-primary/10 bg-background-light p-8 hover:border-primary/30 transition-colors group">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">medical_services</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">MDS Doctors</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Expert care by board-certified specialists in Pediatric and Maxillofacial surgery.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-background-light p-8 hover:border-primary/30 transition-colors group">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">Advanced Equipment</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Utilizing the latest technology for painless and precise dental treatments.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-background-light p-8 hover:border-primary/30 transition-colors group">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">sentiment_satisfied</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">Child Friendly</h3>
              <p className="text-sm text-slate-600 leading-relaxed">A warm, playful environment designed to make children feel at ease.</p>
            </div>
            <div className="rounded-2xl border border-primary/10 bg-background-light p-8 hover:border-primary/30 transition-colors group">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">e911_emergency</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">Emergency Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Swift and responsive dental support for any urgent oral health issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Doctors */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet Our Doctors</h2>
              <p className="mt-2 text-slate-600">Led by world-class specialists dedicated to your family's oral health.</p>
            </div>
            <a className="font-bold text-primary flex items-center gap-1 hover:underline" href="/about">
              View All Staff <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>

          {loading ? (
            <div className="text-slate-400">Loading specialists...</div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:max-w-4xl">
              {doctors.slice(0, 2).map((doc) => (
                <div key={doc.id} className="overflow-hidden rounded-3xl bg-white shadow-xl group border border-slate-100">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-slate-100">
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: doc.photo_url ? `url("${doc.photo_url}")` : undefined }}
                    >
                      {!doc.photo_url && (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-slate-300 text-6xl">person</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold">{doc.name}</h3>
                    <p className="text-primary font-semibold">{doc.specialization}</p>
                    <p className="mt-4 text-sm text-slate-500 leading-relaxed truncate-2-lines">{doc.description}</p>
                  </div>
                </div>
              ))}
              {doctors.length === 0 && <p className="text-slate-400">No doctors added yet.</p>}
            </div>
          )}
        </div>
      </section>

      <ServicesSection />

      {/* Testimonials */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-extrabold sm:text-4xl">What Our Patients Say</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-lg border-t-4 border-primary">
              <div className="mb-4 flex gap-1 text-yellow-400">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="mb-6 italic text-slate-600">"The best pediatric dentist in Nikol. My daughter was scared, but Dr. Poonam made her feel so comfortable. Highly recommended!"</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                <div>
                  <p className="font-bold">Rahul Sharma</p>
                  <p className="text-xs text-slate-500">Parent</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg border-t-4 border-primary">
              <div className="mb-4 flex gap-1 text-yellow-400">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="mb-6 italic text-slate-600">"Got my dental implants done by Dr. Jatin. The process was smooth and painless. Exceptional professionalism."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                <div>
                  <p className="font-bold">Anjali Mehta</p>
                  <p className="text-xs text-slate-500">Patient</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-lg border-t-4 border-primary">
              <div className="mb-4 flex gap-1 text-yellow-400">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="mb-6 italic text-slate-600">"Modern clinic with very friendly staff. They explained every treatment detail clearly. Nikol's best dental care."</p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10"></div>
                <div>
                  <p className="font-bold">Vikram Shah</p>
                  <p className="text-xs text-slate-500">Patient</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GallerySection />
      <ContactSection />
    </>
  );
}
