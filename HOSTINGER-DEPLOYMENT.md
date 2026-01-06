# Hostinger Deployment Guide

This guide explains how to build and deploy this React + TypeScript + Vite project to Hostinger.

## Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)
- A Hostinger hosting account with access to File Manager or FTP

## Step 1: Install Dependencies

Before building the project, install all required dependencies:

```bash
npm install
```

This will install all packages listed in `package.json`, including:
- React and React DOM
- TypeScript
- Vite and build tools
- UI components and libraries

## Step 2: Build for Production

Run the build command to compile TypeScript, bundle JavaScript, and optimize assets:

```bash
npm run build
```

This command:
- Compiles all `.tsx` and `.ts` files to JavaScript
- Bundles and minifies JavaScript files
- Processes and optimizes CSS
- Copies static assets from `public/` folder
- Generates optimized production files in the `dist/` folder

### Available Scripts

- `npm run dev` - Start development server (localhost:8080)
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

## Step 3: Project Structure After Build

After running `npm run build`, the `dist/` folder will contain:

```
dist/
├── index.html              # Main HTML file (entry point)
├── assets/                 # Bundled and optimized assets
│   ├── index-[hash].js     # Main JavaScript bundle
│   ├── index-[hash].css    # Compiled and minified CSS
│   ├── profile-[hash].png  # Optimized images
│   └── ...                 # Other assets
├── favicon.ico             # Site favicon
├── robots.txt              # SEO robots file
├── cv-en.pdf              # Static PDF files
├── cv-fr.pdf
├── cv-de.pdf
└── placeholder.svg         # SVG assets
```

**Note**: The `[hash]` in filenames is a unique identifier for cache busting.

## Step 4: Upload to Hostinger

### Option A: Using File Manager (Recommended for beginners)

1. Log in to your Hostinger control panel (hPanel)
2. Navigate to **File Manager**
3. Go to your website's `public_html` directory
4. **Delete all existing files** in `public_html` (if any)
5. **Upload all contents** from the `dist/` folder to `public_html`
6. Make sure files are in the root of `public_html`, not in a subdirectory

**Important**: Upload the **contents** of the `dist/` folder, not the folder itself.

Your `public_html` should look like:
```
public_html/
├── index.html
├── assets/
├── favicon.ico
├── robots.txt
└── ...
```

### Option B: Using FTP

1. Use an FTP client (FileZilla, Cyberduck, etc.)
2. Connect to your Hostinger account using FTP credentials
3. Navigate to `public_html`
4. Upload all contents from `dist/` folder
5. Ensure correct file permissions (644 for files, 755 for directories)

## Step 5: Verify Deployment

1. Visit your domain (e.g., https://yourdomain.com)
2. Check that the site loads correctly
3. Test navigation between pages
4. Verify images and styles load properly
5. Check browser console for any errors

## Important Configuration Notes

### Vite Configuration for Hostinger

The `vite.config.ts` is configured with `base: "./"` to use relative paths:

```typescript
export default defineConfig(() => ({
  base: "./",  // Use relative paths instead of absolute paths
  // ... other config
}));
```

This is **critical** for Hostinger deployment because:
- Hostinger may serve your site from a subdirectory
- Relative paths work regardless of the domain or subdirectory structure
- Absolute paths (`/assets/...`) would fail if not at domain root

### React Router Configuration

The app uses `BrowserRouter` which requires proper server configuration. The `.htaccess` file is automatically included in the build output (located in `public/.htaccess` and copied to `dist/.htaccess` during build).

This file ensures all routes are handled by `index.html` (client-side routing), so refreshing pages like `/about` or `/projects` will work correctly instead of showing a 404 error.

**Note**: The `.htaccess` file is already included when you upload the `dist/` folder contents, so you don't need to create it manually.

## Troubleshooting

### Issue: Blank page or "404 Not Found"
- **Solution**: Ensure `index.html` is in the root of `public_html`
- Verify `.htaccess` is configured correctly

### Issue: Assets not loading (images, CSS, JS)
- **Solution**: Check that `base: "./"` is in `vite.config.ts`
- Verify `assets/` folder was uploaded correctly
- Check file permissions (should be 644)

### Issue: Page works but refresh shows 404
- **Solution**: Add `.htaccess` file as described above
- Ensure mod_rewrite is enabled on your hosting

### Issue: Old version still showing after deploy
- **Solution**: Clear browser cache or use hard refresh (Ctrl+F5)
- The hash in filenames should prevent caching issues

## Updating the Site

To update your deployed site:

1. Make changes to your source code locally
2. Run `npm run build` to create a fresh build
3. Upload the new `dist/` contents to `public_html` (overwrite existing files)
4. The hash in asset filenames will change, forcing browsers to load new files

## Performance Tips

- The build process automatically optimizes images and code
- Gzip compression is recommended (usually enabled by default on Hostinger)
- Consider enabling Cloudflare for additional CDN benefits (available in Hostinger)

## Support

For Hostinger-specific issues:
- Check Hostinger's documentation: https://support.hostinger.com
- Contact Hostinger support through hPanel

For build/code issues:
- Check the browser console for errors
- Review Vite documentation: https://vitejs.dev
- Ensure all dependencies are up to date
