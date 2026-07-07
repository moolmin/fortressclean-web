import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  experimental: {
    optimizePackageImports: ["@phosphor-icons/react"],
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "blogthumb.pstatic.net",
      },
    ],
  },
};

export default nextConfig;
