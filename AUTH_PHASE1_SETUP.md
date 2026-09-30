# ChainLab Authentication — Phase 1

## What is included

- `/login`
- `/signup`
- `/dashboard`
- Responsive UI
- Course progress overview for 30 sections
- Links to achievements, certificate, and learning modules

## Important

These pages are the UI foundation. The forms are intentionally not pretending to authenticate users yet.

The real authentication layer will use:

- Better Auth
- Cloudflare D1
- Email + password accounts
- Database-backed sessions
- Protected `/dashboard`

## Install the authentication package

From the ChainLab project root:

```bash
npm install better-auth
```

## Cloudflare database

We will create a D1 database named:

```text
chainlab-db
```

and bind it as:

```text
DB
```

The next phase will add the D1 schema, Better Auth server configuration, auth API route, client, and protected dashboard.

## Course progress

The existing ChainLab course has:

- Blockchain: 8 sections
- Solana: 8 sections
- Meme Coins: 7 sections
- Security: 7 sections

Total: 30 sections.

The account system will eventually move this progress from browser-only localStorage into account-backed database records.
