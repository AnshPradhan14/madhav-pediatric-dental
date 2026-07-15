interface BadgeProps {
  icon?: string;
  children: React.ReactNode;
  className?: string;
  theme?: "dark" | "light";
}

export default function Badge({ icon, children, className = "", theme = "dark" }: BadgeProps) {
  const isLight = theme === "light";
  
  return (
    <div className={`inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em]
      ${isLight 
        ? "bg-white border border-[#e5e7eb] text-[#1a365d] shadow-[0_4px_12px_rgba(0,0,0,0.05)]" 
        : "bg-[rgba(26,54,93,0.4)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] text-[#d6e3ff] shadow-[0_0_20px_rgba(0,0,0,0.3)]"} 
      ${className}`}>
      {icon && <span className="material-symbols-outlined text-[12px]">{icon}</span>}
      {children}
    </div>
  );
}
