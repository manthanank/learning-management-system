"use client";

import React from "react";
import { STUDY_ANALYTICS, SKILL_MASTERY } from "@/lib/data";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Clock,
  BookOpen,
  Award,
  Flame,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Sparkles,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-800 pb-8 mb-8">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            Learning Telemetry
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-1">Student Performance & Mastery</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Track weekly study minutes, module completion rates, and domain competency distribution
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span>Total Learning Time</span>
              <Clock className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-2xl font-bold font-mono text-white">42.5 hrs</p>
            <span className="text-[11px] text-cyan-400 flex items-center gap-1 mt-1 font-mono">
              <TrendingUp className="w-3 h-3" />
              <span>+6.2 hrs this week</span>
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span>Lessons Mastered</span>
              <BookOpen className="w-4 h-4 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold font-mono text-white">28 / 36</p>
            <span className="text-[11px] text-indigo-400 font-mono mt-1 block">
              77.7% Curriculum Progress
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span>Average Quiz Score</span>
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold font-mono text-emerald-400">94.2%</p>
            <span className="text-[11px] text-slate-500 font-mono mt-1 block">
              Top 5% of student cohort
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
              <span>Daily Study Streak</span>
              <Flame className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-2xl font-bold font-mono text-amber-400">14 Days</p>
            <span className="text-[11px] text-amber-400/80 font-mono mt-1 block">
              Personal record achieved
            </span>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Weekly Minutes Area Chart */}
          <div className="lg:col-span-8 p-6 rounded-3xl bg-slate-900/60 border border-slate-800">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-sm font-semibold text-white">Weekly Immersion Velocity</h3>
                <p className="text-xs text-slate-400">Minutes spent in code walkthroughs and videos</p>
              </div>
              <span className="text-xs font-mono text-cyan-400 px-2 py-0.5 bg-cyan-500/10 rounded-md">
                6-Week Trend
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={STUDY_ANALYTICS}>
                  <defs>
                    <linearGradient id="colorMin" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="week" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} tickFormatter={(v) => `${v}m`} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#0f172a",
                      borderColor: "#334155",
                      borderRadius: "12px",
                      fontSize: "12px",
                    }}
                  />
                  <Area type="monotone" dataKey="minutes" stroke="#06b6d4" strokeWidth={3} fillOpacity={1} fill="url(#colorMin)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Skill Mastery Donut */}
          <div className="lg:col-span-4 p-6 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">Architectural Domain Mastery</h3>
              <p className="text-xs text-slate-400 mb-4">Competency scores based on quizzes and code evals</p>

              <div className="h-44 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={SKILL_MASTERY}
                      innerRadius={45}
                      outerRadius={65}
                      paddingAngle={4}
                      dataKey="score"
                    >
                      {SKILL_MASTERY.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#0f172a",
                        borderColor: "#334155",
                        borderRadius: "12px",
                        fontSize: "12px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs pt-4 border-t border-slate-800">
              {SKILL_MASTERY.map((c) => (
                <div key={c.name} className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.fill }} />
                  <span className="text-slate-400 truncate">{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
