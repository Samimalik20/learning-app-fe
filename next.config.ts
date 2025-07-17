import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "ik.imagekit.io",
      "images.unsplash.com",
      "online-learning-app.s3.us-east-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
