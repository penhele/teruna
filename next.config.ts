import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ryvuszpzcowrf0uf.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
