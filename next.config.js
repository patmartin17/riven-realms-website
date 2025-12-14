/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  
  // Enable compression
  compress: true,
  
  // Remove X-Powered-By header for security
  poweredByHeader: false,
  
  // Turbopack configuration
  turbopack: {
    root: "/home/pmartin/newtestsite",
  },
}

module.exports = nextConfig
