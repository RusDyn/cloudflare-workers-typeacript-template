# Cloudflare Workers TypeScript Template

A modern, fully-featured TypeScript template for Cloudflare Workers, optimized for AI tools and best development practices.

## Features

- **TypeScript Support**: Full TypeScript support with strict type checking
- **Cloudflare Workers**: Ready to deploy on Cloudflare's edge network
- **Testing**: Configured with Vitest and Miniflare for testing
- **Linting & Formatting**: ESLint with unicorn plugin and Prettier for consistent code style
- **Git Hooks**: Husky, lint-staged, and commitlint for code quality enforcement
- **AI Tool Optimized**: Configured for Cline, Windsurf, and Cursor
- **VSCode Integration**: Recommended settings and extensions

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (v7 or later)
- [Cloudflare account](https://dash.cloudflare.com/sign-up) (for deployment)

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/RusDyn/cloudflare-workers-typescript-template.git
cd cloudflare-workers-typescript-template

# Install dependencies
npm install
```

### Development

```bash
# Start local development server
npm run dev

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Lint code
npm run lint

# Format code
npm run format
```

### Deployment

```bash
# Deploy to Cloudflare Workers
npm run deploy
```

## Project Structure

```
cloudflare-workers-typescript-template/
├── .husky/                 # Git hooks
├── .vscode/                # VSCode configuration
├── src/                    # Source code
│   └── index.ts            # Entry point
├── test/                   # Test files
│   └── index.test.ts       # Tests for index.ts
├── .eslintrc.js            # ESLint configuration
├── .gitignore              # Git ignore rules
├── .lintstagedrc.json      # Lint-staged configuration
├── .prettierrc             # Prettier configuration
├── commitlint.config.js    # Commitlint configuration
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vitest.config.ts        # Vitest configuration
└── wrangler.toml           # Cloudflare Workers configuration
```

## Cloudflare Workers Limitations

When developing with Cloudflare Workers, be aware of these limitations:

- **Memory**: Limited to 128MB per worker
- **CPU**: Limited execution time (50ms on free plan)
- **Storage**: No filesystem access
- **Environment**: V8 isolated environment with Node.js compatibility enabled
- **Request size**: Limited to 100MB
- **Response size**: Limited to 10MB

For more details, see the [Cloudflare Workers limits documentation](https://developers.cloudflare.com/workers/platform/limits/).

## Linting and Code Style

This template uses ESLint with the unicorn plugin for strict and readable code. The configuration enforces:

- TypeScript best practices
- Consistent code style
- Readable and maintainable code
- Prevention of common errors

You can customize the rules in `.eslintrc.js` to match your team's preferences.

## Git Hooks

The template includes the following Git hooks:

- **pre-commit**: Runs lint-staged to lint and format staged files
- **commit-msg**: Validates commit messages using commitlint

## AI Tool Integration

This template is optimized for the following AI tools:

- **Cline**: Configured for optimal code suggestions
- **Windsurf**: Ready for AI-assisted development
- **Cursor**: Optimized for AI pair programming

## VSCode Extensions

Recommended extensions are configured in `.vscode/extensions.json`. Install them for the best development experience.

## License

ISC
