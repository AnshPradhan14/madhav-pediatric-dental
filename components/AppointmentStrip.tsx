"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppointmentStrip() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<"Morning" | "Evening" | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show strip after scrolling down a bit (past the hero)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBook = () => {
    const timeText = selectedSlot ? ` in the ${selectedSlot}` : "";
    const message = encodeURIComponent(`Hello, I'd like to request a dental consultation${timeText}.`);
    window.open(`https://wa.me/918872300851?text=${message}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] w-[95%] max-w-2xl"
        >
          <div className="glass-card rounded-[2rem] border border-[rgba(255,255,255,0.1)] bg-[#0d1726]/90 p-3 sm:p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            
            <div className="flex items-center gap-3 w-full sm:w-auto px-2">
              <div className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              </div>
              <div className="flex-1 sm:flex-none">
                <p className="text-[10px] uppercase tracking-widest text-[#8c92ac] font-bold mb-1">Quick Booking</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedSlot("Morning")}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${selectedSlot === "Morning" ? 'bg-secondary/10 border-secondary/30 text-secondary' : 'bg-white/5 border-transparent text-[#8c92ac] hover:bg-white/10'}`}
                  >
                    Morning
                  </button>
                  <button 
                    onClick={() => setSelectedSlot("Evening")}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all border ${selectedSlot === "Evening" ? 'bg-secondary/10 border-secondary/30 text-secondary' : 'bg-white/5 border-transparent text-[#8c92ac] hover:bg-white/10'}`}
                  >
                    Evening
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={handleBook}
              className="w-full sm:w-auto relative overflow-hidden group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-secondary to-[#38debb] px-6 py-3 text-sm font-bold tracking-wider text-[#051525] shadow-[0_0_15px_rgba(100,255,218,0.2)] hover:shadow-[0_0_25px_rgba(100,255,218,0.5)] transition-all active:scale-95"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 fill-current"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.7 17.7 68.9 27.1 106.1 27.1h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
              Request Slot
            </button>
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
