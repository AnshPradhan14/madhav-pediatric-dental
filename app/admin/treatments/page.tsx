"use client";

import { useEffect, useState } from "react";
import { getTreatments, createTreatment, updateTreatment, deleteTreatment, Treatment, TreatmentCreate } from "@/lib/api";

const emptyForm: TreatmentCreate = { title: "", description: "", icon: "dentistry" };

export default function TreatmentsAdmin() {
    const [treatments, setTreatments] = useState<Treatment[]>([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [editing, setEditing] = useState<Treatment | null>(null);
    const [form, setForm] = useState<TreatmentCreate>(emptyForm);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    const load = () => getTreatments().then(setTreatments).catch(() => setError("Backend unavailable.")).finally(() => setLoading(false));
    useEffect(() => { load(); }, []);

    const filteredTreatments = treatments.filter(t =>
        t.title.toLowerCase().includes(search.toLowerCase()) ||
        t.description.toLowerCase().includes(search.toLowerCase())
    );

    const openAdd = () => { setEditing(null); setForm(emptyForm); setShowModal(true); };
    const openEdit = (t: Treatment) => { setEditing(t); setForm({ title: t.title, description: t.description, icon: t.icon }); setShowModal(true); };

    const handleSave = async () => {
        setSaving(true);
        try {
            if (editing) { await updateTreatment(editing.id, form); }
            else { await createTreatment(form); }
            setShowModal(false);
            load();
        } catch { setError("Save failed."); }
        finally { setSaving(false); }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Delete this treatment?")) return;
        await deleteTreatment(id);
        load();
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-900">Treatments</h1>
                    <p className="text-slate-500 text-sm">Manage dental services offered at the clinic</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                        <input
                            type="text"
                            placeholder="Search treatments..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                        />
                    </div>
                    <button onClick={openAdd} className="flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all whitespace-nowrap">
                        <span className="material-symbols-outlined text-xl">add</span> Add Treatment
                    </button>
                </div>
            </div>

            {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</div>}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {loading ? <div className="col-span-3 text-slate-400 text-sm">Loading...</div> : (
                    filteredTreatments.length === 0 ? <div className="col-span-3 text-slate-400 text-sm italic">No treatments found.</div> :
                        filteredTreatments.map(t => (
                            <div key={t.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">{t.icon ?? "dentistry"}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-900">{t.title}</h3>
                                </div>
                                <p className="text-xs text-slate-500 leading-relaxed flex-1">{t.description}</p>
                                <div className="flex gap-2">
                                    <button onClick={() => openEdit(t)} className="flex-1 rounded-lg bg-slate-100 py-1.5 text-xs font-bold hover:bg-slate-200">Edit</button>
                                    <button onClick={() => handleDelete(t.id)} className="flex-1 rounded-lg bg-red-100 py-1.5 text-xs font-bold text-red-600 hover:bg-red-200">Delete</button>
                                </div>
                            </div>
                        ))
                )}
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                    <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
                        <h2 className="text-xl font-bold mb-6">{editing ? "Edit Treatment" : "Add Treatment"}</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1">Title</label>
                                <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1">Icon (Material Symbol name)</label>
                                <input value={form.icon ?? ""} onChange={e => setForm({ ...form, icon: e.target.value })} placeholder="e.g. dentistry, child_care, vaccines" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-600 mb-1">Description</label>
                                <textarea value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} rows={4} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary resize-none" />
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
