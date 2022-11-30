import type { Config } from 'jest';

const baseProjectOptions: NonNullable<Config['projects']>[number] = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
};

const config: Config = {
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
      ...baseProjectOptions,
    },
    {
      displayName: 'BROWSER',
      testEnvironment: 'jsdom',
      testMatch: ['**/*-browser.spec.ts'],
      ...baseProjectOptions,
    },
  ],
};

export default config;
