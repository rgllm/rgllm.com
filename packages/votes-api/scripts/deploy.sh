#!/bin/bash

set -e

echo "🚀 Deploying Upvote-Do to Cloudflare Workers"

# Check if environment is provided
if [ -z "$1" ]; then
    echo "Usage: ./scripts/deploy.sh [development|staging|production]"
    exit 1
fi

ENVIRONMENT=$1

# Validate environment
if [[ ! "$ENVIRONMENT" =~ ^(development|staging|production)$ ]]; then
    echo "❌ Invalid environment. Use: development, staging, or production"
    exit 1
fi

echo "📋 Environment: $ENVIRONMENT"

# Install dependencies
echo "📦 Installing dependencies..."
bun install

# Run validation
echo "🔍 Running validation..."
bun run validate

if [ $? -ne 0 ]; then
    echo "❌ Validation failed. Please fix errors before deploying."
    exit 1
fi

# Deploy based on environment
echo "🌍 Deploying to $ENVIRONMENT..."

if [ "$ENVIRONMENT" = "production" ]; then
    echo "⚠️  WARNING: You are deploying to PRODUCTION!"
    read -p "Are you sure? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment cancelled."
        exit 1
    fi
fi

# Deploy with wrangler
if [ "$ENVIRONMENT" = "development" ]; then
    bun run wrangler deploy --env development
elif [ "$ENVIRONMENT" = "staging" ]; then
    bun run wrangler deploy --env staging
else
    bun run wrangler deploy --env production
fi

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed to $ENVIRONMENT!"
    
    # Show deployment URL
    if [ "$ENVIRONMENT" = "production" ]; then
        echo "🌐 Production URL: https://upvote-do-prod.your-subdomain.workers.dev"
    elif [ "$ENVIRONMENT" = "staging" ]; then
        echo "🌐 Staging URL: https://upvote-do-staging.your-subdomain.workers.dev"
    else
        echo "🌐 Development URL: https://upvote-do-dev.your-subdomain.workers.dev"
    fi
else
    echo "❌ Deployment failed!"
    exit 1
fi