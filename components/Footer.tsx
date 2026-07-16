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
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#EAEAEA] to-[#B8D4D1]">Your Smile?</span>
                        </h2>
                        <p className="text-[#b3c1d9] font-light max-w-lg mx-auto mb-10 tracking-wide text-sm sm:text-base leading-relaxed">
                            Join thousands of patients who trust Madhav Dental for precision care, cutting-edge technology, and absolutely painless procedures.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a
                                href="/contact"
                                className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2 rounded-full bg-[#F4F1EA] px-8 py-4 text-sm font-bold tracking-wider text-[#1A1D23] shadow-[0_4px_12px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.4)] transition-all"
                            >
                                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                                <span className="material-symbols-outlined text-[20px]">event</span>
                                Book Consultation
                            </a>
                            <a
                                href="tel:+918872300851"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-secondary bg-transparent backdrop-blur-md px-8 py-4 text-sm font-semibold tracking-wider text-[#F4F1EA] hover:bg-secondary/10 hover:border-secondary/70 transition-all"
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
                        <p className="text-sm font-light text-[#a8b4cc] leading-relaxed max-w-xs">
                            Multi-Specialty Dental & Maxillofacial Clinic. Precision engineering meets clinical excellence in Nikol, Ahmedabad.
                        </p>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8b4cc]">Services</h4>
                        <ul className="flex flex-col gap-3 text-sm font-light text-[#a8b4cc]">
                            {["Dental Implants", "Smile Design", "Orthodontics", "Root Canal", "Pediatric Care", "Teeth Whitening"].map((service) => (
                                <li key={service}>
                                    <Link className="hover:text-[#eaeaea] transition-colors" href="/treatments">{service}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div>
                        <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8b4cc]">Quick Links</h4>
                        <ul className="flex flex-col gap-3 text-sm font-light text-[#a8b4cc]">
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
                        <h4 className="mb-6 text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8b4cc]">Contact</h4>
                        <div className="flex flex-col gap-4 text-sm font-light text-[#a8b4cc]">
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
                                <p>Mon-Sat: 9:30 AM – 1:00 PM<br/>& 5:30 PM – 9:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-[rgba(255,255,255,0.05)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] font-semibold text-[#a8b4cc] tracking-widest uppercase">
                    <p>© {new Date().getFullYear()} Madhav Dental. All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
                        <span className="w-1 h-1 rounded-full bg-[#a8b4cc]/30" />
                        <Link href="/terms" className="hover:text-secondary transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
