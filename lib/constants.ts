// Population layers definition
export const LAYERS = [
  {
    id: 1,
    name: "Web-native",
    description: "Digital-first societies with consistent internet access",
    population: 800_000_000,
    percentage: 11,
    color: "#185FA5",
    regions: ["USA/Canada", "Western Europe", "Japan", "Singapore", "South Korea", "Australia", "New Zealand"],
    characteristics: [
      "99%+ internet penetration",
      "Majority use Web3-capable devices",
      "Daily crypto/blockchain exposure",
      "omegaScore fully functional"
    ]
  },
  {
    id: 2,
    name: "Mobile hybrid",
    description: "Smartphone-first, internet access intermittent",
    population: 2_000_000_000,
    percentage: 27,
    color: "#639922",
    regions: ["India", "Indonesia", "Philippines", "Brazil", "Mexico", "MENA", "Southeast Asia"],
    characteristics: [
      "50-80% smartphone penetration",
      "Account Abstraction needed",
      "Family-collective payment models",
      "Offline-capable required"
    ]
  },
  {
    id: 3,
    name: "Access sparse",
    description: "Intermittent connectivity, primarily rural/remote",
    population: 2_500_000_000,
    percentage: 33,
    color: "#BA7517",
    regions: ["Sub-Saharan Africa (rural)", "Central Asia", "Papua New Guinea", "Remote South America"],
    characteristics: [
      "10-40% internet coverage",
      "2G/3G dominant",
      "Community-based resource sharing",
      "Elder consensus governance needed"
    ]
  },
  {
    id: 4,
    name: "Offline",
    description: "No regular internet access, local economy dominant",
    population: 1_800_000_000,
    percentage: 29,
    color: "#D4A574",
    regions: ["Remote Amazon", "Sub-Saharan forests", "Isolated mountain villages", "Island micro-communities"],
    characteristics: [
      "No internet infrastructure",
      "Pure physical/barter economy",
      "Oral tradition knowledge",
      "Kinship-based governance"
    ]
  }
];

// Care definitions per layer
export const CARE_DEFINITIONS = {
  layer1: {
    name: "Individual Autonomy Model",
    regions: ["Japan", "USA", "Western Europe"],
    definition: "Individual responsibility for self and aging parents, institutional care as backup",
    tokenMechanic: "omegaScore (personal care metrics)",
    governance: "Individual choice + market competition",
    haisCompatibility: "FULL",
    keyValues: ["autonomy", "institutional_backup", "merit_based"]
  },
  layer2: {
    name: "Family Collective Model",
    regions: ["Philippines", "India", "Mexico"],
    definition: "Extended family networks manage care and resources through remittance systems",
    tokenMechanic: "Family MultiSig wallet + shared scoring",
    governance: "Family consensus + elder advice",
    haisCompatibility: "PARTIAL - requires Account Abstraction",
    keyValues: ["family_unit", "remittance", "elder_weight"]
  },
  layer3: {
    name: "Community Consensus Model",
    regions: ["Sub-Saharan Africa", "Southeast Asia rural"],
    definition: "Village/clan elders validate care contributions; resources shared communally",
    tokenMechanic: "DAO-style governance + offline ledgers",
    governance: "Elder council validation + oral consensus",
    haisCompatibility: "REQUIRES_REDESIGN - Offline-first infrastructure",
    keyValues: ["community", "elder_validation", "collective_resource"]
  },
  layer4: {
    name: "Kinship & Tradition Model",
    regions: ["Amazon indigenous", "Isolated communities"],
    definition: "Care embedded in relationship obligations and seasonal obligations",
    tokenMechanic: "Cannot be tokenized - relationship-based",
    governance: "Oral tradition + seasonal rhythms",
    haisCompatibility: "INCOMPATIBLE - Fundamentally different paradigm",
    keyValues: ["kinship", "seasonal", "non_monetary", "oral"]
  }
};

// Regional data for initial load
export const REGIONS_DATA = [
  // Layer 1
  { name: "USA/Canada", layer: 1, population: 280_000_000, webAccess: 91, continent: "North America" },
  { name: "Western Europe", layer: 1, population: 210_000_000, webAccess: 92, continent: "Europe" },
  { name: "Japan", layer: 1, population: 125_000_000, webAccess: 89, continent: "Asia" },
  { name: "Singapore", layer: 1, population: 6_000_000, webAccess: 95, continent: "Asia" },
  { name: "South Korea", layer: 1, population: 52_000_000, webAccess: 98, continent: "Asia" },
  { name: "Australia", layer: 1, population: 26_000_000, webAccess: 91, continent: "Oceania" },
  
  // Layer 2
  { name: "India", layer: 2, population: 680_000_000, webAccess: 45, continent: "Asia" },
  { name: "Indonesia", layer: 2, population: 275_000_000, webAccess: 48, continent: "Asia" },
  { name: "Philippines", layer: 2, population: 120_000_000, webAccess: 52, continent: "Asia" },
  { name: "Brazil", layer: 2, population: 215_000_000, webAccess: 61, continent: "South America" },
  { name: "Mexico", layer: 2, population: 128_000_000, webAccess: 59, continent: "North America" },
  { name: "MENA region", layer: 2, population: 400_000_000, webAccess: 55, continent: "Africa/Middle East" },
  
  // Layer 3
  { name: "Sub-Saharan Africa (rural)", layer: 3, population: 750_000_000, webAccess: 18, continent: "Africa" },
  { name: "Central Asia", layer: 3, population: 400_000_000, webAccess: 25, continent: "Asia" },
  { name: "Papua New Guinea", layer: 3, population: 9_000_000, webAccess: 12, continent: "Oceania" },
  { name: "Southern Sahel region", layer: 3, population: 250_000_000, webAccess: 8, continent: "Africa" },
  { name: "Remote South America", layer: 3, population: 100_000_000, webAccess: 15, continent: "South America" },
  
  // Layer 4
  { name: "Amazon indigenous", layer: 4, population: 400_000, webAccess: 0, continent: "South America" },
  { name: "Congo Basin tribes", layer: 4, population: 2_000_000, webAccess: 1, continent: "Africa" },
  { name: "Himalayan villages", layer: 4, population: 800_000, webAccess: 2, continent: "Asia" },
  { name: "Pacific island micro-communities", layer: 4, population: 1_600_000, webAccess: 0, continent: "Oceania" }
];

// Gemini claim debunking
export const GEMINI_CLAIM = {
  claim: "Web2 has 55 billion people integrated as products",
  reality: {
    layer1WebNative: { population: 800_000_000, percentage: 11 },
    layer2MobileHybrid: { population: 2_000_000_000, percentage: 27 },
    layer3AccessSparse: { population: 2_500_000_000, percentage: 33 },
    layer4Offline: { population: 1_800_000_000, percentage: 29 },
    totalWorld: 7_100_000_000
  },
  interpretation: "Only ~40% (2.8B) actively use Web2 daily. The remaining 4.3B are either sporadic users or completely offline."
};

export const HAIS_COMPATIBILITY = {
  layer1: { status: "FULL", notes: "omegaScore works perfectly. All features functional." },
  layer2: { status: "PARTIAL", notes: "Requires Account Abstraction for secret key safety. Family MultiSig needed." },
  layer3: { status: "REQUIRES_REDESIGN", notes: "Offline-first architecture needed. Elder consensus voting." },
  layer4: { status: "INCOMPATIBLE", notes: "Cannot tokenize kinship relationships. Fundamentally different paradigm." }
};
