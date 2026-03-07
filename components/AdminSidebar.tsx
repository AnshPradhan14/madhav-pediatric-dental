"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const navItems = [
    { href: "/admin", label: "Dashboard", icon: "dashboard" },
    { href: "/admin/doctors", label: "Doctors", icon: "stethoscope" },
    { href: "/admin/treatments", label: "Treatments", icon: "dentistry" },
    { href: "/admin/gallery", label: "Gallery", icon: "photo_library" },
    { href: "/admin/appointments", label: "Appointments", icon: "calendar_month" },
    { href: "/admin/messages", label: "Messages", icon: "mail" },
    { href: "/admin/settings", label: "Settings", icon: "settings" },
];

export default function AdminSidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("admin_token");
        router.push("/admin/login");
    };

    return (
        <aside className="flex h-screen w-64 flex-col bg-slate-900 text-white shrink-0 sticky top-0">
            {/* Logo */}
            <div className="flex items-center gap-3 border-b border-slate-700 px-6 py-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                    <span className="material-symbols-outlined text-xl">dentistry</span>
                </div>
                <div className="leading-tight">
                    <p className="text-sm font-extrabold">Madhav Dental</p>
                    <p className="text-xs text-slate-400">Admin Panel</p>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${isActive ? "bg-primary text-white" : "text-slate-400 hover:bg-slate-800 hover:text-white"}`}
                        >
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-700 px-4 py-4 space-y-2">
                <Link href="/" target="_blank" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-slate-800 hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-xl">open_in_new</span>
                    View Website
                </Link>
                <button onClick={handleLogout} className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-red-500/20 hover:text-red-400 transition-colors">
                    <span className="material-symbols-outlined text-xl">logout</span>
                    Logout
                </button>
            </div>
        </aside>
    );
}
