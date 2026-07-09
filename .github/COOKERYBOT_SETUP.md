# Cookerybot Setup Guide

This guide explains how to set up the Cookerybot account to automatically respond to GitHub issues.

## Prerequisites

- GitHub account: `cookerybot`
- Repository access for cookerybot
- Admin access to the repository

## Step 1: Create Personal Access Token (PAT) for Cookerybot

1. Log into GitHub as the **cookerybot** account
2. Navigate to: Settings → Developer settings → Personal access tokens → Tokens (classic)
3. Click "Generate new token (classic)"
4. Configure the token:
   - **Note:** "Cookerybot Auto Respond"
   - **Expiration:** Select appropriate expiration (or no expiration for long-term use)
   - **Scopes:** Check the following permissions:
     - `repo` (Full control of private repositories)
     - `issues` (Full control of issues)
5. Click "Generate token"
6. **Important:** Copy the generated token immediately (you won't see it again)

## Step 2: Add Token as GitHub Secret

1. Navigate to your repository on GitHub
2. Go to: Settings → Secrets and variables → Actions
3. Click "New repository secret"
4. Name the secret: `COOKERYBOT_TOKEN`
5. Paste the cookerybot PAT as the value
6. Click "Add secret"

## Step 3: Verify Workflow

The workflow file is located at: `.github/workflows/cookerybot-auto-respond.yml`

The workflow will:
- Trigger automatically when a new issue is opened
- Respond as "Cookery Bot" (from the cookerybot account)
- Provide a personalized response with issue details
- Include instructions for urgent issues

## Step 4: Test the Setup

1. Create a test issue in the repository
2. Wait 1-2 minutes for the workflow to run
3. Verify that cookerybot responds with the automated message
4. Check the Actions tab to ensure the workflow ran successfully

## Customization

To customize the bot's response, edit the workflow file:

```yaml
const response = `🤖 **Cookery Bot** here!

Your custom message here...`;
```

## Troubleshooting

**Bot doesn't respond:**
- Check that `COOKERYBOT_TOKEN` secret is set correctly
- Verify the token has the required permissions
- Check the Actions tab for workflow errors

**Response comes from wrong account:**
- Ensure the token was created from the cookerybot account
- Verify the secret name is exactly `COOKERYBOT_TOKEN`

**Workflow fails:**
- Check the Actions tab for error messages
- Ensure the workflow file syntax is correct
- Verify cookerybot has repository access

## Security Notes

- Never commit the PAT to the repository
- Rotate the token periodically
- Use the minimum required permissions
- Monitor the token's usage in GitHub settings
