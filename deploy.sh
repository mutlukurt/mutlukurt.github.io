#!/bin/bash

# Build the project
echo "Building the project..."
npm run build

# Copy assets to dist folder if they don't exist
if [ -d "assets" ] && [ ! -d "dist/assets" ]; then
    echo "Copying assets to dist folder..."
    cp -r assets dist/
fi

# Create a simple deploy script for GitHub Pages
echo "Deploying to GitHub Pages..."

# Add all files to git
git add .

# Commit changes
git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"

# Push to main branch
git push origin main

echo "✅ Deployment completed successfully!"
echo "🌐 Your site will be available at: https://mutlukurt.github.io"
