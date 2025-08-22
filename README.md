# Bun Monorepo

A monorepo combining Next.js, Elysia, Bun, and Biome for a full-stack modern JavaScript/TypeScript project.

## Prerequisites

- [Bun](https://bun.sh) v1.2.20 or later installed
- Node.js (for some Biome tools compatibility)
- Git

## Project Structure

```
Bun Monorepo
├── bun.lock                # Central dependency lockfile managed by Bun
├── package.json            # Root package.json with workspaces config
├── apps                    # Workspace folder containing sub-projects
│   ├── web                 # Next.js frontend
│   ├── server              # Elysia backend server
│   └── ...                 # Other apps or packages
├── tsconfig.json           # Root TypeScript config (optional)
├── .biome.config.json      # Biome configuration for linting and formatting
└── README.md               # This file
```

## Installing Dependencies

Run this at the root of the monorepo to install all dependencies for all workspaces and hoist shared ones:

```
bun install
```

## Running the Projects

### Next.js frontend app

From the root, run:

```
bun run dev:next
```

This starts the Next.js app in development mode at `http://localhost:3000`.

### Elysia backend app

From the root, run:

```
bun run dev:elysia
```

This starts the Elysia server at `http://localhost:3001`.

### Running Elysia UDP server

The Elysia app also runs a UDP server on port 41234 alongside HTTP APIs.

## Scripts

In the root `package.json`, the following scripts are configured:

```
"scripts": {
  "dev:next": "bun run --cwd apps/nextjs-app dev",
  "dev:elysia": "bun run --cwd apps/elysia-app start",
  "lint": "biome check",
  "format": "biome format"
}
```

- `dev:next` - run Next.js frontend
- `dev:elysia` - run Elysia backend
- `lint` - check code with Biome linter
- `format` - format code with Biome formatter

## Code Quality with Biome

Biome is used as the integrated linter and formatter for consistent code quality across your TypeScript and JavaScript code.

- Run `bun run lint` to check your code for issues.
- Run `bun run format` to automatically fix formatting.

## Additional Notes

- This monorepo uses Bun workspaces to share a single `node_modules` across multiple projects.
- Next.js may show a warning about workspace root; consider setting `outputFileTracingRoot` in `next.config.js` to resolve it.
- The UDP server on `elysia-app` listens on port 41234 alongside HTTP APIs on port 3001.

## Resources

- [Bun Documentation](https://bun.sh/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Elysia Framework](https://elysiajs.com)
- [Biome Linter](https://biomejs.dev)

---

Happy coding! 🚀
