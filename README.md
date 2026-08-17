# Eleftheriou Associates website

Static Next.js site. Local: `npm run dev`. Production is a static export for GitHub Pages.

## GitHub Pages

This repository is the website only. Push `main` and the Actions workflow publishes `out/` to Pages.

1. Create an empty GitHub repo (do not add a README).
2. In this folder:

```bash
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

3. Repo **Settings → Pages → Source**: GitHub Actions.

The live URL is `https://YOUR_USER.github.io/YOUR_REPO/`.
