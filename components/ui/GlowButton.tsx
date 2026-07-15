"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: string;
  className?: string;
  external?: boolean;
}

export default function GlowButton({ href, children, icon, className = "", external = false }: GlowButtonProps) {
  const baseClasses = `relative overflow-hidden group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-[#6b7bff] px-8 py-4 text-sm font-semibold tracking-wider text-white shadow-[0_0_20px_rgba(77,97,252,0.3)] hover:shadow-[0_0_40px_rgba(77,97,252,0.5)] transition-all ${className}`;

  const inner = (
    <>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
      {icon && <span className="material-symbols-outlined text-[18px] font-extralight">{icon}</span>}
      {children}
    </>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      <motion.span
        className="flex items-center gap-3"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        {inner}
      </motion.span>
    </Link>
  );
}
