import React from "react";
import Link from "next/link";
import { GraduationCap, Award, ShieldCheck, Video } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <GraduationCap className="w-4 h-4" />
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              SYNAPSE<span className="text-cyan-400 font-mono">.edu</span>
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-4">
            Industrial-grade software engineering masterclasses. Staff frontend architecture, high-throughput distributed systems in Rust, and production AI engineering with verifiable cryptographic certificates.
          </p>
          <div className="text-xs text-slate-500 font-mono">
            Part of the 10 Full-Stack Applications Portfolio Suite
          </div>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Curriculum</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/courses" className="hover:text-indigo-400 transition">Frontend Architecture</Link></li>
            <li><Link href="/courses" className="hover:text-indigo-400 transition">Distributed Rust</Link></li>
            <li><Link href="/courses" className="hover:text-indigo-400 transition">Production AI RAG</Link></li>
            <li><Link href="/courses" className="hover:text-indigo-400 transition">Cloud Kubernetes</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Classroom</h4>
          <ul className="space-y-2 text-xs">
            <li><Link href="/learn/course-1" className="hover:text-indigo-400 transition">Interactive Player</Link></li>
            <li><Link href="/quiz/quiz-1" className="hover:text-indigo-400 transition">Knowledge Quiz</Link></li>
            <li><Link href="/certificate" className="hover:text-indigo-400 transition">Verify Credential</Link></li>
            <li><Link href="/analytics" className="hover:text-indigo-400 transition">Study Telemetry</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">Accreditation</h4>
          <ul className="space-y-2 text-xs text-slate-400">
            <li>SHA-256 Verifiable Hash</li>
            <li>Mux 4K Adaptive Bitrate</li>
            <li>Prisma PostgreSQL ORM</li>
            <li>Vercel Edge Analytics</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800/80 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <div>© 2026 SYNAPSE Academy. Engineered by Manthan Ankolekar.</div>
        <div className="flex items-center gap-4">
          <Link href="/privacy" className="hover:text-slate-400 transition">Privacy</Link>
          <Link href="/terms" className="hover:text-slate-400 transition">Terms</Link>
          <Link href="/sitemap.xml" className="hover:text-slate-400 transition">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
}
