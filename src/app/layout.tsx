import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ahmad Kamal — Project Architect & Interior Designer",
  description:
    "Ahmad Kamal is a Project Architect and Interior Designer with 9 years of professional experience across Saudi Arabia, Turkey, Syria, and Jordan. Specializing in architectural design, 3D visualization, and project management.",
  keywords: [
    "architect",
    "interior design",
    "3D visualization",
    "Ahmad Kamal",
    "KANATRI",
    "project management",
    "AutoCAD",
    "Revit",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${inter.variable} ${spaceMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
