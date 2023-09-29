/** @type {import('next').NextConfig} */

const nextConfig = {
  i18n: {
    locales: ['en', 'pl'],
    defaultLocale: 'en'
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
    esmExternals: true
  },
  env: {
    API_KEY: process.env.REACT_APP_API_KEY,
    DB_ID: process.env.REACT_APP_DB_ID,
    OPENAI_KEY: process.env.REACT_APP_OPENAI_KEY
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
