import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "wp.uvibes.fr" }],
  },
};

export default nextConfig;
