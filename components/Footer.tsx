import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative bg-[#0d0d0d] pt-20 pb-10 text-white border-t border-[rgba(255,255,255,0.05)] overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />

            <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
                {/* Pre-Footer CTA Section */}
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[rgba(26,54,93,0.3)] border border-[rgba(255,255,255,0.1)] mb-20 p-10 sm:p-16 text-center flex flex-col items-center justify-center backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                    <div className="absolute inset-0 bg-noise" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/80 to-transparent" />
                    
                    <div className="relative z-10">
                        <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[rgba(197,160,89,0.2)] bg-[rgba(197,160,89,0.1)] text-[#C5A059] text-[10px] font-bold tracking-[0.2em] uppercase shadow-[0_0_15px_rgba(197,160,89,0.15)]">
                            Begin Your Journey
                        </span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display text-white mb-6 tracking-tight">
                            Ready to Transform <br className="hidden sm:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d6e3ff] to-secondary">Your Smile?</span>
                        </h2>
                        <p className="text-[#b3c1d9] font-light max-w-lg mx-auto mb-10 tracking-wide text-sm sm:text-base leading-relaxed">
                            Join thousands of patients who trust Madhav Dental for precision care, cutting-edge technology, and absolutely painless procedures.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-secondary to-[#38debb] px-8 py-4 text-sm font-bold tracking-wider text-[#051525] shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_35px_rgba(100,255,218,0.5)] transition-all"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                <span className="material-symbols-outlined text-[20px]">event</span>
                                Book Consultation
                            </a>
                            <a
                                href="tel:+918872300851"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.05)] backdrop-blur-md px-8 py-4 text-sm font-semibold tracking-wider text-white hover:bg-[rgba(255,255,255,0.1)] hover:border-secondary/50 transition-all"
                            >
                                <span className="material-symbols-outlined text-[18px] font-extralight text-secondary">call</span>
                                Call Now
                            </a>
                        </div>
                    </div>
                </div>

                {/* Four-column grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Column 1: Logo + Tagline */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-1.5">
                            <span className="text-2xl font-extrabold font-display text-primary tracking-tight">Madhav</span>
                            <span className="text-2xl font-extrabold font-display text-white tracking-tight">Dental</span>
                        </Link>
                        <p className="text-sm font-light text-[#8c92ac] leading-relaxed max-w-xs">
                            Multi-Specialty Dental & Maxillofacial Clinic. Precision engineering meets clinical excellence in Nikol, Ahmedabad.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3 mt-4">
                            {[
                                { href: "https://www.instagram.com", label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                                { href: "https://www.google.com", label: "Google", icon: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" },
                                { href: "https://www.linkedin.com", label: "LinkedIn", icon: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                            ].map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] text-[#8c92ac] hover:text-primary hover:border-primary/50 transition-all backdrop-blur-md"
                                    aria-label={social.label}
                                >
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d={social.icon} /></svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c92ac]">Services</h4>
                        <ul className="flex flex-col gap-3 text-sm font-light text-[#8c92ac]">
                            {["Dental Implants", "Smile Design", "Orthodontics", "Root Canal", "Pediatric Care", "Teeth Whitening"].map((service) => (
                                <li key={service}>
                                    <Link className="hover:text-[#eaeaea] transition-colors" href="/treatments">{service}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c92ac]">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-sm font-light text-[#8c92ac]">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "/about" },
                                { name: "Treatments", href: "/treatments" },
                                { name: "Gallery", href: "/gallery" },
                                { name: "Contact", href: "/contact" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link className="hover:text-[#eaeaea] transition-colors" href={link.href}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#8c92ac]">Contact</h4>
                        <div className="flex flex-col gap-4 text-sm font-light text-[#8c92ac]">
                            <div className="flex gap-3 items-start">
                                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5 font-extralight">location_on</span>
                                <p>T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad, Gujarat</p>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined text-primary text-[18px] font-extralight">call</span>
                                <a href="tel:+918872300851" className="hover:text-[#eaeaea] transition-colors">+91 88723 00851</a>
                            </div>
                            <div className="flex gap-3 items-center">
                                <span className="material-symbols-outlined text-primary text-[18px] font-extralight">schedule</span>
                                <p>Mon-Sat: 9:30 AM – 9:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[rgba(255,255,255,0.05)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-semibold text-[#8c92ac] tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} Madhav Dental. All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <span className="w-1 h-1 rounded-full bg-[#8c92ac]/30" />
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
