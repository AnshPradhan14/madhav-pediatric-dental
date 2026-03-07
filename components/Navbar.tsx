"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Treatments", href: "/treatments" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined font-light">dentistry</span>
                        </div>
                        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 flex flex-col leading-none">
                            <span className="text-primary font-black">Madhav</span>
                            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-[0.2em]">Pediatric Dental</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden items-center gap-8 lg:flex">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-sm font-bold transition-all hover:text-primary group ${pathname === link.href ? 'text-primary' : 'text-slate-600'}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
                        <Link href="/contact" className="rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-white shadow-xl shadow-primary/25 hover:scale-105 transition-transform active:scale-95">
                            Book Now
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900 border border-slate-200 active:scale-95 transition-all"
                    >
                        <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-slate-900/60 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-10">
                        <span className="text-lg font-black text-primary">Menu</span>
                        <button onClick={() => setIsOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-900">
                            <span className="material-symbols-outlined text-xl">close</span>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-2">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center justify-between p-4 rounded-xl text-lg font-bold transition-all ${pathname === link.href ? 'bg-primary/5 text-primary' : 'text-slate-600 hover:bg-slate-50'}`}
                            >
                                {link.name}
                                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-auto">
                        <Link href="/contact" className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary p-4 text-lg font-bold text-white shadow-xl shadow-primary/25">
                            <span className="material-symbols-outlined">calendar_today</span>
                            Book Appointment
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
