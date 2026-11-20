import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SYNAPSE Academy | Staff Engineering Masterclasses",
    short_name: "SynapseEdu",
    description: "Industrial masterclasses in Next.js 15, distributed Rust, and production AI agents with cryptographic certifications.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#06b6d4",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
