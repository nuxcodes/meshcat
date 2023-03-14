/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.googleusercontent.com',
      }, {
        protocol: 'https',
        hostname: '**.s3.ca-central-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
