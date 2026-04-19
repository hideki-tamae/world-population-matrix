#!/bin/bash

# 🚀 World Population Matrix - Automated Deployment Script
# Author: Hideki Tamae
# Usage: bash deploy.sh

set -e  # Exit on error

# Color output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🌍 World Population Matrix - Vercel Deployment${NC}"
echo "=================================================="
echo ""

# Step 1: Check prerequisites
echo -e "${YELLOW}Step 1: Checking prerequisites...${NC}"

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js 18+${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js $(node --version)${NC}"

# Check npm
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ npm $(npm --version)${NC}"

# Check Git
if ! command -v git &> /dev/null; then
    echo -e "${RED}❌ Git is not installed${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Git $(git --version)${NC}"

# Check if in project directory
if [ ! -f "package.json" ]; then
    echo -e "${RED}❌ package.json not found. Please run this from project root directory${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Found package.json${NC}"

echo ""

# Step 2: Install dependencies
echo -e "${YELLOW}Step 2: Installing dependencies...${NC}"
npm install
echo -e "${GREEN}✅ Dependencies installed${NC}"

echo ""

# Step 3: Setup environment
echo -e "${YELLOW}Step 3: Setting up environment...${NC}"

# Copy .env.example to .env.local if not exists
if [ ! -f ".env.local" ]; then
    cp .env.example .env.local
    echo -e "${GREEN}✅ Created .env.local${NC}"
    echo -e "${YELLOW}⚠️  Please edit .env.local with your Neon DATABASE_URL${NC}"
    read -p "Press Enter when .env.local is configured..."
else
    echo -e "${GREEN}✅ .env.local already exists${NC}"
fi

echo ""

# Step 4: Build project locally
echo -e "${YELLOW}Step 4: Building project locally...${NC}"
npm run build
echo -e "${GREEN}✅ Build successful${NC}"

echo ""

# Step 5: Git initialization
echo -e "${YELLOW}Step 5: Initializing Git repository...${NC}"

# Check if Git is already initialized
if [ ! -d ".git" ]; then
    git init
    echo -e "${GREEN}✅ Git repository initialized${NC}"
else
    echo -e "${GREEN}✅ Git repository already exists${NC}"
fi

# Configure Git (if not already set)
if [ -z "$(git config user.name)" ]; then
    read -p "Enter your Git username (e.g., hideki-tamae): " GIT_USER
    git config user.name "$GIT_USER"
fi

if [ -z "$(git config user.email)" ]; then
    read -p "Enter your Git email: " GIT_EMAIL
    git config user.email "$GIT_EMAIL"
fi

echo -e "${GREEN}✅ Git configured${NC}"

echo ""

# Step 6: Add and commit
echo -e "${YELLOW}Step 6: Staging files for Git...${NC}"
git add .
echo -e "${GREEN}✅ Files staged${NC}"

echo -e "${YELLOW}Step 7: Creating initial commit...${NC}"
git commit -m "Initial commit: World Population Coverage Matrix - Global population analysis by Hideki Tamae"
echo -e "${GREEN}✅ Commit created${NC}"

# Ensure main branch
if git show-ref --verify --quiet refs/heads/main; then
    echo -e "${GREEN}✅ Main branch already exists${NC}"
else
    echo -e "${YELLOW}Switching to main branch...${NC}"
    git branch -M main
    echo -e "${GREEN}✅ Switched to main branch${NC}"
fi

echo ""

# Step 7: Remote setup
echo -e "${YELLOW}Step 8: Setting up remote repository...${NC}"

read -p "Enter your GitHub username: " GITHUB_USER
REPO_URL="https://github.com/${GITHUB_USER}/world-population-matrix.git"

# Check if remote already exists
if git remote get-url origin &> /dev/null; then
    echo -e "${YELLOW}Remote 'origin' already exists. Updating...${NC}"
    git remote set-url origin "$REPO_URL"
else
    git remote add origin "$REPO_URL"
fi

echo -e "${GREEN}✅ Remote configured: $REPO_URL${NC}"

echo ""

# Step 8: GitHub repository check
echo -e "${YELLOW}Step 9: Checking GitHub repository...${NC}"
echo -e "${YELLOW}⚠️  Make sure you have created the repository on GitHub:${NC}"
echo "   → https://github.com/new"
echo "   → Repository name: world-population-matrix"
echo "   → Make it Public"
echo ""
read -p "Have you created the GitHub repository? (y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Please create the repository first, then run this script again${NC}"
    exit 1
fi

echo ""

# Step 9: Push to GitHub
echo -e "${YELLOW}Step 10: Pushing to GitHub...${NC}"
git push -u origin main
echo -e "${GREEN}✅ Pushed to GitHub${NC}"

echo ""

# Step 10: Vercel setup
echo -e "${YELLOW}Step 11: Vercel setup...${NC}"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}Installing Vercel CLI...${NC}"
    npm install -g vercel
fi

echo -e "${BLUE}🚀 Ready to deploy to Vercel!${NC}"
echo ""
echo "Next steps:"
echo "  1. Go to: https://vercel.com/new"
echo "  2. Import your GitHub repository: world-population-matrix"
echo "  3. Add environment variable:"
echo "     KEY: DATABASE_URL"
echo "     VALUE: (Your Neon connection string)"
echo "  4. Click 'Deploy'"
echo ""
echo "OR use Vercel CLI:"
echo "  $ vercel"
echo "  $ vercel env add DATABASE_URL"
echo "  $ vercel --prod"
echo ""

# Step 11: Offer to open Vercel
read -p "Open Vercel dashboard now? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        xdg-open "https://vercel.com/new"
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        open "https://vercel.com/new"
    elif [[ "$OSTYPE" == "msys" ]]; then
        start "https://vercel.com/new"
    fi
fi

echo ""
echo -e "${GREEN}✅ Deployment preparation complete!${NC}"
echo ""
echo "📊 Project Information:"
echo "   Name: World Population Coverage Matrix"
echo "   GitHub: $REPO_URL"
echo "   Author: Hideki Tamae"
echo ""
echo "🎉 Next: Configure environment and deploy via Vercel dashboard"
echo ""
