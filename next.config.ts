/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/roundnetns',
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
