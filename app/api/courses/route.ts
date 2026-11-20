import { NextResponse } from "next/server";
import { COURSES, Course } from "@/lib/data";

let serverCourses: Course[] = [...COURSES];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const level = searchParams.get("level");
  const query = searchParams.get("q")?.toLowerCase();

  let filtered = [...serverCourses];

  if (category && category !== "all") {
    filtered = filtered.filter((c) => c.category === category);
  }

  if (level && level !== "all") {
    filtered = filtered.filter((c) => c.level.toLowerCase() === level.toLowerCase());
  }

  if (query) {
    filtered = filtered.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.subtitle.toLowerCase().includes(query) ||
        c.skills.some((s) => s.toLowerCase().includes(query))
    );
  }

  return NextResponse.json({
    success: true,
    count: filtered.length,
    courses: filtered,
    syncedAt: new Date().toISOString(),
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.title || !body.category) {
      return NextResponse.json({ error: "Title and category are required" }, { status: 400 });
    }

    const newCourse: Course = {
      id: `crs-${Date.now()}`,
      slug: body.slug || body.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: body.title,
      subtitle: body.subtitle || "",
      category: body.category || "frontend",
      level: body.level || "Intermediate",
      duration: body.duration || "12 Hours",
      lessonsCount: body.lessonsCount || 10,
      studentsCount: 1,
      rating: 5.0,
      reviewsCount: 1,
      price: body.price ? Number(body.price) : 0,
      originalPrice: body.originalPrice ? Number(body.originalPrice) : 99,
      thumbnail: body.thumbnail || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
      instructor: body.instructor || {
        name: "Staff Engineering Team",
        role: "Lead Architect",
        company: "Synapse Engineering",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      },
      skills: body.skills || ["Next.js", "TypeScript"],
      modules: body.modules || [],
    };

    serverCourses = [newCourse, ...serverCourses];

    return NextResponse.json({
      success: true,
      message: "Course curriculum published",
      course: newCourse,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 });
  }
}

