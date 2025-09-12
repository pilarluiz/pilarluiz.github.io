## Pilar Luiz — Personal Website

This is my personal website that I designed and built from scratch. It showcases my work, interests, and background.

### Tech stack

- React (Create React App)
- React Router
- Bootstrap + custom CSS
- Hosted on GitHub Pages

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 8+

Note: Some dev dependencies expect Node 18+. Using older Node versions may produce warnings or build issues.

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000`.

### Build

Create an optimized production build:

```bash
npm run build
```

### Deploy (GitHub Pages)

This repo is configured to deploy to GitHub Pages via the `gh-pages` package.

1. Ensure `homepage` in `package.json` is set to `https://pilarluiz.github.io`.
2. Build and publish:
   ```bash
   npm run deploy
   ```
   This runs `predeploy` (build) and then publishes the `build/` folder to the `gh-pages` branch.

After deployment, give a minute for propagation, then hard-refresh the site:

```
Cmd+Shift+R (macOS) or Ctrl+Shift+R (Windows/Linux)
```

### Troubleshooting

- If you see Browserslist warnings, update the database:
  ```bash
  npx update-browserslist-db@latest
  ```
- If the live site seems stale, try a cache-busting query (e.g., append `?v=2`) or open in a private window.
