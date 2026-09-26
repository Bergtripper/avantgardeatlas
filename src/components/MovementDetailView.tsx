import React, { useEffect, useState } from 'react';
import { Movement, MovementId } from '../types/atlas';
import { ArchivalVectorPlate } from './ArchivalVectorPlate';
import { VisualDnaMatrix } from './VisualDnaMatrix';
import { getObjectsForMovement, getPeopleForMovement, getRelatedMovements } from '../data';
import {
  ALL_DIFFUSION_ROUTES,
  ALL_GLOBAL_ENTITIES,
  DiffusionPlaceRef,
  getGlobalHubById,
} from '../data/global';
import { getPlaceById } from '../data/places';

interface MovementDetailViewProps {
  movement: Movement;
  onBack: () => void;
  onSelectMovement: (id: MovementId) => void;
  allMovements: Movement[];
  selectedYear: number;
  onExploreGlobalMovement: (id: MovementId) => void;
}

export const MovementDetailView: React.FC<MovementDetailViewProps> = ({
  movement,
  onBack,
  onSelectMovement,
  allMovements: _allMovements,
  selectedYear,
  onExploreGlobalMovement,
}) => {
  const [activeWorkIndex, setActiveWorkIndex] = useState<number>(0);
  const [showOriginalName, setShowOriginalName] = useState(false);
  const [nameCutTick, setNameCutTick] = useState(0);

  // Resolve canonical objects and people via normalized registry
  const keyWorks = getObjectsForMovement(movement.id);
  const keyPeople = getPeopleForMovement(movement.id);
  const activeWork = keyWorks[activeWorkIndex] || keyWorks[0];

  // Resolve related movements via registry
  const { incoming: influencesFrom, outgoing: influencesTo } = getRelatedMovements(movement.id);

  const resolveGlobalPlaceName = (ref: DiffusionPlaceRef) => {
    const place = ref.scope === 'atlas' ? getPlaceById(ref.id) : getGlobalHubById(ref.id);
    return place?.name ?? ref.id;
  };

  const globalRoutes = ALL_DIFFUSION_ROUTES.filter(
    (route) =>
      route.startYear <= selectedYear &&
      route.sourceMovementIds.includes(movement.id),
  );

  const globalEntities = ALL_GLOBAL_ENTITIES.filter(
    (entity) =>
      entity.startYear <= selectedYear &&
      entity.movementLinks.includes(movement.id),
  );

  const globalPlaceNames = Array.from(
    new Set([
      ...globalRoutes.flatMap((route) => [
        resolveGlobalPlaceName(route.origin),
        resolveGlobalPlaceName(route.destination),
      ]),
      ...globalEntities.map((entity) => {
        if (entity.placeRef) return resolveGlobalPlaceName(entity.placeRef);
        if (entity.hubId) return getGlobalHubById(entity.hubId)?.name ?? entity.hubId;
        return null;
      }),
    ].filter(Boolean) as string[]),
  );

  useEffect(() => {
    if (!movement.germanOrOriginalName || movement.germanOrOriginalName === movement.name) {
      setShowOriginalName(false);
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let swapTimer: number | undefined;
    const interval = window.setInterval(() => {
      setNameCutTick((current) => current + 1);
      swapTimer = window.setTimeout(() => {
        setShowOriginalName((current) => !current);
      }, 110);
    }, 7600);

    return () => {
      window.clearInterval(interval);
      if (swapTimer) window.clearTimeout(swapTimer);
    };
  }, [movement.id, movement.name, movement.germanOrOriginalName]);

  const displayedMovementName =
    showOriginalName && movement.germanOrOriginalName
      ? movement.germanOrOriginalName
      : movement.name;

  // Dynamic contextual classes based on styleTheme
  const getContextualContainerStyle = () => {
    switch (movement.styleTheme.layoutBehavior) {
      case 'de-stijl-grid':
        return 'border-l-4 border-l-[#2563EB]';
      case 'constructivist-diagonal':
        return 'border-l-4 border-l-[#DC2626]';
      case 'futurist-dynamic':
        return 'border-l-4 border-l-[#EA580C]';
      case 'suprematist-floating':
        return 'border-l-4 border-l-[#111827]';
      case 'bauhaus-grid':
      default:
        return 'border-l-4 border-l-[#D82B2B]';
    }
  };

  return (
    <article className="min-h-screen bg-[var(--atlas-bg)] pb-24 text-[var(--atlas-text)]">
      {/* Top sticky back button & breadcrumbs */}
      <div className="sticky top-16 z-30 bg-[var(--atlas-bg)]/90 backdrop-blur-xs border-b border-[var(--atlas-border)] px-4 sm:px-8 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between text-xs font-mono">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-[var(--atlas-text)] font-semibold hover:underline cursor-pointer"
          >
            ← BACK TO ATLAS INDEX
          </button>
          <div className="hidden sm:flex items-center gap-3 text-[var(--atlas-text-muted)]">
            <span>{movement.period}</span>
            <span>·</span>
            <span>{movement.countries.join(', ')}</span>
            <span>·</span>
            <span className="uppercase text-[var(--atlas-text)] font-semibold">{movement.id}</span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 mt-12">
        {/* OPENING HERO / EDITORIAL COVER */}
        <header className={`pt-6 pb-16 border-b border-[var(--atlas-text)] ${getContextualContainerStyle()} pl-4 sm:pl-8`}>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--atlas-text-muted)] uppercase tracking-widest">
            <span>{movement.countries.join(' / ')}</span>
            <span>·</span>
            <span>{movement.cities.join(' · ')}</span>
            <span>·</span>
            <span className="text-[var(--atlas-text)] font-semibold">{movement.period}</span>
          </div>

          <div className="relative mt-4 mb-6 inline-block max-w-full atlas-entity-cut-zone">
            {nameCutTick > 0 && (
              <span
                key={nameCutTick}
                aria-hidden="true"
                className="atlas-entity-cut-bar"
              />
            )}
            <h1
              key={`${movement.id}-${displayedMovementName}`}
              className="atlas-hard-cut text-6xl sm:text-8xl lg:text-9xl font-semibold tracking-tighter text-[var(--atlas-text)] leading-[0.88]"
            >
              {displayedMovementName}
            </h1>
          </div>

          {movement.germanOrOriginalName && movement.germanOrOriginalName !== movement.name && (
            <div className="font-mono text-[10px] text-[var(--atlas-text-muted)] tracking-widest uppercase mb-6">
              {showOriginalName ? 'Original designation' : 'Editorial designation'} // auto
            </div>
          )}

          {/* Keywords Banner */}
          <div className="flex flex-wrap gap-2 my-6">
            {movement.mottoOrKeywords.map((kw, idx) => (
              <span
                key={idx}
                className="font-mono text-xs uppercase tracking-wider px-3 py-1 bg-[var(--atlas-ink-button)] text-white"
              >
                {kw}
              </span>
            ))}
          </div>

          <p className="text-xl sm:text-2xl lg:text-3xl text-[var(--atlas-text-lead)] font-light max-w-4xl leading-relaxed mt-6">
            {movement.summary}
          </p>
        </header>

        {/* 01 / IDEA & 02 / ORIGIN */}
        <section className="py-16 border-b border-[var(--atlas-border)] grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-6 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-[var(--atlas-border)] pb-8 md:pb-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-2">
              01 / IDEA
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--atlas-text)] mb-4">
              Core Philosophy & Social Stance
            </h2>
            <p className="text-[var(--atlas-text-body)] text-base leading-relaxed">
              {movement.coreIdeas}
            </p>
          </div>

          <div className="md:col-span-6 pl-0 md:pl-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-2">
              02 / ORIGIN
            </span>
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--atlas-text)] mb-4">
              Historical Context & Catalyst
            </h2>
            <p className="text-[var(--atlas-text-body)] text-base leading-relaxed">
              {movement.historicalContext}
            </p>
          </div>
        </section>

        {/* 03 / FORM: VISUAL PRINCIPLES */}
        <section className="py-16 border-b border-[var(--atlas-border)]">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-2">
            03 / FORM
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--atlas-text)] mb-8">
            Governing Visual Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {movement.visualPrinciples.map((principle, idx) => (
              <div key={idx} className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6">
                <span className="font-mono text-xs font-bold text-[#D82B2B] mr-2">
                  0{idx + 1} //
                </span>
                <span className="text-sm font-medium text-[var(--atlas-text)] leading-relaxed">
                  {principle}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* VISUAL DNA MODULE */}
        <section className="py-16 border-b border-[var(--atlas-border)]">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-4">
            04 & 05 / COLOUR, TYPOGRAPHY & VISUAL DNA
          </span>
          <VisualDnaMatrix dna={movement.visualDna} movementName={movement.name} />
        </section>

        {/* 06 / OBJECT: FEATURED ARCHIVAL ARTIFACTS */}
        <section className="py-16 border-b border-[var(--atlas-border)]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-2">
                06 / OBJECT & MANIFESTO
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--atlas-text)]">
                Key Works & Canonical Artifacts
              </h2>
            </div>
            {keyWorks.length > 1 && (
              <div className="flex gap-2">
                {keyWorks.map((work, idx) => (
                  <button
                    key={work.id || idx}
                    onClick={() => setActiveWorkIndex(idx)}
                    className={`font-mono text-xs px-3 py-1 cursor-pointer border ${
                      activeWorkIndex === idx
                        ? 'bg-[var(--atlas-ink-button)] text-white border-[var(--atlas-text)]'
                        : 'bg-[var(--atlas-surface)] text-[var(--atlas-text-soft)] border-[var(--atlas-border-control)] hover:border-[var(--atlas-text)]'
                    }`}
                  >
                    WORK 0{idx + 1}
                  </button>
                ))}
              </div>
            )}
          </div>

          {activeWork && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6">
              <div className="lg:col-span-7">
                <ArchivalVectorPlate
                  type={activeWork.graphicType || activeWork.svgGraphicType || 'bauhaus-building'}
                  className="w-full h-80 sm:h-96"
                  caption={`${activeWork.title} (${activeWork.year})`}
                />
              </div>
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xs uppercase text-[var(--atlas-text-quiet)] tracking-wider">
                    {activeWork.category} // {activeWork.year}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-[var(--atlas-text)] mt-1">
                    {activeWork.title}
                  </h3>
                  <div className="text-sm font-medium text-[var(--atlas-text-secondary)] mt-1">
                    {activeWork.creator} · {activeWork.location}
                  </div>
                  <p className="mt-4 text-sm text-[var(--atlas-text-body)] leading-relaxed">
                    {activeWork.description}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-[var(--atlas-border)] text-xs font-mono text-[var(--atlas-text-muted)]">
                  ARCHIVAL SPECIFICATION // MONOGRAPH RECORD
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 07 / ARCHITECTURE & GRAPHIC DESIGN DISCIPLINE */}
        <section className="py-16 border-b border-[var(--atlas-border)] grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-2">
              07 / ARCHITECTURAL MANIFESTATION
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--atlas-text)] mb-4">
              Spatial & Tectonic Language
            </h3>
            <p className="text-sm text-[var(--atlas-text-body)] leading-relaxed">
              {movement.architectureNotes}
            </p>
          </div>

          <div className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-8">
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-2">
              GRAPHIC & PRINT DISCIPLINE
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-[var(--atlas-text)] mb-4">
              Typography, Layout & Photomontage
            </h3>
            <p className="text-sm text-[var(--atlas-text-body)] leading-relaxed">
              {movement.graphicDesignNotes}
            </p>
          </div>
        </section>

        {/* 08 / PEOPLE: LEADING FIGURES */}
        <section className="py-16 border-b border-[var(--atlas-border)]">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-2">
            08 / PEOPLE
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--atlas-text)] mb-8">
            Key Figures & Protagonists
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyPeople.map((person, idx) => (
              <div key={person.id || idx} className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-4 flex flex-col justify-between">
                <div>
                  <div className="font-bold text-sm text-[var(--atlas-text)]">
                    {person.name}
                  </div>
                  {(person.birthDeath || person.years) && (
                    <div className="font-mono text-[11px] text-[var(--atlas-text-muted)] mt-0.5">
                      {person.birthDeath || person.years}
                    </div>
                  )}
                  <p className="mt-2 text-xs text-[var(--atlas-text-secondary)] leading-relaxed">
                    {person.role || (person.interventions && person.interventions[0]) || person.biography}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 09 / INFLUENCE & 10 / CONNECTIONS */}
        <section className="py-16 border-b border-[var(--atlas-border)]">
          <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-2">
            09 & 10 / GENEALOGICAL CONNECTIONS
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-[var(--atlas-text)] mb-8">
            Cross-Movement Inheritances
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Inherited From */}
            <div className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--atlas-text-quiet)] mb-4">
                ← PRECURSORS & INHERITED MOVEMENTS
              </div>
              {influencesFrom.length === 0 ? (
                <div className="text-xs text-[var(--atlas-text-quiet)] italic">
                  Early foundational movement; broke directly from classical academic traditions.
                </div>
              ) : (
                <div className="space-y-3">
                  {influencesFrom.map((m) => (
                    <div
                      key={m.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`Open ${m.name} monograph`}
                      onClick={() => onSelectMovement(m.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          onSelectMovement(m.id);
                        }
                      }}
                      className="p-3 bg-[var(--atlas-card)] border border-[var(--atlas-border-control)] hover:border-[var(--atlas-text)] cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-sm text-[var(--atlas-text)]">
                        {m.name} ({m.period})
                      </div>
                      <div className="text-xs text-[var(--atlas-text-subtle)] mt-1 line-clamp-2">
                        {m.summary}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Influenced To */}
            <div className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6">
              <div className="font-mono text-xs uppercase tracking-wider text-[var(--atlas-text-quiet)] mb-4">
                PROGENY & SUCCESSOR MOVEMENTS →
              </div>
              {influencesTo.length === 0 ? (
                <div className="text-xs text-[var(--atlas-text-quiet)] italic">
                  Culminating synthesis of the pre-war modern canon.
                </div>
              ) : (
                <div className="space-y-3">
                  {influencesTo.map((m) => (
                    <div
                      key={m.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`Open ${m.name} monograph`}
                      onClick={() => onSelectMovement(m.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          onSelectMovement(m.id);
                        }
                      }}
                      className="p-3 bg-[var(--atlas-card)] border border-[var(--atlas-border-control)] hover:border-[var(--atlas-text)] cursor-pointer transition-colors"
                    >
                      <div className="font-semibold text-sm text-[var(--atlas-text)]">
                        {m.name} ({m.period})
                      </div>
                      <div className="text-xs text-[var(--atlas-text-subtle)] mt-1 line-clamp-2">
                        {m.summary}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 11 / GLOBAL TRANSMISSION */}
        <section className="py-16 border-b border-[var(--atlas-border)]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 mb-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[var(--atlas-text-quiet)] block mb-2">
                11 / GLOBAL TRANSMISSION
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--atlas-text)]">
                Movement in the Global Network
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[var(--atlas-text-secondary)]">
                Documented routes and local nodes linked to {movement.name} in the Atlas up to the shared Active Year {selectedYear}.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onExploreGlobalMovement(movement.id)}
              className="self-start lg:self-auto px-4 py-2.5 border border-[var(--atlas-text)] bg-[var(--atlas-text)] text-[var(--atlas-bg)] font-mono text-[10px] uppercase tracking-wider hover:opacity-85"
            >
              Open in Global Map →
            </button>
          </div>

          <div className="grid grid-cols-3 gap-px bg-[var(--atlas-border)] border border-[var(--atlas-border)] mb-8">
            <div className="bg-[var(--atlas-card)] p-4">
              <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">Routes</div>
              <div className="mt-1 text-2xl font-semibold text-[var(--atlas-text)]">{globalRoutes.length}</div>
            </div>
            <div className="bg-[var(--atlas-card)] p-4">
              <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">Nodes</div>
              <div className="mt-1 text-2xl font-semibold text-[var(--atlas-text)]">{globalEntities.length}</div>
            </div>
            <div className="bg-[var(--atlas-card)] p-4">
              <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">Cities</div>
              <div className="mt-1 text-2xl font-semibold text-[var(--atlas-text)]">{globalPlaceNames.length}</div>
            </div>
          </div>

          {globalRoutes.length > 0 || globalEntities.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-muted)] mb-3">
                  Transmission routes
                </div>
                <div className="space-y-2">
                  {globalRoutes.map((route) => (
                    <div
                      key={route.id}
                      className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-4"
                    >
                      <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                        {route.startYear}
                        {route.endYear && route.endYear !== route.startYear ? `—${route.endYear}` : ''}
                        {' // '}
                        {route.mechanisms.map((item) => item.replaceAll('-', ' ')).join(' · ')}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[var(--atlas-text)]">
                        {resolveGlobalPlaceName(route.origin)} → {resolveGlobalPlaceName(route.destination)}
                      </div>
                      <div className="mt-1 text-[11px] text-[var(--atlas-text-secondary)]">
                        {route.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-muted)] mb-3">
                  Local nodes
                </div>
                <div className="space-y-2">
                  {globalEntities.map((entity) => (
                    <div
                      key={entity.id}
                      className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-4"
                    >
                      <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                        {entity.kind} // {entity.startYear}
                      </div>
                      <div className="mt-1 text-sm font-semibold text-[var(--atlas-text)]">
                        {entity.name}
                      </div>
                      <div className="mt-1 text-[11px] text-[var(--atlas-text-secondary)]">
                        {entity.placeRef
                          ? resolveGlobalPlaceName(entity.placeRef)
                          : entity.hubId
                          ? getGlobalHubById(entity.hubId)?.name ?? entity.hubId
                          : '—'}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6 text-sm text-[var(--atlas-text-secondary)]">
              No Global Map records for {movement.name} are visible up to Active Year {selectedYear}. Change the Active Year to inspect later transmissions.
            </div>
          )}

          {globalPlaceNames.length > 0 && (
            <div className="mt-6 pt-4 border-t border-[var(--atlas-border)]">
              <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)] mb-2">
                Places in this network
              </div>
              <div className="text-xs text-[var(--atlas-text-secondary)]">
                {globalPlaceNames.join(' · ')}
              </div>
            </div>
          )}
        </section>

        {/* Back navigation footer */}
        <div className="py-12 flex justify-between items-center text-xs font-mono">
          <button
            onClick={onBack}
            className="text-sm font-semibold underline hover:text-[#D82B2B] cursor-pointer"
          >
            ← Return to Full Atlas Overview
          </button>
          <span className="text-[var(--atlas-text-quiet)]">AVANT-GARDE ATLAS 1890—1940</span>
        </div>
      </div>
    </article>
  );
};
