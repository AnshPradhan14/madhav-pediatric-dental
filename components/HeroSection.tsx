import Link from 'next/link';

export default function HeroSection() {
    return (
        <section className="mx-auto max-w-7xl px-6 py-12 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                        <span className="material-symbols-outlined text-sm">verified</span>
                        Top Rated Dental Care in Nikol
                    </div>
                    <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Expert Pediatric Dentistry &amp; Dental Implant Care in Ahmedabad
                    </h1>
                    <p className="max-w-xl text-lg leading-relaxed text-slate-600">
                        Specialized dental treatments for children and adults by experienced MDS doctors. We provide compassionate care with cutting-edge technology.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/contact" className="flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-xl shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95">
                            <span className="material-symbols-outlined">calendar_month</span>
                            Book Appointment
                        </Link>
                        <a href="tel:+918872300851" className="flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-primary/20 bg-transparent px-8 text-base font-bold text-primary hover:bg-primary/5 transition-all active:scale-95">
                            <span className="material-symbols-outlined text-xl">call</span>
                            Call Now
                        </a>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex -space-x-3">
                            <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-200"></div>
                            <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-300"></div>
                            <div className="h-8 w-8 rounded-full border-2 border-white bg-slate-400"></div>
                        </div>
                        <span>Trusted by 2,000+ Happy Families</span>
                    </div>
                </div>
                <div className="relative">
                    <div className="aspect-square overflow-hidden rounded-3xl bg-primary/5 p-4 shadow-2xl">
                        <div className="h-full w-full rounded-2xl bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxkEQTJR4Tf4FrE0BY23evi2XHEjJGs4vUkepSQWxPTBsD3cPCCCWQh_odnIaHW5HNZsaFr2tEsszjurXm65zjd1fb8P_gj1YE2Dkj1EDc2aU6YJYkBKELBxgmnfvzSZPx_iqdfNCrR2QJ5AkLyBFavm57_wk2qmgVX80B2_Qnggg2Rhl9jIj5gMbwailpy3CtmpPayq6bEV6aO1cPguynNzvknikqno1_B5_PDWZJNQ-V_BIkHQUbuvp8qFSzzjTFxa-eFXFt0ws')" }}></div>
                    </div>
                    {/* Stats Floating Card */}
                    <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-xl lg:block hidden">
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-green-100 p-3 text-green-600">
                                <span className="material-symbols-outlined">check_circle</span>
                            </div>
                            <div>
                                <p className="text-2xl font-black text-slate-900">15+</p>
                                <p className="text-xs font-bold text-slate-500 uppercase">Years Experience</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
