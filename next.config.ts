import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['vercel.com'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;