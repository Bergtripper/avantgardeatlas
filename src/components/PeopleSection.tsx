import React, { useEffect, useMemo, useState } from 'react';
import { MovementId } from '../types/atlas';
import { ALL_PEOPLE } from '../data/people';
import { EntityLink } from './EntityLink';
import {
  ALL_DIFFUSION_ROUTES,
  ALL_GLOBAL_PEOPLE,
  DiffusionPersonRef,
} from '../data/global';

interface PeopleSectionProps {
  onSelectMovement: (id: MovementId) => void;
  selectedYear: number;
  focusedPersonRef?: DiffusionPersonRef | null;
  onExploreGlobalPerson: (ref: DiffusionPersonRef) => void;
}

const personRefKey = (ref: DiffusionPersonRef) => `${ref.scope}:${ref.id}`;

export const PeopleSection: React.FC<PeopleSectionProps> = ({
  onSelectMovement,
  selectedYear,
  focusedPersonRef = null,
  onExploreGlobalPerson,
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('all');
  const [activeFigureId, setActiveFigureId] = useState<string | null>(null);

  useEffect(() => {
    if (focusedPersonRef?.scope === 'atlas') {
      setActiveFigureId(focusedPersonRef.id);
    }
  }, [focusedPersonRef]);

  const allDisciplines = Array.from(
    new Set(ALL_PEOPLE.flatMap((f) => f.keyDisciplines)),
  );

  const filteredFigures = ALL_PEOPLE.filter((f) => {
    if (selectedDiscipline === 'all') return true;
    return f.keyDisciplines.includes(selectedDiscipline);
  });

  const visibleGlobalRoutes = useMemo(
    () => ALL_DIFFUSION_ROUTES.filter((route) => route.startYear <= selectedYear),
    [selectedYear],
  );

  const routesForPerson = (ref: DiffusionPersonRef) =>
    visibleGlobalRoutes.filter((route) =>
      route.personRefs.some(
        (personRef) =>
          personRef.scope === ref.scope && personRef.id === ref.id,
      ),
    );

  const globalNetworkPeople = ALL_GLOBAL_PEOPLE
    .map((person) => {
      const ref: DiffusionPersonRef = { scope: 'global', id: person.id };
      return {
        person,
        ref,
        routes: routesForPerson(ref),
      };
    })
    .filter((item) => item.routes.length > 0);

  const focusedPersonKey = focusedPersonRef ? personRefKey(focusedPersonRef) : null;

  return (
    <section
      id="people-section"
      className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]"
    >
      <div className="max-w-7xl mx-auto">
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

        <div className="flex items-center gap-1 overflow-x-auto pb-3 mb-8 border-b border-[var(--atlas-border)]">
          <span className="font-mono text-xs text-[var(--atlas-text-quiet)] uppercase mr-3 shrink-0">
            Discipline Filter:
          </span>
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFigures.map((fig) => {
            const isExpanded = activeFigureId === fig.id;
            const personRef: DiffusionPersonRef = { scope: 'atlas', id: fig.id };
            const globalRoutes = routesForPerson(personRef);
            const isFocused = focusedPersonKey === personRefKey(personRef);

            return (
              <div
                key={fig.id}
                className={`border bg-[var(--atlas-surface)] p-6 flex flex-col justify-between transition-colors ${
                  isFocused
                    ? 'border-[#D82B2B] ring-1 ring-[#D82B2B]'
                    : 'border-[var(--atlas-border)] hover:border-[var(--atlas-text)]'
                }`}
              >
                <div>
                  <div className="flex items-baseline justify-between text-xs font-mono text-[var(--atlas-text-muted)] mb-1">
                    <span className="font-semibold text-[var(--atlas-text)]">{fig.years}</span>
                    <span className="truncate ml-2">{fig.birthCity}</span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-[var(--atlas-text)] mt-1">
                    {fig.name}
                  </h3>

                  <div className="flex flex-wrap gap-1 my-3">
                    {fig.primaryMovements.map((mId) => (
                      <EntityLink
                        key={mId}
                        kind="movement"
                        label={mId}
                        variant="chip"
                        onActivate={() => onSelectMovement(mId)}
                        className="py-0.5 bg-[var(--atlas-soft-fill)]"
                      >
                        {mId}
                      </EntityLink>
                    ))}
                  </div>

                  {globalRoutes.length > 0 && (
                    <button
                      type="button"
                      onClick={() => onExploreGlobalPerson(personRef)}
                      className="mb-3 inline-flex items-center gap-2 border border-[#D82B2B] px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-wider text-[#D82B2B] hover:bg-[#D82B2B] hover:text-white transition-colors"
                    >
                      Global network // {globalRoutes.length} route{globalRoutes.length === 1 ? '' : 's'} →
                    </button>
                  )}

                  <p className="text-xs text-[var(--atlas-text-secondary)] leading-relaxed mt-3">
                    {fig.biography}
                  </p>

                  {fig.keyQuote && (
                    <blockquote className="my-4 pl-3 border-l-2 border-[var(--atlas-text)] italic text-xs text-[#333]">
                      “{fig.keyQuote}”
                    </blockquote>
                  )}

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

        {globalNetworkPeople.length > 0 && (
          <div className="mt-14 pt-8 border-t border-[var(--atlas-text)]">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                  Global Network // transmission carriers
                </div>
                <h3 className="mt-1 text-2xl font-semibold tracking-tight text-[var(--atlas-text)]">
                  People documented through international routes
                </h3>
              </div>
              <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                Active Year {selectedYear}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[var(--atlas-border)] border border-[var(--atlas-border)]">
              {globalNetworkPeople.map(({ person, ref, routes }) => {
                const isFocused = focusedPersonKey === personRefKey(ref);
                return (
                  <article
                    key={person.id}
                    className={`p-4 ${
                      isFocused
                        ? 'bg-[var(--atlas-surface-alt)] ring-1 ring-inset ring-[#D82B2B]'
                        : 'bg-[var(--atlas-card)]'
                    }`}
                  >
                    <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                      Global record // {person.years}
                    </div>
                    <h4 className="mt-1 text-lg font-semibold text-[var(--atlas-text)]">
                      {person.name}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[var(--atlas-text-secondary)]">
                      {person.summary}
                    </p>
                    <button
                      type="button"
                      onClick={() => onExploreGlobalPerson(ref)}
                      className="mt-4 font-mono text-[9px] uppercase tracking-wider underline underline-offset-4 text-[var(--atlas-text)] hover:text-[#D82B2B]"
                    >
                      View {routes.length} route{routes.length === 1 ? '' : 's'} on Global Map →
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
