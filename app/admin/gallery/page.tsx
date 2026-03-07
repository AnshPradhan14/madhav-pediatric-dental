"use client";

import { useEffect, useState, useRef } from "react";
import { getGallery, addGalleryImage, deleteGalleryImage, GalleryImage, uploadImage } from "@/lib/api";

export default function GalleryAdmin() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [url, setUrl] = useState("");
    const [caption, setCaption] = useState("");
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const load = () => getGallery().then(setImages).catch(() => setError("Backend unavailable.")).finally(() => setLoading(false));
    useEffect(() => { load(); }, []);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setSaving(true);
        try {
            const uploadedUrl = await uploadImage(file);
            setUrl(uploadedUrl);
        } catch (err) {
            setError("Image upload failed.");
        } finally {
            setSaving(false);
        }
    };

    const handleAdd = async () => {
        if (!url.trim()) return;
        setSaving(true);
        try {
            await addGalleryImage({ image_url: url, caption });
            setUrl(""); setCaption(""); setShowModal(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
            load();
        } catch { setError("Failed to add image."); }
        finally { setSaving(false); }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Delete this image?")) return;
        await deleteGalleryImage(id);
        load();
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-black text-slate-900">Gallery</h1>
                    <p className="text-slate-500 text-sm">Manage clinic images</p>
                </div>
                <button onClick={() => setShowModal(true)} className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90">
                    <span className="material-symbols-outlined text-xl">add_photo_alternate</span> Add Image
                </button>
            </div>

            {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</div>}

            {loading ? <div className="text-slate-400 text-sm">Loading...</div> : (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {images.length === 0 ? <p className="col-span-4 text-slate-400 text-sm">No images yet.</p> : images.map(img => (
                        <div key={img.id} className="group relative overflow-hidden rounded-xl bg-slate-100 aspect-square">
                            <img src={img.image_url} alt={img.caption ?? "Gallery"} className="h-full w-full object-cover" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                                {img.caption && <p className="text-xs text-white text-center px-2">{img.caption}</p>}
                                <button onClick={() => handleDelete(img.id)} className="rounded-lg bg-red-500 px-4 py-1.5 text-xs font-bold text-white hover:bg-red-600">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
                        <h2 className="text-xl font-bold mb-6">Add Gallery Image</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1">Upload Photo</label>
                                <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                            </div>
                            <div className="flex items-center gap-3 my-4">
                                <hr className="flex-1 border-slate-200" />
                                <span className="text-xs font-bold text-slate-400 uppercase">OR URL</span>
                                <hr className="flex-1 border-slate-200" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1">Image URL</label>
                                <input value={url} onChange={e => setUrl(e.target.value)} placeholder="https://example.com/image.jpg" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1">Caption (optional)</label>
                                <input value={caption} onChange={e => setCaption(e.target.value)} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            {url && <img src={url} alt="Preview" className="rounded-xl h-32 w-full object-cover border border-slate-200" onError={e => (e.currentTarget.style.display = "none")} />}
                        </div>
                        <div className="mt-6 flex gap-3 justify-end">
                            <button onClick={() => { setShowModal(false); setUrl(''); setCaption(''); }} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-bold hover:bg-slate-50">Cancel</button>
                            <button onClick={handleAdd} disabled={saving} className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60">{saving ? "Please wait..." : "Add Image"}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

