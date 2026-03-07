"use client";

import { useEffect, useState } from "react";
import { getAppointments, updateAppointmentStatus, deleteAppointment, Appointment } from "@/lib/api";

const STATUS_OPTIONS = ["All", "Pending", "Confirmed", "Completed"];
const STATUS_COLOR: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-700",
    Confirmed: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
};

export default function AppointmentsAdmin() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [statusFilter, setStatusFilter] = useState("All");
    const [sortBy, setSortBy] = useState("latest"); // latest, appointment_date

    const load = () => getAppointments().then(setAppointments).catch(() => setError("Backend unavailable.")).finally(() => setLoading(false));
    useEffect(() => { load(); }, []);

    const handleStatusChange = async (id: number, status: string) => {
        await updateAppointmentStatus(id, status);
        load();
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Delete this appointment?")) return;
        await deleteAppointment(id);
        load();
    };

    const formatDate = (dateString?: string) => {
        if (!dateString) return "—";
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("en-IN", { day: '2-digit', month: 'short', year: 'numeric' });
        } catch { return dateString; }
    };

    const filteredAndSorted = appointments
        .filter(a => statusFilter === "All" || a.status === statusFilter)
        .sort((a, b) => {
            if (sortBy === "latest") {
                return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
            } else {
                const dateA = a.preferred_date ? new Date(a.preferred_date).getTime() : 0;
                const dateB = b.preferred_date ? new Date(b.preferred_date).getTime() : 0;
                return dateB - dateA;
            }
        });

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-900">Appointments</h1>
                    <p className="text-slate-500 text-sm">View and manage appointment requests from patients</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">Status:</span>
                        <select
                            value={statusFilter}
                            onChange={e => setStatusFilter(e.target.value)}
                            className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold focus:ring-2 focus:ring-primary outline-none"
                        >
                            {STATUS_OPTIONS.map(s => <option key={s}>{s}</option>)}
                        </select>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 uppercase">Sort:</span>
                        <select
                            value={sortBy}
                            onChange={e => setSortBy(e.target.value)}
                            className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold focus:ring-2 focus:ring-primary outline-none"
                        >
                            <option value="latest">Recently Booked</option>
                            <option value="appointment_date">Appointment Date</option>
                        </select>
                    </div>
                </div>
            </div>

            {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</div>}

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {loading ? <div className="p-8 text-slate-400 text-sm text-center">Loading...</div> : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm min-w-[900px]">
                            <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-4 text-left">Patient</th>
                                    <th className="px-6 py-4 text-left">Contact</th>
                                    <th className="px-6 py-4 text-left">Treatment</th>
                                    <th className="px-6 py-4 text-left">Dates</th>
                                    <th className="px-6 py-4 text-left">Status</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {filteredAndSorted.length === 0 ? (
                                    <tr><td colSpan={6} className="px-6 py-8 text-center text-slate-400">No appointments found.</td></tr>
                                ) : filteredAndSorted.map(a => (
                                    <tr key={a.id} className="hover:bg-slate-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-slate-900">{a.name}</p>
                                            {a.message && <p className="text-xs text-slate-500 italic mt-1 line-clamp-2">{a.message}</p>}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            <div className="flex items-center gap-1.5">
                                                <span className="material-symbols-outlined text-xs">call</span>
                                                <span>{a.phone}</span>
                                            </div>
                                            {a.email && (
                                                <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                                                    <span className="material-symbols-outlined text-[10px]">mail</span>
                                                    <span>{a.email}</span>
                                                </div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-block bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg font-medium text-xs">
                                                {a.treatment || "General"}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">
                                            <div className="space-y-1">
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">Booked On</span>
                                                    <span className="font-bold text-slate-800">{formatDate(a.created_at as any)}</span>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] font-black text-primary/60 uppercase tracking-tighter">Appt. For</span>
                                                    <span className="font-bold text-primary">{formatDate(a.preferred_date)}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <select
                                                value={a.status}
                                                onChange={e => handleStatusChange(a.id, e.target.value)}
                                                className={`rounded-full px-3 py-1.5 text-[10px] uppercase tracking-widest font-black shadow-sm outline-none cursor-pointer transition-all ${STATUS_COLOR[a.status] ?? "bg-slate-100 text-slate-600"}`}
                                            >
                                                {STATUS_OPTIONS.filter(s => s !== "All").map(s => <option key={s}>{s}</option>)}
                                            </select>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button onClick={() => handleDelete(a.id)} className="rounded-lg bg-red-50 px-3 py-2 text-xs font-bold text-red-500 hover:bg-red-500 hover:text-white transition-all shadow-sm">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
