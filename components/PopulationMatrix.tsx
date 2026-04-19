import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from 'recharts';
import styles from '@/styles/components.module.css';

interface Layer {
  id: number;
  name: string;
  population: number;
  percentage: number;
  color: string;
}

interface PopulationMatrixProps {
  layers: Layer[];
  onRegionSelect?: (region: string) => void;
}

export default function PopulationMatrix({ layers, onRegionSelect }: PopulationMatrixProps) {
  // Data for pie chart
  const pieData = layers.map((layer) => ({
    name: `Layer ${layer.id}: ${layer.name}`,
    value: layer.population,
    population: (layer.population / 1_000_000_000).toFixed(2),
    percentage: layer.percentage,
  }));

  // Custom label for pie chart
  const renderCustomLabel = (entry: any) => {
    return `${entry.percentage}%`;
  };

  return (
    <div className={styles.matrixContainer}>
      <div className={styles.chartWrapper}>
        <h3>Global Population Distribution</h3>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomLabel}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {layers.map((layer, index) => (
                <Cell key={`cell-${index}`} fill={layer.color} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value: any) => {
                if (typeof value === 'number') {
                  return [(value / 1_000_000_000).toFixed(2) + 'B', 'Population'];
                }
                return value;
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Detailed Breakdown Table */}
      <div className={styles.breakdownSection}>
        <h3>Detailed Breakdown by Layer</h3>
        <table className={styles.breakdownTable}>
          <thead>
            <tr>
              <th>Layer</th>
              <th>Name</th>
              <th>Population</th>
              <th>Percentage</th>
              <th>Per Capita (if tokenized)</th>
            </tr>
          </thead>
          <tbody>
            {layers.map((layer) => (
              <tr key={layer.id} style={{ borderLeftColor: layer.color }}>
                <td>{layer.id}</td>
                <td className={styles.layerName}>{layer.name}</td>
                <td className={styles.population}>
                  {(layer.population / 1_000_000_000).toFixed(2)}B
                </td>
                <td className={styles.percentage}>{layer.percentage}%</td>
                <td className={styles.perCapita}>
                  {layer.id === 1 ? (
                    <span className={styles.status}>✅ omegaScore ready</span>
                  ) : layer.id === 2 ? (
                    <span className={styles.status}>⚠️ MultiSig needed</span>
                  ) : layer.id === 3 ? (
                    <span className={styles.status}>🔧 Offline redesign</span>
                  ) : (
                    <span className={styles.status}>❌ Non-tokenizable</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key Insight */}
      <div className={styles.insightBox}>
        <h4>Key Insight</h4>
        <p>
          Only <strong>{layers[0].percentage}%</strong> of the world's population (Layer 1) can use HAIS/SOLUNA in its current form. 
          Layers 2-4 represent <strong>{100 - layers[0].percentage}%</strong> of humanity and require redesigned protocols 
          that account for different care models, governance structures, and infrastructure realities.
        </p>
      </div>
    </div>
  );
}
