import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "SYNAPSE Academy | Staff Engineering Masterclasses",
  description:
    "Industrial masterclasses in Next.js 15, distributed systems in Rust, production AI RAG agents, and cloud Kubernetes. Simulated Mux 4K streaming and cryptographic certification.",
  keywords: ["lms", "masterclass", "nextjs", "rust", "kubernetes", "ai", "mux", "prisma"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
