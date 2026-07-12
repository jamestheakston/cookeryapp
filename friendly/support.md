# Cookery Support

Get help with Cookery Raycast extension. Find documentation, FAQs, and support resources for using our AI-powered recipe generation in Raycast.

> **⚠️ Note:** These documentation pages may not be up to date. If the site is not under maintenance, please visit the [normal support page](/support.html) for the most current information.

## Getting Started

### Step 1: Find Cookery in Raycast
Once installed, search for Cookery in the search bar and click "Generate Recipes" to start using the extension.

### Step 2: Configure Your API Key
Once you've selected the command to Generate Recipes, you'll be prompted to configure the extension with your API key. Cookery supports multiple providers, so pick your preferred provider from the dropdown menu.

### Step 3: Enter Your API Key
To use Cookery, you'll need an API key. You can get one from your AI provider's website. Enter your API key in the settings to activate the extension, then click continue.

## Authentication

Learn about signing in, using Cookery without an account, and managing your authentication.

### Why Sign In?
Signing in is simply a way to support the project. It's completely optional and not required to use Cookery.

[Learn more about why sign in →](whysignin.html)

### Using Cookery Without an Account
You can use Cookery without signing in – it's completely optional. The core functionality works perfectly fine without an account.

**Solution:** Simply click "Use without account" to start using Cookery immediately without signing in.

### How to Sign In
If you'd like to support the project by signing in, follow these steps:

#### Step 1: Click "Sign in with GitHub"
When you first open Cookery, you'll see a sign-in prompt. Click "Sign in with GitHub" to begin the authentication process.

#### Step 2: Click "Sign in with GitHub" Again
Raycast wants to confirm that you wish to login. Click "Sign in with GitHub" again to continue.

#### Step 3: Choose Your Account
If this prompt appears, choose your preferred account to continue with the authentication.

#### Step 4: Authorize the Application
Once the consent screen shows up, click "Authorize jamestheakston". This is the creator of the app and is required to complete the authentication process.

#### Step 5: Complete Sign In
Once you've clicked "Authorize jamestheakston", Raycast will open again and show the login completion screen. If this doesn't appear, just open Raycast manually.

**Final Step:** Click "Continue" and you can start generating recipes!

### Managing Your OAuth Connection
You can manage your OAuth connection and view your authentication status in the settings.

### How to Sign Out
If you want to sign out of your account, you can do so from the settings menu.

**Solution:** Click the sign out button in the authentication settings to disconnect your account.

## Configuration

Configure your Cookery extension settings, API keys, and custom providers.

### Generating Recipes
Once configured, you can start generating delicious recipes with Cookery.

#### Step 1: Find Cookery in Raycast
Search for Cookery in the search bar and click "Generate Recipes" to start generating recipes.

#### Step 2: Enter Your Prompt
Type what you'd like to cook or the ingredients you have.

#### Step 3: Select Cooking Style & Dietary Requirements
Choose your preferred cooking style and dietary requirements.

#### Step 4: Generate Your Recipe
Press Enter or click the generate button to create your recipe.

### Default Cooking Style
Set your preferred cooking style that will be used as the default when generating recipes. You can choose from options like Quick and Easy, Gourmet, Traditional etc.

### Dietary Requirements
Configure your dietary preferences and restrictions. Cookery will automatically filter recipes to match your requirements, such as vegetarian, vegan, gluten-free, dairy-free, or nut-free options.

### API Provider Settings
Manage your AI provider settings. You can switch between different providers (OpenAI, Anthropic, etc.) and update your API keys.

### How to Get API Keys
Select your provider to get step-by-step instructions for obtaining an API key.

#### Google Gemini (Recommended)
✨ Free tier available (Generous limits)

1. **Access:** Visit [Google AI Studio](https://aistudio.google.com/)
2. **Generate:** Select "Get API key" from the sidebar
3. **Secure:** Create and copy your key. This is the fastest and easiest setup

#### Anthropic Claude
💳 Requires payment setup to start

1. **Console:** Go to the [Anthropic Console](https://console.anthropic.com/)
2. **Keys:** Select "API Keys" and click "+ Create Key"
3. **Finalize:** You must add billing credits to begin using the API

#### OpenAI
💳 Requires payment method

1. **Platform:** Login at [OpenAI Platform](https://platform.openai.com/)
2. **Secret:** Go to "API Keys" and create a new secret key
3. **Billing:** You must have a valid payment method on file to enable the key

#### Custom / Router
✨ Free tier models available

1. **Portal:** Access your router/provider dashboard
2. **Generate:** Create a new API token in settings
3. **Validate:** Verify your account has sufficient credits for your desired model

### Custom Providers
Use any compatible AI provider by configuring your own custom endpoint and API key. This gives you flexibility to use local models, private deployments, or other AI services.

Custom providers allow you to connect Cookery to any AI service that follows standard API patterns, including OpenAI-compatible APIs, Anthropic-compatible APIs, local LLMs (Ollama, LocalAI), and self-hosted solutions.

## Troubleshooting

Common issues and solutions for using Cookery with different AI providers.

### Gemini

#### API Key Prompt
If you see this prompt, it means a provider is configured but no API key has been entered yet.

**Solution:** Enter your API key in the settings to activate the provider.

#### Bad Request - Invalid API Key
If you receive a "Bad Request" error when using Gemini, this typically means your API key is invalid or has been entered incorrectly.

**Solution:** Double-check your API key in settings and ensure it matches the key from your Google AI Studio account.

#### Service Unavailable - High Demand
If you receive a "Service Unavailable" error, this typically means there is high demand for the Gemini model at the moment.

**Solution:** Wait a few minutes and try again. The service should become available once demand decreases.

#### Too Many Requests
If you receive a "Too Many Requests" error, this means you have exceeded the rate limit for your API key or have requested the API too frequently.

**Solution:** Wait a few minutes before trying again. Consider upgrading your plan if you frequently hit rate limits, or space out your requests.

### Claude

#### API Key Prompt
If you see this prompt, it means a provider is configured but no API key has been entered yet.

**Solution:** Enter your API key in the settings to activate the provider.

#### Bad Request - Quota Expired
If you receive a "Bad Request" error with Claude indicating quota issues, your API usage has exceeded your current plan limits.

**Solution:** Check your Anthropic account billing and upgrade your plan or wait for your quota to reset.

#### Unauthorized - Invalid API Key
If you receive an "Unauthorized" error code, this means an invalid API key has been provided for Claude.

**Solution:** Verify your API key in settings and ensure it's the correct key from your Anthropic account.

#### Service Unavailable - High Demand
If you receive a "Service Unavailable" error, this typically means there is high demand for the model at the moment. This error is primarily associated with Gemini but may also occur with Claude during peak usage times.

**Solution:** Wait a few minutes and try again. The service should become available once demand decreases.

### OpenAI
Troubleshooting guidance for OpenAI is coming soon. Check back later for detailed guides and solutions.

### Custom

#### Custom Provider Data Invalid
If you see this error, it means the custom provider configuration is incomplete. You need to provide both an endpoint URL and a model name in the preferences.

**Solution:** Go to Cookery extension settings and add your custom model name and endpoint URL in the preferences.

## Additional Resources

- [Safety Guidelines](safety.html)
- [Privacy Policy](privacy.html)
- [Terms & Conditions](terms.html)
- [Report Issue](https://github.com/jamestheakston/cookeryapp/issues/new/choose)

## Contact Us

For support inquiries, email us at: jamesttheakston2@gmail.com
