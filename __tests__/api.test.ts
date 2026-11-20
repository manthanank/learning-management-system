import { describe, it, expect } from "vitest";
import { GET as getCourses } from "../app/api/courses/route";

describe("Learning Management System API Routes", () => {
  it("GET /api/courses returns course catalog", async () => {
    const req = new Request("http://localhost:3000/api/courses");
    const res = await getCourses(req);
    expect(res.status).toBe(200);

    const data = await res.json();
    expect(data.success).toBe(true);
    expect(Array.isArray(data.courses)).toBe(true);
    expect(data.courses.length).toBeGreaterThan(0);
    expect(data.courses[0]).toHaveProperty("title");
  });
});
