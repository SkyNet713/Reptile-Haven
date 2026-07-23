# Deploy this Next.js project on Vercel

The App Router lives at the project root in `/app` (not only under `src`), which is what Vercel looks for when detecting Next.js.

## Fastest path (GitHub import)

1. Create a GitHub repo and push the `reptile-haven` folder as the **repo root**.
2. Open: https://vercel.com/new
3. Import that repository.
4. Keep these defaults:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: (leave blank)
   - Install Command: `npm install`
   - Root Directory: `.` (or `reptile-haven` if the repo parent contains this folder)
5. Click Deploy.

## Important

If Vercel says it cannot find `app` or `pages`, your Root Directory is wrong. Set it to the folder that contains:

- `app/`
- `package.json`
- `next.config.ts`
