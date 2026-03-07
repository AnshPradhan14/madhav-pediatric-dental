"use client";

import { useEffect, useState } from "react";
import { getAppointments, getMessages, Appointment, ContactMessage } from "@/lib/api";

function StatCard({ label, value, icon, color }: { label: string; value: number | string; icon: string; color: string }) {
    return (
        <div className={`rounded-2xl bg-white p-6 shadow-sm border border-slate-100 flex items-center gap-5`}>
            <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${color}`}>
                <span className="material-symbols-outlined text-2xl text-white">{icon}</span>
            </div>
            <div>
                <p className="text-3xl font-black text-slate-900">{value}</p>
                <p className="text-sm text-slate-500 font-medium">{label}</p>
            </div>
        </div>
    );
}

const STATUS_COLOR: Record<string, string> = {
    Pending: "bg-yellow-100 text-yellow-700",
    Confirmed: "bg-blue-100 text-blue-700",
    Completed: "bg-green-100 text-green-700",
};

export default function AdminDashboard() {
    const [appointments, setAppointments] = useState<Appointment[]>([]);
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        Promise.all([getAppointments(), getMessages()])
            .then(([a, m]) => { setAppointments(a); setMessages(m); })
            .catch(() => setError("Failed to load data. Is the backend running?"))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="space-y-8">
            <div>
                <h1 className="text-2xl font-black text-slate-900">Dashboard</h1>
                <p className="text-slate-500 text-sm">Welcome back, Admin</p>
            </div>

            {error && <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-600">{error}</div>}

            {loading ? (
                <div className="text-slate-500 text-sm">Loading...</div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <StatCard label="Total Appointments" value={appointments.length} icon="calendar_month" color="bg-primary" />
                        <StatCard label="Pending Appointments" value={appointments.filter(a => a.status === "Pending").length} icon="hourglass_top" color="bg-yellow-500" />
                        <StatCard label="Total Messages" value={messages.length} icon="mail" color="bg-purple-500" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Recent Appointments */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
                            <h2 className="text-base font-bold mb-4">Recent Appointments</h2>
                            {appointments.length === 0 ? <p className="text-slate-400 text-sm">No appointments yet.</p> : (
                                <ul className="divide-y divide-slate-100">
                                    {appointments.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()).slice(0, 5).map(a => (
                                        <li key={a.id} className="flex items-center justify-between py-3">
                                            <div>
                                                <p className="text-sm font-semibold text-slate-900">{a.name}</p>
                                                <div className="flex flex-col text-[10px] text-slate-400">
                                                    <span>Booked: {new Date(a.created_at).toLocaleDateString()}</span>
                                                    <span className="text-primary font-bold">Appt: {a.preferred_date || "—"}</span>
                                                </div>
                                            </div>
                                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${STATUS_COLOR[a.status] ?? "bg-slate-100 text-slate-600"}`}>{a.status}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Recent Messages */}
                        <div className="bg-white rounded-2xl shadow-sm p-6 border border-slate-100">
                            <h2 className="text-base font-bold mb-4">Recent Messages</h2>
                            {messages.length === 0 ? <p className="text-slate-400 text-sm">No messages yet.</p> : (
                                <ul className="divide-y divide-slate-100">
                                    {messages.slice(0, 5).map(m => (
                                        <li key={m.id} className="py-3">
                                            <p className="text-sm font-semibold text-slate-900">{m.name}</p>
                                            <p className="text-xs text-slate-400 truncate">{m.message}</p>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
