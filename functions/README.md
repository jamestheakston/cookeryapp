# Maintenance Mode

Toggle maintenance mode in `_functions/_middleware.js`:

```javascript
const MAINTENANCE_MODE = true;  // Enable
const MAINTENANCE_MODE = false; // Disable
```

Set maintenance window dates (UK format - DD/MM/YY and 24-hour time):

```javascript
const MAINTENANCE_START_DATE = '11/06/26';
const MAINTENANCE_START_TIME = '18:25';
const MAINTENANCE_END_DATE = '12/06/26';
const MAINTENANCE_END_TIME = '18:25';
```

Commit and push to deploy changes.

Alternatively, set `MAINTENANCE_MODE=true` environment variable in Cloudflare Pages settings.
