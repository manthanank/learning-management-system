"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { COURSES, Course } from "@/lib/data";
import {
  Search,
  Filter,
  Star,
  PlayCircle,
  Clock,
  BookOpen,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      if (selectedCategory !== "all" && course.category !== selectedCategory) return false;
      if (selectedLevel !== "all" && course.level !== selectedLevel) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const mTitle = course.title.toLowerCase().includes(q);
        const mSub = course.subtitle.toLowerCase().includes(q);
        const mInst = course.instructor.name.toLowerCase().includes(q);
        if (!mTitle && !mSub && !mInst) return false;
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedLevel]);

  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-800 pb-8 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
              Staff Curriculum
            </span>
            <h1 className="text-3xl font-extrabold text-white mt-1">Masterclass Catalog</h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Explore {COURSES.length} deep-dive architectural masterclasses with Mux streaming & certifications
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search Next.js, Rust, Kubernetes, RAG..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 rounded-2xl bg-slate-900/40 border border-slate-800">
          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All Disciplines" },
              { id: "frontend", label: "Frontend Architecture" },
              { id: "backend", label: "Distributed Systems (Rust)" },
              { id: "ai", label: "AI & RAG Engineering" },
              { id: "cloud", label: "Cloud & Kubernetes" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                  selectedCategory === cat.id
                    ? "bg-cyan-600 text-white"
                    : "bg-slate-800 text-slate-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Level Filter */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Level:</span>
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="bg-slate-800 border border-slate-700 text-white text-xs rounded-lg px-2.5 py-1.5 focus:outline-none"
            >
              <option value="all">All Levels</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <span className="absolute top-4 left-4 px-2.5 py-1 bg-slate-950/80 backdrop-blur rounded-lg text-[10px] font-mono text-cyan-300 border border-slate-700">
                    {course.level}
                  </span>
                  <span className="absolute top-4 right-4 px-2.5 py-1 bg-indigo-600 rounded-lg text-[10px] font-bold text-white">
                    {course.duration}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-500 font-mono">({course.reviewsCount})</span>
                    </div>
                    <span className="text-slate-400 font-mono text-[11px]">
                      {course.studentsCount} enrolled
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {course.subtitle}
                  </p>

                  {/* Skills tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {course.skills.map((sk) => (
                      <span
                        key={sk}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 font-mono"
                      >
                        {sk}
                      </span>
                    ))}
                  </div>

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

              {/* Action */}
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
                  <span>Start Classroom</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

