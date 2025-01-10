import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],
  images: {
    domains: ['https://lh3.googleusercontent.com/'],
  },
}

export default nextConfig
