"use client";

import { useEffect, useState } from 'react';
import { getGallery, GalleryImage } from '@/lib/api';

export default function GallerySection() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getGallery()
            .then(setImages)
            .catch(err => console.error("Failed to load gallery:", err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <section className="bg-background-light py-20">
            <div className="mx-auto max-w-7xl px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-extrabold sm:text-4xl">Clinic Gallery</h2>
                    <p className="mt-4 text-slate-600">Take a virtual tour of our state-of-the-art facility.</p>
                </div>

                {loading ? (
                    <div className="text-center text-slate-400">Loading gallery...</div>
                ) : (
                    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                        {images.length === 0 ? (
                            <p className="text-center col-span-full text-slate-400">No images added yet.</p>
                        ) : (
                            images.map((img) => (
                                <div key={img.id} className="mb-4 overflow-hidden rounded-xl bg-slate-100 group">
                                    <div
                                        className="w-full aspect-auto min-h-[200px] bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                        style={{ backgroundImage: `url("${img.image_url}")` }}
                                    >
                                        <img
                                            src={img.image_url}
                                            alt={img.caption || 'Gallery Image'}
                                            className="opacity-0 w-full h-auto block"
                                        />
                                    </div>
                                    {img.caption && (
                                        <div className="p-2 text-xs text-slate-500 bg-white italic border-t border-slate-50">
                                            {img.caption}
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
