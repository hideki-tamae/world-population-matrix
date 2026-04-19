# 🌍 World Population Coverage Matrix

**By Hideki Tamae** | Civilization OS Designer | ACEs CARE HUB JAPAN

---

## 📊 Project Overview

A data-driven analysis and interactive dashboard that maps global population coverage by digital access layers and care economy models. This project critically evaluates Gemini's claim that "Web2 has 55 billion people integrated as products" and provides a structured framework for HAIS/SOLUNA implementation across different cultural contexts.

### 🎯 Core Findings

- **Layer 1 (Web-native)**: 800M (11%) - Digital-first societies ✅ HAIS ready
- **Layer 2 (Mobile hybrid)**: 2B (27%) - Smartphone-first, intermittent access ⚠️ Requires redesign
- **Layer 3 (Access sparse)**: 2.5B (33%) - Rural/remote, 2G-3G 🔧 Major redesign needed
- **Layer 4 (Offline)**: 1.8B (29%) - No internet infrastructure ❌ Incompatible

**Reality**: Only 12% of humanity can use HAIS in its current form. 88% requires redesigned protocols.

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL database (Neon recommended)
- Vercel account (for deployment)

### Local Development

```bash
# Clone repository
git clone https://github.com/hideki-tamae/world-population-matrix.git
cd world-population-matrix

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Edit .env.local with your database credentials
# DATABASE_URL="postgresql://user:password@host/dbname"

# Run development server
npm run dev

# Open http://localhost:3000
```

### Environment Variables

```env
DATABASE_URL=postgresql://user:password@ep-xxx.us-east-2.neon.tech/neon?sslmode=require
```

---

## 📦 Project Structure

```
world-population-matrix/
├── pages/
│   ├── index.tsx              # Landing page
│   ├── global-coverage.tsx    # Main dashboard
│   └── api/
│       └── population-data.ts # API endpoints
├── components/
│   ├── PopulationMatrix.tsx   # Interactive charts
│   └── LayerDetail.tsx        # Layer information
├── lib/
│   └── constants.ts           # Data definitions
├── prisma/
│   └── schema.prisma          # Database schema
├── styles/
│   ├── globals.css
│   ├── index.module.css
│   ├── global-coverage.module.css
│   └── components.module.css
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

---

## 🗄️ Database Setup (Neon + Prisma)

### 1. Create Neon Database

1. Go to [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string:
   ```
   postgresql://user:password@ep-xxx.us-east-2.neon.tech/neon?sslmode=require
   ```
4. Add to `.env.local`:
   ```env
   DATABASE_URL=your-connection-string
   ```

### 2. Initialize Prisma

```bash
# Install Prisma
npm install -D prisma

# Migrate database
npx prisma migrate dev --name init

# Generate Prisma client
npx prisma generate

# (Optional) Seed database with initial data
npm run seed
```

### 3. Database Schema

The schema includes:
- `Region` - Geographic regions and digital access metrics
- `CareDefinition` - Cultural care model definitions per region
- `PopulationLayer` - The 4-layer population model
- `CareModel` - Care economy models (individual, family, community, kinship)
- `RegionStatistic` - Historical population data

---

## 🌐 Deployment to Vercel

### Option 1: Automatic (GitHub + Vercel)

```bash
# 1. Create GitHub repository
git init
git add .
git commit -m "Initial commit: World Population Matrix"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/world-population-matrix.git
git push -u origin main

# 2. Connect to Vercel
# - Go to vercel.com
# - Click "New Project"
# - Import your GitHub repository
# - Add environment variable: DATABASE_URL
# - Click Deploy
```

### Option 2: Manual Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables when prompted
# Production URL will be provided
```

### Environment Variables on Vercel

1. Go to your Vercel project settings
2. Click "Environment Variables"
3. Add:
   ```
   DATABASE_URL = postgresql://...
   ```

---

## 📊 Data Sources

