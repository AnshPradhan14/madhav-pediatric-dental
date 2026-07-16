"use client";

import { useEffect, useState } from 'react';
import { getDoctors, Doctor } from '@/lib/api';
import { motion } from 'framer-motion';

export default function AboutPage() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDoctors()
            .then(setDoctors)
            .catch(err => console.error("Failed to load doctors:", err))
            .finally(() => setLoading(false));
    }, []);

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <main className="bg-transparent text-[#eaeaea] min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[150px] pointer-events-none rounded-full -translate-y-1/2" />
                
                <div className="mx-auto max-w-7xl px-6 relative z-10">
                    <motion.div 
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                        className="relative w-full h-[400px] md:h-[550px] overflow-hidden rounded-[3rem] border border-[rgba(255,255,255,0.08)] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    >
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110" 
                            style={{ backgroundImage: 'linear-gradient(to top, #121212 0%, rgba(18, 18, 18, 0.4) 50%, transparent 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOrZ_DJgUjM6y9dlcTMF7W3a5gYuSuUAekbafe8l695upxMnGnrJb40iTSSaZsx9hzyaEx_wa0xmqyT3NaQXRCz8ym6ItQYqsxt1msA1gJ0OAJmHVmuXiC6BUAnEzvXLvrEvzs2oDguwwvLXud-oIc7YxQV4cuWwSze79vAgUDrb1YyVtoHZm977WtTpa5szUTIyf_pDBbIE11k0e7wZgr4fAmXjj9vQ3jXPiD1L6QTvtTlMEalb6FgDak2qo7qabyl5qOmZhl1V0")' }} 
                        />
                        <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
                            <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                                <span className="material-symbols-outlined text-[12px]">clinical_notes</span>
                                Legacy of Care
                            </div>
                            <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4 font-display leading-tight">Dedicated to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#a8b4cc]">Clinical Excellence</span></h1>
                            <p className="text-[#a8b4cc] text-lg md:text-xl max-w-2xl font-light tracking-wide leading-relaxed">Redefining dental care and surgical precision in a futuristic, comfort-first environment.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Clinic Introduction - Bento Style Components */}
            <section className="py-24 relative z-10">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                        >
                            <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 backdrop-blur-xl border border-secondary/20 px-4 py-1.5 mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary shadow-[0_0_20px_rgba(100,255,218,0.15)]">
                                <span className="material-symbols-outlined text-[12px]">rocket_launch</span>
                                Our Mission
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8 font-display">Advanced Care for <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a8b4cc] to-white">Every Generation</span></h2>
                            <p className="text-[#a8b4cc] text-lg font-light leading-relaxed mb-6 tracking-wide">
                                At Madhav Clinic, we merge specialized pediatric protocols with advanced maxillofacial surgical expertise. Our facility is a testament to how technology can transform dental experiences from clinical to restorative.
                            </p>
                            <p className="text-[#a8b4cc] text-lg font-light leading-relaxed tracking-wide">
                                We believe oral health is the cornerstone of systemic well-being. Our MDS-led team provides data-driven, painless treatments that set global standards in local care.
                            </p>
                        </motion.div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: 'child_care', title: 'Pediatric Focus', desc: 'Child-centric protocols', color: 'from-secondary/20 to-secondary/5', iconColor: 'text-secondary', glow: 'rgba(100,255,218,0.2)' },
                                { icon: 'precision_manufacturing', title: 'Advanced Tech', desc: 'AI diagnostics', color: 'from-primary/20 to-primary/5', iconColor: 'text-primary', glow: 'rgba(77,97,252,0.2)' },
                                { icon: 'health_and_safety', title: 'Surgical Safety', desc: 'Hospital grade', color: 'from-primary/20 to-primary/5', iconColor: 'text-primary', glow: 'rgba(77,97,252,0.2)' },
                                { icon: 'volunteer_activism', title: 'Patient Care', desc: 'Empathy first', color: 'from-secondary/20 to-secondary/5', iconColor: 'text-secondary', glow: 'rgba(100,255,218,0.2)' }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative p-6 rounded-[2rem] border border-white/8 flex flex-col items-center text-center group hover:-translate-y-1 transition-all duration-500 ease-out transform-gpu overflow-hidden"
                                    style={{ background: 'rgba(13,23,38,0.7)', backdropFilter: 'blur(12px)' }}
                                >
                                    {/* Corner glow */}
                                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${item.color} blur-2xl pointer-events-none`} />
                                    <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-500 shadow-lg`}
                                        style={{ boxShadow: `0 0 20px ${item.glow}` }}>
                                        <span className={`material-symbols-outlined text-3xl font-light ${item.iconColor}`}>{item.icon}</span>
                                    </div>
                                    <h3 className="font-bold text-white mb-1.5 text-sm uppercase tracking-widest">{item.title}</h3>
                                    <p className="text-[11px] text-[#a8b4cc] font-medium uppercase tracking-wider">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctor Profiles */}
            <section className="py-24 border-t border-white/5 bg-[#121212]/40 backdrop-blur-2xl">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-1 mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
                            <span className="material-symbols-outlined text-[12px]">groups</span>
                            Elite Faculty
                        </div>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white font-display">Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#a8b4cc]">Specialists</span></h2>
                        <p className="text-[#a8b4cc] mt-4 font-light tracking-wide italic">World-class expertise in pediatric and maxillofacial aesthetics.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        {loading ? (
                            [1, 2].map(i => <div key={i} className="h-[400px] rounded-[3rem] glass-card animate-pulse bg-white/5" />)
                        ) : (
                            doctors.map((doc, i) => (
                                <motion.div 
                                    key={doc.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="glass-card rounded-[3rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row group hover:border-primary/30 transition-all duration-700 bg-black/20"
                                >
                                    <div className="lg:w-2/5 aspect-square lg:aspect-auto relative overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#121212]/80 z-10 hidden lg:block" />
                                        <div
                                            className="w-full h-full bg-cover bg-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-110"
                                            style={{ backgroundImage: doc.photo_url ? `url("${doc.photo_url}")` : undefined }}
                                        >
                                            {!doc.photo_url && (
                                                <div className="w-full h-full flex items-center justify-center bg-white/5">
                                                    <span className="material-symbols-outlined text-white/20 text-6xl font-extralight">person</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="lg:w-3/5 p-10 flex flex-col justify-center relative z-20">
                                        <span className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-2">{doc.qualification}</span>
                                        <h3 className="text-3xl font-bold text-white mb-2 font-display">{doc.name}</h3>
                                        <p className="text-white font-medium mb-6 text-sm flex items-center gap-2">
                                            <span className="h-px w-8 bg-primary/50" />
                                            {doc.specialization}
                                        </p>
                                        <p className="text-sm text-[#a8b4cc] font-light leading-relaxed mb-6 italic">
                                            "{doc.description}"
                                        </p>
                                        <div className="flex gap-4">
                                            <div className="h-10 w-10 rounded-full glass-card flex items-center justify-center border border-white/10 text-white/40 hover:text-primary hover:border-primary transition-all cursor-pointer">
                                                <span className="material-symbols-outlined text-lg">medical_services</span>
                                            </div>
                                            <div className="h-10 w-10 rounded-full glass-card flex items-center justify-center border border-white/10 text-white/40 hover:text-primary hover:border-primary transition-all cursor-pointer">
                                                <span className="material-symbols-outlined text-lg">verified</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        )}
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="py-24 relative overflow-hidden">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 backdrop-blur-xl border border-secondary/20 px-4 py-1.5 mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary shadow-[0_0_20px_rgba(100,255,218,0.15)]">
                            <span className="material-symbols-outlined text-[12px]">workspace_premium</span>
                            Our Commitment
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 font-display">Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Commitment</span></h2>
                        <div className="w-24 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent mx-auto"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { icon: 'verified_user', title: 'Safety Protocol', desc: 'Adhering to hospital-grade sterilization and international biological safety standards.', color: 'from-secondary', accent: 'rgba(100,255,218,0.15)', border: 'rgba(100,255,218,0.2)' },
                            { icon: 'sentiment_very_satisfied', title: 'Comfort Design', desc: 'From ambient acoustics to sedation dentistry, we prioritize a stress-free sensory experience.', color: 'from-primary', accent: 'rgba(77,97,252,0.15)', border: 'rgba(77,97,252,0.2)' },
                            { icon: 'groups', title: 'Family Integration', desc: 'Personalized dental health blueprints designed collaboratively with families.', color: 'from-secondary', accent: 'rgba(100,255,218,0.15)', border: 'rgba(100,255,218,0.2)' }
                        ].map((card, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12 }}
                                whileHover={{ y: -8 }}
                                className="relative p-8 rounded-[2rem] overflow-hidden group cursor-default transition-all duration-500 ease-out transform-gpu"
                                style={{ background: 'rgba(13,23,38,0.8)', border: `1px solid rgba(255,255,255,0.07)`, backdropFilter: 'blur(16px)' }}
                            >
                                {/* Gradient top accent line */}
                                <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r ${card.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                {/* Background glow */}
                                <div className="absolute top-0 right-0 w-40 h-40 blur-3xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-full"
                                    style={{ background: card.accent }} />
                                {/* Icon */}
                                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-500 group-hover:scale-110"
                                    style={{ background: card.accent, borderColor: card.border, boxShadow: `0 0 20px ${card.accent}` }}>
                                    <span className={`material-symbols-outlined text-3xl font-light ${card.color === 'from-secondary' ? 'text-secondary' : 'text-primary'}`}>{card.icon}</span>
                                </div>
                                <h4 className="text-lg font-bold text-white mb-3 font-display tracking-wide">{card.title}</h4>
                                <p className="text-sm text-[#a8b4cc] font-light leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

