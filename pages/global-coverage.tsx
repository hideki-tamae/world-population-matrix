import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/global-coverage.module.css';
import { LAYERS, REGIONS_DATA, CARE_DEFINITIONS, GEMINI_CLAIM, HAIS_COMPATIBILITY } from '@/lib/constants';
import PopulationMatrix from '@/components/PopulationMatrix';
import LayerDetail from '@/components/LayerDetail';

export default function GlobalCoverage() {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  // Calculate totals
  const totalPopulation = LAYERS.reduce((sum, layer) => sum + layer.population, 0);
  
  return (
    <>
      <Head>
        <title>World Population Coverage Matrix - Hideki Tamae</title>
        <meta name="description" content="Global population coverage by digital layer and care definition registry. Analyzing Web2, Web3, and offline economy paradigms." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <h1>World Population Coverage Matrix</h1>
          <p className={styles.subtitle}>
            Mapping humanity's digital access landscape and care economy models across 7.1 billion people
          </p>
        </header>

        {/* Critical Insight Box */}
        <section className={styles.criticalInsight}>
          <div className={styles.insightBox}>
            <h2>⚠️ Gemini's Claim Under Review</h2>
            <p className={styles.claim}>
              <strong>Gemini:</strong> "Web2 has 55 billion people integrated as products"
            </p>
            <p className={styles.reality}>
              <strong>Reality:</strong> Only 800M (11%) are truly "web-native." 2B use mobile-first hybrids. 2.5B have sparse access. 1.8B are completely offline.
            </p>
            <p className={styles.conclusion}>
              <strong>Conclusion:</strong> Gemini's model applies to ~12% of humanity. HAIS/SOLUNA must redesign for layers 2-4.
            </p>
          </div>
        </section>

        {/* Population Summary Cards */}
        <section className={styles.summaryCards}>
          {LAYERS.map((layer) => (
            <div 
              key={layer.id} 
              className={`${styles.card} ${selectedLayer === layer.id ? styles.cardActive : ''}`}
              onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
              style={{ borderLeftColor: layer.color }}
            >
              <div className={styles.cardHeader}>
                <span className={styles.layerName}>Layer {layer.id}: {layer.name}</span>
              </div>
              <div className={styles.cardMetrics}>
                <div className={styles.metric}>
                  <span className={styles.label}>Population</span>
                  <span className={styles.value}>{(layer.population / 1_000_000_000).toFixed(1)}B</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.label}>% of world</span>
                  <span className={styles.value}>{layer.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Layer Details */}
        {selectedLayer && (
          <section className={styles.layerDetails}>
            <LayerDetail layer={LAYERS.find(l => l.id === selectedLayer)!} />
          </section>
        )}

        {/* Population Matrix Visualization */}
        <section className={styles.matrixSection}>
          <h2>Global Distribution by Layer</h2>
          <PopulationMatrix layers={LAYERS} onRegionSelect={setSelectedRegion} />
        </section>

        {/* Regions Breakdown */}
        <section className={styles.regionsSection}>
          <h2>Regional Breakdown</h2>
          <div className={styles.layersContainer}>
            {LAYERS.map((layer) => (
              <div key={layer.id} className={styles.layerGroup}>
                <h3 style={{ borderLeftColor: layer.color }} className={styles.layerHeader}>
                  Layer {layer.id}: {layer.name}
                </h3>
                <div className={styles.regionsList}>
                  {REGIONS_DATA.filter(r => r.layer === layer.id).map((region) => (
                    <div 
                      key={region.name} 
                      className={styles.regionItem}
                      onClick={() => setSelectedRegion(region.name)}
                    >
                      <div className={styles.regionName}>{region.name}</div>
                      <div className={styles.regionMetrics}>
                        <span className={styles.population}>
                          {(region.population / 1_000_000).toFixed(0)}M
                        </span>
                        <span className={styles.webAccess}>
                          {region.webAccess}% access
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Care Definition Comparison */}
        <section className={styles.careSection}>
          <h2>Care Definition Models by Layer</h2>
          <div className={styles.careGrid}>
            {Object.entries(CARE_DEFINITIONS).map(([key, careModel]) => (
              <div key={key} className={styles.careCard}>
                <h3>{careModel.name}</h3>
                <div className={styles.careDetail}>
                  <p><strong>Regions:</strong> {careModel.regions.join(", ")}</p>
                  <p><strong>Definition:</strong> {careModel.definition}</p>
                  <p><strong>Token Model:</strong> {careModel.tokenMechanic}</p>
                  <p><strong>Governance:</strong> {careModel.governance}</p>
                  <p className={styles.compatibility}>
                    <strong>HAIS Compatibility:</strong>{" "}
                    <span className={styles[careModel.haisCompatibility.toLowerCase().replace(/ /g, '_')]}>
                      {careModel.haisCompatibility}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* HAIS Implementation Roadmap */}
        <section className={styles.roadmapSection}>
          <h2>HAIS Implementation by Layer</h2>
          <div className={styles.roadmapGrid}>
            {LAYERS.map((layer) => (
              <div key={layer.id} className={styles.roadmapCard}>
                <h3>Layer {layer.id}: {layer.name}</h3>
                <div className={styles.roadmapContent}>
                  <div className={styles.statusBadge} data-status={HAIS_COMPATIBILITY[`layer${layer.id}` as keyof typeof HAIS_COMPATIBILITY].status}>
                    {HAIS_COMPATIBILITY[`layer${layer.id}` as keyof typeof HAIS_COMPATIBILITY].status}
                  </div>
                  <p>{HAIS_COMPATIBILITY[`layer${layer.id}` as keyof typeof HAIS_COMPATIBILITY].notes}</p>
                  <div className={styles.actionItems}>
                    {layer.id === 1 && (
                      <div className={styles.action}>✅ Deploy current HAIS omegaScore</div>
                    )}
                    {layer.id === 2 && (
                      <div className={styles.action}>🔧 Implement Account Abstraction layer</div>
                    )}
                    {layer.id === 3 && (
                      <div className={styles.action}>🔄 Build offline-first infrastructure</div>
                    )}
                    {layer.id === 4 && (
                      <div className={styles.action}>📚 Document kinship protocols (non-tokenized)</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <p>
            Built by <strong>Hideki Tamae</strong> | Civilization OS Designer <br/>
            Data sources: UN World Population Prospects 2024 | ITU Digital Access Data | World Bank World Development Indicators<br/>
            <a href="https://mirror.xyz">Read on Mirror.xyz</a> • <a href="https://zenn.dev">Read on Zenn</a> • <a href="https://github.com">View on GitHub</a>
          </p>
        </footer>
      </main>
    </>
  );
}
