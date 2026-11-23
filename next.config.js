/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [{ source: '/tilldue/privacy', destination: '/tilldue/privacy.html' }]
  },
}

module.exports = nextConfig
