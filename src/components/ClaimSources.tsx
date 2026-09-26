import React from 'react';
import { ClaimEvidence } from '../types/atlas';
import { getSourceById } from '../data/sources';

interface ClaimSourcesProps {
  evidence?: ClaimEvidence;
  compact?: boolean;
}

export const ClaimSources: React.FC<ClaimSourcesProps> = ({
  evidence,
  compact = false,
}) => {
  if (!evidence || evidence.sourceIds.length === 0) return null;

  const sources = evidence.sourceIds
    .map((sourceId) => getSourceById(sourceId))
    .filter(Boolean);

  if (sources.length === 0) return null;

  return (
    <div
      className={`${compact ? 'mt-2' : 'mt-3 pt-3 border-t border-[var(--atlas-border-soft)]'} text-xs`}
    >
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="font-mono text-[8px] uppercase tracking-wider text-[#D82B2B]">
          Sources
        </span>
        {sources.map((source) => (
          <a
            key={source!.id}
            href={source!.url}
            target="_blank"
            rel="noreferrer"
            title={source!.note}
            className="px-2 py-1 border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] font-mono text-[9px] text-[var(--atlas-text-secondary)] hover:border-[var(--atlas-text)] hover:text-[var(--atlas-text)]"
          >
            {source!.publisher} ↗
          </a>
        ))}
      </div>
      {evidence.note && (
        <p className="mt-2 max-w-3xl font-mono text-[9px] leading-relaxed text-[var(--atlas-text-muted)]">
          {evidence.note}
        </p>
      )}
    </div>
  );
};
