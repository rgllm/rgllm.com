#!/bin/bash

set -e

echo "🧪 Running comprehensive test suite for Upvote-Do"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    bun install
fi

# Run type checking
echo "🔍 Running TypeScript type checking..."
bun run type-check

if [ $? -ne 0 ]; then
    echo "❌ Type checking failed!"
    exit 1
fi

echo "✅ Type checking passed!"

# Run unit tests
echo "🧪 Running unit tests..."
bun run test

if [ $? -ne 0 ]; then
    echo "❌ Unit tests failed!"
    exit 1
fi

echo "✅ Unit tests passed!"

# Run linting
echo "🔧 Running linting..."
bun run lint

if [ $? -ne 0 ]; then
    echo "❌ Linting failed!"
    exit 1
fi

echo "✅ Linting passed!"

# Generate coverage report if requested
if [ "$1" = "--coverage" ]; then
    echo "📊 Generating coverage report..."
    bun run test:coverage
fi

echo "🎉 All tests passed! Ready for deployment."