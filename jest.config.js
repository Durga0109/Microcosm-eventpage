module.exports = {
    testEnvironment: 'jsdom',  // For React testing environment
    setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],  // For extending jest with custom matchers
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest",  // To support TypeScript files
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],  // Ensure proper file extensions are considered
  };
  