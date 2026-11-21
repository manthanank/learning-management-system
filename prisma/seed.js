const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Seeding learning-management-system PostgreSQL database...');

  const courses = [
    {
      title: 'Full-Stack Next.js 15 & Distributed Systems Masterclass',
      slug: 'fullstack-nextjs-15-masterclass',
      subtitle: 'Build planet-scale SSR applications with Server Actions, Turbopack, and Edge Runtimes.',
      description: 'Master enterprise Next.js from ground up with production distributed architecture.',
      thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
      instructorName: 'Elena Rostova',
      instructorBio: 'Former Lead Architect at Vercel ecosystem team.',
      level: 'ADVANCED',
      durationHours: 24,
      rating: 4.96,
      studentsCount: 2840,
      price: 199.00,
      modules: [
        {
          title: 'Architecting for the Edge',
          order: 1,
          lessons: [
            { title: 'Server Components vs Client Components Deep-Dive', durationMinutes: 22, videoUrl: 'https://cdn.example.com/l1.mp4', order: 1 },
            { title: 'Optimizing Hydration and Streaming SSR', durationMinutes: 30, videoUrl: 'https://cdn.example.com/l2.mp4', order: 2 },
          ]
        },
        {
          title: 'Distributed State & Cache Invalidation',
          order: 2,
          lessons: [
            { title: 'Durable Cache & Stale-While-Revalidate Patterns', durationMinutes: 25, videoUrl: 'https://cdn.example.com/l3.mp4', order: 1 }
          ]
        }
      ]
    }
  ];

  for (const c of courses) {
    const { modules, ...cData } = c;
    const createdCourse = await prisma.course.upsert({
      where: { slug: cData.slug },
      update: cData,
      create: cData
    });

    for (const m of modules) {
      const { lessons, ...mData } = m;
      const createdModule = await prisma.module.create({
        data: {
          ...mData,
          courseId: createdCourse.id,
        }
      });

      for (const l of lessons) {
        await prisma.lesson.create({
          data: {
            ...l,
            moduleId: createdModule.id,
          }
        });
      }
    }
  }

  const count = await prisma.course.count();
  console.log(`Successfully seeded learning-management-system! Total courses in DB: ${count}`);
}

main()
  .catch((e) => {
    console.error('Seed error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
