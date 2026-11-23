/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/tilldue/privacy', destination: '/tilldue/privacy.html' },
      { source: '/tilldue/support', destination: '/tilldue/support.html' },
    ]
  },
}

module.exports = nextConfig
