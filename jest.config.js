module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    testMatch: ['**/__tests__/**/*.js'],
    testPathIgnorePatterns: ['/node_modules/']
  };