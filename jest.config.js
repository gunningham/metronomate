module.exports = {
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  moduleNameMapper: {
    '@atoms(.*)$': '<rootDir>/src/components/atoms/$1',
    '@molecules(.*)$': '<rootDir>/src/components/molecules/$1',
    '@organisms(.*)$': '<rootDir>/src/components/organisms/$1',
    '@pages(.*)$': '<rootDir>/src/pages/$1',
    '@constants(.*)$': '<rootDir>/src/constants/$1',
    '@resources(.*)$': '<rootDir>/src/resources/$1',
    '@services(.*)$': '<rootDir>/src/services/$1',
    '@helpers(.*)$': '<rootDir>/src/helpers/$1',
    '@actions(.*)$': '<rootDir>/src/actions/$1',
    '@reducers(.*)$': '<rootDir>/src/reducers/$1'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer'
  }
}
