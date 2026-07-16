"use client";

import { useEffect, useState } from 'react';
import { getGallery, GalleryImage } from '@/lib/api';
import { motion, AnimatePresence } from 'framer-motion';
import { Skeleton } from './Skeleton';

export default function GallerySection() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

    useEffect(() => {
        getGallery()
            .then(setImages)
            .catch(err => console.error("Failed to load gallery:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section id="gallery" className="relative bg-transparent py-24 z-10 overflow-hidden border-t border-[rgba(255,255,255,0.05)]">
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] pointer-events-none rounded-full" />
            
            <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <div className="inline-flex w-fit items-center gap-2 rounded-full glass-card px-3 py-1 mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary shadow-[0_0_15px_rgba(95,168,160,0.15)]">
                        <span className="material-symbols-outlined text-[12px]">view_comfy_alt</span>
                        Facility Tour
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl font-display text-white">
                        Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#a8b4cc]">The Clinic</span>
                    </h2>
                    <p className="mt-4 text-[#a8b4cc] font-light max-w-xl mx-auto tracking-wide">Take a virtual tour of our state-of-the-art facility designed for absolute clinical excellence and comfort.</p>
                </motion.div>

                {loading ? (
                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Skeleton key={i} className="mb-4 w-full h-[300px] rounded-[2rem] bg-white/5 border border-[rgba(255,255,255,0.05)]" />
                        ))}
                    </div>
                ) : (
                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>div:not(:first-child)]:mt-4">
                        {images.length === 0 ? (
                            <div className="col-span-full w-full py-16 flex items-center justify-center glass-card rounded-[2rem] border border-[rgba(255,255,255,0.05)]">
                                <p className="text-center text-[#a8b4cc] font-light text-sm tracking-widest uppercase">Initializing visual data...</p>
                            </div>
                        ) : (
                            images.map((img) => (
                                <motion.div
                                    key={img.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    onClick={() => setSelectedImage(img)}
                                    className="overflow-hidden rounded-[2xl] glass-card border border-[rgba(255,255,255,0.05)] cursor-zoom-in group break-inside-avoid relative hover:border-primary/40 transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                                >
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
                                        <img
                                            src={img.image_url}
                                            alt={img.caption || 'Clinic view'}
                                            className="w-full h-auto block transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 filter grayscale-[50%] group-hover:grayscale-0"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/20 to-transparent transition-opacity z-20 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center border border-[rgba(255,255,255,0.1)] text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 opacity-0 group-hover:opacity-100">
                                                <span className="material-symbols-outlined text-[32px] font-extralight">zoom_in</span>
                                            </div>
                                        </div>
                                    </div>
                                    {img.caption && (
                                        <div className="absolute bottom-0 left-0 right-0 p-5 z-20 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                            <p className="text-xs text-white font-semibold tracking-wider font-display uppercase">{img.caption}</p>
                                        </div>
                                    )}
                                </motion.div>
                            ))
                        )}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#121212]/95 backdrop-blur-2xl p-4 md:p-10"
                    >
                        <motion.button
                            className="absolute top-8 right-8 h-12 w-12 flex items-center justify-center rounded-2xl glass-card text-white hover:text-primary transition-colors border border-[rgba(255,255,255,0.1)] hover:border-primary/50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <span className="material-symbols-outlined text-[28px] font-extralight">close</span>
                        </motion.button>
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.image_url}
                                alt={selectedImage.caption || "Clinic View"}
                                className="w-full h-auto rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-[rgba(255,255,255,0.05)] max-h-[80vh] object-contain mx-auto"
                            />
                            {selectedImage.caption && (
                                <div className="absolute -bottom-16 left-0 right-0 text-center">
                                    <p className="text-sm tracking-[0.2em] font-light uppercase text-[#a8b4cc] font-display">{selectedImage.caption}</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
