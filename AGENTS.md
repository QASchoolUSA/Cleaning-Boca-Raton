<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Single-service **Next.js 16** marketing + booking site for **Cleaning Boca Raton**, deployed to Cloudflare Workers via OpenNext.

### Services

| Service | Command | Port |
|---|---|---|
| Next.js web app | `pnpm dev` | 3000 |

### Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Purpose |
|---|---|
| `BOOKING_BROOM_URL` | Optional; defaults to `https://app.bookingbroom.com` (set only for local BB) |
| `BOOKING_BROOM_API_KEY` | Per-site API key for slug `boca-raton` |
| `BOOKING_BROOM_SITE_SLUG` | Not needed; hardcoded to `boca-raton` |
| `NEXT_PUBLIC_SITE_URL` | Production URL (`https://cleaningbocaraton.com`) |

Bookings and quotes forward to Booking Broom via `/api/emails/*` routes. Live pricing fetches from Booking Broom `/api/pricing`.

### Non-obvious notes

- `pnpm lint` may report pre-existing warnings; do not treat as setup failure unless introduced by your change.
- `pnpm build` uses OpenNext for Cloudflare; `pnpm build:next` is plain Next.js build for local verification.
- `pnpm test:pricing` and `pnpm test:booking` run unit tests for calculator and booking idempotency.
