/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["*"], // This is not recommended for production
    // Alternative more secure approach:
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./styles"],
    prependData: `@import "variables.scss";`,
  },
};

module.exports = nextConfig;
