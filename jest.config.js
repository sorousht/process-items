module.exports = {
  globals: {
    "ts-jest": {
      tsConfigFile: "tsconfig.json"
    }
  },
  moduleFileExtensions: [
    "ts",
    "js"
  ],
  transform: {
    "^.+\\.(ts)$": "ts-jest"
  },
  testMatch: [
    "**/*.spec.(ts|js)"
  ],
  testEnvironment: "node"
};