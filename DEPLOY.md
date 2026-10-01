# Fix GitHub Pages deploy (404 error)

If the workflow fails with **“Failed to create deployment (status: 404)”**, GitHub Pages is not turned on yet. Only the **repository owner** can do this (log in as **divyanshudhiman**).

## One-time setup (about 1 minute)

1. Open **[Settings → Pages](https://github.com/divyanshudhiman/grz_virtual_tryon_html/settings/pages)** for this repo.

2. Under **Build and deployment → Source**, choose **Deploy from a branch**.

3. Set:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`

4. Click **Save**.

5. Re-run the workflow: **[Actions](https://github.com/divyanshudhiman/grz_virtual_tryon_html/actions)** → **Deploy to GitHub Pages** → **Run workflow**,  
   or push any small commit to `main`.

After the workflow succeeds, wait 1–2 minutes, then open:

**https://divyanshudhiman.github.io/grz_virtual_tryon_html/**

## Why the old error happened

The previous workflow used **GitHub Actions** as the Pages source (`actions/deploy-pages`). That mode returns **404** until **Settings → Pages → Source** is set to **GitHub Actions**. This repo now publishes the built site to the **`gh-pages`** branch instead, which pairs with **Deploy from a branch** above.

## Videos on the live site

Demo MP4s stay in the repo (Git LFS). The site loads them from GitHub raw URLs so the Pages bundle stays under size limits.
