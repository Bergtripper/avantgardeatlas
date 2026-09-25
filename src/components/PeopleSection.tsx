import React, { useState } from 'react';
import { MovementId } from '../types/atlas';
import { ALL_PEOPLE } from '../data/people';

interface PeopleSectionProps {
  onSelectMovement: (id: MovementId) => void;
}

export const PeopleSection: React.FC<PeopleSectionProps> = ({ onSelectMovement }) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [activeFigureId, setActiveFigureId] = useState<string | null>(null);

  const allDisciplines = Array.from(
    new Set(ALL_PEOPLE.flatMap((f) => f.keyDisciplines))
  );

  const filteredFigures = ALL_PEOPLE.filter((f) => {
    if (selectedDiscipline === 'all') return true;
    return f.keyDisciplines.includes(selectedDiscipline);
  });

  return (
    <section id="people-section" className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--atlas-text)] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Section 05 // Pioneers, Theorists & Masters
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--atlas-text)] mt-1">
              Protagonists of Modernism
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--atlas-text-secondary)] max-w-md">
            The intellectual conduits who carried ideas across national borders—from Vitebsk and Moscow to Weimar, Dessau, Paris, and Zurich.
          </div>
        </div>

        {/* Discipline Filters */}
        <div className="flex items-center gap-1 overflow-x-auto pb-3 mb-8 border-b border-[var(--atlas-border)]">
          <span className="font-mono text-xs text-[var(--atlas-text-quiet)] uppercase mr-3 shrink-0">Discipline Filter:</span>
          <button
            onClick={() => setSelectedDiscipline('all')}
            className={`px-3 py-1 text-xs font-mono tracking-wider cursor-pointer whitespace-nowrap transition-colors border ${
              selectedDiscipline === 'all'
                ? 'bg-[var(--atlas-ink-button)] text-white border-[var(--atlas-text)] font-semibold'
                : 'bg-[var(--atlas-surface)] text-[var(--atlas-text-soft)] border-[var(--atlas-border-control)] hover:border-[var(--atlas-text)]'
            }`}
          >
            All Disciplines
          </button>
          {allDisciplines.map((disc) => (
            <button
              key={disc}
              onClick={() => setSelectedDiscipline(disc)}
              className={`px-3 py-1 text-xs font-mono tracking-wider cursor-pointer whitespace-nowrap transition-colors border ${
                selectedDiscipline === disc
                  ? 'bg-[var(--atlas-ink-button)] text-white border-[var(--atlas-text)] font-semibold'
                  : 'bg-[var(--atlas-surface)] text-[var(--atlas-text-soft)] border-[var(--atlas-border-control)] hover:border-[var(--atlas-text)]'
              }`}
            >
              {disc}
            </button>
          ))}
        </div>

        {/* Figures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFigures.map((fig) => {
            const isExpanded = activeFigureId === fig.id;

            return (
              <div
                key={fig.id}
                className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6 flex flex-col justify-between hover:border-[var(--atlas-text)] transition-colors"
              >
                <div>
                  <div className="flex items-baseline justify-between text-xs font-mono text-[var(--atlas-text-muted)] mb-1">
                    <span className="font-semibold text-[var(--atlas-text)]">{fig.years}</span>
                    <span className="truncate ml-2">{fig.birthCity}</span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[var(--atlas-text)] mt-1">
                    {fig.name}
                  </h3>

                  {/* Movements Association */}
                  <div className="flex flex-wrap gap-1 my-3">
                    {fig.primaryMovements.map((mId) => (
                      <button
                        key={mId}
                        onClick={() => onSelectMovement(mId)}
                        className="font-mono text-[10px] uppercase px-2 py-0.5 bg-[var(--atlas-soft-fill)] hover:bg-[var(--atlas-ink-button)] hover:text-white border border-[var(--atlas-border-strong)] cursor-pointer transition-colors"
                      >
                        {mId}
                      </button>
                    ))}
                  </div>

                  <p className="text-xs text-[var(--atlas-text-secondary)] leading-relaxed mt-3">
                    {fig.biography}
                  </p>

                  {/* Key Quote */}
                  {fig.keyQuote && (
                    <blockquote className="my-4 pl-3 border-l-2 border-[var(--atlas-text)] italic text-xs text-[#333]">
                      “{fig.keyQuote}”
                    </blockquote>
                  )}

                  {/* Trajectory / Interventions */}
                  <div className="mt-4 pt-3 border-t border-[var(--atlas-border-soft)]">
                    <span className="font-mono text-[10px] text-[var(--atlas-text-quiet)] uppercase block mb-1">
                      Historical Trajectory & Influences
                    </span>
                    <ul className="text-xs text-[var(--atlas-text-body)] space-y-1">
                      {fig.interventions.slice(0, isExpanded ? undefined : 2).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#D82B2B] font-mono shrink-0">→</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-[var(--atlas-border)] flex items-center justify-between text-xs font-mono">
                  <button
                    onClick={() => setActiveFigureId(isExpanded ? null : fig.id)}
                    aria-expanded={isExpanded}
                    aria-controls={`person-details-${fig.id}`}
                    className="underline text-[var(--atlas-text-muted)] hover:text-[var(--atlas-text)] cursor-pointer"
                  >
                    {isExpanded ? 'Less ↑' : `More details (${fig.interventions.length}) ↓`}
                  </button>
                  <span className="text-[var(--atlas-text-faint)] text-[10px] uppercase">
                    {fig.keyDisciplines.slice(0, 2).join(' · ')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
