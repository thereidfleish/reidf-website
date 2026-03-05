import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/reiden",
        destination: "https://server.reidf.net/reidf_files/reiden",
        permanent: false,
      },
    ];
  },
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
