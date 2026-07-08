# AutoPR Integration Guide

✨ Powered by AutoPR - a custom software made by @jamestheakston for this project

## What is AutoPR?

AutoPR is an automated pull request system designed to streamline the development workflow for the Cookery App project. It handles branch creation, commit generation, and PR creation with consistent formatting and review requirements.

## How to Add AutoPR to Your Project

### Step 1: Create the `.autopr` Directory

Create a `.autopr` directory in your project root:

```bash
mkdir .autopr
```

### Step 2: Create Configuration Files

Create the following files in the `.autopr` directory:

#### `config.json`
This file contains all AutoPR settings and preferences. It controls:
- PR formatting and behavior
- Commit message guidelines
- Review requirements
- File tracking rules
- Integration settings

#### `prompt.md`
This file contains the AI integration prompt that guides the AI in generating:
- PR descriptions
- Commit messages
- Change summaries
- File descriptions

#### `README.md`
This file documents the AutoPR system for your team.

### Step 3: Configure AutoPR Settings

Edit `config.json` to customize for your project:

```json
{
  "version": "1.0.0",
  "project": "your-project-name",
  "maintainer": "@your-username",
  "pr": {
    "header": "✨ Powered by AutoPR - a custom software made by @your-username for this project",
    "autoMerge": false,
    "requireReviews": true,
    "baseBranch": "main"
  }
}
```

### Step 4: Customize the AI Prompt

Edit `prompt.md` to include:
- Your project's context (tech stack, branding, etc.)
- Common change types specific to your project
- Example PR descriptions
- Integration instructions for your AI assistant

### Step 5: Integrate with Your Workflow

AutoPR works by:
1. Analyzing git changes when creating branches
2. Generating structured commit messages
3. Creating PRs with consistent formatting
4. Enforcing review requirements

To use AutoPR, simply invoke it when creating pull requests. The system will:
- Read the configuration from `config.json`
- Use the prompt from `prompt.md` to guide AI generation
- Apply the AutoPR header to all PR descriptions
- Ensure review requirements are met

## Configuration Guide

### config.json Structure

| Section | Purpose | Key Settings |
|---------|---------|--------------|
| `pr` | Pull request settings | `autoMerge`, `requireReviews`, `baseBranch` |
| `commit` | Commit message rules | `maxSubjectLength`, `maxBodyLength` |
| `review` | Review requirements | `requiredReviewers`, `allowSelfReview` |
| `files` | File tracking | `ignore` patterns, `trackExtensions` |
| `integrations` | Tool integrations | GitHub API, AI integration |

### Important Settings

**Never enable auto-merge:**
```json
"autoMerge": false
```

**Require all reviews before merge:**
```json
"requireReviews": true
```

**Customize the PR header:**
```json
"header": "✨ Powered by AutoPR - a custom software made by @your-username for this project"
```

## PR Format

All pull requests created by AutoPR follow this format:

```
✨ Powered by AutoPR - a custom software made by @jamestheakston for this project

## Changes
- Change 1
- Change 2

## Files Changed
- file1.ext: Description
- file2.ext: Description
```

## Features

- **Automated Branch Management**: Creates feature branches with descriptive names
- **Consistent PR Formatting**: All PRs include the AutoPR header and structured descriptions
- **Review Requirements**: PRs cannot be merged until all reviews are complete
- **No Auto-Merge**: Manual review and approval required for all changes
- **AI-Powered**: Uses AI prompts to generate meaningful commit messages and PR descriptions
- **Configurable**: Fully customizable via `config.json` and `prompt.md`

## Integration with AI Assistants

To integrate AutoPR with your AI assistant:

1. Provide the AI with the contents of `prompt.md`
2. Allow the AI to read `config.json` for settings
3. When creating PRs, have the AI:
   - Analyze the git changes
   - Generate commit messages following the guidelines
   - Create PR descriptions with the AutoPR header
   - List all changed files with descriptions

## Maintainer

@jamestheakston
