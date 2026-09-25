import React, { useState } from 'react';
import { Movement, MovementId } from '../types/atlas';
import { ArchivalVectorPlate } from './ArchivalVectorPlate';
import { getObjectsForMovement, getPeopleForMovement } from '../data';

interface CompareSectionProps {
  movements: Movement[];
  onSelectMovement: (id: MovementId) => void;
}

export const CompareSection: React.FC<CompareSectionProps> = ({
  movements,
  onSelectMovement
}) => {
  const [selectedIds, setSelectedIds] = useState<MovementId[]>([
    'bauhaus',
    'de-stijl',
    'constructivism'
  ]);

  const toggleMovement = (id: MovementId) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length > 1) {
        setSelectedIds(selectedIds.filter((item) => item !== id));
      }
    } else {
      if (selectedIds.length < 3) {
        setSelectedIds([...selectedIds, id]);
      } else {
        // Replace last item
        setSelectedIds([selectedIds[0], selectedIds[1], id]);
      }
    }
  };

  const selectedMovements = selectedIds
    .map((id) => movements.find((m) => m.id === id))
    .filter(Boolean) as Movement[];

  return (
    <section id="compare-section" className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--atlas-text)] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Section 04 // Comparative Morphological Analysis
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--atlas-text)] mt-1">
              Movement Comparison
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--atlas-text-secondary)] max-w-md">
            Select up to three movements to directly juxtapose their visual DNA, architectural strategies, typographic doctrines, and industrial attitudes side by side.
          </div>
        </div>

        {/* Movement Selector Chips */}
        <div className="mb-8 p-4 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border)]">
          <div className="text-xs font-mono uppercase tracking-wider text-[var(--atlas-text-muted)] mb-3">
            Select movements to compare (Max 3, currently {selectedIds.length}/3):
          </div>
          <div className="flex flex-wrap gap-2">
            {movements.map((m) => {
              const isSelected = selectedIds.includes(m.id);
              return (
                <button
                  key={m.id}
                  onClick={() => toggleMovement(m.id)}
                  className={`px-3 py-1.5 font-mono text-xs cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-[var(--atlas-ink-button)] text-white border-[var(--atlas-text)] font-semibold'
                      : 'bg-[var(--atlas-card)] text-[var(--atlas-text-secondary)] border-[var(--atlas-border-control)] hover:border-[var(--atlas-text)]'
                  }`}
                >
                  {isSelected ? `✓ ${m.name}` : `+ ${m.name}`}
                </button>
              );
            })}
          </div>
        </div>

        {/* Comparative Columns Container */}
        <div className="overflow-x-auto pb-6">
          <div className="min-w-[900px]">
            {/* Columns Header Grid */}
            <div className={`grid grid-cols-12 gap-px bg-[var(--atlas-border-control)] border border-[var(--atlas-border-control)]`}>
              {/* Category Label Column */}
              <div className="col-span-3 bg-[var(--atlas-soft-fill)] p-4 text-xs font-mono uppercase tracking-wider text-[var(--atlas-text-muted)] flex items-center">
                CATEGORY
              </div>

              {/* Movement Columns */}
              {selectedMovements.map((m) => (
                <div
                  key={m.id}
                  className={`col-span-${Math.floor(9 / selectedMovements.length)} bg-[var(--atlas-surface)] p-5 flex flex-col justify-between`}
                >
                  <div>
                    <span className="font-mono text-[10px] text-[var(--atlas-text-quiet)] uppercase tracking-wider">
                      {m.period}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--atlas-text)] mt-1">
                      {m.name}
                    </h3>
                    <div className="text-xs text-[var(--atlas-text-secondary)] mt-1 font-mono">
                      {m.countries.join(', ')}
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectMovement(m.id)}
                    className="mt-3 text-left font-mono text-[11px] underline text-[var(--atlas-text)] hover:text-[#D82B2B] cursor-pointer"
                  >
                    View Monograph →
                  </button>
                </div>
              ))}
            </div>

            {/* Row 1: Core Philosophy */}
            <div className="grid grid-cols-12 gap-px bg-[var(--atlas-border-control)] border-x border-b border-[var(--atlas-border-control)]">
              <div className="col-span-3 bg-[var(--atlas-surface-alt)] p-4 text-xs font-mono font-semibold uppercase text-[var(--atlas-text)]">
                01 / CORE PHILOSOPHY
              </div>
              {selectedMovements.map((m) => (
                <div
                  key={m.id}
                  className={`col-span-${Math.floor(9 / selectedMovements.length)} bg-[var(--atlas-card)] p-4 text-xs text-[#333] leading-relaxed`}
                >
                  {m.coreIdeas}
                </div>
              ))}
            </div>

            {/* Row 2: Geometry & Visual DNA */}
            <div className="grid grid-cols-12 gap-px bg-[var(--atlas-border-control)] border-x border-b border-[var(--atlas-border-control)]">
              <div className="col-span-3 bg-[var(--atlas-surface-alt)] p-4 text-xs font-mono font-semibold uppercase text-[var(--atlas-text)]">
                02 / GEOMETRY & FORM
              </div>
              {selectedMovements.map((m) => (
                <div
                  key={m.id}
                  className={`col-span-${Math.floor(9 / selectedMovements.length)} bg-[var(--atlas-card)] p-4 text-xs text-[#333]`}
                >
                  <div className="font-mono text-xs font-semibold text-[var(--atlas-text)] mb-1">
                    {m.visualDna.geometry.primaryShapes.join(', ')}
                  </div>
                  <div className="text-[var(--atlas-text-subtle)] leading-relaxed">
                    {m.visualDna.geometry.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Row 3: Colour Palette */}
            <div className="grid grid-cols-12 gap-px bg-[var(--atlas-border-control)] border-x border-b border-[var(--atlas-border-control)]">
              <div className="col-span-3 bg-[var(--atlas-surface-alt)] p-4 text-xs font-mono font-semibold uppercase text-[var(--atlas-text)]">
                03 / COLOUR PALETTE
              </div>
              {selectedMovements.map((m) => (
                <div
                  key={m.id}
                  className={`col-span-${Math.floor(9 / selectedMovements.length)} bg-[var(--atlas-card)] p-4 text-xs text-[#333]`}
                >
                  <div className="flex gap-1.5 mb-2">
                    {m.visualDna.colour.palette.map((c, idx) => (
                      <div
                        key={idx}
                        className="w-8 h-8 border border-black/20"
                        style={{ backgroundColor: c.hex }}
                        title={`${c.name} (${c.hex})`}
                      />
                    ))}
                  </div>
                  <p className="text-[var(--atlas-text-subtle)] text-[11px] leading-relaxed">
                    {m.visualDna.colour.philosophy}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 4: Typography */}
            <div className="grid grid-cols-12 gap-px bg-[var(--atlas-border-control)] border-x border-b border-[var(--atlas-border-control)]">
              <div className="col-span-3 bg-[var(--atlas-surface-alt)] p-4 text-xs font-mono font-semibold uppercase text-[var(--atlas-text)]">
                04 / TYPOGRAPHY
              </div>
              {selectedMovements.map((m) => (
                <div
                  key={m.id}
                  className={`col-span-${Math.floor(9 / selectedMovements.length)} bg-[var(--atlas-card)] p-4 text-xs text-[#333]`}
                >
                  <div className="font-semibold text-xs text-[var(--atlas-text)] mb-1">
                    {m.visualDna.typography.classification}
                  </div>
                  <div className="p-1.5 bg-[var(--atlas-surface-alt)] font-mono text-[11px] text-[var(--atlas-text)] truncate border border-[var(--atlas-border-control)] mb-2">
                    {m.visualDna.typography.specimen}
                  </div>
                  <ul className="text-[11px] text-[var(--atlas-text-subtle)] space-y-0.5 list-disc list-inside">
                    {m.visualDna.typography.characteristics.slice(0, 2).map((c, idx) => (
                      <li key={idx} className="truncate">{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Row 5: Architecture */}
            <div className="grid grid-cols-12 gap-px bg-[var(--atlas-border-control)] border-x border-b border-[var(--atlas-border-control)]">
              <div className="col-span-3 bg-[var(--atlas-surface-alt)] p-4 text-xs font-mono font-semibold uppercase text-[var(--atlas-text)]">
                05 / ARCHITECTURE
              </div>
              {selectedMovements.map((m) => (
                <div
                  key={m.id}
                  className={`col-span-${Math.floor(9 / selectedMovements.length)} bg-[var(--atlas-card)] p-4 text-xs text-[var(--atlas-text-body)] leading-relaxed`}
                >
                  {m.architectureNotes}
                </div>
              ))}
            </div>

            {/* Row 6: Relationship with Industry */}
            <div className="grid grid-cols-12 gap-px bg-[var(--atlas-border-control)] border-x border-b border-[var(--atlas-border-control)]">
              <div className="col-span-3 bg-[var(--atlas-surface-alt)] p-4 text-xs font-mono font-semibold uppercase text-[var(--atlas-text)]">
                06 / INDUSTRY & MANUFACTURE
              </div>
              {selectedMovements.map((m) => (
                <div
                  key={m.id}
                  className={`col-span-${Math.floor(9 / selectedMovements.length)} bg-[var(--atlas-card)] p-4 text-xs text-[var(--atlas-text-body)] leading-relaxed`}
                >
                  {m.industryRelationship}
                </div>
              ))}
            </div>

            {/* Row 7: Canonical Key Work */}
            <div className="grid grid-cols-12 gap-px bg-[var(--atlas-border-control)] border-x border-b border-[var(--atlas-border-control)]">
              <div className="col-span-3 bg-[var(--atlas-surface-alt)] p-4 text-xs font-mono font-semibold uppercase text-[var(--atlas-text)]">
                07 / CANONICAL WORK
              </div>
              {selectedMovements.map((m) => {
                const movementObjects = getObjectsForMovement(m.id);
                const work = movementObjects[0];
                return (
                  <div
                    key={m.id}
                    className={`col-span-${Math.floor(9 / selectedMovements.length)} bg-[var(--atlas-card)] p-4`}
                  >
                    {work ? (
                      <div>
                        <ArchivalVectorPlate
                          type={work.graphicType || work.svgGraphicType || 'bauhaus-building'}
                          className="w-full h-36"
                          showLabels={false}
                        />
                        <div className="mt-2 font-semibold text-xs text-[var(--atlas-text)]">
                          {work.title} ({work.year})
                        </div>
                        <div className="text-[11px] text-[var(--atlas-text-muted)] font-mono">
                          {work.creator}
                        </div>
                      </div>
                    ) : (
                      <div className="text-xs text-[var(--atlas-text-quiet)] italic">No graphic specimen on file.</div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Row 8: Key Figures */}
            <div className="grid grid-cols-12 gap-px bg-[var(--atlas-border-control)] border-x border-b border-[var(--atlas-border-control)]">
              <div className="col-span-3 bg-[var(--atlas-surface-alt)] p-4 text-xs font-mono font-semibold uppercase text-[var(--atlas-text)]">
                08 / KEY FIGURES
              </div>
              {selectedMovements.map((m) => {
                const people = getPeopleForMovement(m.id);
                return (
                  <div
                    key={m.id}
                    className={`col-span-${Math.floor(9 / selectedMovements.length)} bg-[var(--atlas-card)] p-4 text-xs`}
                  >
                    <div className="flex flex-wrap gap-1">
                      {people.slice(0, 4).map((p, idx) => (
                        <span
                          key={p.id || idx}
                          className="font-mono text-[11px] px-1.5 py-0.5 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border-control)] text-[var(--atlas-text)]"
                        >
                          {p.name}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
