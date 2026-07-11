# Maintenance Mode

Toggle maintenance mode in `_functions/_middleware.js`:

```javascript
const MAINTENANCE_MODE = true;  // Enable
const MAINTENANCE_MODE = false; // Disable
```

Set maintenance window dates:

```javascript
const MAINTENANCE_START_DATE = '2025-01-15';
const MAINTENANCE_START_TIME = '09:00';
const MAINTENANCE_END_DATE = '2025-01-15';
const MAINTENANCE_END_TIME = '17:00';
```

Commit and push to deploy changes.

Alternatively, set `MAINTENANCE_MODE=true` environment variable in Cloudflare Pages settings.
