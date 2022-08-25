/* module.exports = {
    setupFilesAfterEnv: ['./src/jest.setupTest.js']
} */

const config  = {
  setupFilesAfterEnv: ["<rootDir>jest.setupTests.js"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
    "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
    "module_name_(.*)": "<rootDir>/substituted_module_$1.js",
    "assets/(.*)": [
      "<rootDir>/src/assets/$1",
    ]
  }
};

module.exports = config;
