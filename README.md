

Multi-page Next.js site for reptile care guides and a personal keeper dashboard.

## Species covered

- Bearded dragons
- Snakes
- Geckos
- Monitor lizards
- Chameleons

Each guide includes diet, possible diseases, minimum habitat, lighting, humidity, substrate, substitutes/short-term options, health-risk signs, and schedule defaults.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

### Option A — Import from GitHub

1. Push this folder to a GitHub repository.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import the repo.
4. Framework Preset: **Next.js** (auto-detected).
5. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel
```

### Root Directory

If the repo root is this project folder, leave Root Directory blank.
If this app lives in a subfolder, set Root Directory to `reptile-haven`.

## Notes

Keeper accounts and personal reptiles are stored in the browser (`localStorage`) for this demo — no backend database required.
