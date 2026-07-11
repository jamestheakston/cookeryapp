# Maintenance Mode

Toggle maintenance mode in `_functions/_middleware.js`:

```javascript
const MAINTENANCE_MODE = true;  // Enable
const MAINTENANCE_MODE = false; // Disable
```

Commit and push to deploy changes.

Alternatively, set `MAINTENANCE_MODE=true` environment variable in Cloudflare Pages settings.
