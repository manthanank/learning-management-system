import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://learning-management-system-lac-rho.vercel.app"),
  title: "SYNAPSE Academy | Staff Engineering Masterclasses",
  description:
    "Industrial masterclasses in Next.js 15, distributed systems in Rust, production AI RAG agents, and cloud Kubernetes. Simulated Mux 4K streaming and cryptographic certification.",
  keywords: ["lms", "masterclass", "nextjs", "rust", "kubernetes", "ai", "mux", "prisma"],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "SYNAPSE Academy | Staff Engineering",
    description: "Production architectural masterclasses with Mux 4K streaming and verifiable certifications.",
    type: "website",
    url: "https://learning-management-system-lac-rho.vercel.app",
    siteName: "SYNAPSE Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "SYNAPSE Academy | Staff Engineering Masterclasses",
    description: "Next.js 15 App Router, distributed Rust, AI RAG agents, and cryptographic certifications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "SYNAPSE Academy",
    url: "https://learning-management-system-lac-rho.vercel.app",
    description: "Staff engineering masterclasses in Next.js 15, distributed Rust, and AI agents.",
    offers: {
      "@type": "Offer",
      price: "189",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Manthan Ank",
      url: "https://github.com/manthanank",
    },
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
