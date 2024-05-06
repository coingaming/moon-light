const Contribution = `# Contributing

Thanks for your interest in contributing to Moon Light Design System!

Please take a moment to review this document **before submitting a pull request**.

## Pull requests

**Please ask first before starting work on any new features.**

Having your pull request declined after investing a significant amount of time and effort into a new feature can be disheartening. To prevent such situations, we kindly request that contributors first create [an issue](https://github.com/coingaming/moon-light/issues) to initiate a discussion about any new features. This includes tasks like adding new components, modifying tokens, or exposing internal information.

It's crucial to understand that the Moon Design System is a complex ecosystem comprising \`Figma\` files, different versions for \`React\`, \`Elixir\`, and even \`Flutter\`. Ensuring consistency and feature parity across all these platforms involves numerous stakeholders and users who rely on us to avoid breaking changes. Thus, it's vital to respect this process and seek approval **before commencing work on any new features**.

## Monorepo

The Moon Design repo is a monorepo using \`pnpm\` workspaces. Note that we are using \`pnpm\` **version 8**.

## Documentation

Currently, the React documentation (located in \`docs/\`) is a Next.js app that contains examples.

It is essential that each component feature has a corresponding documentation page with code examples.

## Tests

You can run the test suite using the following commands:

\`\`\`sh
pnpm run doc test
\`\`\`

Please ensure that the tests are passing when submitting a pull request.

If you're adding new features to Moon Design, please include tests.

## Commits

Commits follow the [Angular Commit Message Format](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines).

## Branches

As a developer, you will you be branching and merging from \`develop\`, our base branch.

Consider \`origin/master\` to always represent the latest code deployed to production.

## Accessibility

All features should attempt to conform to as many items on The A11Y Project's [Web Accessibility Checklist](https://a11yproject.com/checklist) as possible. If a checkbox can't be completed, the justification should be documented for future reference.

## Right to left

Languages such as Arabic, Hebrew, and Persian are prime examples of "right to left" (RTL) languages, and we have numerous users from these regions.
It is essential that all components support RTL languages to ensure that web content is displayed and navigated correctly for users in these regions.

## Mobile First

Mobile devices are the most commonly used method of browsing the web. When designing and developing your component, always prioritize building with mobile devices in mind first.

If you need to modify the style at specific breakpoints, scale your changes upwards. Start by building for mobile by default and then add media queries for changes on larger screen sizes.

If you want to use CSS Grid, set your component's default display to block. This way, items will stack on mobile and other unsupported devices. Then, implement your grid at larger breakpoints.

## Installation

You only require a \`pnpm install\` in the root directory to install everything you need.

\`\`\`sh
pnpm install
\`\`\`

## Prerelease Process (WIP)

You might want to release a version of your packages before you do an actual release, Changesets lets you do this but there are some caveats because of the complexity that monorepos add that are important to understand.

When you want to do a prerelease, you need to enter prerelease mode. You can do that with the pre enter \`<tag>\`. The tag that you need to pass is used in versions(e.g. 1.0.0-beta.0) and for the npm dist tag.

A prerelease workflow might look something like this:

\`\`\`
pnpm changeset pre enter alpha
pnpm changeset
pnpm changeset version
pnpm install

git checkout -b "feat/prerelease"
git add .
git commit -m "Enter prerelease mode and version packages"

pnpm changeset publish
git push --follow-tags

pnpm changeset pre exit
\`\`\`

## Changeset

All your PRs should contain a [changeset](https://github.com/changesets/changesets) file.

Thanks to this, we can generate version changelogs automatically and do a release coordination.

### How to generate changeset

Run \`pnpm changeset\` in the root of the repository and follow CLI instructions to generate a new changeset.

Example of a bad changeset description:

\`fix: bump version\`

Example of a good changeset description:

\`fix: Component Name - Dark Mode & RTL Flickering [MDS-XXX]\`

\`feat(Table): the cell border customization has been added [MDS-1023]\`

\`feat(Table & Button) - the cell border customization has been added [MDS-1023]\`

\`feat: Table & Button - the cell border customization has been added [MDS-1023]\`

## Release Process

1. Ensure that the \`main\` branch is up-to-date. Run these commands via PRs to the \`main\` branch.
2. Run \`pnpm changeset version\` command. This will bump the versions of the packages previously specified with pnpm changeset (and any dependents of those) and update the changelog files.
3. Run \`pnpm install\`. This will update the lockfile and rebuild packages.
4. Commit the changes. (e.g \`git add .\` and \`git commit -m "chore: bump version X.X.X"\`)
5. Push your changes.
6. Raise a pull request to the \`main\` branch.
7. Obtain approvals and merge pull request.
8. To publish packages to NPM, create a new tag with the version on the \`main\` branch, and then push your tag.

\`\`\`
git checkout main
git tag vX.X.X
git push --tags
\`\`\`

9. Communicate the release to the team!

## Additional materials

[Does It Belong in the System?](https://medium.com/eightshapes-llc/i-made-this-does-it-go-in-the-system-3b67b9894531)
`;
export default Contribution;
