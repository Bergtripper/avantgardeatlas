import React from 'react';
import { EvidenceStatus } from '../types/atlas';

interface EvidenceBadgeProps {
  status: EvidenceStatus;
  compact?: boolean;
}

const LABELS: Record<EvidenceStatus, string> = {
  documented: 'Documented',
  'editorial-synthesis': 'Editorial synthesis',
  interpretive: 'Interpretive',
};

const DESCRIPTIONS: Record<EvidenceStatus, string> = {
  documented: 'Directly supported by the cited source record.',
  'editorial-synthesis': 'A factual synthesis assembled from one or more documented records.',
  interpretive: 'An editorial interpretation or analytical relationship rather than a directly stated source claim.',
};

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({
  status,
  compact = false,
}) => (
  <span
    title={DESCRIPTIONS[status]}
    className={`inline-flex items-center border font-mono uppercase tracking-wider ${
      compact ? 'px-1.5 py-0.5 text-[8px]' : 'px-2 py-1 text-[9px]'
    } ${
      status === 'documented'
        ? 'border-[var(--atlas-text)] text-[var(--atlas-text)]'
        : status === 'editorial-synthesis'
        ? 'border-[var(--atlas-border-strong)] text-[var(--atlas-text-secondary)] border-dashed'
        : 'border-[#D82B2B] text-[#D82B2B]'
    }`}
  >
    {LABELS[status]}
  </span>
);
