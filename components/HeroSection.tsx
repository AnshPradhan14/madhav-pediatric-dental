"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 lg:py-24">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-8"
                >
                    <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary border border-primary/20">
                        <span className="material-symbols-outlined text-sm font-bold">verified</span>
                        Top Rated Dental Care in Nikol
                    </div>
                    <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
                        Expert <span className="text-primary italic">Pediatric</span> & Dental Implant Care
                    </h1>
                    <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                        Specialized dental treatments for children and adults by experienced MDS doctors. We provide compassionate care with cutting-edge technology.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95">
                            <span className="material-symbols-outlined">calendar_month</span>
                            Book Appointment
                        </Link>
                        <a href="tel:+918872300851" className="flex h-14 items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-8 text-base font-bold text-slate-700 hover:border-primary/30 hover:text-primary transition-all active:scale-95">
                            <span className="material-symbols-outlined text-xl">call</span>
                            Call Now
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex -space-x-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className={`h-10 w-10 rounded-full border-2 border-white bg-slate-${i + 1}00`} />
                            ))}
                            <div className="h-10 w-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-[10px] text-white font-bold">+2k</div>
                        </div>
                        <span className="font-medium">Trusted by 2,000+ Happy Families</span>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="aspect-square overflow-hidden rounded-[2.5rem] bg-primary/5 p-4 shadow-3xl">
                        <div className="h-full w-full rounded-[2rem] bg-cover bg-center shadow-inner" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxkEQTJR4Tf4FrE0BY23evi2XHEjJGs4vUkepSQWxPTBsD3cPCCCWQh_odnIaHW5HNZsaFr2tEsszjurXm65zjd1fb8P_gj1YE2Dkj1EDc2aU6YJYkBKELBxgmnfvzSZPx_iqdfNCrR2QJ5AkLyBFavm57_wk2qmgVX80B2_Qnggg2Rhl9jIj5gMbwailpy3CtmpPayq6bEV6aO1cPguynNzvknikqno1_B5_PDWZJNQ-V_BIkHQUbuvp8qFSzzjTFxa-eFXFt0ws')" }}></div>
                    </div>

                    {/* Stats Floating Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-2xl lg:block hidden border border-slate-100"
                    >
                        <div className="flex items-center gap-4">
                            <div className="rounded-2xl bg-green-50 p-4 text-green-600">
                                <span className="material-symbols-outlined text-3xl">verified_user</span>
                            </div>
                            <div>
                                <p className="text-3xl font-black text-slate-900 leading-none">15+</p>
                                <p className="mt-1 text-xs font-bold text-slate-400 uppercase tracking-widest">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-12 -right-12 h-64 w-64 bg-primary/5 rounded-full blur-3xl -z-10" />
                    <div className="absolute -bottom-12 -left-12 h-48 w-48 bg-blue-400/5 rounded-full blur-3xl -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
