import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization for external images if needed
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Allow SVG images
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Optimize for production
  reactStrictMode: true,
};

export default nextConfig;
