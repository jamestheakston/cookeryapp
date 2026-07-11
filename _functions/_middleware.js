export async function onRequest(context) {
  const { env, request, next } = context;
  
  // Check if maintenance mode is enabled
  const isMaintenance = env.MAINTENANCE_MODE === 'true';
  
  if (isMaintenance) {
    // Return maintenance page for all requests
    const maintenanceHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Maintenance Mode - Cookery</title>
    <link rel="icon" href="/assets/favicon.ico">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Plus+Jakarta+Sans:wght@200..800&display=swap" rel="stylesheet">
    <style>
        body { 
            background-color: #faf8f5; 
            font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
</head>
<body>
    <div class="max-w-2xl mx-auto px-6 text-center">
        <div class="mb-8">
            <img src="https://static.wixstatic.com/media/7e69ed_330f79c01501431c864036c560eede24~mv2.png/v1/fill/w_432,h_426,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/AppIcon~ios-marketing.png" alt="Cookery Logo" width="120" height="120" class="mx-auto rounded-2xl">
        </div>
        <h1 class="font-serif text-5xl font-bold text-stone-900 mb-6" style="font-family: 'Playfair Display', serif;">
            We'll Be Back Soon
        </h1>
        <p class="text-xl text-stone-600 mb-8 leading-relaxed">
            Cookery is currently undergoing scheduled maintenance. We're working hard to improve your experience and will be back shortly.
        </p>
        <div class="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
            <p class="text-amber-800 font-medium mb-2">What to expect:</p>
            <ul class="text-amber-700 text-left space-y-2">
                <li>• Improved performance and speed</li>
                <li>• New features and enhancements</li>
                <li>• Better recipe generation</li>
            </ul>
        </div>
        <p class="text-stone-500 text-sm">
            Thank you for your patience. For urgent matters, please contact us at 
            <a href="mailto:support@cookery.app" class="text-amber-600 hover:text-amber-700 underline">support@cookery.app</a>
        </p>
    </div>
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
