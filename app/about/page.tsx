"use client";

import { useEffect, useState } from 'react';
import { getDoctors, Doctor } from '@/lib/api';

export default function AboutPage() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDoctors()
            .then(setDoctors)
            .catch(err => console.error("Failed to load doctors:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="px-4 md:px-10 lg:px-40 py-8">
                <div className="max-w-[1200px] mx-auto">
                    <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-xl bg-slate-200">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.1) 50%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOrZ_DJgUjM6y9dlcTMF7W3a5gYuSuUAekbafe8l695upxMnGnrJb40iTSSaZsx9hzyaEx_wa0xmqyT3NaQXRCz8ym6ItQYqsxt1msA1gJ0OAJmHVmuXiC6BUAnEzvXLvrEvzs2oDguwwvLXud-oIc7YxQV4cuWwSze79vAgUDrb1YyVtoHZm977WtTpa5szUTIyf_pDBbIE11k0e7wZgr4fAmXjj9vQ3jXPiD1L6QTvtTlMEalb6FgDak2qo7qabyl5qOmZhl1V0")' }}></div>
                        <div className="absolute bottom-0 left-0 p-8 md:p-12">
                            <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-2">Dedicated to Excellence</h2>
                            <p className="text-white/90 text-lg max-w-xl">Redefining pediatric dental care and surgical precision in a comforting environment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clinic Introduction */}
            <section className="px-4 md:px-10 lg:px-40 py-12 bg-white">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1">
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">Our Mission</span>
                            <h2 className="text-3xl font-bold mt-2 mb-6">Advanced Care for Every Smile</h2>
                            <p className="text-slate-600 text-lg leading-relaxed mb-6">
                                At Madhav Pediatric Dental Care, our mission is to provide specialized dental care for children and advanced surgical treatments for all. We combine a child-friendly environment with state-of-the-art technology to ensure the best outcomes for our young patients and complex surgical cases.
                            </p>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                We believe that oral health is a vital component of overall well-being. Our team is dedicated to educating families while providing painless, effective treatments that set the foundation for a lifetime of healthy smiles.
                            </p>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="bg-primary/5 p-6 rounded-xl flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-3">child_care</span>
                                <h3 className="font-bold">Pediatric Focus</h3>
                            </div>
                            <div className="bg-primary/5 p-6 rounded-xl flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-3">precision_manufacturing</span>
                                <h3 className="font-bold">Advanced Tech</h3>
                            </div>
                            <div className="bg-primary/5 p-6 rounded-xl flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-3">health_and_safety</span>
                                <h3 className="font-bold">Surgical Safety</h3>
                            </div>
                            <div className="bg-primary/5 p-6 rounded-xl flex flex-col items-center text-center">
                                <span className="material-symbols-outlined text-primary text-4xl mb-3">volunteer_activism</span>
                                <h3 className="font-bold">Patient Care</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Doctor Profiles */}
            <section className="px-4 md:px-10 lg:px-40 py-16">
                <div className="max-w-[1200px] mx-auto text-center mb-12">
                    <h2 className="text-3xl font-bold">Meet Our Specialists</h2>
                    <p className="text-slate-500 mt-2">World-class expertise in pediatric and maxillofacial care</p>
                </div>
                <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-8">
                    {loading ? (
                        <div className="col-span-2 text-center py-10 text-slate-400">Loading doctors...</div>
                    ) : (
                        doctors.map((doc) => (
                            <div key={doc.id} className="bg-white rounded-xl overflow-hidden shadow-lg border border-primary/5 flex flex-col md:flex-row">
                                <div
                                    className="md:w-1/2 aspect-[4/5] bg-cover bg-center bg-slate-100"
                                    style={{ backgroundImage: doc.photo_url ? `url("${doc.photo_url}")` : undefined }}
                                >
                                    {!doc.photo_url && (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="material-symbols-outlined text-slate-300 text-6xl">person</span>
                                        </div>
                                    )}
                                </div>
                                <div className="md:w-1/2 p-6 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold">{doc.name}</h3>
                                    <p className="text-primary font-semibold mb-3">{doc.qualification}</p>
                                    <p className="text-slate-700 font-bold mb-2">{doc.specialization}</p>
                                    <p className="text-sm text-slate-600 leading-relaxed">
                                        {doc.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </section>

            {/* Our Commitment */}
            <section className="px-4 md:px-10 lg:px-40 py-16 bg-primary/5">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Commitment to Patient Care</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-primary">verified_user</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Safety First</h4>
                            <p className="text-slate-600">We adhere to the highest international sterilization protocols to ensure the absolute safety of every patient.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-primary">sentiment_very_satisfied</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Comfort Focused</h4>
                            <p className="text-slate-600">From our child-friendly waiting area to sedation options, we prioritize a stress-free experience for children and adults.</p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-primary">groups</span>
                            </div>
                            <h4 className="text-xl font-bold mb-3">Family Centric</h4>
                            <p className="text-slate-600">We work closely with parents to create personalized long-term dental health plans for their children.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
