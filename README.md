# Wokku TanStack Start Starter

Bare-bones [TanStack Start](https://tanstack.com/start) starter for one-click deploys on [Wokku](https://wokku.cloud) — a managed Dokku platform that lets you ship full-stack apps via `git push` without managing servers. TanStack Start is a type-safe, SSR-first React framework built on Nitro, from the authors of TanStack Query and TanStack Router.

## One-Click Deploy on Wokku

1. Sign in at [wokku.cloud](https://wokku.cloud)
2. Create a new app, choose **Deploy from Git**, and point it at this repo
3. Wokku auto-detects the Node.js buildpack, runs `npm run build`, and starts the SSR server

## Local Development

```bash
npm install
npm run dev        # dev server on http://localhost:3000
```

## Production Build

```bash
npm run build      # outputs to .output/
npm run start      # runs .output/server/index.mjs
```

The server reads `PORT` and `HOST` from the environment automatically — Dokku injects `PORT` at runtime.

## Stack

- [TanStack Start](https://tanstack.com/start) — SSR React framework (Nitro-based)
- [TanStack Router](https://tanstack.com/router) — file-based, type-safe routing
- [Nitro](https://nitro.build) — server engine
- [Vite](https://vite.dev) — build tool
