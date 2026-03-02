# Chugz Site

Landing page for Chugz - a social nightlife app.

## Development

```bash
npm install
npm run dev
```

Then open: `http://localhost:3000/ChugzSite/`

## Build

```bash
npm run build
```

## Preview Build Locally

```bash
npm run build
npm run preview
```

Then open: `http://localhost:4173/ChugzSite/`

## Deploy to GitHub Pages

The site is automatically deployed to GitHub Pages when you push to the `main` or `master` branch using GitHub Actions.

The site will be available at: `https://yonatan-maman.github.io/ChugzSite/`

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder contains the built files. 

3. Configure GitHub Pages:
   - Go to your repository settings
   - Navigate to Pages
   - Set Source to "GitHub Actions" (recommended) or "Deploy from a branch"
   - If using branch deployment, select the `gh-pages` branch with `/dist` folder

### Important Notes for GitHub Pages

- The site uses base path `/ChugzSite/` - make sure your repository name matches
- All routes work with the base path: `/ChugzSite/about`, `/ChugzSite/join`, etc.
- The 404.html file handles client-side routing for direct URL access

## Routes

- `/ChugzSite/` - Home page
- `/ChugzSite/join?barId=xxx&tableId=yyy` - Join bar/table page with deep linking
- `/ChugzSite/about` - About us page
- `/ChugzSite/terms` - Terms of use
- `/ChugzSite/privacy` - Privacy policy

## Deep Linking

The site supports both:
- Custom URL Scheme: `chugz://join?barId=xxx&tableId=yyy`
- HTTPS Universal/App Link: `https://chugz.app/join?barId=xxx&tableId=yyy`
