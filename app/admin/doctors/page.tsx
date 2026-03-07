"use client";

import { useEffect, useState, useRef } from "react";
import { getDoctors, createDoctor, updateDoctor, deleteDoctor, Doctor, DoctorCreate, uploadImage } from "@/lib/api";

const emptyForm: DoctorCreate = { name: "", specialization: "", qualification: "", description: "", photo_url: "" };

export default function DoctorsAdmin() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editing, setEditing] = useState<Doctor | null>(null);
    const [form, setForm] = useState<DoctorCreate>(emptyForm);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const load = () => getDoctors().then(setDoctors).catch(() => setError("Failed to load. Is backend running?")).finally(() => setLoading(false));
    useEffect(() => { load(); }, []);

    const filteredDoctors = doctors.filter(d =>
        d.name.toLowerCase().includes(search.toLowerCase()) ||
        d.specialization.toLowerCase().includes(search.toLowerCase())
    );

    const openAdd = () => { setEditing(null); setForm(emptyForm); setShowModal(true); };
    const openEdit = (d: Doctor) => { setEditing(d); setForm({ name: d.name, specialization: d.specialization, qualification: d.qualification, description: d.description, photo_url: d.photo_url ?? "" }); setShowModal(true); };

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setSaving(true);
        try {
            const uploadedUrl = await uploadImage(file);
            setForm(prev => ({ ...prev, photo_url: uploadedUrl }));
        } catch (err) {
            setError("Image upload failed.");
        } finally {
            setSaving(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            if (editing) { await updateDoctor(editing.id, form); }
            else { await createDoctor(form); }
            setShowModal(false);
            if (fileInputRef.current) fileInputRef.current.value = "";
            load();
        } catch { setError("Save failed."); }
        finally { setSaving(false); }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Delete this doctor?")) return;
        await deleteDoctor(id);
        load();
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-900">Doctors</h1>
                    <p className="text-slate-500 text-sm">Manage clinic doctors and specialists</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                        <input
                            type="text"
                            placeholder="Search doctors..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                        />
                    </div>
                    <button onClick={openAdd} className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all whitespace-nowrap">
                        <span className="material-symbols-outlined text-xl">add</span> Add Doctor
                    </button>
                </div>
            </div>

            {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</div>}

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {loading ? <div className="p-8 text-slate-400 text-sm text-center">Loading...</div> : (
                    <table className="w-full text-sm">
                        <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-3 text-left">Doctor</th>
                                <th className="px-6 py-3 text-left">Specialization</th>
                                <th className="px-6 py-3 text-left">Qualification</th>
                                <th className="px-6 py-3 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filteredDoctors.length === 0 ? (
                                <tr><td colSpan={4} className="px-6 py-8 text-center text-slate-400">No doctors found.</td></tr>
                            ) : filteredDoctors.map(d => (
                                <tr key={d.id} className="hover:bg-slate-50">
                                    <td className="px-6 py-4 font-semibold text-slate-900">{d.name}</td>
                                    <td className="px-6 py-4 text-slate-600">{d.specialization}</td>
                                    <td className="px-6 py-4 text-slate-600">{d.qualification}</td>
                                    <td className="px-6 py-4 text-right">
                                        <button onClick={() => openEdit(d)} className="mr-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold hover:bg-slate-200 transition-colors">Edit</button>
                                        <button onClick={() => handleDelete(d.id)} className="rounded-lg bg-red-100 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-200 transition-colors">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto">
                    <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl my-8">
                        <h2 className="text-xl font-bold mb-6">{editing ? "Edit Doctor" : "Add Doctor"}</h2>
                        <div className="space-y-4">
                            {(["name", "specialization", "qualification"] as const).map(field => (
                                <div key={field}>
                                    <label className="block text-xs font-bold text-slate-600 mb-1 capitalize">{field.replace("_", " ")}</label>
                                    <input value={form[field] ?? ""} onChange={e => setForm({ ...form, [field]: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
                                </div>
                            ))}
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1">Upload Photo</label>
                                <input type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                            </div>
                            <div className="flex items-center gap-3 my-2">
                                <hr className="flex-1 border-slate-200" />
                                <span className="text-xs font-bold text-slate-400 uppercase">OR PHOTO URL</span>
                                <hr className="flex-1 border-slate-200" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1">Photo URL</label>
                                <input value={form.photo_url ?? ""} onChange={e => setForm({ ...form, photo_url: e.target.value })} placeholder="https://..." className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            {form.photo_url && <img src={form.photo_url} alt="Preview" className="h-20 w-20 object-cover rounded-xl border border-slate-200 mt-2" onError={e => (e.currentTarget.style.display = "none")} />}
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1">Description</label>
                                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={3} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary resize-none" />
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3 justify-end">
                            <button onClick={() => setShowModal(false)} className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-bold hover:bg-slate-50">Cancel</button>
                            <button onClick={handleSave} disabled={saving} className="rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60">{saving ? "Saving..." : "Save"}</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

