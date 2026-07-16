"use client";

import { motion } from 'framer-motion';

export default function GalleryPage() {
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const galleryItems = [
        { 
            category: "Interior", 
            title: "Welcoming Reception", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoDByN1bSyUrPr-FeB532oOHXrSHAXcMLXdzRUITip29T1w82GhqAF1k9BFDmZP0jjbXVJmpZEjLt68qBihPZdTIinEc9-2d4nMhrZAhuV1M00FPDtFHULW5inxCGprf6gCutIIvbSYxSQv0NeaVx0WZuMsQ74P3Gksv08ZmrsuIVDLe7pLxR0QuMafhMU8AWPVALCCO99VGV-yfdOpGEan_4W_w2Ob5sO0yI9cOKV0543p1llOhBW0ifpwV5-45ZlQrKSS52C-t0" 
        },
        { 
            category: "Clinical Room", 
            title: "Advanced Op-Suite", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmTvu2dgpVdDPRsW3TP6qQBQkKYOHl9GCqgcuhc5tPwYABWC_WrRs4Y2JPkI68sOXL3OZQH2oqcKy2JJVzQoSH36jyUeD34_ofG5N16w-Wr5rmIRSWHQ73MNohtu32dIfG_5RnI1xOpsZHMCDAyrCkce9BAhxTHjuoqANhJOdvNG1PyQ0vFypuylV4IEbuqoyGvl0XN0TKf-ahrDse959cmCZrJ_mlTwsH6jl97LZytF2l0pDmN9fb2WeIeoxrpfNbkRIDF8wTRoU" 
        },
        { 
            category: "Equipment", 
            title: "Precision Diagnostics", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJf1vmIFTVJAZ4-4PT31M6BhrPJM9GzVcrBANXEcNo6ZNO-KeRkq-lX7nwENdsKRkbr6GIXttD_97hQ5duTxxfhhCRyx-37Cx63ZZyak598DKRXxDdXjS1yAtv-v4J7BHE7KB3_M8-aV6OnEtOr5JXpnJ6B9bXW0tJvfVbF8dYB_RvO4kEjP_wxEBbW6aHKyVhH4rUmAL-hy4PTChbSeKlZTP3slCNT6_Fu__Ua6_2MS5fI483o6h2Ie9D4pJKn3IdcvInFstGIb0" 
        },
        { 
            category: "Patient Experience", 
            title: "Elevated Care", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB33RQwcM8Gnn3UJKxwaO509gZJNb7xAi9_jIOUwJhQklhQVDouT4XlD-J4g-4ZVoIpwxg4HPd70sN1IFdDrhNanttqvRJB1PfGT0pZV6K9GRYoB4A1OJcEz9W3HoZ5FYvigue1h8MYHHaRz_UTMLidseFpG2QuixJD8IqPVixV_UqSHm8OyhZ7EFUQa4t95z1MxWexxPmlV3M82mFgPsOdYPgkDntzxYcvHFZ7tVHeo3eOjxCyEcSSHgRZfkkSiuOWv1_Mat7SQEw" 
        },
        { 
            category: "Interior", 
            title: "Lounge & Connection", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdlqhH6gKKU44LP80cEYzH2XneLEZW3Y_t8rAAiNA48rp6cK_nz1PARMUrzsgVNI0VvdzeJwKGE3eaEOKj5R1wCHPD8QrxUxzXTuyCRtk1M6rsejKF8HZKGT4EImlcM1umSevXXQ7AzQFvE6oTCdpoiq_3qCnyryU1FTn-MvhEOEnNjoEwJKSbgnmuw_BE4hRs_DSfISUi6w_Siu7CRCAZP1h2ec7h4RI65jjcSfuUFpxwgF8lr0KYOBybMFBr6k6q3yLewwflsw4" 
        },
        { 
            category: "Sterilization", 
            title: "Zero-Pathogen Protocol", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnH49z_HIpCV_heD-SWWFsuU3x-ZE_pzHnnZxH5xgrcePoeAw2-OL-YWX3RhMFKUcRLNgYp6dA_B7WD4pBetLp91S2kyOsxdt5RL5eNXPHtRhilNLAi0QLcHGA-7mCSa1SsJBlYO0Hv8vzwpQNRkTsoZHswxW3Vf79bpRiLXsecrmihOFqlMBLGpE_NseLUYcCSgdt9ohSHWwWelFzDHa2zZPXnBgVcHPys8ZLa_5LnXFHb4nnZrkY_td8TxN4_wKogRjSW0Hl9ms" 
        },
        { 
            category: "Consultation", 
            title: "Strategic Planning", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1HIP9KE4zqPvB2mSporBYJUU8WhHqVetgUM7_OtFumPzG99R7cGx4SFSyHGVP57OVh3pPLiwqyKShBlfzsaG863LQoN3A1s3SgPQgjInXmUAoHxVb11-pbu9kkafHvkZ0hq26e4ptWn_9ybHl0MH5yNQF3kFHDRetCACnVJdGmyjSMr-v7blxuh8v837dDagQUUu3Cyi8o0iqEJwc5XSCCIENMFlCMBBcMP-6tJNjAW-zoHWdUczo71Kc_eIGcPPJyXRFNuDny6A" 
        },
        { 
            category: "Patient Smiles", 
            title: "Clinical Success", 
            img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCrf-q_BYxtLaKuQP5ZbFts4bUTrycXWAS-lRIcZm_xtq558HtNGENRzjgm1V0SfinZJl7aiLssK7MF546yIPSHAypdFnFrFoeYjMqgr9oDPUGQIRnLNQQK_kaLCB6eiRaXciLHVlv6FKh-vFkyElDi9K6rUWH7d49VUS5ZS7J6vMmzmDeh1ILGn0ddyvc9agxYysbw4vfTMeF-GNwPts17WU_0UupkG0No6hdhMAhFuLbK8lzg6RWURZYneLuXr9wY7RLSNuRnhGI" 
        },
    ];

    return (
        <main className="bg-transparent text-[#eaeaea] min-h-screen pt-32 pb-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-primary/5 blur-[150px] pointer-events-none rounded-full" />
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="mb-16 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-secondary/10 backdrop-blur-xl border border-secondary/20 px-4 py-1.5 mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-secondary shadow-[0_0_20px_rgba(95,168,160,0.15)]">
                        <span className="material-symbols-outlined text-[12px]">visibility</span>
                        Visual Portfolio
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 font-display leading-tight">
                        Clinical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#a8b4cc]">Excellence</span> Revealed
                    </h1>
                    <p className="text-[#a8b4cc] text-lg font-light tracking-wide leading-relaxed max-w-2xl">
                        A cinematic perspective into our high-tech infrastructure and the precision-driven environment where dental transformations occur.
                    </p>
                </motion.div>

                {/* Gallery Filter (Simplified UI for Premium Feel) */}
                <div className="flex flex-wrap gap-4 mb-12">
                    {["All Archives", "Interior Design", "Clinical Suite", "Technology"].map((filter, i) => (
                        <button key={i} className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${i === 0 ? "bg-secondary text-[#051525] shadow-[0_0_20px_rgba(95,168,160,0.3)]" : "border border-white/10 bg-[#121212]/50 text-[#a8b4cc] hover:text-white hover:border-secondary/50"}`}>
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {galleryItems.map((item, i) => {
                        const isTeal = i % 2 === 0;
                        const glowColor = isTeal ? 'rgba(95,168,160,0.15)' : 'rgba(77,97,252,0.15)';
                        const borderColor = isTeal ? 'rgba(95,168,160,0.3)' : 'rgba(77,97,252,0.3)';
                        const textColor = isTeal ? 'text-secondary' : 'text-primary';
                        const badgeBg = isTeal ? 'bg-secondary/20' : 'bg-primary/20';
                        
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="group relative h-[450px] rounded-[2.5rem] overflow-hidden border border-white/8 cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-out transform-gpu shadow-lg hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                style={{ background: 'rgba(13,23,38,0.7)' }}
                            >
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="h-full w-full object-cover grayscale-[0.2] transition-all duration-700 ease-out transform-gpu group-hover:scale-110 group-hover:grayscale-0" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#051525] via-[#051525]/40 to-transparent transition-opacity duration-500 opacity-80 group-hover:opacity-90" />
                                
                                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className={`inline-block px-3 py-1 rounded-full ${badgeBg} border ${textColor} text-[8px] font-bold uppercase tracking-[0.2em] mb-3`} style={{ borderColor: borderColor }}>
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl font-bold text-white font-display group-hover:text-white transition-colors">{item.title}</h3>
                                    <p className="text-[#a8b4cc] text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest">
                                        Madhav Clinical Registry
                                    </p>
                                </div>

                                {/* Corner Accent */}
                                <div className={`absolute top-6 right-6 h-10 w-10 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0 border ${textColor}`}
                                     style={{ background: `linear-gradient(to bottom right, ${glowColor}, transparent)`, borderColor: borderColor, boxShadow: `0 0 15px ${glowColor}` }}>
                                    <span className="material-symbols-outlined font-light text-lg">fullscreen</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Elite Registry Section */}
                <motion.section 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 glass-card rounded-[3.5rem] p-12 md:p-20 border border-white/5 text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/20 blur-[120px] pointer-events-none rounded-full" />
                    
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 font-display leading-tight">
                            Experience the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary">Future of Clinical Care</span>
                        </h2>
                        <p className="text-[#a8b4cc] text-lg font-light leading-relaxed mb-12">
                            Join the elite circle of patients who prioritize biometric precision and high-aesthetic dental architecture.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-10 py-5 bg-primary text-white rounded-[2rem] text-xs font-bold uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(77,97,252,0.4)] hover:scale-105 transition-all active:scale-95">
                                Schedule Consultation
                            </button>
                            <button className="px-10 py-5 glass-card border border-white/10 text-white rounded-[2rem] text-xs font-bold uppercase tracking-[0.2em] hover:bg-white/5 transition-all">
                                Protocol Overview
                            </button>
                        </div>
                    </div>
                </motion.section>
            </div>
        </main>
    );
}