- **UN World Population Prospects 2024** - Population data
- **ITU Digital Access Data** - Internet penetration rates
- **World Bank World Development Indicators** - Economic/infrastructure metrics
- **OpenSignal Coverage Maps** - Mobile network coverage

---

## 🎨 Features

### Interactive Dashboard
- Real-time population distribution visualization (Pie/Bar charts)
- Regional breakdown with detailed statistics
- Care definition comparison across layers
- HAIS compatibility matrix

### Multi-page Navigation
- Landing page with problem statement
- Global coverage dashboard
- Regional deep-dives
- Care economy model library

### Responsive Design
- Mobile-first approach
- Desktop optimized for data visualization
- Accessible color schemes (WCAG AA compliant)

---

## 🔧 Tech Stack

**Frontend**
- Next.js 14.1
- React 18.2
- TypeScript
- CSS Modules
- Recharts (data visualization)

**Backend**
- Next.js API Routes
- Prisma ORM
- PostgreSQL (Neon)

**Deployment**
- Vercel
- GitHub

---

## 📖 Documentation

### Care Definition Models

Each layer has a unique care definition:

```typescript
Layer 1: Individual Autonomy Model
- Definition: Personal responsibility + institutional backup
- Token Model: omegaScore (personal metrics)
- Governance: Market competition
- HAIS: ✅ FULL compatibility

Layer 2: Family Collective Model
- Definition: Extended family networks + remittances
- Token Model: Family MultiSig wallet
- Governance: Family consensus + elder advice
- HAIS: ⚠️ PARTIAL - needs Account Abstraction

Layer 3: Community Consensus Model
- Definition: Elder-validated contributions + communal resources
- Token Model: DAO-style governance
- Governance: Elder council validation
- HAIS: 🔧 REQUIRES REDESIGN - offline-first

Layer 4: Kinship & Tradition Model
- Definition: Care embedded in relationship obligations
- Token Model: Cannot be tokenized
- Governance: Oral tradition + seasonal rhythms
- HAIS: ❌ INCOMPATIBLE
```

---

## 🎯 HAIS Implementation Roadmap

| Phase | Timeline | Focus | Status |
|-------|----------|-------|--------|
| Layer 1 | Now | Deploy current omegaScore | ✅ Ready |
| Layer 2 | Q2-Q3 2026 | Account Abstraction + Mobile UX | 🔨 In progress |
| Layer 3 | Q4 2026 | Offline-first architecture | 📋 Planned |
| Layer 4 | 2027+ | Anthropological research | 🔍 Research |

---

## 🤝 Contributing

### To Add New Care Definitions

1. Edit `lib/constants.ts`
2. Add region to `CARE_DEFINITIONS` object
3. Include all required fields:
   - `definition` (Japanese + English)
   - `tokenMechanic`
   - `governance`
   - `haisCompatibility`
4. Submit PR with anthropological sources

### To Update Population Data

1. Get latest data from UN/World Bank/ITU
2. Update `REGIONS_DATA` in `lib/constants.ts`
3. If using Prisma: `npx prisma db seed`
4. Submit PR

---

## 📝 License

MIT License - See LICENSE file for details

---

## 👤 Author

**Hideki Tamae**
- **Title**: Civilization OS Designer, CEO of Limelien Inc.
- **Focus**: Philosophy × Technology × Social Entrepreneurship
- **Twitter**: [@hideki_tamae](https://twitter.com/hideki_tamae)
- **Mirror.xyz**: https://mirror.xyz/@hideki-tamae
- **GitHub**: https://github.com/hideki-tamae

---

## 🔗 Related Projects

- **HAIS (Human Asset Integrity System)** - Voice biomarker analysis platform
- **SOLUNA** - Solana-based care economy tokenization
- **ACEs CARE HUB JAPAN** - Nonprofit care economy research

---

## 📧 Contact

For questions or collaboration: hideki@carehubjapan.org

---

**Built with 🌍 for global care economy transformation**
