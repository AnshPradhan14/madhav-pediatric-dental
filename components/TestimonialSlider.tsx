"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        id: 1,
        content: "The best pediatric dentist in Nikol. My daughter was scared, but Dr. Poonam made her feel so comfortable. Highly recommended!",
        author: "Rahul Sharma",
        role: "Parent",
        rating: 5,
    },
    {
        id: 2,
        content: "Got my dental implants done by Dr. Jatin. The process was smooth and painless. Exceptional professionalism.",
        author: "Anjali Mehta",
        role: "Patient",
        rating: 5,
    },
    {
        id: 3,
        content: "Modern clinic with very friendly staff. They explained every treatment detail clearly. Nikol's best dental care.",
        author: "Vikram Shah",
        role: "Patient",
        rating: 5,
    },
];

export default function TestimonialSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="mx-auto max-w-7xl px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center text-3xl font-extrabold sm:text-4xl"
                >
                    What Our Patients Say
                </motion.h2>

                <div className="relative mx-auto max-w-4xl">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="rounded-3xl bg-primary/5 p-8 md:p-12 border border-primary/10 relative"
                        >
                            <div className="mb-6 flex justify-center gap-1 text-yellow-400">
                                {[...Array(testimonials[index].rating)].map((_, i) => (
                                    <span key={i} className="material-symbols-outlined fill-1">star</span>
                                ))}
                            </div>
                            <p className="mb-8 text-center text-xl md:text-2xl italic text-slate-700 leading-relaxed font-medium">
                                "{testimonials[index].content}"
                            </p>
                            <div className="flex flex-col items-center">
                                <div className="h-14 w-14 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                                    <span className="material-symbols-outlined text-primary text-3xl font-light">person</span>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-lg text-slate-900">{testimonials[index].author}</p>
                                    <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">{testimonials[index].role}</p>
                                </div>
                            </div>

                            {/* Decorative Quote Icon */}
                            <div className="absolute top-10 left-10 text-primary/10 opacity-50">
                                <span className="material-symbols-outlined text-7xl font-light">format_quote</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Dots */}
                    <div className="mt-8 flex justify-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setIndex(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 ${index === i ? "w-8 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                                    }`}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 text-slate-400 hover:text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined">chevron_left</span>
                    </button>
                    <button
                        onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full hidden lg:flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg border border-slate-100 text-slate-400 hover:text-primary transition-colors"
                    >
                        <span className="material-symbols-outlined">chevron_right</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
