"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface GhostButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: string;
  className?: string;
}

export default function GhostButton({ href, children, icon, className = "" }: GhostButtonProps) {
  return (
    <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
      <Link
        href={href}
        className={`inline-flex items-center justify-center gap-3 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.03)] backdrop-blur-md px-8 py-4 text-sm font-semibold tracking-wider text-[#eaeaea] hover:border-primary/50 hover:bg-primary/10 transition-all ${className}`}
      >
        {icon && <span className="material-symbols-outlined text-[18px] font-extralight">{icon}</span>}
        {children}
      </Link>
    </motion.div>
  );
}
