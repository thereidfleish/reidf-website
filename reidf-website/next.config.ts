import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "server.reidf.net",
      },
    ],
  },
};

export default nextConfig;
