import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Eén canonieke URL-vorm met trailing slash (SEO).
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Deze projectmap is de workspace-root (meerdere lockfiles op het systeem).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
