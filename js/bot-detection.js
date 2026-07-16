// Bot Detection and Link Interception Script
(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        verificationPage: '/verification.html',
        checkInterval: 1000, // Check every second
        suspiciousThreshold: 3, // Number of suspicious actions before redirect
        sessionDuration: 30 * 60 * 1000, // 30 minutes
    };

    // Bot detection metrics
    let metrics = {
        mouseMovements: 0,
        clicks: 0,
        scrollEvents: 0,
        keypresses: 0,
        timeOnPage: 0,
        suspiciousScore: 0,
        isHuman: false,
        verified: false
    };

    // Check if user has already been verified in this session
    function checkVerificationStatus() {
        const verified = sessionStorage.getItem('verified');
        const verifiedTime = sessionStorage.getItem('verifiedTime');
        
        if (verified === 'true' && verifiedTime) {
            const elapsed = Date.now() - parseInt(verifiedTime);
            if (elapsed < CONFIG.sessionDuration) {
                metrics.verified = true;
                return true;
            }
        }
        return false;
    }

    // Mark user as verified
    function markAsVerified() {
        sessionStorage.setItem('verified', 'true');
        sessionStorage.setItem('verifiedTime', Date.now().toString());
        metrics.verified = true;
    }

    // Basic bot detection checks
    function detectBot() {
        // If already verified, skip checks
        if (metrics.verified) return false;

        // Check 1: No mouse movement but clicking (suspicious)
        if (metrics.clicks > 0 && metrics.mouseMovements < 5) {
            metrics.suspiciousScore += 2;
        }

        // Check 2: Very fast clicking (potential bot)
        if (metrics.clicks > 5 && metrics.timeOnPage < 2000) {
            metrics.suspiciousScore += 2;
        }

        // Check 3: No keyboard events but typing in forms (if applicable)
        // This would need form-specific implementation

        // Check 4: Check user agent for known bot patterns
        const userAgent = navigator.userAgent.toLowerCase();
        const botPatterns = ['bot', 'crawler', 'spider', 'scraper', 'curl', 'wget'];
        if (botPatterns.some(pattern => userAgent.includes(pattern))) {
            metrics.suspiciousScore += 3;
        }

        // Check 5: Check for automated tools
        if (navigator.webdriver) {
            metrics.suspiciousScore += 3;
        }

        // Determine if suspicious
        return metrics.suspiciousScore >= CONFIG.suspiciousThreshold;
    }

    // Track user interactions
    function trackInteractions() {
        // Mouse movements
        let mouseMoveTimeout;
        document.addEventListener('mousemove', () => {
            metrics.mouseMovements++;
            metrics.isHuman = true;
            
            clearTimeout(mouseMoveTimeout);
            mouseMoveTimeout = setTimeout(() => {
                if (metrics.mouseMovements > 10 && metrics.suspiciousScore > 0) {
                    metrics.suspiciousScore = Math.max(0, metrics.suspiciousScore - 1);
                }
            }, 1000);
        });

        // Clicks
        document.addEventListener('click', () => {
            metrics.clicks++;
        });

        // Scroll events
        document.addEventListener('scroll', () => {
            metrics.scrollEvents++;
            metrics.isHuman = true;
        });

        // Keypresses
        document.addEventListener('keydown', () => {
            metrics.keypresses++;
            metrics.isHuman = true;
        });

        // Track time on page
        setInterval(() => {
            metrics.timeOnPage += CONFIG.checkInterval;
        }, CONFIG.checkInterval);
    }

    // Intercept link clicks
    function interceptLinks() {
        document.addEventListener('click', function(e) {
            const link = e.target.closest('a');
            
            if (!link) return;

            const href = link.getAttribute('href');
            
            // Skip if:
            // - No href
            // - Same page anchor (#)
            // - JavaScript link
            // - Already on verification page
            // - Already verified
            if (!href || 
                href.startsWith('#') || 
                href.startsWith('javascript:') ||
                window.location.pathname.includes('verification.html') ||
                metrics.verified) {
                return;
            }

            // Resolve the target and only gate same-origin http(s) navigations.
            // Cross-origin/other-scheme links proceed normally so the verification
            // flow never redirects to an attacker-controlled destination.
            let targetUrl;
            try {
                const resolved = new URL(href, window.location.origin);
                if (resolved.protocol !== 'http:' && resolved.protocol !== 'https:') return;
                if (resolved.origin !== window.location.origin) return;
                targetUrl = resolved.href;
            } catch (err) {
                return;
            }

            // Check if user might be a bot
            if (detectBot()) {
                e.preventDefault();
                
                // Store the target URL
                localStorage.setItem('redirectUrl', targetUrl);
                
                // Redirect to verification page
                window.location.href = CONFIG.verificationPage + '?redirect=' + encodeURIComponent(targetUrl);
            }
        });
    }

    // Initialize
    function init() {
        // Check if user was just verified
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('verified') === 'true') {
            markAsVerified();
        }

        // Check existing verification status
        checkVerificationStatus();

        // Start tracking interactions
        trackInteractions();

        // Intercept link clicks
        interceptLinks();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
