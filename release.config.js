module.exports = {
  branches: ['main'],
  preset: 'conventionalcommits',
  dryRun: false,
  ci: false,
  presetConfig: {
    types: [
      { type: 'feat', section: 'Features' },
      { type: 'fix', section: 'Bug Fixes' },
      { type: 'chore', section: 'Chores' },
      { type: 'docs', hidden: true },
      { type: 'style', hidden: true },
      { type: 'refactor', section: 'Refactoring' },
      { type: 'perf', section: 'Breaking Changes' },
      { type: 'test', hidden: true },
    ],
  },
  releaseRules: [
    { type: 'refactor', release: 'patch' },
    { type: 'feat', release: 'minor'},
    { type: 'perf', release: 'major' },
  ],
};
