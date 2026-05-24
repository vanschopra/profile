#!/bin/bash

# Personal Website — Next.js dev server
# Usage: bash .run.sh

set -e

echo "📦 Checking dependencies..."
if [ ! -d "node_modules" ]; then
  echo "   node_modules not found — installing..."
  npm install
  echo ""
fi

echo "🚀 Starting dev server..."
npm run dev
