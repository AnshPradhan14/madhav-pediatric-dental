"use client";

const items = [
  "CBCT 3D Imaging",
  "Painless Procedures",
  "15+ Years Experience",
  "BDS/MDS Specialists",
  "Digital X-Ray",
  "Same-Day Emergency",
  "Laser Dentistry",
  "CAD/CAM Crowns",
];

export default function MarqueeStrip() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative z-10 w-full overflow-hidden bg-[#0d1c32] border-y border-[rgba(100,255,218,0.12)] my-0">
      {/* Fade masks on left and right edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#0d1c32] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#0d1c32] to-transparent" />

      <div className="py-5 animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 text-xs font-bold uppercase tracking-[0.2em] text-[#b3c1d9]">
              {item}
            </span>
            <span className="text-secondary/40 text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
