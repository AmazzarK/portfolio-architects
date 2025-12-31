# Quick Reference: Vite + React + TypeScript Setup for Hostinger

This document provides a quick reference for the Vite configuration and deployment setup for Hostinger.

## Key Configuration Files

### 1. vite.config.ts
```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // Use relative paths for assets - required for Hostinger deployment
  base: "./",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
```

**Key Point**: `base: "./"` ensures all asset paths are relative (e.g., `./assets/file.js` instead of `/assets/file.js`)

### 2. package.json Scripts
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

### 3. .htaccess (in public/ folder, copied to dist/)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

**Purpose**: Ensures React Router works correctly by redirecting all requests to index.html

## Required npm Packages

All dependencies are already listed in `package.json`. Install with:

```bash
npm install
```

### Core Dependencies
- `react` + `react-dom` - React framework
- `react-router-dom` - Client-side routing
- `typescript` - TypeScript support
- `vite` - Build tool and dev server
- `@vitejs/plugin-react-swc` - Fast React refresh

### UI Libraries (already included)
- `@radix-ui/*` - Headless UI components
- `lucide-react` - Icons
- `tailwindcss` - CSS framework
- Various other UI components from shadcn/ui

## Folder Structure After Build

```
dist/
├── index.html              # Entry point (uses relative paths like ./assets/...)
├── .htaccess               # Server configuration for React Router
├── assets/                 # All bundled JS, CSS, and images
│   ├── index-[hash].js     # Main JavaScript bundle (minified)
│   ├── index-[hash].css    # Compiled CSS (minified)
│   ├── profile-[hash].png  # Optimized images
│   └── me-[hash].jpg
├── favicon.ico             # Site favicon
├── robots.txt              # SEO configuration
├── cv-en.pdf              # Static assets from public/
├── cv-fr.pdf
├── cv-de.pdf
└── placeholder.svg
```

## Deployment Commands

### Development
```bash
npm run dev
# Runs at http://localhost:8080
```

### Production Build
```bash
npm run build
# Creates optimized build in dist/ folder
```

### Preview Build Locally
```bash
npm run preview
# Preview production build at http://localhost:4173
```

### Lint Code
```bash
npm run lint
# Check code quality with ESLint
```

## Hostinger Deployment Steps (Quick)

1. **Install**: `npm install`
2. **Build**: `npm run build`
3. **Upload**: Copy everything from `dist/` to Hostinger's `public_html/`
4. **Verify**: Visit your domain to confirm deployment

## Important Notes

### Why `base: "./"` is Required
- Hostinger may serve your site from a subdirectory or different domain structure
- Absolute paths (`/assets/file.js`) fail if not at root domain
- Relative paths (`./assets/file.js`) work anywhere

### Why .htaccess is Needed
- React Router uses client-side routing (BrowserRouter)
- Without .htaccess, refreshing on `/about` would show 404
- .htaccess redirects all requests to index.html, letting React handle routing

### Build Output
- TypeScript files (`.tsx`, `.ts`) are compiled to JavaScript
- All imports are bundled into a single JS file with hash for cache-busting
- CSS is extracted, minified, and placed in assets with hash
- Images and fonts are optimized and copied to assets
- Files from `public/` folder are copied as-is to dist root

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank page | Ensure `base: "./"` is in vite.config.ts |
| 404 on refresh | Add .htaccess file to public/ folder |
| Assets not loading | Check file permissions (644) and verify upload |
| Old version showing | Clear browser cache (Ctrl+F5) |

## Additional Resources

- **Full Deployment Guide**: See [HOSTINGER-DEPLOYMENT.md](./HOSTINGER-DEPLOYMENT.md)
- **Vite Documentation**: https://vitejs.dev
- **React Router**: https://reactrouter.com
- **Hostinger Support**: https://support.hostinger.com
