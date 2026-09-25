import React, { useState } from 'react';
import { Movement, MovementId } from '../types/atlas';

interface MovementsIndexSectionProps {
  movements: Movement[];
  onSelectMovement: (id: MovementId) => void;
}

export const MovementsIndexSection: React.FC<MovementsIndexSectionProps> = ({
  movements,
  onSelectMovement
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovements = movements.filter((m) => {
    const q = searchQuery.toLowerCase();
    return (
      m.name.toLowerCase().includes(q) ||
      m.countries.some((c) => c.toLowerCase().includes(q)) ||
      m.cities.some((c) => c.toLowerCase().includes(q)) ||
      m.mottoOrKeywords.some((k) => k.toLowerCase().includes(q))
    );
  });

  return (
    <section id="movements-index-section" className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--atlas-text)] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Section 01 // Canon Catalogue
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--atlas-text)] mt-1">
              Movement Index
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Filter by name, country or city..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 font-mono text-xs border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] text-[var(--atlas-text)] focus:outline-hidden w-64"
            />
          </div>
        </div>

        {/* Movements Catalogue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovements.map((movement, idx) => (
            <div
              key={movement.id}
              onClick={() => onSelectMovement(movement.id)}
              className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6 flex flex-col justify-between cursor-pointer group hover:border-[var(--atlas-text)] transition-colors"
            >
              <div>
                <div className="flex items-baseline justify-between text-xs font-mono text-[var(--atlas-text-muted)] mb-2">
                  <span className="font-bold text-[var(--atlas-text)]">0{idx + 1} //</span>
                  <span>{movement.period}</span>
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-[var(--atlas-text)] group-hover:underline">
                  {movement.name}
                </h3>

                <div className="text-xs text-[var(--atlas-text-secondary)] font-mono mt-1">
                  {movement.countries.join(', ')} · {movement.cities.slice(0, 3).join(', ')}
                </div>

                <p className="mt-4 text-xs text-[var(--atlas-text-body)] leading-relaxed line-clamp-3">
                  {movement.summary}
                </p>

                {/* Visual Principles Preview */}
                <div className="mt-4 pt-3 border-t border-[var(--atlas-border-soft)]">
                  <span className="font-mono text-[10px] text-[var(--atlas-text-quiet)] uppercase block mb-1">
                    Visual Principles
                  </span>
                  <ul className="text-[11px] text-[var(--atlas-text-soft)] space-y-1">
                    {movement.visualPrinciples.slice(0, 2).map((p, pIdx) => (
                      <li key={pIdx} className="truncate">▪ {p}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[var(--atlas-border)] flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--atlas-text-quiet)] uppercase">{movement.visualDna.geometry.diagramType}</span>
                <span className="text-[var(--atlas-text)] font-semibold group-hover:text-[#D82B2B]">
                  Open Monograph →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
