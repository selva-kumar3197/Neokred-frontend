/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'neokred.s3.ap-south-1.amazonaws.com',
        port: '',
      },
    ],
  },
};

module.exports = nextConfig;
