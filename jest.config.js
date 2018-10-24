module.exports = {
  preset: 'ts-jest',
  moduleFileExtensions: ['ts', 'js', 'json'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  testMatch: [
    '**/test/**/*.spec.(ts|js)',
  ],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
};
