import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export estático para GitHub Pages (genera /out)
  output: "export",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
