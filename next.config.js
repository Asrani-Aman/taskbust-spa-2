/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['*'], // This is not recommended for production
    // Alternative more secure approach:
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

module.exports = nextConfig