const types = [
  'feat',
  'fix',
  'docs',
  'style',
  'refactor',
  'perf',
  'test',
  'build',
  'release',
  'chore',
  'revert'
];

module.exports = {
  extends: [
    '@commitlint/config-conventional'
  ],
  rules: {
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always', types],
    'scope-case': [0, 'always'],
    'subject-empty': [2, 'never']
  }
};
