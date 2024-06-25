module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
      '\\.css$': '<rootDir>/__mocks__/styleMock.js'
    },
    testMatch: [
      "**/__tests__/**/*.js",
      "**/?(*.)+(spec|test).js"
    ],
    moduleFileExtensions: ["js", "jsx"]
  };
  