import React from 'react';

interface HeroSectionProps {
  onExploreTimeline: () => void;
  onExploreNetwork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTimeline,
  onExploreNetwork
}) => {
  return (
    <section className="relative w-full min-h-[72vh] flex flex-col justify-between pt-16 sm:pt-24 pb-12 px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]">
      {/* Archival metadata top line */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--atlas-text-quiet)] uppercase tracking-widest border-b border-[var(--atlas-border-soft)] pb-4">
        <span>ARCHIVE REF // AT-1890-1940</span>
        <span className="hidden sm:inline">EUROPEAN AVANT-GARDE CHRONOLOGY</span>
        <span>EDITION 2026</span>
      </div>

      {/* Hero typographical statement */}
      <div className="my-auto py-12 max-w-5xl">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-semibold tracking-tighter text-[var(--atlas-text)] leading-[0.88] select-none">
          AVANT-GARDE<br />ATLAS
        </h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-[var(--atlas-rule-subtle)]">
          <div>
            <div className="text-2xl sm:text-3xl font-mono tracking-tight text-[var(--atlas-text)]">
              1890—1940
            </div>
            <p className="mt-3 text-lg sm:text-xl text-[var(--atlas-text-secondary)] max-w-xl font-light leading-relaxed">
              A visual map of the movements that created modern design.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono tracking-wider uppercase">
            <button
              onClick={onExploreTimeline}
              className="px-5 py-2.5 bg-[var(--atlas-ink-button)] text-[var(--atlas-on-ink)] hover:bg-[var(--atlas-ink-button-hover)] transition-colors cursor-pointer"
            >
              Explore Timeline
            </button>
            <button
              onClick={onExploreNetwork}
              className="px-5 py-2.5 border border-[var(--atlas-text)] text-[var(--atlas-text)] hover:bg-[var(--atlas-hover-surface)] transition-colors cursor-pointer"
            >
              Influence Network
            </button>
          </div>
        </div>
      </div>

      {/* Bottom informational coordinates */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[var(--atlas-text-muted)] font-mono border-t border-[var(--atlas-border-soft)] pt-4">
        <div>
          <span className="block text-[10px] text-[var(--atlas-text-faint)] uppercase">Historical Span</span>
          <span className="text-[var(--atlas-text)] font-semibold">50 Decisive Years</span>
        </div>
        <div>
          <span className="block text-[10px] text-[var(--atlas-text-faint)] uppercase">Core Centers</span>
          <span className="text-[var(--atlas-text)]">Weimar · Dessau · Moscow · Paris</span>
        </div>
        <div>
          <span className="block text-[10px] text-[var(--atlas-text-faint)] uppercase">Disciplines</span>
          <span className="text-[var(--atlas-text)]">Architecture · Type · Objects</span>
        </div>
        <div className="text-right">
          <span className="block text-[10px] text-[var(--atlas-text-faint)] uppercase">Navigation</span>
          <span className="text-[var(--atlas-text)] underline cursor-pointer" onClick={onExploreTimeline}>Scroll to inspect ↓</span>
        </div>
      </div>
    </section>
  );
};
