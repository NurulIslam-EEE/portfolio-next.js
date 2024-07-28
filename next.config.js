/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["maath", "react-tilt"],
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
