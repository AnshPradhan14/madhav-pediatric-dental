import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-slate-900 py-10 text-white border-t border-slate-800">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
                    <div className="flex flex-col gap-4 col-span-1 lg:col-span-2 max-w-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                                <span className="material-symbols-outlined text-xl">dentistry</span>
                            </div>
                            <span className="text-lg font-black tracking-tight">Madhav Dental Care</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            Providing professional pediatric and implant dentistry in Nikol, Ahmedabad. Specialized care with cutting-edge technology.
                        </p>
                        <div className="flex gap-4">
                            <a className="bg-white/5 h-8 w-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-primary hover:bg-white/10 transition-all" href="#">
                                <span className="material-symbols-outlined text-lg">public</span>
                            </a>
                            <a className="bg-white/5 h-8 w-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-primary hover:bg-white/10 transition-all" href="#">
                                <span className="material-symbols-outlined text-lg">share</span>
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500">Quick Links</h4>
                        <ul className="flex flex-col gap-2.5 text-xs font-bold text-slate-400">
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2 group" href="/"><span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>Home</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2 group" href="/about"><span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>About Us</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2 group" href="/treatments"><span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>Treatments</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2 group" href="/gallery"><span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>Gallery</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2 group" href="/contact"><span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>Contact Us</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-slate-500">Treatments</h4>
                        <ul className="flex flex-col gap-2.5 text-xs font-bold text-slate-400">
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2 group" href="/treatments"><span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>Pediatric Care</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2 group" href="/treatments"><span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>Dental Implants</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2 group" href="/treatments"><span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>Orthodontics</Link></li>
                            <li><Link className="hover:text-primary transition-colors flex items-center gap-2 group" href="/treatments"><span className="h-1 w-1 bg-slate-700 rounded-full group-hover:bg-primary transition-colors"></span>RCT Specialist</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t border-slate-800 pt-6 text-center text-[10px] font-bold text-slate-600">
                    <p>© 2024 Madhav Pediatric Dental Care. Specialized Pediatric & Implant Center in Nikol, Ahmedabad.</p>
                </div>
            </div>
        </footer>
    );
}
