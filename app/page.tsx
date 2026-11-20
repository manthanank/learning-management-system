"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COURSES } from "@/lib/data";
import {
  GraduationCap,
  PlayCircle,
  Star,
  CheckCircle2,
  Sliders,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Video,
  Clock,
  BookOpen,
  Users,
} from "lucide-react";

export default function HomePage() {
  const [currentSalary, setCurrentSalary] = useState<number>(135);
  const [studyHoursPerWeek, setStudyHoursPerWeek] = useState<number>(8);
  const [targetTrack, setTargetTrack] = useState<"frontend" | "backend" | "ai" | "cloud">("frontend");

  // Track multipliers
  const trackMultipliers = {
    frontend: { bump: 38, weeks: 10, title: "Staff Frontend Architect" },
    backend: { bump: 46, weeks: 14, title: "Principal Distributed Systems Lead" },
    ai: { bump: 54, weeks: 12, title: "Senior AI / RAG Engineer" },
    cloud: { bump: 42, weeks: 11, title: "Principal Cloud Platform Architect" },
  };

  const currentTrackData = trackMultipliers[targetTrack];
  const projectedSalary = currentSalary + currentTrackData.bump;
  const estimatedWeeks = Math.max(4, Math.round((currentTrackData.weeks * 8) / studyHoursPerWeek));
  const estimatedROI = Math.round((currentTrackData.bump * 1000) / 199);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-slate-800 bg-gradient-to-b from-slate-900/60 via-slate-950 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Next-Gen Staff Engineering Academy</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-none">
              Transform From Senior to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-violet-300">
                Staff & Principal Architect.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Industrial-grade masterclasses taught by architects from Vercel, Databricks, and Anthropic. Full Next.js 15 App Router internals, distributed Rust engines, production RAG agents, and verifiable cryptographic certificates.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/courses"
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group"
              >
                <span>Browse All Masterclasses</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#career-calculator"
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-xl font-semibold text-sm transition flex items-center justify-center gap-2"
              >
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>Career ROI Calculator</span>
              </a>
            </div>

            {/* Metrics Bar */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-white font-mono">14,200+</p>
                <p className="text-xs text-slate-500 mt-1">Enrolled Alumni Engineers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400 font-mono">4.96 / 5.0</p>
                <p className="text-xs text-slate-500 mt-1 flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>Verified Student Reviews</span>
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-400 font-mono">+$46,000</p>
                <p className="text-xs text-slate-500 mt-1">Average Graduate Salary Uplift</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-violet-400 font-mono">100%</p>
                <p className="text-xs text-slate-500 mt-1">Verifiable SHA-256 Credentials</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Career Salary ROI & Completion Calculator */}
      <section id="career-calculator" className="py-16 md:py-24 border-b border-slate-800 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Career Trajectory Forecaster
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Calculate Your Masterclass Career ROI
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Model your target compensation jump and graduation timeline based on your weekly study commitment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Target Engineering Specialty
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {(
                    [
                      { id: "frontend", label: "Staff Frontend", bump: "+$38k/yr" },
                      { id: "backend", label: "Distributed Rust", bump: "+$46k/yr" },
                      { id: "ai", label: "AI RAG Architect", bump: "+$54k/yr" },
                      { id: "cloud", label: "Cloud Kubernetes", bump: "+$42k/yr" },
                    ] as const
                  ).map((trk) => (
                    <button
                      key={trk.id}
                      onClick={() => setTargetTrack(trk.id)}
                      className={`p-3 rounded-xl border text-left transition ${
                        targetTrack === trk.id
                          ? "bg-cyan-600/20 border-cyan-500 text-white"
                          : "bg-slate-800/60 border-slate-700/60 text-slate-400 hover:text-white"
                      }`}
                    >
                      <p className="text-xs font-semibold">{trk.label}</p>
                      <p className="text-[11px] text-cyan-300 mt-0.5">{trk.bump}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <label htmlFor="salary-slider" className="text-slate-300">Current Base Salary</label>
                  <span className="font-mono text-cyan-400 text-sm">${currentSalary},000 USD</span>
                </div>
                <input
                  id="salary-slider"
                  type="range"
                  min="90"
                  max="220"
                  step="5"
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>$90k (Mid-level)</span>
                  <span>$150k (Senior)</span>
                  <span>$220k+ (Lead)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center text-xs font-semibold mb-2">
                  <label htmlFor="hours-slider" className="text-slate-300">Weekly Dedicated Study Commitment</label>
                  <span className="font-mono text-cyan-400 text-sm">{studyHoursPerWeek} Hours / week</span>
                </div>
                <input
                  id="hours-slider"
                  type="range"
                  min="4"
                  max="24"
                  step="2"
                  value={studyHoursPerWeek}
                  onChange={(e) => setStudyHoursPerWeek(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                  <span>4 hrs (Evenings)</span>
                  <span>12 hrs (Intensive)</span>
                  <span>24 hrs (Full Immersion)</span>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="lg:col-span-5 bg-slate-950 border border-slate-800/80 rounded-2xl p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
                  <span className="font-semibold text-slate-300 uppercase tracking-wider">Projected Uplift</span>
                  <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-md font-mono text-[11px]">
                    {estimatedROI}x Course Cost ROI
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Projected New Base</span>
                    <span className="text-white font-mono font-semibold">${projectedSalary},000 / yr</span>
                  </div>
                  <div className="flex justify-between text-emerald-400">
                    <span>Annual Compensation Jump</span>
                    <span className="font-mono font-bold">+${currentTrackData.bump},000 USD</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Target Time to Certify</span>
                    <span className="text-cyan-400 font-mono font-semibold">~{estimatedWeeks} Weeks</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800">
                  <p className="text-xs text-slate-500">Graduation Credential</p>
                  <p className="text-sm font-bold text-white mt-0.5">{currentTrackData.title}</p>
                </div>
              </div>

              <Link
                href="/courses"
                className="mt-6 w-full py-2.5 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold text-center transition shadow-md shadow-indigo-600/20"
              >
                Enroll In Masterclass Track
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Masterclasses */}
      <section className="py-16 md:py-24 border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
                Elite Catalog
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Production-Tested Engineering Masterclasses
              </h2>
            </div>
            <Link
              href="/courses"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition"
            >
              <span>Explore all {COURSES.length} masterclasses</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COURSES.map((course) => (
              <div
                key={course.id}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-slate-700 transition flex flex-col justify-between group"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={course.thumbnail}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <span className="absolute top-4 left-4 px-2.5 py-1 bg-slate-950/80 backdrop-blur rounded-lg text-[10px] font-mono text-cyan-300 border border-slate-700">
                      {course.level} Level
                    </span>
                    <span className="absolute top-4 right-4 px-2.5 py-1 bg-indigo-600 rounded-lg text-[10px] font-bold text-white">
                      {course.duration}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <div className="flex items-center gap-1 text-amber-400 font-semibold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{course.rating}</span>
                        <span className="text-slate-500 font-mono">({course.reviewsCount})</span>
                      </div>
                      <span className="text-slate-400 font-mono text-[11px]">
                        {course.studentsCount} engineers enrolled
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {course.subtitle}
                    </p>

                    {/* Instructor */}
                    <div className="mt-4 pt-4 border-t border-slate-800/80 flex items-center gap-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-9 h-9 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-xs font-semibold text-white">{course.instructor.name}</p>
                        <p className="text-[11px] text-slate-500">{course.instructor.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold font-mono text-white">${course.price}</span>
                    <span className="text-xs font-mono text-slate-500 line-through">${course.originalPrice}</span>
                  </div>

                  <Link
                    href={`/learn/${course.id}`}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition flex items-center gap-1.5 shadow-md shadow-indigo-600/20"
                  >
                    <PlayCircle className="w-4 h-4" />
                    <span>Enter Classroom</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Spotlight */}
      <section className="py-16 md:py-24 border-b border-slate-800 bg-slate-900/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mx-auto mb-6">
            <Award className="w-8 h-8" />
          </div>

          <h2 className="text-3xl font-bold text-white">Cryptographically Verifiable Credentials</h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl mx-auto leading-relaxed">
            Every graduate receives an immutable credential with a SHA-256 verification hash, verifiable by engineering hiring managers globally on LinkedIn or via our verification API.
          </p>

          <div className="mt-8">
            <Link
              href="/certificate"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
            >
              <Award className="w-4 h-4 text-cyan-400" />
              <span>Inspect Sample Verification Credential</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-20 border-b border-slate-800 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Direct Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What prerequisites are needed for these masterclasses?",
                a: "Our courses are specifically tailored for Senior, Staff, and Lead engineers. You should already be comfortable with basic JavaScript/TypeScript, HTTP fundamentals, and databases. We bypass basic syntax and dive straight into production architectural patterns.",
              },
              {
                q: "How does the Mux video player classroom work?",
                a: "Our streaming player simulates low-latency 4K adaptive bitrate video, timestamped chapter navigation, full transcripts, and instant code snippet downloads directly in the browser.",
              },
              {
                q: "How are the course completion certificates issued?",
                a: "Upon completing all video modules and achieving an 80%+ passing score on the interactive knowledge check quiz, a unique cryptographic credential ID and verifiable hash are automatically minted for your profile.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
                <h4 className="font-semibold text-sm text-white mb-1.5 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-xs text-slate-400 pl-6 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-tr from-cyan-950 via-slate-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-white">Join the Next Cohort of Staff Engineers</h2>
            <p className="mt-3 text-sm text-slate-400">
              Unlock architectural mastery, pass rigorous technical hurdles, and lead mission-critical systems.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link
                href="/courses"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-semibold transition shadow-lg shadow-indigo-600/30"
              >
                Enroll In A Masterclass
              </Link>
              <Link
                href="/learn/course-1"
                className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-xl text-sm font-semibold transition"
              >
                Preview Classroom Player
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

