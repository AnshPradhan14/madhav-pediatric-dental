"use client";

import { useEffect, useState } from 'react';
import { getTreatments, Treatment } from '@/lib/api';
import { motion } from 'framer-motion';

export default function TreatmentsPage() {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTreatments()
            .then(setTreatments)
            .catch(err => console.error("Failed to load treatments:", err))
            .finally(() => setLoading(false));
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <main className="bg-transparent text-[#eaeaea] min-h-screen pt-32 pb-24">
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Hero Section */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-20 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                        <span className="material-symbols-outlined text-[12px]">dataset</span>
                        Advanced Clinical Protocols
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-display leading-tight">
                        Our Specialized <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8c92ac]">Treatments</span>
                    </h1>
                    <p className="text-lg text-[#8c92ac] max-w-2xl font-light tracking-wide leading-relaxed">
                        Precision-engineered dental care integrating AI diagnostics and minimal intervention protocols for elite clinical outcomes.
                    </p>
                </motion.div>

                {loading ? (
                    <div className="grid gap-6 md:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="h-[300px] rounded-[2.5rem] glass-card animate-pulse bg-white/5 border border-white/5" />
                        ))}
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {treatments.length === 0 ? (
                            <div className="col-span-full py-20 text-center glass-card rounded-[2.5rem] border border-dashed border-white/10">
                                <p className="text-[#8c92ac] uppercase tracking-widest text-sm">Synchronizing treatment data...</p>
                            </div>
                        ) : (
                            treatments.map((t, i) => (
                                <motion.div
                                    key={t.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
                                    className="group glass-card p-10 rounded-[2.5rem] border border-white/5 shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col items-start transition-all duration-500 overflow-hidden relative"
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl group-hover:bg-primary/20 transition-all" />
                                    
                                    <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-[0_0_20px_rgba(77,97,252,0.4)]">
                                        <span className="material-symbols-outlined text-3xl font-extralight group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                                            {t.icon || 'dentistry'}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white font-display group-hover:text-primary transition-colors">{t.title}</h3>
                                    <p className="text-[#8c92ac] text-sm font-light leading-relaxed mb-8 flex-1 group-hover:text-white/80 transition-colors">
                                        {t.description}
                                    </p>
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-[0.2em] group/btn cursor-pointer">
                                        Explore Protocol
                                        <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                )}

                {/* Featured Section: Dental Implants */}
                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32"
                >
                    <div className="relative overflow-hidden glass-card rounded-[3.5rem] p-8 md:p-16 border border-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 blur-[150px] pointer-events-none rounded-full translate-x-1/2 -translate-y-1/2" />
                        
                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 mb-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-white bg-primary/20 border border-primary/30">
                                    <span className="material-symbols-outlined text-[12px]">verified</span>
                                    Featured Protocol
                                </div>
                                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white font-display leading-tight">Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">Dental Implants</span></h2>
                                <p className="text-[#8c92ac] mb-10 text-lg font-light tracking-wide leading-relaxed">
                                    Restore biometric integrity with permanent, high-aesthetic replacement systems. Our medical-grade titanium implants ensure uncompromising structural fusion.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        { label: 'Single-Element Aesthetic Restoration', icon: 'check_circle' },
                                        { label: 'Multi-Unit Dynamic Replacement', icon: 'check_circle' },
                                        { label: 'Full-Arch Bio-Mechanical Restoration', icon: 'check_circle' }
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center gap-4 group">
                                            <span className="material-symbols-outlined text-primary group-hover:scale-125 transition-transform">{item.icon}</span>
                                            <span className="font-light text-sm tracking-wide text-white/90">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                {[
                                    { icon: 'hotel_class', label: 'Premium Grade' },
                                    { icon: 'verified', label: 'Elite Trust' },
                                    { icon: 'payments', label: 'Optimized Cost' },
                                    { icon: 'schedule', label: 'Rapid Recovery' }
                                ].map((badge, i) => (
                                    <div key={i} className="aspect-square rounded-[2rem] glass-card border border-white/10 p-4 flex flex-col justify-center items-center text-center group hover:bg-primary/10 transition-all duration-500">
                                        <span className="material-symbols-outlined text-4xl mb-4 text-primary group-hover:scale-110 transition-transform font-extralight">{badge.icon}</span>
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">{badge.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}
