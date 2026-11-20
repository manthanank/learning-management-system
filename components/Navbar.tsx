"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import {
  GraduationCap,
  BookOpen,
  PlayCircle,
  Award,
  BarChart3,
  Settings,
  Menu,
  X,
  Sparkles,
  User,
  LogOut,
  LogIn,
  Repeat,
  Shield,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const { user, isAuthenticated, login, logout, switchRole } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const links = [
    { label: "Academy", href: "/" },
    { label: "Catalog", href: "/courses", icon: BookOpen },
    { label: "Classroom", href: "/learn/course-1", icon: PlayCircle },
    { label: "Knowledge Quiz", href: "/quiz/quiz-1", icon: Sparkles },
    { label: "Certificate", href: "/certificate", icon: Award },
    { label: "Telemetry", href: "/analytics", icon: BarChart3 },
    { label: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                SYNAPSE<span className="text-cyan-400 font-mono">.edu</span>
              </span>
              <span className="hidden sm:inline-block ml-2 text-[10px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                LMS Platform
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                    isActive
                      ? "text-white bg-slate-800/90 shadow-sm"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right CTA & User Profile */}
        <div className="flex items-center gap-3">
          {/* User Session Dropdown */}
          <div className="relative">
            {isAuthenticated && user ? (
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 sm:px-3 sm:py-1.5 rounded-xl border border-slate-800 bg-slate-900 hover:border-slate-700 transition cursor-pointer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={user.avatarUrl}
                  alt={user.name}
                  className="w-7 h-7 rounded-full object-cover ring-1 ring-cyan-500/50"
                />
                <div className="hidden sm:block text-left text-xs">
                  <div className="font-medium text-slate-200 leading-tight flex items-center gap-1.5">
                    <span>{user.name}</span>
                    {user.role === "Instructor" && (
                      <span className="px-1.5 py-0.2 rounded text-[9px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        FACULTY
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-cyan-400 font-mono">{user.tier}</div>
                </div>
              </button>
            ) : (
              <button
                onClick={() => login("student@synapse.edu", "Demo Student")}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition cursor-pointer"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}

            {/* Dropdown Menu */}
            {userDropdownOpen && user && (
              <div
                className="absolute right-0 mt-2 w-64 rounded-2xl border border-slate-800 bg-slate-900/95 backdrop-blur-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseLeave={() => setUserDropdownOpen(false)}
              >
                <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
                  <div className="font-semibold text-sm text-white">{user.name}</div>
                  <div className="text-xs text-slate-400 truncate">{user.email}</div>
                  <div className="mt-1 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    <span>Role: {user.role}</span>
                  </div>
                </div>

                <div className="space-y-0.5">
                  <button
                    onClick={() => {
                      switchRole();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-cyan-300 hover:bg-slate-800/60 rounded-xl transition cursor-pointer"
                  >
                    <Repeat className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Switch to {user.role === "Instructor" ? "Student" : "Instructor"}</span>
                  </button>

                  <Link
                    href="/learn/course-1"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-slate-300 hover:bg-slate-800/60 rounded-xl transition"
                  >
                    <PlayCircle className="w-3.5 h-3.5 text-slate-400" />
                    <span>Active Courses ({user.enrolledCoursesCount})</span>
                  </Link>

                  <Link
                    href="/certificate"
                    onClick={() => setUserDropdownOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 text-xs text-slate-300 hover:bg-slate-800/60 rounded-xl transition"
                  >
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Certificates ({user.certificatesCount})</span>
                  </Link>

                  <div className="border-t border-slate-800/80 my-1" />

                  <button
                    onClick={() => {
                      logout();
                      setUserDropdownOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs text-rose-400 hover:bg-rose-500/10 rounded-xl transition cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/courses"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold transition shadow-md shadow-indigo-600/20"
          >
            <span>Browse Masterclasses</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950 px-4 pt-2 pb-4 space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-xs font-medium transition ${
                  isActive ? "bg-indigo-600/10 text-indigo-400 font-semibold" : "text-slate-300 hover:bg-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
