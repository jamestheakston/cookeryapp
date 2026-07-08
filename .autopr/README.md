# AutoPR

✨ Powered by AutoPR - a custom software made by @jamestheakston for this project

## Overview

AutoPR is an automated pull request system designed to streamline the development workflow for the Cookery App project. It handles branch creation, commit generation, and PR creation with consistent formatting and review requirements.

## Features

- **Automated Branch Management**: Creates feature branches with descriptive names
- **Consistent PR Formatting**: All PRs include the AutoPR header and structured descriptions
- **Review Requirements**: PRs cannot be merged until all reviews are complete
- **No Auto-Merge**: Manual review and approval required for all changes
- **AI-Powered**: Uses AI prompts to generate meaningful commit messages and PR descriptions

## Configuration

AutoPR configuration is stored in this directory:

- `prompt.md` - AI integration prompt for generating PR descriptions and commit messages
- `config.json` - AutoPR settings and preferences

## Usage

AutoPR is integrated with the development workflow and automatically invoked when creating pull requests. The system ensures:

1. All PRs include the AutoPR header
2. Descriptions follow the project's documentation standards
3. Review requirements are enforced
4. Auto-merge is disabled

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

## Integration

To integrate AutoPR with your AI assistant, use the prompt in `prompt.md` to guide the AI in generating appropriate PR descriptions and commit messages.

## Maintainer

@jamestheakston
