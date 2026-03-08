import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/PublicShell";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Madhav Pediatric Dental Care | Best Pediatric Dentist in Nikol, Ahmedabad",
  description: "Expert pediatric dental care and dental implants in Nikol, Ahmedabad. Led by experienced MDS specialists, we provide compassionate and advanced dental treatments for children and adults.",
  keywords: ["pediatric dentist Nikol", "dental clinic Ahmedabad", "dental implants Nikol", "child dentist Ahmedabad", "Madhav Dental Care", "MDS dentists Ahmedabad"],
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
