const baseConfig = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};

export default {
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  projects: [
    {
      displayName: 'NODE',
      testEnvironment: 'node',
      testMatch: ['**/*.spec.ts', '!**/*-browser.spec.ts'],
      ...baseConfig,
    },
    {
      displayName: 'BROWSER',
      testEnvironment: 'jsdom',
      testMatch: ['**/*-browser.spec.ts'],
      ...baseConfig,
    },
  ],
};
