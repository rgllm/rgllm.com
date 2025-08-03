# rgllm.com Monorepo

This is a monorepo containing multiple projects for the rgllm.com ecosystem.

## 📁 Project Structure

```
rgllm.com/
├── src/                    # Main Next.js website
│   ├── app/               # Next.js 15 app directory
│   ├── components/        # React components
│   └── lib/              # Utilities and data
├── packages/             # Workspace packages
│   └── votes-api/        # Cloudflare Worker for voting system
└── ...
```

## 🚀 Getting Started

### Prerequisites

- [Bun](https://bun.sh/) >= 1.0.0
- [Node.js](https://nodejs.org/) >= 18.0.0
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/) >= 3.0.0

### Installation

```bash
# Install all dependencies
bun install
```

## 🛠️ Development

### Main Website (Next.js)

```bash
# Start development server
bun run dev

# Build for production
bun run build

# Deploy to Cloudflare Pages
bun run deploy
```

The website will be available at `http://localhost:3000`

### Votes API (Cloudflare Worker)

```bash
# Start votes API development server
bun run votes:dev

# Run votes API tests
bun run votes:test

# Deploy votes API to Cloudflare Workers
bun run votes:deploy
```

The votes API dev server will be available at `http://localhost:8787`

## 🧪 Testing

```bash
# Test the main website
bun run lint

# Test the votes API
bun run votes:test
```

## 📦 Packages

### `@rgllm/votes-api`

A serverless voting system built with Cloudflare Workers and Durable Objects. Provides:

- **Upvote/Downvote System**: Simple binary voting mechanism
- **Global Edge Distribution**: Sub-100ms response times worldwide
- **Persistent Storage**: Durable Objects ensure data persistence
- **TypeScript Support**: Full type safety

**API Endpoint**: `https://votes.rgllm.com`

## 🚀 Deployment

### Website

The main website is deployed using Cloudflare Pages with OpenNext.js:

```bash
bun run deploy
```

### Votes API

The votes API is deployed as a Cloudflare Worker:

```bash
bun run votes:deploy
```

## 📚 Documentation

- **Main Website**: See [src/README.md](./src/README.md) (if exists)
- **Votes API**: See [packages/votes-api/README.md](./packages/votes-api/README.md)

## 🔧 Workspace Commands

All packages can be managed from the root directory:

```bash
# Install dependencies for all packages
bun install

# Run commands in specific packages
bun --filter @rgllm/votes-api run test
bun --filter rgllm.com run build

# Or use the predefined scripts
bun run votes:dev
bun run votes:test
bun run votes:deploy
```
