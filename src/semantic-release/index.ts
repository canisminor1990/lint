const { createConfig } = require('semantic-release-config-gitmoji/lib/createConfig');

export default createConfig({
  changelogTitle: `<a name="readme-top"></a>

# Changelog`,
  releaseRules: [
    {
      type: '*feat*',
      release: 'minor',
    },
    {
      type: '*fix*',
      release: 'patch',
    },
    {
      type: '*perf*',
      release: 'patch',
    },
    {
      type: '*style*',
      release: 'patch',
    },
    {
      type: '*refactor*',
      release: 'patch',
    },
    {
      type: '*build*',
      release: 'patch',
    },
    { type: '*docs*', scope: 'README', release: 'patch' },
    { type: '*docs*', scope: 'README.md', release: 'patch' },
    { type: '*docs*', release: false },
    {
      type: '*BREAKING CHANGE*',
      release: 'major',
    },
    {
      subject: '*BREAKING CHANGE*',
      release: 'major',
    },
    { subject: '*[force release]*', release: 'patch' },
    { subject: '*[skip release]*', release: false },
  ],
});
