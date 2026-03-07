export default function ContactSection() {
    return (
        <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        <div>
                            <h2 className="text-3xl font-extrabold sm:text-4xl">Find Us in Nikol</h2>
                            <p className="mt-4 text-slate-600 leading-relaxed">
                                Located in the heart of Nikol, Ahmedabad, we are easily accessible for all your dental emergencies and routine check-ups.
                            </p>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">location_on</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">Address</h4>
                                    <p className="text-slate-600">T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad, Gujarat</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">call</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">Phone</h4>
                                    <p className="text-slate-600">+91 88723 00851</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">schedule</span>
                                </div>
                                <div>
                                    <h4 className="font-bold">Hours</h4>
                                    <p className="text-slate-600">Monday to Saturday: 9:30 AM - 1:00 PM & 5:30 PM - 9:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Madhav+Pediatric+Dental+Care+Nikol+Ahmedabad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="overflow-hidden rounded-3xl bg-slate-100 shadow-lg relative group cursor-pointer block"
                    >
                        <div className="h-[400px] w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAhwOcveqNDW92NxcfsJWOQQRRYXUvT43wnaDjzU_y1W3_ts8l9bHbb93DD2ULVEGnm4lPKL8SUfiwI5TIpsEq4LMlIJ-KYaIJUqJMs4GKLJNvRixvvHay25vYP2Sntxpgz8FAhAlo7hit8OGwzHf9Ogj7SVVk48J1uCbz-pHCRtqF6TIwce1NZzV8_ZfTOJjss9QIZYsMe31YCvB3BrNAtRiq62kmgLXNUDM-X_ugOfrmHz4qRYh34i4vy8Gi8Sa19g3oioIAbiM')" }}></div>
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                            <div className="bg-white text-primary px-6 py-3 rounded-xl font-bold shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 flex items-center gap-2">
                                <span className="material-symbols-outlined">directions</span>
                                Get Directions
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
