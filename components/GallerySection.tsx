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
        <section id="gallery" className="bg-background-light py-24">
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-extrabold sm:text-4xl">Clinic Gallery</h2>
                    <p className="mt-4 text-slate-600">Take a virtual tour of our state-of-the-art facility.</p>
                </motion.div>

                {loading ? (
                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <Skeleton key={i} className="mb-4 w-full h-64 rounded-2xl" />
                        ))}
                    </div>
                ) : (
                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                        {images.length === 0 ? (
                            <p className="text-center col-span-full text-slate-400 py-10">No images added yet.</p>
                        ) : (
                            images.map((img) => (
                                <motion.div
                                    key={img.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -5 }}
                                    onClick={() => setSelectedImage(img)}
                                    className="mb-4 overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 cursor-zoom-in group"
                                >
                                    <div className="relative">
                                        <img
                                            src={img.image_url}
                                            alt={img.caption || 'Gallery Image'}
                                            className="w-full h-auto block transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                            <span className="material-symbols-outlined text-white text-4xl drop-shadow-lg">zoom_in</span>
                                        </div>
                                    </div>
                                    {img.caption && (
                                        <div className="p-4 text-sm text-slate-600 font-medium bg-white">
                                            {img.caption}
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
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 p-4 md:p-10"
                    >
                        <motion.button
                            className="absolute top-6 right-6 text-white hover:rotate-90 transition-transform"
                            onClick={() => setSelectedImage(null)}
                        >
                            <span className="material-symbols-outlined text-4xl">close</span>
                        </motion.button>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage.image_url}
                                alt={selectedImage.caption || "Gallery Preview"}
                                className="w-full h-auto rounded-xl shadow-2xl max-h-[80vh] object-contain mx-auto"
                            />
                            {selectedImage.caption && (
                                <div className="mt-4 text-center text-white">
                                    <p className="text-lg font-bold">{selectedImage.caption}</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
