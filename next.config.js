/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false, //for react-widget lib
  swcMinify: true,
  env: {
    API_KEY: process.env.NEXT_PUBLIC_API_KEY,
    DB_ID: process.env.NEXT_PUBLIC_DB_ID,
    OPENAI_KEY: process.env.NEXT_PUBLIC_OPENAI_KEY
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  }
};

module.exports = nextConfig;
