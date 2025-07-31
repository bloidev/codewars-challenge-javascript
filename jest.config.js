// name file jest.config.js
module.exports = {
  testEnvironment: 'node',
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'json'],
  testMatch: ['**/*.test.js'],
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
};