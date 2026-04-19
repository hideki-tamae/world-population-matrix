import React from 'react';
import styles from '@/styles/components.module.css';

interface Layer {
  id: number;
  name: string;
  description: string;
  population: number;
  percentage: number;
  color: string;
  regions: string[];
  characteristics: string[];
}

interface LayerDetailProps {
  layer: Layer;
}

export default function LayerDetail({ layer }: LayerDetailProps) {
  const getCareModelForLayer = (layerId: number): string => {
    const models = {
      1: "Individual Autonomy Model",
      2: "Family Collective Model",
      3: "Community Consensus Model",
      4: "Kinship & Tradition Model",
    };
    return models[layerId as keyof typeof models] || "";
  };

  const getHaisStatus = (layerId: number): { status: string; color: string; notes: string } => {
    const statuses = {
      1: {
        status: "FULL COMPATIBILITY",
        color: "#10b981",
        notes: "omegaScore works perfectly. All HAIS features functional. Ready for production deployment."
      },
      2: {
        status: "PARTIAL - REDESIGN NEEDED",
        color: "#f59e0b",
        notes: "Account Abstraction required for secret key safety. Family MultiSig wallet architecture. Mobile-first UX essential."
      },
      3: {
        status: "REQUIRES MAJOR REDESIGN",
        color: "#ef4444",
        notes: "Offline-first infrastructure mandatory. Elder consensus voting mechanism. Fallback to oral ledgers during disconnection."
      },
      4: {
        status: "INCOMPATIBLE",
        color: "#6b7280",
        notes: "Cannot tokenize kinship relationships. Fundamentally different paradigm. Document but don't monetize."
      },
    };
    return statuses[layerId as keyof typeof statuses] || { status: "UNKNOWN", color: "#999", notes: "" };
  };

  const haisInfo = getHaisStatus(layer.id);

  return (
    <div className={styles.layerDetailContainer} style={{ borderLeftColor: layer.color }}>
      <div className={styles.detailHeader}>
        <h3>Layer {layer.id}: {layer.name}</h3>
        <span className={styles.population}>{(layer.population / 1_000_000_000).toFixed(1)}B people ({layer.percentage}%)</span>
      </div>

      <p className={styles.description}>{layer.description}</p>

      <div className={styles.detailGrid}>
        {/* Characteristics */}
        <div className={styles.detailBlock}>
          <h4>🔍 Characteristics</h4>
          <ul className={styles.characteristicsList}>
            {layer.characteristics.map((char, idx) => (
              <li key={idx}>{char}</li>
            ))}
          </ul>
        </div>

        {/* Regions */}
        <div className={styles.detailBlock}>
          <h4>🌍 Primary Regions</h4>
          <div className={styles.regionsList}>
            {layer.regions.map((region, idx) => (
              <span key={idx} className={styles.regionBadge}>{region}</span>
            ))}
          </div>
        </div>

        {/* Care Model */}
        <div className={styles.detailBlock}>
          <h4>❤️ Care Model</h4>
          <p className={styles.careModel}>{getCareModelForLayer(layer.id)}</p>
        </div>

        {/* HAIS Compatibility */}
        <div className={styles.detailBlock}>
          <h4>🔧 HAIS Integration Status</h4>
          <div 
            className={styles.haisStatus} 
            style={{ borderTopColor: haisInfo.color }}
          >
            <span className={styles.statusBadge} style={{ backgroundColor: haisInfo.color }}>
              {haisInfo.status}
            </span>
            <p className={styles.statusNotes}>{haisInfo.notes}</p>
          </div>
        </div>
      </div>

      {/* Implementation Priority */}
      <div className={styles.implementationBox}>
        <h4>📋 Implementation Priority</h4>
        {layer.id === 1 && (
          <div className={styles.priority}>
            <span className={styles.priorityLevel}>Immediate (Now)</span>
            <p>Deploy HAIS/SOLUNA with current omegaScore architecture. Focus on adoption in developed markets.</p>
          </div>
        )}
        {layer.id === 2 && (
          <div className={styles.priority}>
            <span className={styles.priorityLevel}>Q2-Q3 2026</span>
            <p>Develop Account Abstraction layer. Design family-based MultiSig wallets. Mobile-first interface redesign.</p>
          </div>
        )}
        {layer.id === 3 && (
          <div className={styles.priority}>
            <span className={styles.priorityLevel}>Q4 2026</span>
            <p>Build offline-first protocol. Implement elder consensus voting. Create SMS/USSD fallback for connectivity loss.</p>
          </div>
        )}
        {layer.id === 4 && (
          <div className={styles.priority}>
            <span className={styles.priorityLevel}>Research (2027+)</span>
            <p>Document kinship protocols. Collaborate with anthropologists. Create non-monetary impact tracking systems.</p>
          </div>
        )}
      </div>
    </div>
  );
}
