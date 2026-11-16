# GlowTheory

This folder is the complete GitHub-ready site. Push the contents of this folder to a new GitHub repository.

GlowTheory is a frontend-only skincare ecommerce demonstration built with HTML, CSS, and vanilla JavaScript. It is designed for realistic browsing and Microsoft Clarity CRO training; no real orders or payments are processed.

## Run locally

Open `index.html` in a browser, or serve this folder with any static file server. The site uses relative paths and is ready for GitHub Pages.

## Included

- `index.html`, `shop.html`, `product.html`
- Responsive sticky navigation and mobile menu
- Search, category filtering, sorting, product count, and clear filters
- URL-driven product detail pages (`product.html?id=moisturizer`)
- Product gallery thumbnails and zoom toggle
- Cart drawer with quantity controls, removal, subtotal, demo shipping, and `localStorage` persistence
- Demo checkout alert clearly marked as non-payment
- Expandable FAQ, fictional testimonial labels, accessible button labels, alt/ARIA descriptions, and natural page navigation
- Provided PNG assets organized under `assets/images/`

## Microsoft Clarity

The supplied Microsoft Clarity tracking snippet is already installed on all three HTML pages using project ID `zena3ykt2j`. Do not fabricate analytics events; normal navigation, clicks, scrolling, cart actions, and form interactions remain observable through Clarity.

## GitHub Pages

Push the repository to GitHub, then choose **Settings → Pages → Deploy from a branch**, select the branch and root folder, and save. Because all links and assets are relative, the same files work from a project subpath.

### Git commands

From PowerShell, run these commands after creating an empty GitHub repository:

```powershell
cd "C:\Users\User\Documents\Microsoft-clarity-website\website-1\glowtheory-cro-demo"
git init
git add .
git commit -m "Create GlowTheory skincare storefront"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

If Git asks you to authenticate, use GitHub Desktop or GitHub CLI, or use a GitHub personal access token instead of a password. Never commit a token to this repository.

After pushing, open the repository on GitHub and go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then click **Save**. The public URL will normally be:

`https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPOSITORY_NAME/`

GitHub may take a few minutes to publish the first deployment.

## Asset note

The supplied PNGs were presentation boards, so CSS background cropping and object positioning are used to focus the supplied visuals without stretching them. Replace the organized files under `assets/images/` with clean exports later if desired; the product data object already centralizes their paths.
