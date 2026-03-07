"use client";

import { useEffect, useState } from 'react';
import { getTreatments, Treatment } from '@/lib/api';

export default function TreatmentsPage() {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTreatments()
            .then(setTreatments)
            .catch(err => console.error("Failed to load treatments:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="mb-16 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Our Specialised <span className="text-primary">Treatments</span></h1>
                <p className="text-lg text-slate-600 max-w-2xl">Comprehensive dental care for children and adults. We use the latest technology to ensure a pain-free and comfortable experience.</p>
            </div>

            {loading ? (
                <div className="py-20 text-center text-slate-400">Loading treatments...</div>
            ) : (
                <div className="space-y-20">
                    {/* Dynamic Treatments from Admin */}
                    <section>
                        <div className="flex items-center gap-3 mb-8 border-l-4 border-primary pl-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Available Services</h2>
                            <span className="text-primary/50 font-medium">Expert Care</span>
                        </div>

                        {treatments.length === 0 ? (
                            <div className="bg-slate-50 rounded-2xl p-12 text-center text-slate-500 border border-dashed border-slate-200">
                                No treatments have been added to the database yet.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {treatments.map((t) => (
                                    <div key={t.id} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all flex flex-col items-start">
                                        <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-6">
                                            <span className="material-symbols-outlined text-3xl">
                                                {t.icon || 'dentistry'}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-3 text-slate-900">{t.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                                            {t.description}
                                        </p>
                                        <button className="text-primary font-bold text-sm flex items-center gap-2 group/btn">
                                            Learn More
                                            <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            )}

            {/* Section 4: Dental Implants (Always relevant, keeping it as a featured section) */}
            <section className="mt-20">
                <div className="relative overflow-hidden bg-primary rounded-3xl p-8 md:p-12 text-white">
                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-black mb-6">Premium Dental Implants</h2>
                            <p className="text-primary-100 mb-8 opacity-90 text-lg">Restore your confidence with permanent, natural-looking replacement teeth. Our titanium implants provide the strength and aesthetics you deserve.</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined bg-white/20 p-1 rounded-full text-sm">check</span>
                                    <span className="font-medium">Single Tooth Implants</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined bg-white/20 p-1 rounded-full text-sm">check</span>
                                    <span className="font-medium">Multiple Tooth Replacement</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined bg-white/20 p-1 rounded-full text-sm">check</span>
                                    <span className="font-medium">Full Mouth Restoration (All-on-4)</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-4 flex flex-col justify-center items-center text-center">
                                <span className="material-symbols-outlined text-4xl mb-2">hotel_class</span>
                                <span className="text-xs font-bold uppercase">Best Quality</span>
                            </div>
                            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-4 flex flex-col justify-center items-center text-center">
                                <span className="material-symbols-outlined text-4xl mb-2">verified</span>
                                <span className="text-xs font-bold uppercase">Trust Worthy</span>
                            </div>
                            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-4 flex flex-col justify-center items-center text-center">
                                <span className="material-symbols-outlined text-4xl mb-2">payments</span>
                                <span className="text-xs font-bold uppercase">Budget Friendly</span>
                            </div>
                            <div className="aspect-square rounded-2xl bg-white/10 backdrop-blur-sm p-4 flex flex-col justify-center items-center text-center">
                                <span className="material-symbols-outlined text-4xl mb-2">schedule</span>
                                <span className="text-xs font-bold uppercase">Quick Procedure</span>
                            </div>
                        </div>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
                        <svg className="absolute -right-20 -top-20 w-96 h-96 text-white" fill="currentColor" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="40"></circle>
                        </svg>
                    </div>
                </div>
            </section>
        </div>
    );
}
