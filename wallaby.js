module.exports = function (wallaby) {
  return {
    files: [
      'src/Dictionary.ts'
    ],
    tests: [
      'test/Dictionary.test.ts'
    ],
    testFramework: 'mocha',
    env: {
        type: 'node'
    },
    debug: true
  };
};