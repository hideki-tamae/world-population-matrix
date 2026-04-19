import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>World Population Matrix - Hideki Tamae</title>
        <meta name="description" content="Global population coverage analysis and care economy models by Hideki Tamae, Civilization OS Designer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <h1>World Population Coverage Matrix</h1>
            <p>
              A comprehensive analysis of global digital access, care definitions, and HAIS/SOLUNA implementation viability across 7.1 billion people
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/global-coverage" className={styles.primaryBtn}>
                View Interactive Dashboard →
              </Link>
              <a href="https://mirror.xyz" className={styles.secondaryBtn}>
                Read Analysis on Mirror.xyz
              </a>
            </div>
          </div>
        </header>

        <section className={styles.problemStatement}>
          <h2>The Problem with Gemini's Analysis</h2>
          <div className={styles.problemBox}>
            <div className={styles.claim}>
              <h3>Gemini's Claim</h3>
              <p>
                "Web2 has integrated 55 billion people as products into digital economies."
              </p>
            </div>
            <div className={styles.reality}>
              <h3>Ground Truth</h3>
              <ul>
                <li><strong>11%</strong> (800M) are truly "web-native" with constant connectivity</li>
                <li><strong>27%</strong> (2B) are mobile-first hybrids with intermittent access</li>
                <li><strong>33%</strong> (2.5B) have sparse connectivity in remote areas</li>
                <li><strong>29%</strong> (1.8B) are completely offline with no digital infrastructure</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.framework}>
          <h2>The Four-Layer Population Model</h2>
          <div className={styles.layerGrid}>
            <div className={styles.layerCard} style={{ borderTopColor: '#185FA5' }}>
              <h3>Layer 1: Web-native</h3>
              <div className={styles.layerStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>800M</span>
                  <span className={styles.statLabel}>people</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>11%</span>
                  <span className={styles.statLabel}>of world</span>
                </div>
              </div>
              <p>Digital-first societies: North America, Western Europe, Japan, Australia, Singapore</p>
              <div className={styles.status}>
                <span className={styles.statusGood}>✅ HAIS Ready</span>
              </div>
            </div>

            <div className={styles.layerCard} style={{ borderTopColor: '#639922' }}>
              <h3>Layer 2: Mobile hybrid</h3>
              <div className={styles.layerStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>2.0B</span>
                  <span className={styles.statLabel}>people</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>27%</span>
                  <span className={styles.statLabel}>of world</span>
                </div>
              </div>
              <p>Smartphone-first, intermittent access: India, Indonesia, Philippines, Brazil, Mexico</p>
              <div className={styles.status}>
                <span className={styles.statusWarning}>⚠️ Redesign Needed</span>
              </div>
            </div>

            <div className={styles.layerCard} style={{ borderTopColor: '#BA7517' }}>
              <h3>Layer 3: Access sparse</h3>
              <div className={styles.layerStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>2.5B</span>
                  <span className={styles.statLabel}>people</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>33%</span>
                  <span className={styles.statLabel}>of world</span>
                </div>
              </div>
              <p>Rural/remote, 2G-3G dominant: Sub-Saharan Africa, Central Asia, Papua New Guinea</p>
              <div className={styles.status}>
                <span className={styles.statusDanger}>🔧 Major Redesign</span>
              </div>
            </div>

            <div className={styles.layerCard} style={{ borderTopColor: '#D4A574' }}>
              <h3>Layer 4: Offline</h3>
              <div className={styles.layerStats}>
                <div className={styles.stat}>
                  <span className={styles.statValue}>1.8B</span>
                  <span className={styles.statLabel}>people</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statValue}>29%</span>
                  <span className={styles.statLabel}>of world</span>
                </div>
              </div>
              <p>No internet infrastructure: Remote Amazon, Sub-Saharan forests, isolated villages</p>
              <div className={styles.status}>
                <span className={styles.statusCritical}>❌ Incompatible</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.careDefinitions}>
          <h2>Care Definition Models by Layer</h2>
          <p className={styles.sectionDescription}>
            Different cultures define "care" fundamentally differently. HAIS must adapt, not impose:
          </p>
          <div className={styles.careGrid}>
            <div className={styles.careItem}>
              <h4>Layer 1: Individual Autonomy</h4>
              <p><strong>Definition:</strong> Personal responsibility + institutional backup</p>
              <p><strong>Token Model:</strong> omegaScore (individual metrics)</p>
              <p><strong>Governance:</strong> Market competition</p>
            </div>
            <div className={styles.careItem}>
              <h4>Layer 2: Family Collective</h4>
              <p><strong>Definition:</strong> Extended family networks + remittance systems</p>
              <p><strong>Token Model:</strong> Family MultiSig wallets</p>
              <p><strong>Governance:</strong> Family consensus + elder weight</p>
            </div>
            <div className={styles.careItem}>
              <h4>Layer 3: Community Consensus</h4>
              <p><strong>Definition:</strong> Village elders validate + communal resource sharing</p>
              <p><strong>Token Model:</strong> DAO-style governance + oral ledgers</p>
              <p><strong>Governance:</strong> Elder council validation</p>
            </div>
            <div className={styles.careItem}>
              <h4>Layer 4: Kinship & Tradition</h4>
              <p><strong>Definition:</strong> Care embedded in relationship obligations</p>
              <p><strong>Token Model:</strong> Cannot be tokenized</p>
              <p><strong>Governance:</strong> Oral tradition + seasonal rhythms</p>
            </div>
          </div>
        </section>

        <section className={styles.implications}>
          <h2>Strategic Implications for HAIS/SOLUNA</h2>
          <div className={styles.implicationsList}>
            <div className={styles.implication}>
              <span className={styles.icon}>❌</span>
              <div>
                <h4>Current Reach: 12% Only</h4>
                <p>HAIS/SOLUNA currently works for Layer 1 (800M people). That's 12% of humanity.</p>
              </div>
            </div>
            <div className={styles.implication}>
              <span className={styles.icon}>🔄</span>
              <div>
                <h4>Layers 2-4 Need Redesign</h4>
                <p>88% of humanity requires different protocols, governance, and care definitions.</p>
              </div>
            </div>
            <div className={styles.implication}>
              <span className={styles.icon}>🌍</span>
              <div>
                <h4>Not a Technical Problem</h4>
                <p>The challenge is cultural/anthropological, not merely technical. Must listen to communities, not impose systems.</p>
              </div>
            </div>
            <div className={styles.implication}>
              <span className={styles.icon}>📊</span>
              <div>
                <h4>Data-Driven Localization</h4>
                <p>True "Web∞" = one platform stack serving fundamentally different care models in parallel.</p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.roadmap}>
          <h2>Implementation Roadmap</h2>
          <div className={styles.timelineContainer}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} style={{ backgroundColor: '#10b981' }}></div>
              <h4>Now (Q2 2026)</h4>
              <p>Deploy HAIS omegaScore for Layer 1. Target Japan, USA, Western Europe, Australia.</p>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} style={{ backgroundColor: '#f59e0b' }}></div>
              <h4>Q2-Q3 2026</h4>
              <p>Account Abstraction layer. Family MultiSig design. Mobile UX overhaul for Layer 2.</p>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} style={{ backgroundColor: '#ef4444' }}></div>
              <h4>Q4 2026</h4>
              <p>Offline-first protocol. Elder consensus voting. SMS/USSD fallback systems.</p>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDot} style={{ backgroundColor: '#6b7280' }}></div>
              <h4>2027+</h4>
              <p>Anthropological research Layer 4. Non-monetary impact tracking. UN proposal.</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Explore the Data</h2>
          <p>Dive into the interactive dashboard to see the population matrix, care definitions, and HAIS compatibility by region.</p>
          <Link href="/global-coverage" className={styles.primaryBtn}>
            Launch Dashboard
          </Link>
        </section>

        <footer className={styles.footer}>
          <p>
            By <strong>Hideki Tamae</strong> | Civilization OS Designer | ACEs CARE HUB JAPAN<br/>
            <a href="https://mirror.xyz">Mirror.xyz</a> • <a href="https://zenn.dev">Zenn</a> • <a href="https://github.com">GitHub</a> • <a href="https://huggingface.co">Hugging Face</a>
          </p>
        </footer>
      </main>
    </>
  );
}
