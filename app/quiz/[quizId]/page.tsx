"use client";

import React, { useState } from "react";
import Link from "next/link";
import { QUIZ_QUESTIONS } from "@/lib/data";
import {
  Sparkles,
  CheckCircle2,
  XCircle,
  Award,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

export default function QuizPage() {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSelect = (questionId: number, optionIndex: number) => {
    if (submitted) return;
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIndex });
  };

  const calculateScore = () => {
    let correct = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return Math.round((correct / QUIZ_QUESTIONS.length) * 100);
  };

  const score = calculateScore();
  const passed = score >= 75;

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-slate-800 pb-8 mb-8 text-center">
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">
            Accreditation Exam
          </span>
          <h1 className="text-3xl font-extrabold text-white mt-1">
            Staff Frontend Architecture Certification
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg mx-auto">
            Answer the 4 architectural questions below. An 80%+ passing score mints your cryptographic certificate.
          </p>
        </div>

        {/* Results Banner (if submitted) */}
        {submitted && (
          <div
            className={`p-6 rounded-3xl border mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left ${
              passed
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-rose-500/10 border-rose-500/30 text-rose-300"
            }`}
          >
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                {passed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400" />
                )}
                <h3 className="font-bold text-base text-white">
                  {passed ? "Congratulations! You Passed!" : "Passing Grade Not Reached"}
                </h3>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                Your Score: <strong className="font-mono text-white">{score}%</strong> (Passing benchmark: 75%)
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>

              {passed && (
                <Link
                  href="/certificate"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 transition shadow-md shadow-emerald-600/20"
                >
                  <Award className="w-3.5 h-3.5" />
                  <span>Claim Credential</span>
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-8">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const userChoice = selectedAnswers[q.id];
            const isCorrect = userChoice === q.correctIndex;

            return (
              <div
                key={q.id}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-sm font-semibold text-white leading-relaxed">
                    <span className="text-cyan-400 font-mono mr-2">{idx + 1}.</span>
                    {q.question}
                  </h3>
                  {submitted && (
                    <span
                      className={`text-xs font-bold font-mono px-2 py-0.5 rounded-full flex-shrink-0 ${
                        isCorrect
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-rose-500/20 text-rose-400"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Incorrect"}
                    </span>
                  )}
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userChoice === oIdx;
                    let optionStyle = "bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700";

                    if (submitted) {
                      if (oIdx === q.correctIndex) {
                        optionStyle = "bg-emerald-500/20 border-emerald-500 text-emerald-200 font-medium";
                      } else if (isSelected && !isCorrect) {
                        optionStyle = "bg-rose-500/20 border-rose-500 text-rose-200";
                      }
                    } else if (isSelected) {
                      optionStyle = "bg-cyan-600/20 border-cyan-500 text-white font-medium";
                    }

                    return (
                      <button
                        key={oIdx}
                        onClick={() => handleSelect(q.id, oIdx)}
                        className={`w-full p-3.5 rounded-xl border text-left text-xs transition flex items-center justify-between ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {submitted && oIdx === q.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Explanation on submission */}
                {submitted && (
                  <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="font-semibold text-cyan-300">Explanation: </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit Actions */}
        {!submitted && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setSubmitted(true)}
              disabled={Object.keys(selectedAnswers).length < QUIZ_QUESTIONS.length}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-800 disabled:text-slate-500 text-white rounded-xl text-xs font-semibold transition shadow-lg shadow-indigo-600/20"
            >
              Submit Exam Answers ({Object.keys(selectedAnswers).length} / {QUIZ_QUESTIONS.length} Complete)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
