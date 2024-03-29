const libName = 'bar';
const libPath = `libs/${libName}`;
const importPath = `@monoleasa-v/${libName}`;

module.exports = {
  name: libName,
  pkgRoot: `dist/${libPath}`,
  tagFormat: libName + '-v${version}',
  commitPaths: [`${libPath}/*`],
  assets: [`${libPath}/README.md`, `${libPath}/CHANGELOG.md`],
  dryRun: false,
  ci: false,
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${libPath}/CHANGELOG.md`,
      },
    ],
    '@semantic-release/npm',
    ["@semantic-release/exec", {
      prepareCmd: ` PACKAGE_NAME=${importPath} VERSION=\${nextRelease.version} npm run update-deps && VERSION=\${nextRelease.version} npm run bump-version:${libName}`,
    }],
    [
      '@semantic-release/git',
      {
        assets: [`${libPath}/package.json`, `${libPath}/CHANGELOG.md`],
        message:
          `chore(release): ${libName}` +
          '-v${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
