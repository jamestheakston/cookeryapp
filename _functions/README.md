# Cloudflare Pages Functions - Maintenance Mode

This directory contains Cloudflare Pages Functions for the Cookery website.

## Maintenance Mode

The `_middleware.js` file provides a maintenance mode feature that allows you to temporarily take the site offline for maintenance.

### How to Enable Maintenance Mode

1. Go to your Cloudflare Pages dashboard
2. Navigate to your project settings
3. Go to "Environment Variables"
4. Add a new variable:
   - **Variable name**: `MAINTENANCE_MODE`
   - **Value**: `true`
   - **Environment**: Production (and/or Preview)

### How to Disable Maintenance Mode

1. Go to your Cloudflare Pages dashboard
2. Navigate to your project settings
3. Go to "Environment Variables"
4. Update the `MAINTENANCE_MODE` variable:
   - Set value to `false` or delete the variable
5. Redeploy your site

### What Happens During Maintenance Mode

- All page requests are intercepted
- A maintenance page is displayed instead of normal content
- The maintenance page includes:
  - Cookery branding
  - Friendly message about maintenance
  - Information about improvements
  - Contact information for urgent matters

### Technical Details

- The middleware runs on every request before the page is served
- It checks the `MAINTENANCE_MODE` environment variable
- When enabled, it returns a static HTML maintenance page
- When disabled, requests proceed normally to the static files
- Cache headers are set to prevent caching of the maintenance page

### Quick Toggle

To quickly toggle maintenance mode without redeploying:

1. Update the environment variable in Cloudflare dashboard
2. The change takes effect on the next deployment
3. For immediate effect, trigger a manual deployment from the dashboard

### Customization

You can customize the maintenance page by editing the HTML in `_middleware.js`. The page uses the same styling as the main site (Tailwind CSS, Playfair Display, Plus Jakarta Sans fonts).
