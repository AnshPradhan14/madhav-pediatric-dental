"use client";

import { useEffect, useState } from 'react';
import { createAppointment, getSettings, WebsiteSettings, submitContact } from '@/lib/api';

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

    return (
        <>
            <main className="max-w-7xl mx-auto px-4 py-12 lg:py-20">
                <div className="mb-12 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">Get in Touch</h1>
                    <p className="text-slate-600 text-lg">Whether you want to book an appointment or have a general question, we're here to help.</p>
                </div>
                <div className="grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-7 bg-white rounded-xl shadow-xl shadow-primary/5 p-6 md:p-10 border border-slate-100">
                        {/* Mode Toggle */}
                        <div className="flex bg-slate-100 p-1.5 rounded-xl mb-8">
                            <button
                                onClick={() => setMode("appointment")}
                                className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${mode === "appointment" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                            >
                                <span className="material-symbols-outlined text-lg">calendar_today</span>
                                Book Appointment
                            </button>
                            <button
                                onClick={() => setMode("message")}
                                className={`flex-1 py-3 px-4 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2 ${mode === "message" ? "bg-white text-primary shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
                            >
                                <span className="material-symbols-outlined text-lg">chat</span>
                                General Inquiry
                            </button>
                        </div>

                        {success && (
                            <div className="mb-6 flex items-center gap-3 rounded-xl bg-green-50 border border-green-200 px-5 py-4 text-green-700">
                                <span className="material-symbols-outlined">check_circle</span>
                                <div>
                                    <p className="font-bold">{mode === "appointment" ? "Appointment Request Sent!" : "Message Sent!"}</p>
                                    <p className="text-sm">We will contact you shortly.</p>
                                </div>
                            </div>
                        )}
                        {error && (
                            <div className="mb-6 flex items-center gap-3 rounded-xl bg-red-50 border border-red-200 px-5 py-4 text-red-600">
                                <span className="material-symbols-outlined">error</span>
                                <p className="text-sm">{error} {settings?.phone}</p>
                            </div>
                        )}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-slate-700">Name *</label>
                                    <input id="name" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-background-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="John Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number *</label>
                                    <input id="phone" required value={form.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-background-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="+91 00000 00000" type="tel" />
                                </div>
                            </div>

                            {mode === "appointment" && (
                                <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-2 duration-300">
                                    <div className="space-y-2">
                                        <label htmlFor="treatment" className="text-sm font-bold text-slate-700">Treatment Type</label>
                                        <select id="treatment" value={form.treatment} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-background-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all">
                                            <option>Routine Checkup</option>
                                            <option>Dental Cleaning</option>
                                            <option>Cavity Filling</option>
                                            <option>Braces Consultation</option>
                                            <option>Dental Implant</option>
                                            <option>Emergency Service</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="preferred_date" className="text-sm font-bold text-slate-700">Preferred Date *</label>
                                        <input id="preferred_date" required value={form.preferred_date} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-background-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" type="date" />
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-slate-700">Email Address</label>
                                <input id="email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-background-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="example@mail.com" type="email" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-slate-700">{mode === "appointment" ? "Message (Optional)" : "How can we help? *"}</label>
                                <textarea id="message" required={mode === "message"} value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-background-light focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none" placeholder={mode === "appointment" ? "Any specific concerns?" : "Type your inquiry here..."} rows={4}></textarea>
                            </div>

                            <button disabled={loading} className="w-full bg-primary text-white py-4 rounded-xl text-lg font-bold shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-60" type="submit">
                                {loading ? <span className="material-symbols-outlined animate-spin">progress_activity</span> : <span className="material-symbols-outlined">{mode === "appointment" ? "calendar_today" : "send"}</span>}
                                {loading ? "Submitting..." : (mode === "appointment" ? "Book Appointment Now" : "Send Message")}
                            </button>
                        </form>
                    </div>
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-white rounded-xl shadow-md p-6 border border-slate-100">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">contact_support</span>
                                Contact Information
                            </h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone Number</p>
                                        <p className="text-lg font-bold text-slate-900">{settings?.phone || "+91 88723 00851"}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                        <span className="material-symbols-outlined">location_on</span>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Address</p>
                                        <p className="text-lg font-bold text-slate-900 leading-snug">{settings?.address || "T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad."}</p>
                                    </div>
                                </div>
                                {settings?.email && (
                                    <div className="flex items-start gap-4">
                                        <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                            <span className="material-symbols-outlined">mail</span>
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</p>
                                            <p className="text-lg font-bold text-slate-900 leading-snug">{settings.email}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="bg-primary text-white rounded-xl shadow-xl p-6 relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 opacity-10">
                                <span className="material-symbols-outlined text-9xl">schedule</span>
                            </div>
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined">schedule</span>
                                Working Hours
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center border-b border-white/20 pb-2">
                                    <span className="font-medium whitespace-pre-line">{settings?.clinic_hours || "Monday to Saturday\n9:30 AM - 1:00 PM\n5:30 PM - 9:00 PM"}</span>
                                </div>
                                {!settings?.clinic_hours && (
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium opacity-80">Sunday</span>
                                        <span className="font-bold bg-white/20 px-3 py-1 rounded-full text-xs uppercase tracking-widest">Closed</span>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="h-64 rounded-xl overflow-hidden shadow-lg relative bg-slate-200 group">
                            <div className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-all cursor-pointer" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAhwOcveqNDW92NxcfsJWOQQRRYXUvT43wnaDjzU_y1W3_ts8l9bHbb93DD2ULVEGnm4lPKL8SUfiwI5TIpsEq4LMlIJ-KYaIJUqJMs4GKLJNvRixvvHay25vYP2Sntxpgz8FAhAlo7hit8OGwzHf9Ogj7SVVk48J1uCbz-pHCRtqF6TIwce1NZzV8_ZfTOJjss9QIZYsMe31YCvB3BrNAtRiq62kmgLXNUDM-X_ugOfrmHz4qRYh34i4vy8Gi8Sa19g3oioIAbiM')" }}></div>
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="bg-primary text-white p-3 rounded-full shadow-2xl animate-bounce">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                            </div>
                            <div className="absolute bottom-4 right-4">
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Madhav+Pediatric+Dental+Care+Nikol+Ahmedabad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold shadow-lg flex items-center gap-2 hover:bg-slate-100 transition-all active:scale-95"
                                >
                                    <span className="material-symbols-outlined text-sm">map</span> View Large Map
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
