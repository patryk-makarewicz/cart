const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './'
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  rootDir: './src',
  testEnvironment: 'jest-environment-jsdom',
  testTimeout: 10000,
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/setupTests.ts'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>../.coverage',
  collectCoverageFrom: [
    '<rootDir>/**/*.{ts,tsx}',
    '!<rootDir>/**/*.model.*',
    '!<rootDir>/**/*.styles.*',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/api/**/*',
    '!<rootDir>/tests/**/*'
  ]
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);

// module.exports = {
//   rootDir: 'src',
//   testEnvironment: 'jsdom',
//   testTimeout: 10000,

//   moduleNameMapper: {
//     '\\.(css)$': 'identity-obj-proxy',
//     '^.+\\.svg$': '<rootDir>/tests/svgTransform.ts',
//     '^.+\\.png$': '<rootDir>/tests/fileTransform.ts'
//   },
//   moduleDirectories: ['src', 'node_modules'],
//   setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/setupTests.ts'],
//   collectCoverage: true,
//   coverageDirectory: '<rootDir>../.coverage',
//   collectCoverageFrom: [
//     '<rootDir>/**/*.{ts,tsx}',
//     '!<rootDir>/**/*.model.*',
//     '!<rootDir>/**/*.styles.*',
//     '!<rootDir>/**/*.d.ts',
//     '!<rootDir>/api/**/*',
//     '!<rootDir>/tests/**/*'
//   ]
// };
