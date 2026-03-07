import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Gallery | Madhav Pediatric Dental Care",
    description: "View our state-of-the-art clinic and happy smiles from our patients.",
};

export default function GalleryPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="mx-auto max-w-[1280px] px-6 py-12 md:py-20">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-black tracking-tight md:text-5xl lg:text-6xl text-slate-900">
                        Our Clinic <span className="text-primary">Gallery</span>
                    </h1>
                    <p className="mt-6 text-lg text-slate-600">
                        Take a virtual tour of our child-friendly environment. We've designed every corner of our clinic to make dental visits fun, comfortable, and stress-free for your little ones.
                    </p>
                </div>

                {/* Category Tabs */}
                <div className="mt-12 overflow-x-auto pb-4">
                    <div className="flex min-w-max border-b border-slate-200">
                        <button className="flex items-center gap-2 border-b-2 border-primary px-6 py-4 text-sm font-bold text-primary">
                            <span className="material-symbols-outlined text-sm">grid_view</span>
                            All Photos
                        </button>
                        <button className="flex items-center gap-2 border-b-2 border-transparent px-6 py-4 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined text-sm">chair</span>
                            Clinic Interior
                        </button>
                        <button className="flex items-center gap-2 border-b-2 border-transparent px-6 py-4 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined text-sm">medical_services</span>
                            Treatment Room
                        </button>
                        <button className="flex items-center gap-2 border-b-2 border-transparent px-6 py-4 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined text-sm">biotech</span>
                            Dental Equipment
                        </button>
                        <button className="flex items-center gap-2 border-b-2 border-transparent px-6 py-4 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors">
                            <span className="material-symbols-outlined text-sm">sentiment_very_satisfied</span>
                            Patient Smiles
                        </button>
                    </div>
                </div>

                {/* Gallery Grid */}
                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Modern colorful pediatric dental reception area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoDByN1bSyUrPr-FeB532oOHXrSHAXcMLXdzRUITip29T1w82GhqAF1k9BFDmZP0jjbXVJmpZEjLt68qBihPZdTIinEc9-2d4nMhrZAhuV1M00FPDtFHULW5inxCGprf6gCutIIvbSYxSQv0NeaVx0WZuMsQ74P3Gksv08ZmrsuIVDLe7pLxR0QuMafhMU8AWPVALCCO99VGV-yfdOpGEan_4W_w2Ob5sO0yI9cOKV0543p1llOhBW0ifpwV5-45ZlQrKSS52C-t0" />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Interior</span>
                            <h3 className="mt-1 text-lg font-bold text-white">Welcoming Reception</h3>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Child friendly dental chair with cartoons" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmTvu2dgpVdDPRsW3TP6qQBQkKYOHl9GCqgcuhc5tPwYABWC_WrRs4Y2JPkI68sOXL3OZQH2oqcKy2JJVzQoSH36jyUeD34_ofG5N16w-Wr5rmIRSWHQ73MNohtu32dIfG_5RnI1xOpsZHMCDAyrCkce9BAhxTHjuoqANhJOdvNG1PyQ0vFypuylV4IEbuqoyGvl0XN0TKf-ahrDse959cmCZrJ_mlTwsH6jl97LZytF2l0pDmN9fb2WeIeoxrpfNbkRIDF8wTRoU" />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Treatment Room</span>
                            <h3 className="mt-1 text-lg font-bold text-white">The Adventure Chair</h3>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Advanced digital dental imaging equipment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJf1vmIFTVJAZ4-4PT31M6BhrPJM9GzVcrBANXEcNo6ZNO-KeRkq-lX7nwENdsKRkbr6GIXttD_97hQ5duTxxfhhCRyx-37Cx63ZZyak598DKRXxDdXjS1yAtv-v4J7BHE7KB3_M8-aV6OnEtOr5JXpnJ6B9bXW0tJvfVbF8dYB_RvO4kEjP_wxEBbW6aHKyVhH4rUmAL-hy4PTChbSeKlZTP3slCNT6_Fu__Ua6_2MS5fI483o6h2Ie9D4pJKn3IdcvInFstGIb0" />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Equipment</span>
                            <h3 className="mt-1 text-lg font-bold text-white">Low-Radiation Digital X-Ray</h3>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Happy child smiling after dental checkup" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB33RQwcM8Gnn3UJKxwaO509gZJNb7xAi9_jIOUwJhQklhQVDouT4XlD-J4g-4ZVoIpwxg4HPd70sN1IFdDrhNanttqvRJB1PfGT0pZV6K9GRYoB4A1OJcEz9W3HoZ5FYvigue1h8MYHHaRz_UTMLidseFpG2QuixJD8IqPVixV_UqSHm8OyhZ7EFUQa4t95z1MxWexxPmlV3M82mFgPsOdYPgkDntzxYcvHFZ7tVHeo3eOjxCyEcSSHgRZfkkSiuOWv1_Mat7SQEw" />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Patient Smiles</span>
                            <h3 className="mt-1 text-lg font-bold text-white">Post-Checkup Joy</h3>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Kids play area with books and toys" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdlqhH6gKKU44LP80cEYzH2XneLEZW3Y_t8rAAiNA48rp6cK_nz1PARMUrzsgVNI0VvdzeJwKGE3eaEOKj5R1wCHPD8QrxUxzXTuyCRtk1M6rsejKF8HZKGT4EImlcM1umSevXXQ7AzQFvE6oTCdpoiq_3qCnyryU1FTn-MvhEOEnNjoEwJKSbgnmuw_BE4hRs_DSfISUi6w_Siu7CRCAZP1h2ec7h4RI65jjcSfuUFpxwgF8lr0KYOBybMFBr6k6q3yLewwflsw4" />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Interior</span>
                            <h3 className="mt-1 text-lg font-bold text-white">Kids Play Zone</h3>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Modern dental sterilization station" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnH49z_HIpCV_heD-SWWFsuU3x-ZE_pzHnnZxH5xgrcePoeAw2-OL-YWX3RhMFKUcRLNgYp6dA_B7WD4pBetLp91S2kyOsxdt5RL5eNXPHtRhilNLAi0QLcHGA-7mCSa1SsJBlYO0Hv8vzwpQNRkTsoZHswxW3Vf79bpRiLXsecrmihOFqlMBLGpE_NseLUYcCSgdt9ohSHWwWelFzDHa2zZPXnBgVcHPys8ZLa_5LnXFHb4nnZrkY_td8TxN4_wKogRjSW0Hl9ms" />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Equipment</span>
                            <h3 className="mt-1 text-lg font-bold text-white">Sterilization Lab</h3>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Pediatric dentist talking with a child" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1HIP9KE4zqPvB2mSporBYJUU8WhHqVetgUM7_OtFumPzG99R7cGx4SFSyHGVP57OVh3pPLiwqyKShBlfzsaG863LQoN3A1s3SgPQgjInXmUAoHxVb11-pbu9kkafHvkZ0hq26e4ptWn_9ybHl0MH5yNQF3kFHDRetCACnVJdGmyjSMr-v7blxuh8v837dDagQUUu3Cyi8o0iqEJwc5XSCCIENMFlCMBBcMP-6tJNjAW-zoHWdUczo71Kc_eIGcPPJyXRFNuDny6A" />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Treatment Room</span>
                            <h3 className="mt-1 text-lg font-bold text-white">Consultation Area</h3>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-xl bg-slate-200 aspect-[4/5]">
                        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Happy sibling patients showing healthy teeth" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrf-q_BYxtLaKuQP5ZbFts4bUTrycXWAS-lRIcZm_xtq558HtNGENRzjgm1V0SfinZJl7aiLssK7MF546yIPSHAypdFnFrFoeYjMqgr9oDPUGQIRnLNQQK_kaLCB6eiRaXciLHVlv6FKh-vFkyElDi9K6rUWH7d49VUS5ZS7J6vMmzmDeh1ILGn0ddyvc9agxYysbw4vfTMeF-GNwPts17WU_0UupkG0No6hdhMAhFuLbK8lzg6RWURZYneLuXr9wY7RLSNuRnhGI" />
                        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs font-bold uppercase tracking-wider text-primary">Patient Smiles</span>
                            <h3 className="mt-1 text-lg font-bold text-white">The No-Cavity Club</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="bg-primary/10 py-16 md:py-24">
                <div className="mx-auto max-w-[1280px] px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Ready to give your child the best care?</h2>
                    <p className="mx-auto mt-4 max-w-xl text-slate-600">
                        Experience the difference of a dental practice built entirely around children. Schedule your visit today.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="flex h-12 w-full sm:w-auto items-center justify-center rounded-xl bg-primary px-8 text-base font-bold text-white transition-opacity hover:opacity-90">
                            Schedule Appointment
                        </button>
                        <button className="flex h-12 w-full sm:w-auto items-center justify-center rounded-xl border-2 border-primary/20 bg-transparent px-8 text-base font-bold text-primary transition-colors hover:bg-primary/5">
                            Our Services
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
