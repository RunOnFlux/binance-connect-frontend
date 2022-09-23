/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://cryptoicons.org"],
  },
};

module.exports = nextConfig;
