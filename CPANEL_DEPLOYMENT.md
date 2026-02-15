# cPanel Deployment Guide

This project has been configured for deployment to cPanel shared hosting.

## Prerequisites
- Node.js and npm installed locally
- cPanel access with FTP/SFTP or File Manager
- Basic terminal/command line knowledge

## Build Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Build the Project
```bash
npm run build
```

This creates a production-ready build in the `build/` directory with static HTML files.

### 3. Preview Locally (Optional)
```bash
npm run preview
```

## Deployment to cPanel

### Option A: Via FTP/SFTP (Recommended)

1. **Connect to your hosting server** using FTP/SFTP client (FileZilla, WinSCP, etc.)
   - Use credentials provided by your hosting provider

2. **Navigate to public_html directory** (or your domain's public folder)

3. **Upload contents of the `build/` folder**
   - Delete existing `public_html` contents if needed
   - Upload all files and folders from `build/` into `public_html`

4. **Verify .htaccess is in place** (should be included in build output)
   - This handles routing for your SPA

### Option B: Via cPanel File Manager

1. Login to cPanel
2. Open File Manager
3. Navigate to `public_html`
4. Upload the contents of the `build/` folder
5. Verify `.htaccess` is present

### Option C: Via SSH (If available)

```bash
# Connect to your server
ssh user@yourdomain.com

# Navigate to public_html
cd public_html

# Upload build files
# (Use scp or rsync from your local machine)
scp -r ./build/* user@yourdomain.com:~/public_html/
```

## Important Notes

- **Static Adapter**: This project uses `@sveltejs/adapter-static` which pre-renders all pages to static HTML
- **.htaccess**: The build process includes a `.htaccess` file for proper SPA routing
- **No Server-Side Code**: This is a static site - no server-side rendering
- **Database**: If you need backend functionality, you'll need separate server-side setup

## Troubleshooting

### 404 Errors on Page Refresh
- Ensure `.htaccess` is uploaded to `public_html`
- Check that mod_rewrite is enabled on your host (usually is by default)

### Pages Not Loading
- Clear browser cache
- Verify all files were uploaded to `public_html`
- Check file permissions (644 for files, 755 for directories)

### Issues with Assets
- Verify `svelte.config.js` has correct adapter configuration
- Clear the `build/` folder and rebuild: `rm -rf build && npm run build`

## Updating Your Site

To push updates:
1. Make changes to source code
2. Run `npm run build`
3. Upload the new `build/` contents to `public_html`
4. Clear any caching in cPanel if available

## Environment Variables

If you need environment variables, create a `.env` file locally for build-time configuration. Client-side environment variables must be prefixed with `VITE_` and will be inlined into the static build.
