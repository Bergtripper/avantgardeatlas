import React from 'react';
import { VisualDNA } from '../types/atlas';

interface VisualDnaMatrixProps {
  dna: VisualDNA;
  movementName: string;
  isCompact?: boolean;
}

export const VisualDnaMatrix: React.FC<VisualDnaMatrixProps> = ({
  dna,
  movementName,
  isCompact = false
}) => {
  const renderGeometryPreview = () => {
    switch (dna.geometry.diagramType) {
      case 'circle-square-triangle':
        return (
          <svg viewBox="0 0 160 60" className="w-full h-14 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border-control)]">
            <polygon points="30,45 48,15 66,45" fill="#EAB308" stroke="#121212" strokeWidth="1" />
            <rect x="75" y="15" width="30" height="30" fill="#D82B2B" stroke="#121212" strokeWidth="1" />
            <circle cx="130" cy="30" r="16" fill="#1D4ED8" stroke="#121212" strokeWidth="1" />
          </svg>
        );
      case 'orthogonal-grid':
        return (
          <svg viewBox="0 0 160 60" className="w-full h-14 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border-control)]">
            <rect x="20" y="8" width="50" height="44" fill="#DC2626" />
            <rect x="80" y="28" width="60" height="24" fill="#2563EB" />
            <line x1="75" y1="0" x2="75" y2="60" stroke="#121212" strokeWidth="4" />
            <line x1="0" y1="24" x2="160" y2="24" stroke="#121212" strokeWidth="3" />
          </svg>
        );
      case 'diagonal-vector':
        return (
          <svg viewBox="0 0 160 60" className="w-full h-14 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border-control)]">
            <line x1="10" y1="50" x2="140" y2="10" stroke="#DC2626" strokeWidth="4" />
            <polygon points="125,5 155,10 135,30" fill="#DC2626" />
            <line x1="30" y1="55" x2="120" y2="25" stroke="#121212" strokeWidth="2" strokeDasharray="3 2" />
          </svg>
        );
      case 'floating-planes':
        return (
          <svg viewBox="0 0 160 60" className="w-full h-14 bg-[var(--atlas-surface)] border border-[var(--atlas-border-control)]">
            <rect x="30" y="15" width="28" height="28" fill="#121212" />
            <rect x="75" y="20" width="35" height="12" fill="#E11D48" transform="rotate(-20 92 26)" />
            <circle cx="130" cy="25" r="10" fill="#1D4ED8" />
          </svg>
        );
      case 'structural-frame':
      default:
        return (
          <svg viewBox="0 0 160 60" className="w-full h-14 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border-control)]">
            <rect x="25" y="10" width="110" height="40" fill="none" stroke="#121212" strokeWidth="1.5" />
            <line x1="55" y1="10" x2="55" y2="50" stroke="#334155" strokeWidth="1.5" />
            <line x1="85" y1="10" x2="85" y2="50" stroke="#334155" strokeWidth="1.5" />
            <line x1="115" y1="10" x2="115" y2="50" stroke="#334155" strokeWidth="1.5" />
            <line x1="25" y1="28" x2="135" y2="28" stroke="#334155" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
        );
    }
  };

  return (
    <div className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-5">
      {/* Header */}
      <div className="border-b border-[var(--atlas-border)] pb-3 flex items-center justify-between">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-quiet)] block">
            VISUAL DNA PROFILE
          </span>
          <span className="font-semibold text-sm tracking-tight text-[var(--atlas-text)]">
            {movementName}
          </span>
        </div>
        <span className="font-mono text-[10px] text-[var(--atlas-text-faint)]">STANDARDIZED MATRIX</span>
      </div>

      <div className={`mt-4 grid ${isCompact ? 'grid-cols-1 gap-4' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'}`}>
        {/* 1. Geometry */}
        <div className="border border-[var(--atlas-border-soft)] bg-[var(--atlas-card)] p-3.5">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--atlas-text)] mb-1.5 flex justify-between">
            <span>01 / GEOMETRY</span>
          </div>
          {renderGeometryPreview()}
          <div className="mt-2.5 flex flex-wrap gap-1">
            {dna.geometry.primaryShapes.map((shape, idx) => (
              <span key={idx} className="font-mono text-[11px] text-[var(--atlas-text-body)] px-1.5 py-0.5 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border)]">
                {shape}
              </span>
            ))}
          </div>
          <p className="mt-2 text-xs text-[var(--atlas-text-subtle)] leading-relaxed line-clamp-3">
            {dna.geometry.description}
          </p>
        </div>

        {/* 2. Composition */}
        <div className="border border-[var(--atlas-border-soft)] bg-[var(--atlas-card)] p-3.5">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--atlas-text)] mb-1.5">
            02 / COMPOSITION
          </div>
          <div className="font-semibold text-xs text-[var(--atlas-text)] mb-2 font-mono">
            {dna.composition.system}
          </div>
          <ul className="text-xs text-[var(--atlas-text-secondary)] space-y-1.5 list-disc list-inside">
            {dna.composition.rules.map((rule, idx) => (
              <li key={idx} className="line-clamp-2">{rule}</li>
            ))}
          </ul>
        </div>

        {/* 3. Colour Palette */}
        <div className="border border-[var(--atlas-border-soft)] bg-[var(--atlas-card)] p-3.5">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--atlas-text)] mb-1.5">
            03 / COLOUR PALETTE
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5 my-2">
            {dna.colour.palette.map((c, idx) => (
              <div key={idx} className="group relative">
                <div
                  className="w-full h-8 border border-[var(--atlas-text)]/20 cursor-pointer"
                  style={{ backgroundColor: c.hex }}
                  title={`${c.name} (${c.hex})`}
                />
                <div className="mt-1 font-mono text-[9px] text-[var(--atlas-text-muted)] truncate">
                  {c.hex}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[var(--atlas-text-subtle)] leading-relaxed mt-2 line-clamp-2">
            {dna.colour.philosophy}
          </p>
        </div>

        {/* 4. Typography */}
        <div className="border border-[var(--atlas-border-soft)] bg-[var(--atlas-card)] p-3.5">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--atlas-text)] mb-1.5">
            04 / TYPOGRAPHY
          </div>
          <div className="font-semibold text-xs text-[var(--atlas-text)] mb-2">
            {dna.typography.classification}
          </div>
          <div className="p-2 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border-control)] font-mono text-xs text-[var(--atlas-text)] tracking-wider truncate mb-2">
            {dna.typography.specimen}
          </div>
          <ul className="text-xs text-[var(--atlas-text-subtle)] space-y-1 list-disc list-inside">
            {dna.typography.characteristics.slice(0, 2).map((char, idx) => (
              <li key={idx} className="truncate">{char}</li>
            ))}
          </ul>
        </div>

        {/* 5. Materials */}
        <div className="border border-[var(--atlas-border-soft)] bg-[var(--atlas-card)] p-3.5">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--atlas-text)] mb-1.5">
            05 / MATERIALS
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {dna.materials.map((mat, idx) => (
              <span
                key={idx}
                className="font-mono text-xs px-2 py-1 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border)] text-[var(--atlas-text-body)]"
              >
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* 6. Attitude */}
        <div className="border border-[var(--atlas-border-soft)] bg-[var(--atlas-card)] p-3.5">
          <div className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--atlas-text)] mb-1.5">
            06 / ATTITUDE & STANCE
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {dna.attitude.map((att, idx) => (
              <span
                key={idx}
                className="font-mono text-xs uppercase px-2 py-1 bg-[#121212] text-white"
              >
                {att}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
