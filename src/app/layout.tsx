import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Valstark Security | Engineering Excellence",
  description: "High-fidelity security solutions and premium safes designed with technical precision. Engineered for those who demand uncompromising Stark and Strong values.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
