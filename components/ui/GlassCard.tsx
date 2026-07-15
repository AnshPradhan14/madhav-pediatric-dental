"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({ children, className = "", hover = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-[2rem] backdrop-blur-xl bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] ${hover ? "hover:bg-[rgba(18,18,18,0.8)] hover:border-primary/50 transition-all duration-500" : ""} ${className}`}
      whileHover={hover ? { scale: 1.02 } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  );
}
