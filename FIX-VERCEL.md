# Fix: "Couldn't find any pages or app directory"

This error means Vercel is looking in the wrong folder.

## Fix A (most common) — set Root Directory

1. Open your project on [vercel.com](https://vercel.com)
2. Click **Settings**
3. Click **General**
4. Find **Root Directory**
5. Click **Edit**
6. Look at your GitHub folders. Choose the folder that contains BOTH:
   - `app`
   - `package.json`
   
   Often that folder is named `reptile-haven`
7. Save
8. Go to **Deployments**
9. On the latest failed deployment, click the **⋯** menu → **Redeploy**
10. Confirm Redeploy

## Fix B — re-upload so files are at the top of GitHub

Your GitHub repo homepage should show these at the **top level** (not inside another folder):

- app
- src
- public
- package.json
- next.config.ts
- vercel.json

If you instead see only one folder (like `reptile-haven`) and have to click into it to see `app`, use Fix A or delete the repo files and upload the **contents** of the project folder again (not the outer folder itself).
