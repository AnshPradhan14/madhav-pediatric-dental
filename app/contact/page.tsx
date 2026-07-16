"use client";

import { useEffect, useState } from 'react';
import { createAppointment, getSettings, WebsiteSettings, submitContact } from '@/lib/api';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactPage() {
    const [mode, setMode] = useState<"appointment" | "message">("appointment");
    const [form, setForm] = useState({ name: "", phone: "", email: "", treatment: "Routine Checkup", preferred_date: "", message: "" });
    const [settings, setSettings] = useState<WebsiteSettings | null>(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        getSettings().then(setSettings).catch(err => console.error("Failed to fetch settings:", err));
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);
        try {
            if (mode === "appointment") {
                await createAppointment(form);
            } else {
                await submitContact({
                    name: form.name,
                    email: form.email || undefined,
                    phone: form.phone || undefined,
                    message: form.message
                });
            }
            setSuccess(true);
            setForm({ name: "", phone: "", email: "", treatment: "Routine Checkup", preferred_date: "", message: "" });
        } catch {
            setError("Failed to submit. Please call us directly.");
        } finally {
            setLoading(false);
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <main className="bg-transparent text-[#eaeaea] min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 left-0 w-[800px] h-[600px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="mb-16 text-center max-w-2xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 backdrop-blur-xl border border-secondary/20 px-4 py-1.5 mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary shadow-[0_0_20px_rgba(100,255,218,0.15)]">
                        <span className="material-symbols-outlined text-[12px]">contact_support</span>
                        Direct Access
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-display leading-tight">
                        Secure Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#a8b4cc]">Clinical Slot</span>
                    </h1>
                    <p className="text-[#a8b4cc] text-lg font-light tracking-wide leading-relaxed">
                        Whether scheduling a specialized procedure or requesting a consultation, our concierge team is ready to assist.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-10">
                    {/* Form Section */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 glass-card border border-white/5 rounded-[3rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-black/20 backdrop-blur-3xl"
                    >
                        {/* Mode Toggle */}
                        <div className="flex bg-[#121212]/60 p-2 rounded-2xl mb-10 border border-white/5 shadow-inner">
                            <button
                                onClick={() => setMode("appointment")}
                                className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${mode === "appointment" ? "bg-primary text-white shadow-[0_0_20px_rgba(77,97,252,0.4)]" : "text-[#a8b4cc] hover:text-white"}`}
                            >
                                <span className="material-symbols-outlined text-lg font-extralight">calendar_today</span>
                                Appointment
                            </button>
                            <button
                                onClick={() => setMode("message")}
                                className={`flex-1 py-3 px-4 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${mode === "message" ? "bg-primary text-white shadow-[0_0_20px_rgba(77,97,252,0.4)]" : "text-[#a8b4cc] hover:text-white"}`}
                            >
                                <span className="material-symbols-outlined text-lg font-extralight">chat</span>
                                Request Info
                            </button>
                        </div>

                        <AnimatePresence mode="wait">
                            {success && (
                                <motion.div 
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mb-8 flex items-center gap-4 rounded-2xl bg-primary/10 border border-primary/30 px-6 py-4 text-primary"
                                >
                                    <span className="material-symbols-outlined fill-1">check_circle</span>
                                    <div>
                                        <p className="font-bold text-sm tracking-wide">{mode === "appointment" ? "ENVOY REQUEST LOGGED" : "MESSAGE TRANSMITTED"}</p>
                                        <p className="text-xs opacity-80">Our clinical coordinators will contact you shortly.</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {error && (
                            <div className="mb-8 flex items-center gap-4 rounded-2xl bg-red-500/10 border border-red-500/30 px-6 py-4 text-red-500">
                                <span className="material-symbols-outlined font-extralight">error</span>
                                <p className="text-xs font-bold tracking-widest uppercase">{error}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-3">
                                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8b4cc] ml-1">Full Name *</label>
                                    <input id="name" required value={form.name} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-[#121212]/40 text-white placeholder-white/20 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 font-light" placeholder="Full Name" type="text" />
                                </div>
                                <div className="space-y-3">
                                    <label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8b4cc] ml-1">Phone Number *</label>
                                    <input id="phone" required pattern="^(?:\+?91[\-\s]?)?[6-9](?:[\-\s]?\d){9}$" title="Please enter a valid 10-digit Indian mobile number." value={form.phone} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-[#121212]/40 text-white placeholder-white/20 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 font-light invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500/50" placeholder="e.g. 9876543210" type="tel" />
                                </div>
                            </div>

                            {mode === "appointment" && (
                                <motion.div 
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="grid md:grid-cols-2 gap-6"
                                >
                                    <div className="space-y-3">
                                        <label htmlFor="treatment" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8b4cc] ml-1">Select Treatment</label>
                                        <select id="treatment" value={form.treatment} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-[#121212]/40 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 font-light appearance-none">
                                            <option className="bg-[#121212]">Routine Checkup</option>
                                            <option className="bg-[#121212]">Dental Cleaning</option>
                                            <option className="bg-[#121212]">Cavity Filling</option>
                                            <option className="bg-[#121212]">Braces Consultation</option>
                                            <option className="bg-[#121212]">Dental Implant</option>
                                            <option className="bg-[#121212]">Emergency Service</option>
                                            <option className="bg-[#121212]">Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-3">
                                        <label htmlFor="preferred_date" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8b4cc] ml-1">Preferred Slot *</label>
                                        <input id="preferred_date" required value={form.preferred_date} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-[#121212]/40 text-white focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 font-light [color-scheme:dark]" type="date" />
                                    </div>
                                </motion.div>
                            )}

                            <div className="space-y-3">
                                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8b4cc] ml-1">Email Address</label>
                                <input id="email" value={form.email} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-[#121212]/40 text-white placeholder-white/20 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 font-light" placeholder="example@email.com" type="email" />
                            </div>

                            <div className="space-y-3">
                                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8b4cc] ml-1">{mode === "appointment" ? "Any Specific Concerns? (Optional)" : "How can we assist? *"}</label>
                                <textarea id="message" required={mode === "message"} value={form.message} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl border border-white/5 bg-[#121212]/40 text-white placeholder-white/20 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all duration-300 font-light resize-none" placeholder={mode === "appointment" ? "Any specific medical history or concerns?" : "Describe your inquiry..."} rows={4}></textarea>
                            </div>

                            <button disabled={loading} className="w-full bg-primary text-white py-5 rounded-[2rem] text-sm font-bold uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(77,97,252,0.4)] hover:bg-primary/90 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50" type="submit">
                                {loading ? (
                                    <span className="material-symbols-outlined animate-spin font-extralight text-2xl">progress_activity</span>
                                ) : (
                                    <>
                                        {mode === "appointment" ? "Book Appointment" : "Send Message"}
                                        <span className="material-symbols-outlined text-lg font-extralight">arrow_forward</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>

                    {/* Info Cards */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Location Header Info */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative border border-white/8 rounded-[2.5rem] p-10 shadow-xl overflow-hidden group cursor-default"
                            style={{ background: 'rgba(13,23,38,0.7)', backdropFilter: 'blur(12px)' }}
                        >
                            {/* Gradient top accent line */}
                            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-secondary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Background glow */}
                            <div className="absolute top-0 right-0 w-40 h-40 blur-3xl pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-100 rounded-full"
                                 style={{ background: 'rgba(100,255,218,0.15)' }} />

                            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary mb-8 flex items-center gap-2">
                                <span className="w-8 h-px bg-secondary/30" />
                                Contact Information
                            </h2>
                            <div className="space-y-8 relative z-10">
                                {[
                                    { label: 'Phone', text: settings?.phone || "+91 88723 00851", icon: 'call', isTeal: true, conditional: true },
                                    { label: 'Address', text: settings?.address || "T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad.", icon: 'location_on', isTeal: false, conditional: true },
                                    { label: 'Email', text: settings?.email, icon: 'mail', isTeal: true, conditional: !!settings?.email }
                                ].map((info, i) => {
                                    if (!info.conditional) return null;
                                    const glowColor = info.isTeal ? 'rgba(100,255,218,0.15)' : 'rgba(77,97,252,0.15)';
                                    const borderColor = info.isTeal ? 'rgba(100,255,218,0.2)' : 'rgba(77,97,252,0.2)';
                                    const textColor = info.isTeal ? 'text-secondary' : 'text-primary';

                                    return (
                                        <div key={i} className="flex items-start gap-6 group/item">
                                            <div className={`h-12 w-12 rounded-xl flex items-center justify-center border transition-all duration-500 group-hover/item:scale-110 shadow-lg ${textColor}`}
                                                 style={{ background: `linear-gradient(to bottom right, ${glowColor}, transparent)`, borderColor: borderColor, boxShadow: `0 0 15px ${glowColor}` }}>
                                                <span className="material-symbols-outlined font-light">{info.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[8px] font-bold text-white/40 uppercase tracking-widest mb-1 font-display">{info.label}</p>
                                                <p className="text-lg font-bold text-white tracking-wide group-hover/item:text-white/90 transition-colors break-words">{info.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>

                        {/* Working Hours */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-primary shadow-[0_20px_60px_rgba(77,97,252,0.3)] text-white rounded-[2.5rem] p-10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 blur-[60px] pointer-events-none rounded-full" />
                            <h2 className="text-[10px] font-bold uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                                <span className="w-8 h-px bg-white/30" />
                                Clinic Hours
                            </h2>
                            <div className="space-y-6">
                                <div className="flex justify-between items-center border-b border-white/20 pb-4">
                                    <span className="font-light text-sm tracking-wide whitespace-pre-line leading-relaxed">{settings?.clinic_hours || "Monday to Saturday\n09:30 AM - 01:00 PM\n05:30 PM - 09:00 PM"}</span>
                                </div>
                                {!settings?.clinic_hours && (
                                    <div className="flex justify-between items-center">
                                        <span className="font-light text-sm tracking-widest uppercase opacity-80">Sunday Status</span>
                                        <span className="font-bold bg-white/20 px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] backdrop-blur-md">Closed</span>
                                    </div>
                                )}
                            </div>
                        </motion.div>

                        {/* Integrated Mini Map */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="h-72 rounded-[2.5rem] overflow-hidden shadow-2xl relative border border-white/5 bg-black/40 group"
                        >
                            <div className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-all duration-1000 grayscale group-hover:grayscale-0 cursor-pointer" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80')" }}></div>
                            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay pointer-events-none" />
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="bg-primary text-white p-4 rounded-full shadow-[0_0_30px_rgba(77,97,252,0.6)] animate-pulse">
                                    <span className="material-symbols-outlined text-3xl font-extralight">location_on</span>
                                </div>
                            </div>
                            <div className="absolute bottom-6 right-6">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Madhav+Pediatric+Dental+Care+Nikol+Ahmedabad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card bg-[#121212]/80 text-white px-6 py-3 rounded-xl text-[10px] font-bold tracking-widest uppercase shadow-2xl flex items-center gap-2 hover:bg-primary transition-all active:scale-95 border border-white/10"
                                >
                                    <span className="material-symbols-outlined text-lg font-extralight">map</span> View on Maps
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}

