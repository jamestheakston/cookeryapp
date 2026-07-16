export async function onRequest(context) {
  const { env, request, next } = context;
  
  // MAINTENANCE MODE TOGGLE
  // Set this to true to enable maintenance mode, false to disable
  // This takes precedence over environment variables
  const MAINTENANCE_MODE = false;
  
  // MAINTENANCE WINDOW
  // Configure the maintenance window dates and times
  // WARNING: All dates and times are in UK format (DD/MM/YY and 24-hour time)
  const MAINTENANCE_START_DATE = '12/07/26';
  const MAINTENANCE_START_TIME = '12:01';
  const MAINTENANCE_END_DATE = '17/07/26';
  const MAINTENANCE_END_TIME = '14:28';
  
  // MAINTENANCE REASON
  // Explain why the site is under maintenance
  const MAINTENANCE_REASON = 'Site performance improvements. The Raycast extension will still function normally. Are you a business user? This feature is being removed in this update. Email support.cookery@gmail.com for more information.';
  
  // Check if maintenance mode is enabled (code toggle takes precedence)
  const isMaintenance = MAINTENANCE_MODE === true || env.MAINTENANCE_MODE === 'true';
  
  // Allow support.md to be accessible during maintenance mode
  const url = new URL(request.url);
  if (url.pathname === '/support.md' || url.pathname.startsWith('/friendly/')) {
    return next();
  }
  
  if (isMaintenance) {
    // Return maintenance page for all requests
    const maintenanceHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Under Maintenance</title>
    <style>
        * {
            box-sizing: border-box;
        }

        body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            background-color: #6b3de8;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
        }

        .card {
            background: #ffffff;
            max-width: 42rem;
            width: 100%;
            padding: 32px 48px;
            text-align: center;
        }

        .icon {
            width: 80px;
            height: 80px;
            border-radius: 16px;
            margin-bottom: 20px;
        }

        h1 {
            font-size: 24px;
            font-weight: 700;
            color: #111827;
            margin: 0 0 12px;
        }

        .intro {
            color: #374151;
            margin: 0 0 20px;
            line-height: 1.5;
        }

        .details {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #f3f4f6;
        }

        .details p.label {
            color: #111827;
            font-weight: 600;
            font-size: 14px;
            margin: 0 0 8px;
        }

        .details p.body-text {
            color: #6b7280;
            font-size: 14px;
            line-height: 1.6;
            margin: 0;
        }

        .support-link {
            display: inline-block;
            margin-top: 20px;
            color: #6b3de8;
            text-decoration: underline;
            font-weight: 600;
            font-size: 14px;
            transition: color 0.2s;
        }

        .support-link:hover {
            color: #5b2ed8;
        }
    </style>
</head>
<body>
    <div class="card">

        <img src="https://static.wixstatic.com/media/7e69ed_330f79c01501431c864036c560eede24~mv2.png/v1/fill/w_432,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AppIcon~ios-marketing.png"
             alt="Maintenance"
             class="icon">

        <h1>Under Maintenance</h1>

        <p class="intro">
            We are currently improving the site. Please check back soon.
        </p>

        <div class="details">
            <p class="label">Period: <span style="font-weight: 400;">${MAINTENANCE_START_DATE} ${MAINTENANCE_START_TIME} <span id="tz1"></span> - ${MAINTENANCE_END_DATE} ${MAINTENANCE_END_TIME} <span id="tz2"></span></span></p>
            <p class="label" style="margin-top: 16px;">Reason: <span style="font-weight: 400;">${MAINTENANCE_REASON}</span></p>
            <p class="body-text" style="font-size: 12px; color: #9ca3af; margin-top: 8px;">
                * All dates and times are in UK format (DD/MM/YY and 24-hour time)
            </p>
        </div>

        <a href="/friendly/support.html" class="support-link">Need urgent support? Click here</a>

    </div>

    <script>
        // Determine whether it's currently GMT or BST in London
        try {
            const tz = new Intl.DateTimeFormat('en-GB', {
                timeZone: 'Europe/London',
                timeZoneName: 'short'
            }).formatToParts(new Date())
              .find(part => part.type === 'timeZoneName').value;

            document.getElementById('tz1').textContent = tz;
            document.getElementById('tz2').textContent = tz;
        } catch (e) {
            console.error("Could not determine timezone", e);
        }
    </script>
</body>
</html>
    `;
    
    return new Response(maintenanceHtml, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'no-store, no-cache, must-revalidate',
      },
    });
  }
  
  // If not in maintenance mode, proceed with normal request
  return next();
}
