import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // unoptimized: no need for sharp — images are served as-is from their source
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
