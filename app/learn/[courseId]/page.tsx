"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { COURSES, Lesson, Module } from "@/lib/data";
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  Maximize2,
  CheckCircle2,
  Circle,
  FileText,
  Code2,
  Sparkles,
  ChevronRight,
  BookOpen,
  Award,
  Download,
} from "lucide-react";

export default function ClassroomPage() {
  const params = useParams();
  const courseId = (params?.courseId as string) || "course-1";
  const course = COURSES.find((c) => c.id === courseId) || COURSES[0];

  const firstLesson = course.modules[0]?.lessons[0];
  const [activeLesson, setActiveLesson] = useState<Lesson>(firstLesson);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [videoQuality, setVideoQuality] = useState<"4K UHD" | "1080p">("4K UHD");
  const [activeTab, setActiveTab] = useState<"overview" | "transcript" | "code">("overview");
  const [completedLessonIds, setCompletedLessonIds] = useState<string[]>(["les-1", "les-2"]);

  const allLessons = course.modules.flatMap((m) => m.lessons);
  const completedCount = completedLessonIds.length;
  const progressPercent = Math.round((completedCount / allLessons.length) * 100);

  const toggleLessonCompleted = (id: string) => {
    if (completedLessonIds.includes(id)) {
      setCompletedLessonIds(completedLessonIds.filter((x) => x !== id));
    } else {
      setCompletedLessonIds([...completedLessonIds, id]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 py-6">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <Link href="/courses" className="hover:text-white transition">Catalog</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium truncate max-w-sm">{course.title}</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-cyan-400 font-mono">{activeLesson.title}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-slate-400 text-xs">Course Progress:</span>
              <span className="font-mono text-cyan-400 font-bold">{progressPercent}%</span>
              <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${progressPercent}%` }} />
              </div>
            </div>

            <Link
              href="/quiz/quiz-1"
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-semibold flex items-center gap-1.5 transition text-[11px]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Take Quiz</span>
            </Link>
          </div>
        </div>

        {/* Classroom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Video & Lesson Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Mux Video Player Box */}
            <div className="aspect-[16/9] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 relative flex flex-col justify-between shadow-2xl group">
              {/* Fake Video Canvas */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950/40 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3 shadow-lg">
                    {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
                  </div>
                  <p className="text-xs font-mono text-cyan-300 uppercase tracking-widest">
                    Mux Adaptive Streaming Simulation • {videoQuality}
                  </p>
                  <h3 className="text-sm font-semibold text-white mt-1 max-w-md mx-auto">
                    {activeLesson.title}
                  </h3>
                </div>
              </div>

              {/* Player Top Badges */}
              <div className="relative z-10 p-4 flex justify-between items-center bg-gradient-to-b from-slate-950/80 to-transparent">
                <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700 text-[10px] font-mono text-white">
                  Mux Stream ID: mux_94821a0
                </span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono">
                  Live 4K Bitrate: 18.2 Mbps
                </span>
              </div>

              {/* Player Controls Bar */}
              <div className="relative z-10 p-4 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-transparent space-y-2">
                {/* Scrubber */}
                <div className="w-full h-1 bg-slate-700 rounded-full cursor-pointer overflow-hidden group/scrub">
                  <div className="w-1/3 h-full bg-cyan-400 rounded-full" />
                </div>

                <div className="flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1 rounded hover:text-white transition"
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>
                    <span className="font-mono text-[11px] text-slate-400">
                      04:12 / {activeLesson.duration}
                    </span>
                    <button
                      onClick={() => setPlaybackSpeed(playbackSpeed === 2 ? 1 : playbackSpeed + 0.25)}
                      className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-slate-300 hover:text-white"
                    >
                      {playbackSpeed}x Speed
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setVideoQuality(videoQuality === "4K UHD" ? "1080p" : "4K UHD")}
                      className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono text-cyan-400"
                    >
                      {videoQuality}
                    </button>
                    <Volume2 className="w-4 h-4 text-slate-400" />
                    <Maximize2 className="w-4 h-4 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Lesson Title & Completion Toggle */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-white">{activeLesson.title}</h1>
                <p className="text-xs text-slate-400 mt-1">{activeLesson.summary}</p>
              </div>

              <button
                onClick={() => toggleLessonCompleted(activeLesson.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition flex-shrink-0 ${
                  completedLessonIds.includes(activeLesson.id)
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                    : "bg-slate-800 text-slate-300 hover:text-white"
                }`}
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {completedLessonIds.includes(activeLesson.id) ? "Completed" : "Mark as Finished"}
                </span>
              </button>
            </div>

            {/* Tabs (Overview, Transcript, Code) */}
            <div className="space-y-4">
              <div className="flex border-b border-slate-800 text-xs">
                {(
                  [
                    { id: "overview", label: "Lesson Takeaways & Concepts", icon: BookOpen },
                    { id: "transcript", label: "Video Transcript", icon: FileText },
                    { id: "code", label: "Production Code Snippet", icon: Code2 },
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-2.5 font-medium transition flex items-center gap-2 border-b-2 ${
                      activeTab === tab.id
                        ? "border-cyan-400 text-white font-semibold"
                        : "border-transparent text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <tab.icon className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs leading-relaxed text-slate-300">
                {activeTab === "overview" && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white text-sm">Key Architectural Takeaways</h4>
                    <p>
                      In this module we break down how Next.js 15 leverages React 19&apos;s compiler and server actions to execute zero-bundle-size mutations. By avoiding traditional client-side state managers for form inputs, you eliminate hundreds of kilobytes of boilerplate JS from the initial page payload.
                    </p>
                    <ul className="list-disc pl-5 space-y-1 text-slate-400">
                      <li>Server Actions are POST requests secured by cryptographic Action IDs.</li>
                      <li>useActionState hook binds form action responses to local UI state without useEffect.</li>
                      <li>Optimistic updates provide sub-16ms interactive feedback before network resolution.</li>
                    </ul>
                  </div>
                )}

                {activeTab === "transcript" && (
                  <div className="space-y-3 font-mono text-[11px] text-slate-400 max-h-72 overflow-y-auto">
                    <p><strong className="text-cyan-400">[00:00]</strong> Welcome back everyone. Today we are exploring the architectural boundaries of Server Actions.</p>
                    <p><strong className="text-cyan-400">[02:15]</strong> Notice on line 14 how the compiler automatically attaches the &apos;use server&apos; directive to our mutation closure.</p>
                    <p><strong className="text-cyan-400">[06:40]</strong> By passing this handler directly to the action prop of standard HTML forms, progressive enhancement is guaranteed even when JavaScript is loading.</p>
                    <p><strong className="text-cyan-400">[11:20]</strong> Let us examine the network waterfall under 3G throttling to verify zero layout shifts.</p>
                  </div>
                )}

                {activeTab === "code" && (
                  <div className="font-mono text-[11px] bg-slate-950 p-4 rounded-xl border border-slate-800 overflow-x-auto text-slate-200">
                    <pre>{`// app/actions/create-checkout.ts
"use server";

import { z } from "zod";
import { revalidateTag } from "next/cache";

const schema = z.object({
  productId: z.string().uuid(),
  quantity: z.number().int().positive(),
});

export async function createCheckoutAction(prevState: any, formData: FormData) {
  const parsed = schema.safeParse({
    productId: formData.get("productId"),
    quantity: Number(formData.get("quantity")),
  });

  if (!parsed.success) {
    return { error: "Validation failed", issues: parsed.error.issues };
  }

  // Atomically reserve stock in PostgreSQL via Prisma
  revalidateTag("cart");
  return { success: true };
}`}</pre>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Curriculum Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4">
              <h3 className="text-sm font-semibold text-white flex items-center justify-between">
                <span>Course Curriculum</span>
                <span className="text-xs font-mono text-cyan-400">{allLessons.length} Lessons</span>
              </h3>

              <div className="space-y-4">
                {course.modules.map((mod, mIdx) => (
                  <div key={mod.id} className="space-y-2">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {mod.title}
                    </span>

                    <div className="space-y-1.5">
                      {mod.lessons.map((les) => {
                        const isCurrent = activeLesson.id === les.id;
                        const isDone = completedLessonIds.includes(les.id);

                        return (
                          <div
                            key={les.id}
                            onClick={() => setActiveLesson(les)}
                            className={`p-3 rounded-xl border transition cursor-pointer flex items-center justify-between text-xs ${
                              isCurrent
                                ? "bg-cyan-600/10 border-cyan-500 text-white shadow-sm"
                                : "bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0 pr-2">
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-slate-600 flex-shrink-0" />
                              )}
                              <span className="truncate">{les.title}</span>
                            </div>
                            <span className="font-mono text-[10px] text-slate-500 flex-shrink-0">
                              {les.duration}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quiz Callout Box */}
              <div className="pt-4 border-t border-slate-800">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-950/60 to-purple-950/40 border border-indigo-500/30">
                  <h4 className="font-bold text-xs text-white flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>Certification Knowledge Check</span>
                  </h4>
                  <p className="text-[11px] text-slate-300 mt-1">
                    Pass the 4-question technical quiz with 80%+ to unlock your verifiable credential.
                  </p>
                  <Link
                    href="/quiz/quiz-1"
                    className="mt-3 block w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold text-center transition"
                  >
                    Start Exam
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

