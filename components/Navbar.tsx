"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isFloating, setIsFloating] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const lastScrollY = useRef(0);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    }, [isOpen]);

    // Scroll behavior: hide on down, float-in on up, full-width at top
    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

            // Progress bar
            if (totalHeight > 0) setScrollProgress((currentY / totalHeight) * 100);

            // At the very top — show full-width sticky bar
            if (currentY < 60) {
                setIsVisible(true);
                setIsFloating(false);
                lastScrollY.current = currentY;
                return;
            }

            // Scrolling DOWN — hide the bar
            if (currentY > lastScrollY.current + 5) {
                setIsVisible(false);
                setIsFloating(true);
            }
            // Scrolling UP — float it back in as a pill/card
            else if (currentY < lastScrollY.current - 5) {
                setIsVisible(true);
                setIsFloating(true);
            }

            lastScrollY.current = currentY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Treatments", href: "/treatments" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <AnimatePresence>
                {isVisible && (
                    <motion.header
                        key="navbar"
                        initial={isFloating ? { y: -80, opacity: 0 } : false}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -80, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className={`z-50 w-full ${
                            isFloating
                                // Floating state: fixed, pill-shaped, not full-width
                                ? 'fixed top-3 left-1/2 -translate-x-1/2 px-4 w-auto max-w-[95vw]'
                                // Sticky state: full width at top of page
                                : 'sticky top-0 border-b border-[rgba(255,255,255,0.05)]'
                        }`}
                    >
                        <div className={`transition-all duration-500 ${
                            isFloating
                                ? 'rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(13,23,38,0.85)] backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5),0_0_0_0.5px_rgba(255,255,255,0.05)] px-4 py-2.5'
                                : 'bg-[rgba(13,23,38,0.7)] backdrop-blur-xl px-6 py-4'
                        }`}>
                            <div className={`flex items-center justify-between gap-6 ${isFloating ? 'max-w-5xl mx-auto' : 'mx-auto max-w-7xl'}`}>
                                {/* Logo */}
                                <Link href="/" className="flex items-center gap-2 group shrink-0">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-secondary to-[#38debb] text-[#051525] shadow-[0_0_15px_rgba(100,255,218,0.3)] group-hover:shadow-[0_0_25px_rgba(100,255,218,0.5)] transition-all">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current"><path d="M186.1 76.4A80 80 0 0 0 115 165l22.6 124.2L67.1 364.5A78.8 78.8 0 0 0 48 411.3V464c0 26.5 21.5 48 48 48h22.7c19 0 35.8-11.4 43.1-29.1L224 336l62.2 146.9c7.3 17.7 24.1 29.1 43.1 29.1H352c26.5 0 48-21.5 48-48v-52.7c0-17.5-5.5-34.6-15.6-48.8L313.9 288.7l22.8-124a80 80 0 0 0 -71-94.6l-20.9-2.3c-28.7-3.2-56.1-3.2-84.8 0l-20.9 2.3A80 80 0 0 0 186.1 76.4zM245.5 125l12.8 1.4A48 48 0 0 1 301 183.2L283 281.3l57 74c4 5.3 6 11.6 6 18V464c0 8.8-7.2 16-16 16h-22.7c-4 0-7.8-2.4-9.3-6L219 283.6c-5-11.8-22-11.8-27 0L113.1 474c-1.6 3.7-5.3 6-9.3 6H81c-8.8 0-16-7.2-16-16v-52.7c0-6.4 2-12.7 6-18l57-74-18-98.1a48 48 0 0 1 42.6-56.8l12.8-1.4c25.4-2.8 51.5-2.8 77 0zM128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64z"/></svg>
                                    </div>
                                    <div className="flex gap-1.5">
                                        <span className="text-xl font-extrabold font-display text-white tracking-tight group-hover:text-secondary transition-colors">Madhav</span>
                                        <span className={`text-xl font-extrabold font-display tracking-tight ${isFloating ? 'hidden sm:inline text-[#8c92ac]' : 'text-[#8c92ac]'}`}>Dental</span>
                                    </div>
                                </Link>

                                {/* Desktop Nav */}
                                <nav className="hidden items-center gap-6 lg:flex">
                                    {links.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            className={`relative text-[13px] font-medium tracking-wider transition-all hover:text-[#eaeaea] group ${pathname === link.href ? 'text-[#eaeaea]' : 'text-[#8c92ac]'}`}
                                        >
                                            {link.name}
                                            <span className={`absolute -bottom-1 left-0 h-[2px] bg-secondary transition-all duration-300 shadow-[0_0_8px_rgba(100,255,218,0.6)] ${pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                                        </Link>
                                    ))}
                                    <Link
                                        href="/contact"
                                        className="ml-2 rounded-full bg-gradient-to-r from-secondary to-[#38debb] px-5 py-2 text-[12px] font-bold tracking-wider text-[#051525] shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:shadow-[0_0_25px_rgba(100,255,218,0.5)] transition-all active:scale-95 whitespace-nowrap"
                                    >
                                        Book Now
                                    </Link>
                                </nav>

                                {/* Mobile Toggle */}
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="lg:hidden h-9 w-9 flex items-center justify-center rounded-xl bg-white/5 text-white border border-[rgba(255,255,255,0.1)] active:scale-95 transition-all focus:outline-none"
                                    aria-label="Toggle navigation menu"
                                >
                                    <span className="material-symbols-outlined text-[20px]">{isOpen ? 'close' : 'menu'}</span>
                                </button>
                            </div>
                        </div>

                        {/* Scroll Progress Bar — only on non-floating state */}
                        {!isFloating && (
                            <div
                                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-secondary to-[#38debb] shadow-[0_0_10px_rgba(100,255,218,0.5)] transition-all duration-150 ease-out"
                                style={{ width: `${scrollProgress}%` }}
                            />
                        )}
                    </motion.header>
                )}
            </AnimatePresence>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-[#121212]/80 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div className={`fixed inset-y-0 right-0 z-50 w-full max-w-sm border-l border-[rgba(255,255,255,0.05)] bg-[#121212]/95 backdrop-blur-3xl transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] lg:hidden transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full p-8">
                    <div className="flex items-center justify-between mb-12">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#8c92ac]">Navigation</span>
                        <button onClick={() => setIsOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-xl bg-white/5 text-white border border-[rgba(255,255,255,0.1)] active:scale-95 transition-all" aria-label="Close menu">
                            <span className="material-symbols-outlined text-xl font-extralight">close</span>
                        </button>
                    </div>
                    <nav className="flex flex-col gap-4">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center justify-between p-4 rounded-xl text-lg font-display font-semibold transition-all ${pathname === link.href ? 'bg-secondary/10 text-white border border-secondary/30' : 'text-[#8c92ac] hover:bg-white/5 hover:text-white'}`}
                            >
                                {link.name}
                                <span className={`material-symbols-outlined text-[18px] font-extralight ${pathname === link.href ? 'text-secondary' : 'text-[#8c92ac]/50'}`}>north_east</span>
                            </Link>
                        ))}
                    </nav>
                    <div className="mt-auto">
                        <Link href="/contact" className="group relative overflow-hidden flex w-full items-center justify-between rounded-xl bg-gradient-to-r from-secondary to-[#38debb] p-5 text-sm font-bold tracking-wider text-[#051525] shadow-[0_0_25px_rgba(100,255,218,0.3)]">
                            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                            Book Consultation
                            <span className="material-symbols-outlined text-[20px]">event</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
