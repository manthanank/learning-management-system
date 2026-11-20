# AI Context & System Architecture: Learning Management System (LMS)

## Overview
A high-production developer masterclass academy platform built with Next.js 15, PostgreSQL (via Prisma ORM), Mux Video simulation, and dynamic interactive certification.

## Key Routes & Architecture
- `/`: Masterclass academy marketing landing page with interactive Career Salary ROI & Completion Calculator, instructor credentials, testimonials, and FAQ.
- `/courses`: Complete curriculum catalog with category filters (Frontend, Backend, AI/ML, Cloud), difficulty badges (Beginner, Intermediate, Advanced), duration, and enrollment.
- `/learn/[courseId]`: Interactive classroom with video streaming player simulation (Mux streaming controls: playback speed, 4K quality toggle, transcripts, timeline chapters), lesson progress tracker sidebar, and downloadable resources.
- `/quiz/[quizId]`: Interactive knowledge check quiz engine with multiple-choice questions, instant feedback explanations, score calculator, and retry flow.
- `/certificate`: Verified dynamic course completion certificate with printable layout, cryptographic verification hash, student name, and LinkedIn share button.
- `/analytics`: Student learning time telemetry, weekly study heatmaps, course completion rate curves, and quiz mastery distribution via Recharts.
- `/settings`: Student profile, instructor payout settings, Prisma relational schema viewer (`Course`, `Module`, `Lesson`, `Enrollment`, `Quiz`, `Certificate`), and progress JSON export.

## Relational Data Model (Prisma)
- Course: id, title, slug, subtitle, description, thumbnail, instructorName, instructorBio, level, durationHours, price, modules, enrollments, certificates.
- Module: id, title, order, courseId, lessons.
- Lesson: id, title, durationMinutes, videoUrl, order, moduleId, isCompleted.
- Enrollment: id, userId, courseId, progressPercent, isCompleted, enrolledAt.
- Quiz: id, title, courseId, questions, passingScore.
- Certificate: id, credentialId, studentName, courseTitle, issueDate, verificationHash.
