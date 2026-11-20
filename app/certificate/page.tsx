"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  CheckCircle2,
  Printer,
  Share2,
  Download,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export default function CertificatePage() {
  const [studentName, setStudentName] = useState("Alex Mercer");
  const credentialId = "SYN-849201-CERT";
  const verificationHash = "7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069";
  const issueDate = "November 20, 2026";

  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
              <Link href="/courses" className="hover:text-white transition">Academy</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-white font-medium">Verified Credential</span>
            </div>
            <h1 className="text-2xl font-extrabold text-white">Cryptographic Certificate</h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              <span>Print Certificate</span>
            </button>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition shadow-md shadow-indigo-600/20"
            >
              <Share2 className="w-4 h-4" />
              <span>Add to LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Certificate Card Printable Container */}
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-indigo-500/40 relative shadow-2xl overflow-hidden text-center">
          {/* Subtle Guilloche / Watermark Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(99,102,241,0.08),rgba(0,0,0,0))]" />

          <div className="relative z-10 space-y-6">
            {/* Header Badge */}
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
            </div>

            <p className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              SYNAPSE ACADEMY OF ADVANCED COMPUTING
            </p>

            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-wide">
              Certificate of Architectural Mastery
            </h2>

            <p className="text-xs text-slate-400 max-w-md mx-auto">
              This credential certifies that the candidate has successfully completed all masterclass requirements, submitted passing architectural code implementations, and passed the Staff Examination.
            </p>

            {/* Recipient Name */}
            <div className="py-4">
              <p className="text-xs text-slate-500 uppercase tracking-widest font-mono">Awarded To</p>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-300 mt-2">
                {studentName}
              </h3>
            </div>

            {/* Course Title */}
            <div className="py-2 border-y border-slate-800/80 max-w-xl mx-auto">
              <p className="text-xs text-slate-500 font-mono uppercase tracking-wider">For Specialized Competency In</p>
              <p className="text-lg font-bold text-white mt-1">
                Staff Frontend Architecture: Next.js 15 & React 19
              </p>
              <p className="text-xs text-slate-400 mt-1">
                18 Continuing Professional Education (CPE) Credits • Verified Grade: 96%
              </p>
            </div>

            {/* Signatures & Seal */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end text-xs text-slate-400">
              <div>
                <p className="font-serif italic text-base text-white">Marcus Vance</p>
                <div className="w-24 h-0.5 bg-slate-700 mx-auto my-1" />
                <p className="text-[11px] text-slate-500">Lead Curriculum Architect</p>
              </div>

              <div>
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-cyan-500/40 mx-auto flex items-center justify-center text-cyan-400 font-mono text-[9px] uppercase font-bold tracking-tighter">
                  VERIFIED SEAL
                </div>
                <p className="text-[10px] text-slate-500 mt-2 font-mono">{issueDate}</p>
              </div>

              <div>
                <p className="font-serif italic text-base text-white">Elena Rostova, Ph.D.</p>
                <div className="w-24 h-0.5 bg-slate-700 mx-auto my-1" />
                <p className="text-[11px] text-slate-500">Academic Review Board</p>
              </div>
            </div>

            {/* Cryptographic Hash Verification Box */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 text-left bg-slate-950/80 p-4 rounded-2xl border border-slate-800 font-mono text-[11px] text-slate-400 space-y-1.5">
              <div className="flex justify-between">
                <span>Credential Reference ID:</span>
                <span className="text-white font-bold">{credentialId}</span>
              </div>
              <div className="flex justify-between items-center gap-4">
                <span>SHA-256 Digest:</span>
                <span className="text-cyan-400 text-[10px] truncate">{verificationHash}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
