# Davidson Well Drilling

Responsive React website for Davidson Well Drilling, Inc.

## Run locally

1. Run `npm install`.
2. Copy `.env.example` to `.env` and configure SMTP credentials.
3. Start the contact API with `npm run server`.
4. Start the website with `npm run dev`.

The Vite server proxies `/api` requests to the Node contact API on port `3001`.

## Checks

- `npm run lint`
- `npm run build`
