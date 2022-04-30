module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  roots: ['./src'],
  setupFilesAfterEnv: ['./jest.setup.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.tsx$': 'ts-jest',
  },
  testMatch: ['**/*.test.(ts|tsx)'],
  moduleFileExtensions: ['tsx', 'ts', 'js', 'json', 'node', 'css'],
  moduleDirectories: ['src', 'node_modules'],
  testPathIgnorePatterns: ['node_modules'],

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },

  clearMocks: true,
  testEnvironmentOptions: { resources: 'usable' },

  // collectCoverage: true,
  // coverageDirectory: 'coverage',

  globals: {
    'ts-jest': {
      tsconfig: `tsconfig.jest.json`,
    },
  },
}
