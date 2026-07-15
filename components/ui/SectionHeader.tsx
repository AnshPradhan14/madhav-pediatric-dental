"use client";

import { motion } from "framer-motion";
import Badge from "./Badge";

interface SectionHeaderProps {
  badge: string;
  badgeIcon?: string;
  title: string;
  gradientText: string;
  subtitle?: string;
  center?: boolean;
  theme?: "dark" | "light";
}

export default function SectionHeader({ badge, badgeIcon, title, gradientText, subtitle, center = true, theme = "dark" }: SectionHeaderProps) {
  const isLight = theme === "light";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
      className={`mb-16 ${center ? "text-center" : ""}`}
    >
      <Badge icon={badgeIcon} className="mb-4" theme={theme}>{badge}</Badge>
      <h2 className={`mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl font-display ${isLight ? "text-[#111827]" : "text-white"}`}>
        {title}{" "}
        <span className={`text-transparent bg-clip-text ${isLight ? "bg-gradient-to-r from-[#1a365d] to-[#1a365d]" : "bg-gradient-to-r from-[#d6e3ff] to-secondary"}`}>
          {gradientText}
        </span>
      </h2>
      {subtitle && (
        <p className={`text-lg font-light tracking-wide leading-relaxed ${isLight ? "text-[#4b5563]" : "text-[#86a0cd]"} ${center ? "mx-auto max-w-2xl" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
