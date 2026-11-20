export interface Lesson {
  id: string;
  title: string;
  duration: string;
  videoMinutes: number;
  isCompleted?: boolean;
  videoUrl: string;
  summary: string;
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "frontend" | "backend" | "ai" | "cloud";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  lessonsCount: number;
  studentsCount: number;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  thumbnail: string;
  instructor: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  skills: string[];
  modules: Module[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const COURSES: Course[] = [
  {
    id: "course-1",
    slug: "staff-frontend-nextjs15",
    title: "Staff Frontend Architecture: Next.js 15 & React 19",
    subtitle: "Master Server Actions, streaming SSR, Turbopack optimizations, and enterprise micro-frontends.",
    category: "frontend",
    level: "Advanced",
    duration: "18 Hours",
    lessonsCount: 36,
    studentsCount: 3840,
    rating: 4.96,
    reviewsCount: 612,
    price: 189,
    originalPrice: 249,
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
    instructor: {
      name: "Marcus Vance",
      role: "Staff Frontend Architect",
      company: "Ex-Vercel & Stripe",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    skills: ["Next.js 15 App Router", "React 19 Server Actions", "Partial Prerendering (PPR)", "Webpack to Turbopack"],
    modules: [
      {
        id: "mod-1",
        title: "Module 1: React 19 Compiler & Server Action Foundations",
        lessons: [
          {
            id: "les-1",
            title: "Welcome to Staff Frontend Engineering & Architecture Overview",
            duration: "12:40",
            videoMinutes: 12,
            isCompleted: true,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary: "Course orientation, high-concurrency SSR mental models, and production repository setup.",
          },
          {
            id: "les-2",
            title: "Zero-Bundle-Size Server Components in Depth",
            duration: "18:15",
            videoMinutes: 18,
            isCompleted: true,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            summary: "Deep dive into RSC wire protocol serialization and eliminating client JavaScript payloads.",
          },
          {
            id: "les-3",
            title: "Server Actions: Mutations, Optimistic UI & Form Validation",
            duration: "24:50",
            videoMinutes: 24,
            isCompleted: false,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
            summary: "Building robust zero-API mutation layers with Zod validation schemas and useActionState.",
          },
        ],
      },
      {
        id: "mod-2",
        title: "Module 2: High-Performance Streaming & Edge Invalidation",
        lessons: [
          {
            id: "les-4",
            title: "Partial Prerendering (PPR) with Suspense Boundaries",
            duration: "16:20",
            videoMinutes: 16,
            isCompleted: false,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
            summary: "Combining static shell instant responses with streaming dynamic data slots.",
          },
          {
            id: "les-5",
            title: "Tag-Based Caching & On-Demand Revalidation at Scale",
            duration: "22:10",
            videoMinutes: 22,
            isCompleted: false,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
            summary: "Purging CDN edge caches precisely using revalidateTag with zero latency overhead.",
          },
        ],
      },
    ],
  },
  {
    id: "course-2",
    slug: "distributed-systems-rust",
    title: "Distributed Systems & Event Streaming in Rust",
    subtitle: "Build ultra-low latency Raft consensus engines, async Tokio actors, and Apache Kafka connectors.",
    category: "backend",
    level: "Advanced",
    duration: "24 Hours",
    lessonsCount: 44,
    studentsCount: 2910,
    rating: 4.98,
    reviewsCount: 428,
    price: 219,
    originalPrice: 299,
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80",
    instructor: {
      name: "Dr. Elena Rostova",
      role: "Principal Systems Engineer",
      company: "Ex-Databricks & Cloudflare",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    },
    skills: ["Async Tokio & Futures", "Raft Consensus Protocol", "Zero-Copy Memory Serialization", "gRPC Protocol Buffers"],
    modules: [
      {
        id: "mod-rust-1",
        title: "Module 1: High-Performance Concurrency with Tokio",
        lessons: [
          {
            id: "les-r1",
            title: "Memory Safety, Lifetimes and Zero-Cost Abstractions",
            duration: "20:15",
            videoMinutes: 20,
            isCompleted: false,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary: "Advanced pointer ownership, Pin, Unpin, and manual memory alignment for network packets.",
          },
          {
            id: "les-r2",
            title: "Building an Asynchronous Actor Pipeline with Tokio Channels",
            duration: "28:30",
            videoMinutes: 28,
            isCompleted: false,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
            summary: "Structuring message passing without mutex contention for million-req/sec throughput.",
          },
        ],
      },
    ],
  },
  {
    id: "course-3",
    slug: "ai-engineering-rag-agents",
    title: "AI Engineering: Production RAG & Multi-Agent Workflows",
    subtitle: "Deploy hybrid dense-sparse vector search, HNSW pgvector indexing, and dynamic LangGraph agent swarms.",
    category: "ai",
    level: "Intermediate",
    duration: "16 Hours",
    lessonsCount: 30,
    studentsCount: 4520,
    rating: 4.94,
    reviewsCount: 780,
    price: 199,
    originalPrice: 260,
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    instructor: {
      name: "Devon Reed",
      role: "Lead AI Systems Researcher",
      company: "Anthropic / OpenAI Contributor",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
    },
    skills: ["Dense & Sparse Embeddings", "pgvector HNSW Tuning", "Agentic Tool Calling", "Eval Frameworks"],
    modules: [
      {
        id: "mod-ai-1",
        title: "Module 1: Vector Space Mechanics & Embeddings",
        lessons: [
          {
            id: "les-ai1",
            title: "High-Dimensional Vector Math & Cosine Distance",
            duration: "15:20",
            videoMinutes: 15,
            isCompleted: true,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary: "Understanding token embeddings, dot products, and semantic search trade-offs.",
          },
        ],
      },
    ],
  },
  {
    id: "course-4",
    slug: "cloud-native-kubernetes",
    title: "Cloud-Native Kubernetes & Platform Engineering",
    subtitle: "GitOps with ArgoCD, custom CRDs, service meshes with Istio, and multi-region failover topologies.",
    category: "cloud",
    level: "Intermediate",
    duration: "20 Hours",
    lessonsCount: 38,
    studentsCount: 2150,
    rating: 4.91,
    reviewsCount: 310,
    price: 179,
    originalPrice: 229,
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    instructor: {
      name: "Sarah Chen",
      role: "Principal Cloud Architect",
      company: "Ex-Google Cloud & HashiCorp",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    skills: ["Kubernetes Operators", "ArgoCD GitOps", "Istio mTLS Service Mesh", "Terraform Multi-Cloud"],
    modules: [
      {
        id: "mod-k8s-1",
        title: "Module 1: Production Cluster Architecture & Scheduling",
        lessons: [
          {
            id: "les-k1",
            title: "Control Plane Internals: etcd, kube-apiserver & schedulers",
            duration: "22:00",
            videoMinutes: 22,
            isCompleted: false,
            videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
            summary: "Designing zero-downtime rolling upgrades and self-healing node pools.",
          },
        ],
      },
    ],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the primary benefit of React 19 Server Actions over traditional REST endpoints?",
    options: [
      "They automatically compile client JavaScript into WebAssembly",
      "They allow seamless server-side mutations directly from forms without creating separate API route handlers",
      "They completely eliminate the need for any database schema",
      "They force all components to render statically at build time",
    ],
    correctIndex: 1,
    explanation:
      "Server Actions allow client forms and event handlers to invoke server-side mutation functions directly with type-safety and automatic revalidation, eliminating redundant boilerplate API routes.",
  },
  {
    id: 2,
    question: "When should Partial Prerendering (PPR) be utilized in Next.js 15?",
    options: [
      "Only for completely static marketing documentation pages",
      "When combining an instant static outer layout shell with dynamic personalized streaming components via Suspense",
      "Only when client JavaScript is strictly disabled by the browser",
      "Exclusively for mobile web applications",
    ],
    correctIndex: 1,
    explanation:
      "Partial Prerendering (PPR) serves an instant static pre-rendered HTML shell from edge caches while concurrently streaming dynamic content wrapped inside React Suspense boundaries.",
  },
  {
    id: 3,
    question: "What does revalidateTag('products') accomplish in an enterprise Next.js application?",
    options: [
      "It reboots the entire production node server cluster",
      "It invalidates cached fetch requests tagged with 'products' across edge CDN caches on-demand",
      "It deletes all product records permanently from PostgreSQL",
      "It regenerates all CSS stylesheets on the client",
    ],
    correctIndex: 1,
    explanation:
      "revalidateTag enables targeted on-demand cache purges across Vercel and CDN edge layers without triggering full site rebuilds.",
  },
  {
    id: 4,
    question: "Why does React 19 introduce the 'useActionState' hook for form submissions?",
    options: [
      "To automatically calculate CSS layout shifts",
      "To manage pending states, optimistic return values, and form action responses without manual useState boilerplates",
      "To restrict form inputs to alphanumeric characters only",
      "To compress images before uploading",
    ],
    correctIndex: 1,
    explanation:
      "useActionState cleanly manages form pending state, submitted data payloads, and server action response errors in a single ergonomic hook.",
  },
];

export const STUDY_ANALYTICS = [
  { week: "W1", minutes: 320, lessons: 8 },
  { week: "W2", minutes: 480, lessons: 14 },
  { week: "W3", minutes: 610, lessons: 18 },
  { week: "W4", minutes: 750, lessons: 22 },
  { week: "W5", minutes: 820, lessons: 26 },
  { week: "W6", minutes: 940, lessons: 31 },
];

export const SKILL_MASTERY = [
  { name: "Frontend Architecture", score: 92, fill: "#6366f1" },
  { name: "Distributed Systems", score: 78, fill: "#10b981" },
  { name: "AI Engineering", score: 85, fill: "#8b5cf6" },
  { name: "Cloud & DevOps", score: 70, fill: "#f59e0b" },
];
