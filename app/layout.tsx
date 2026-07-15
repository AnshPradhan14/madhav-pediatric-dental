import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PublicShell from "@/components/PublicShell";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Madhav Dental & Maxillofacial | Premier Dental Clinic in Nikol, Ahmedabad",
  description: "Award-winning dental implants, maxillofacial surgery, and smile transformation in Nikol, Ahmedabad. Led by experienced MDS specialists with 15+ years of excellence.",
  keywords: ["dental clinic Ahmedabad", "dental implants Nikol", "maxillofacial surgery", "smile design", "best dentist Ahmedabad", "Madhav Dental", "MDS dentist"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${playfair.variable} ${inter.variable} antialiased font-sans bg-canvas text-sterling`}>
        <PublicShell>{children}</PublicShell>
      </body>
    </html>
  );
}
