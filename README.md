# Virtual Try-On — Presentation Site

React presentation for the virtual try-on experience: sample videos, plain-language benefits, and a link to the **live fitting room**.

**Live site (GitHub Pages):** [https://divyanshudhiman.github.io/grz_virtual_tryon_html/](https://divyanshudhiman.github.io/grz_virtual_tryon_html/)

**Try-on app:** [https://grzdemo.grazitti.com/virtual-try-on-fe/split](https://grzdemo.grazitti.com/virtual-try-on-fe/split)

## Stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS 4

## Prerequisites

**Node.js 18+**

```bash
nvm use 20
node -v
```

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Demo videos

Files live in `public/videos/` (tracked with **Git LFS**):

| File | Demo |
|------|------|
| `combine- caps.mp4` | Caps |
| `combine-hoodies.mp4` | Hoodies |
| `combine-t-shirt.mp4` | T-shirt |
| `combinine-glasses.mp4` | Glasses |

After clone: `git lfs pull`

## GitHub Pages

1. Open [Repository Settings → Pages](https://github.com/divyanshudhiman/grz_virtual_tryon_html/settings/pages)
2. **Build and deployment → Source:** **GitHub Actions**
3. Push to `main` — workflow deploys the site (videos stream from the repo via Git LFS; they are not bundled in the Pages artifact)

Site URL: **https://divyanshudhiman.github.io/grz_virtual_tryon_html/**

## Build locally

```bash
npm run build
npm run preview
```

## Repository

`git@github.com:divyanshudhiman/grz_virtual_tryon_html.git`
