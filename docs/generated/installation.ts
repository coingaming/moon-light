const Installation = `# Moon Light Design System

## Installing Moon Light Design

0. [Install pnpm](https://pnpm.io/installation):

   \`\`\`sh
   corepack enable
   \`\`\`

   Note that we are using pnpm version 8

   \`\`\`
   corepack prepare pnpm@8.15.6 --activate
   \`\`\`

1. Install dependencies and link local packages together:

   \`\`\`sh
   pnpm install
   \`\`\`

2. Compile and build all packages:

   \`\`\`sh
   pnpm run build
   \`\`\`

3. Run storybook for development:

   \`\`\`sh
   pnpm run doc dev
   \`\`\`

4. Build and run storybook for production at \`localhost:80\`:

   \`\`\`sh
   pnpm run doc build
   \`\`\`

   \`\`\`sh
   pnpm run doc start
   \`\`\`

5. Run e2e tests:

   \`\`\`sh
   pnpm run doc test
   \`\`\`

## Architecture

Our [pnpm](https://pnpm.io/motivation) monorepo publishes key layers as individual \`@heathmont/moon-\` packages:

1. [\`docs/\`](#docs) - Style guide and documentation
2. [\`packages/\`](#design-system) - Moon Design System

Packages are developed inside their respective \`src\` folders, utilizing [pnpm workspaces](https://pnpm.io/workspaces) for dependency linking/sharing. The distributable code is generated in each package's lib by the TypeScript compiler.

## Contributing

If you're interested in contributing to Moon Design, please read our [contributing docs](CONTRIBUTING.md) before submitting a pull request.
`; 
export default Installation;