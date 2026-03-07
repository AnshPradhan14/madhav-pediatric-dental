"use client";

import { useEffect, useState } from "react";
import { getSettings, updateSettings, WebsiteSettings } from "@/lib/api";

const FIELDS: { key: keyof WebsiteSettings; label: string; placeholder: string }[] = [
    { key: "phone", label: "Phone Number", placeholder: "+91 88723 00851" },
    { key: "whatsapp", label: "WhatsApp Number (with country code)", placeholder: "918872300851" },
    { key: "address", label: "Clinic Address", placeholder: "T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad" },
    { key: "clinic_hours", label: "Clinic Hours", placeholder: "Monday to Saturday: 9:30 AM - 1:00 PM & 5:30 PM - 9:00 PM" },
    { key: "email", label: "Email Address", placeholder: "info@madhavdental.com" },
    { key: "facebook_url", label: "Facebook URL", placeholder: "https://facebook.com/..." },
    { key: "instagram_url", label: "Instagram URL", placeholder: "https://instagram.com/..." },
];

export default function SettingsAdmin() {
    const [settings, setSettings] = useState<WebsiteSettings>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => { getSettings().then(setSettings).catch(() => setError("Backend unavailable.")).finally(() => setLoading(false)); }, []);

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        setSuccess(false);
        setError("");
        try {
            await updateSettings(settings);
            setSuccess(true);
        } catch { setError("Failed to save settings."); }
        finally { setSaving(false); }
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-black text-slate-900">Website Settings</h1>
                <p className="text-slate-500 text-sm">Update global clinic information</p>
            </div>

            {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</div>}
            {success && <div className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-xl px-4 py-3 flex items-center gap-2"><span className="material-symbols-outlined text-sm">check_circle</span>Settings saved successfully!</div>}

            {loading ? <p className="text-slate-400 text-sm">Loading...</p> : (
                <form onSubmit={handleSave} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
                    <div className="grid gap-6 sm:grid-cols-2">
                        {FIELDS.map(({ key, label, placeholder }) => (
                            <div key={key}>
                                <label className="block text-sm font-bold text-slate-700 mb-1.5">{label}</label>
                                <input
                                    value={(settings[key] as string) ?? ""}
                                    onChange={e => setSettings({ ...settings, [key]: e.target.value })}
                                    placeholder={placeholder}
                                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="mt-8">
                        <button type="submit" disabled={saving} className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 disabled:opacity-60 transition-all">
                            <span className="material-symbols-outlined text-xl">save</span>
                            {saving ? "Saving..." : "Save Settings"}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}
