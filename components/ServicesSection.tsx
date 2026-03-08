"use client";

import { useEffect, useState } from 'react';
import { getTreatments, Treatment } from '@/lib/api';
import { motion } from 'framer-motion';
import { Skeleton } from './Skeleton';

export default function ServicesSection() {
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
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="services" className="bg-primary/5 py-24 scroll-mt-20">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">Comprehensive Treatments</h2>
                    <p className="mx-auto max-w-2xl text-slate-600">Providing specialized dental services in Nikol, Ahmedabad for all age groups.</p>
                </motion.div>

                {loading ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="flex flex-col items-center rounded-3xl bg-white p-8">
                                <Skeleton className="mb-6 h-16 w-16 rounded-full" />
                                <Skeleton className="mb-4 h-6 w-3/4" />
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="mt-2 h-4 w-5/6" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                    >
                        {treatments.length === 0 ? (
                            <p className="col-span-3 text-center text-slate-400">No treatments available yet.</p>
                        ) : (
                            treatments.map((t) => (
                                <motion.div
                                    key={t.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -5 }}
                                    className="flex flex-col items-center rounded-3xl bg-white p-8 shadow-sm border border-slate-100/50 hover:shadow-xl transition-all duration-300 group"
                                >
                                    <div className="mb-6 rounded-2xl bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                                        <span className="material-symbols-outlined text-4xl leading-none">{t.icon || 'dentistry'}</span>
                                    </div>
                                    <h4 className="mb-2 text-xl font-bold">{t.title}</h4>
                                    <p className="text-center text-sm text-slate-500 leading-relaxed">{t.description}</p>
                                </motion.div>
                            ))
                        )}
                    </motion.div>
                )}
            </div>
        </section>
    );
}
