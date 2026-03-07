"use client";

import { useEffect, useState } from "react";
import { getMessages, deleteMessage, ContactMessage } from "@/lib/api";

export default function MessagesAdmin() {
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");

    const load = () => getMessages().then(setMessages).catch(() => setError("Backend unavailable.")).finally(() => setLoading(false));
    useEffect(() => { load(); }, []);

    const filteredMessages = messages.filter(m =>
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.message.toLowerCase().includes(search.toLowerCase()) ||
        (m.email && m.email.toLowerCase().includes(search.toLowerCase())) ||
        (m.phone && m.phone.toLowerCase().includes(search.toLowerCase()))
    );

    const handleDelete = async (id: number) => {
        if (!confirm("Delete this message?")) return;
        await deleteMessage(id);
        load();
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-black text-slate-900">Messages</h1>
                    <p className="text-slate-500 text-sm">Contact form submissions from website visitors</p>
                </div>
                <div className="relative">
                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">search</span>
                    <input
                        type="text"
                        placeholder="Search messages..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:ring-2 focus:ring-primary w-full md:w-64"
                    />
                </div>
            </div>

            {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</div>}

            <div className="space-y-4">
                {loading ? <p className="text-slate-400 text-sm">Loading...</p> :
                    filteredMessages.length === 0 ? <p className="text-slate-400 text-sm italic">No messages found.</p> :
                        filteredMessages.map(m => (
                            <div key={m.id} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-1">
                                        <p className="font-bold text-slate-900">{m.name}</p>
                                        <span className="text-xs text-slate-400">{new Date(m.created_at).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex gap-4 text-xs text-slate-400 mb-3">
                                        {m.email && <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">mail</span>{m.email}</span>}
                                        {m.phone && <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">call</span>{m.phone}</span>}
                                    </div>
                                    <p className="text-sm text-slate-700 leading-relaxed">{m.message}</p>
                                </div>
                                <button onClick={() => handleDelete(m.id)} className="shrink-0 rounded-lg bg-red-100 px-3 py-1.5 text-xs font-bold text-red-600 hover:bg-red-200 h-fit">Delete</button>
                            </div>
                        ))
                }
            </div>
        </div>
    );
}
