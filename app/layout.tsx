import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/PublicShell";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhav Pediatric Dental Care",
  description: "Pediatric dentist clinic in Ahmedabad specializing in children's dental care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${manrope.variable} antialiased font-display bg-background-light text-slate-900`}>
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  );
}
