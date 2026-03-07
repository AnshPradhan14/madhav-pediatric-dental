"use client";

import { useEffect, useState } from 'react';
import { getTreatments, Treatment } from '@/lib/api';

export default function ServicesSection() {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getTreatments()
            .then(setTreatments)
            .catch(err => console.error("Failed to load treatments:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="bg-primary/5 py-20">
            <div className="mx-auto max-w-7xl px-6 text-center">
                <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">Comprehensive Treatments</h2>
                <p className="mx-auto mb-16 max-w-2xl text-slate-600">Providing specialized dental services in Nikol, Ahmedabad for all age groups.</p>

                {loading ? (
                    <div className="text-slate-400">Loading treatments...</div>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {treatments.length === 0 ? (
                            <p className="col-span-3 text-slate-400">No treatments available yet.</p>
                        ) : (
                            treatments.map((t) => (
                                <div key={t.id} className="flex flex-col items-center rounded-3xl bg-white p-8 shadow-md hover:shadow-xl transition-shadow group">
                                    <div className="mb-6 rounded-full bg-primary/10 p-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-4xl">{t.icon || 'dentistry'}</span>
                                    </div>
                                    <h4 className="mb-2 text-xl font-bold">{t.title}</h4>
                                    <p className="text-sm text-slate-500">{t.description}</p>
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
