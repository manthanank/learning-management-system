# Synapse LMS — Engineering Masterclass & Curriculum Platform

Synapse LMS is an educational portal built with Next.js 15, TypeScript, and Tailwind CSS. It features technical masterclasses with simulated video streaming, interactive module quizzes, and SHA-256 verifiable graduation certificates.

## Key Features

- **Dynamic Masterclass Catalog (`/api/courses`)**: Searchable course library with difficulty tiers, category sorting, and syllabus breakdowns.
- **Interactive Video Player (`/learn/[courseId]`)**: Chapter navigation, playback speed controls, lesson summary notes, and completion toggles.
- **Skill Assessment Quizzes (`/quiz/[quizId]`)**: Timed multiple-choice evaluations testing architectural and implementation concepts.
- **Verifiable Graduation Certificates (`/certificate`)**: Generates cryptographically verifiable graduation credentials complete with credential ID and PDF export.
- **Analytics Cockpit (`/analytics`)**: Visual metrics of student completion velocity, study hours, and skill radar profiles.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Lucide Icons
- **Video Delivery Architecture**: Adaptive Mux Simulation & HTML5 Video
- **Deployment**: Vercel

## API Endpoints

- `GET /api/courses`: Search and filter masterclasses by category or difficulty level.
- `POST /api/courses`: Create and publish a new course module.

## Getting Started

1. Navigate to the project directory:
   ```bash
   cd c:\Users\manth\projects\learning-management-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

