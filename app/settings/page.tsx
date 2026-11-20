"use client";

import React, { useState } from "react";
import { COURSES, STUDY_ANALYTICS } from "@/lib/data";
import {
  Settings,
  User,
  Video,
  Database,
  Download,
  CreditCard,
  ShieldCheck,
  Check,
} from "lucide-react";

export default function SettingsPage() {
  const [studentName, setStudentName] = useState("Alex Mercer");
  const [email, setEmail] = useState("alex.mercer@gmail.com");
  const [defaultQuality, setDefaultQuality] = useState<"4K UHD" | "1080p">("4K UHD");
  const [autoPlayNext, setAutoPlayNext] = useState(true);
  const [activeSchemaTab, setActiveSchemaTab] = useState<"Course" | "Module" | "Certificate">("Course");

  const handleExportJSON = () => {
    const data = {
      user: { name: studentName, email },
      coursesEnrolled: COURSES.map((c) => ({ id: c.id, title: c.title })),
      analytics: STUDY_ANALYTICS,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `synapse-lms-profile-export-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-800 pb-8 mb-8">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            Account & Infrastructure
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Platform Settings</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Student preferences, video streaming codecs, instructor payouts, and Prisma schemas
          </p>
        </div>

        <div className="space-y-8">
          {/* Profile */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <User className="w-4 h-4 text-cyan-400" />
              <span>Student Profile</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Full Name (Printed on Certificate)</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium"
                />
              </div>
              <div>
                <label className="block text-slate-400 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white font-medium"
                />
              </div>
            </div>
          </div>

          {/* Video Streaming Preferences */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
              <Video className="w-4 h-4 text-indigo-400" />
              <span>Mux Video Streaming Engine</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-400 mb-1">Default Streaming Bitrate</label>
                <select
                  value={defaultQuality}
                  onChange={(e) => setDefaultQuality(e.target.value as any)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-white"
                >
                  <option value="4K UHD">4K UHD (Adaptive 18 Mbps)</option>
                  <option value="1080p">1080p Full HD (6 Mbps)</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div>
                  <p className="font-semibold text-white">Auto-Advance Next Lesson</p>
                  <p className="text-[11px] text-slate-500">Automatically progress when video finishes</p>
                </div>
                <button
                  onClick={() => setAutoPlayNext(!autoPlayNext)}
                  className={`w-10 h-6 flex items-center rounded-full p-1 transition-colors ${
                    autoPlayNext ? "bg-indigo-600" : "bg-slate-700"
                  }`}
                >
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${
                      autoPlayNext ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Prisma PostgreSQL Schema Explorer */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                  <Database className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Prisma PostgreSQL Schema</h3>
                  <p className="text-xs text-slate-400">Relational LMS course, module, lesson, and quiz models</p>
                </div>
              </div>

              <div className="flex gap-2">
                {(["Course", "Module", "Certificate"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveSchemaTab(tab)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition ${
                      activeSchemaTab === tab
                        ? "bg-purple-600 text-white"
                        : "bg-slate-800 text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
              {activeSchemaTab === "Course" && (
                <pre>{`model Course {
  id             String        @id @default(uuid())
  title          String
  slug           String        @unique
  subtitle       String
  description    String
  thumbnail      String
  instructorName String
  instructorBio  String?
  level          String        @default("INTERMEDIATE")
  durationHours  Int           @default(12)
  rating         Float         @default(4.9)
  studentsCount  Int           @default(1200)
  price          Float         @default(149)
  modules        Module[]
  enrollments    Enrollment[]
  certificates   Certificate[]
  createdAt      DateTime      @default(now())
  updatedAt      DateTime      @updatedAt
}`}</pre>
              )}
              {activeSchemaTab === "Module" && (
                <pre>{`model Module {
  id        String   @id @default(uuid())
  title     String
  order     Int      @default(1)
  courseId  String
  course    Course   @relation(fields: [courseId], references: [id])
  lessons   Lesson[]
  createdAt DateTime @default(now())
}`}</pre>
              )}
              {activeSchemaTab === "Certificate" && (
                <pre>{`model Certificate {
  id               String   @id @default(uuid())
  credentialId     String   @unique
  studentName      String
  courseId         String
  course           Course   @relation(fields: [courseId], references: [id])
  issueDate        DateTime @default(now())
  verificationHash String
}`}</pre>
              )}
            </div>
          </div>

          {/* Export JSON */}
          <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-white">Student Progress Export</h3>
              <p className="text-xs text-slate-400">Download your study history, course completions, and credential metadata</p>
            </div>

            <button
              onClick={handleExportJSON}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold flex items-center gap-2 transition shadow-md shadow-indigo-600/20"
            >
              <Download className="w-4 h-4" />
              <span>Export Learning History JSON</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

