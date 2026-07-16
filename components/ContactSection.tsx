"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";

function LiveStatusIndicator() {
  const [status, setStatus] = useState<{ isOpen: boolean; text: string } | null>(null);

  useEffect(() => {
    const updateStatus = () => {
      // Get current time in IST (Ahmedabad)
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { timeZone: 'Asia/Kolkata', hour: 'numeric', minute: 'numeric', hour12: false, weekday: 'short' };
      const formatter = new Intl.DateTimeFormat('en-US', options);
      const parts = formatter.formatToParts(now);
      
      const hourStr = parts.find(p => p.type === 'hour')?.value || '0';
      const minuteStr = parts.find(p => p.type === 'minute')?.value || '0';
      const day = parts.find(p => p.type === 'weekday')?.value || 'Sun';
      
      const hour = parseInt(hourStr, 10);
      const minute = parseInt(minuteStr, 10);
      const timeInMinutes = hour * 60 + minute;

      // Hours: Mon-Sat: 9:30 AM (570) – 1:00 PM (780) & 5:30 PM (1050) – 9:00 PM (1260)
      if (day === 'Sun') {
        setStatus({ isOpen: false, text: "Closed · Opens Mon 9:30 AM" });
        return;
      }

      if (timeInMinutes >= 570 && timeInMinutes < 780) {
        setStatus({ isOpen: true, text: "Open Now" });
      } else if (timeInMinutes >= 780 && timeInMinutes < 1050) {
        setStatus({ isOpen: false, text: "Closed · Opens at 5:30 PM" });
      } else if (timeInMinutes >= 1050 && timeInMinutes < 1260) {
        setStatus({ isOpen: true, text: "Open Now" });
      } else if (timeInMinutes < 570) {
        setStatus({ isOpen: false, text: "Closed · Opens at 9:30 AM" });
      } else {
        setStatus({ isOpen: false, text: "Closed · Opens tomorrow 9:30 AM" });
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000); // Check every minute
    return () => clearInterval(interval);
  }, []);

  if (!status) return null;

  return (
    <div className="flex items-center gap-1.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] px-2.5 py-0.5">
      <span className="relative flex h-2 w-2">
        {status.isOpen && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${status.isOpen ? 'bg-secondary' : 'bg-[#ef4444]'}`}></span>
      </span>
      <span className={`text-[9px] font-bold uppercase tracking-widest ${status.isOpen ? 'text-secondary' : 'text-[#a8b4cc]'}`}>
        {status.text}
      </span>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="py-28 relative z-10 w-full overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader
          badge="Visit The Clinic"
          badgeIcon="location_on"
          title="Find Us,"
          gradientText="Reach Us"
          subtitle="Located in the heart of Nikol, Ahmedabad, we are easily accessible for all your dental emergencies and routine check-ups."
        />

        {/* Full-width glass card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-[rgba(255,255,255,0.03)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)] shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left: Contact Details */}
            <div className="p-10 sm:p-14 flex flex-col justify-center gap-8">
              {[
                { icon: "location_on", title: "Address", detail: "T-11, 3rd Floor, Raspan Arcade, Nikol, Ahmedabad, Gujarat" },
                { icon: "call", title: "Phone", detail: "+91 88723 00851" },
                { icon: "schedule", title: "Clinical Hours", detail: "Mon-Sat: 9:30 AM – 1:00 PM & 5:30 PM – 9:00 PM", showLiveStatus: true },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[rgba(197,160,89,0.1)] border border-[rgba(197,160,89,0.2)] text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#051525] group-hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all duration-500">
                    <span className="material-symbols-outlined text-2xl font-light">{item.icon}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="text-sm font-bold text-white/90 uppercase tracking-widest">{item.title}</h4>
                      {item.showLiveStatus && <LiveStatusIndicator />}
                    </div>
                    <p className="text-sm text-[#a8b4cc] font-light leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/918872300851?text=Hello%2C%20I%20would%20like%20to%20book%20a%20dental%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-[1.02] transition-all mt-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 fill-white">
                  <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 68.9 27.1 106.1 27.1h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Right: Google Map */}
            <div className="relative min-h-[400px] lg:min-h-0">
              <iframe
                src="https://maps.google.com/maps?q=Raspan+Arcade,+Nikol,+Ahmedabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full opacity-70 hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute bottom-4 left-4 right-4 glass-card rounded-xl p-4 flex items-center justify-between border border-[rgba(255,255,255,0.1)] backdrop-blur-3xl bg-[#121212]/80 z-10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">location_on</span>
                  <div>
                    <p className="text-white font-bold text-sm font-display">Nikol, Ahmedabad</p>
                    <p className="text-[#a8b4cc] text-[10px] uppercase tracking-widest mt-0.5">Gujarat, India</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=Madhav+Pediatric+Dental+Care+Nikol+Ahmedabad"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 items-center justify-center gap-2 rounded-lg bg-white/5 px-4 text-xs font-semibold text-white hover:bg-primary hover:text-white transition-all"
                >
                  Navigate
                  <span className="material-symbols-outlined text-[16px]">navigation</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
