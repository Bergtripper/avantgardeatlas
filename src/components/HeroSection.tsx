import React, { useEffect, useState } from 'react';

interface HeroSectionProps {
  onExploreTimeline: () => void;
  onExploreNetwork: () => void;
}

const HERO_LANGUAGES = [
  {
    code: 'EN',
    titleTop: 'AVANT-GARDE',
    titleBottom: 'ATLAS',
    subtitle: 'A visual map of the movements that created modern design.',
  },
  {
    code: 'DE',
    titleTop: 'AVANTGARDE',
    titleBottom: 'ATLAS',
    subtitle: 'Eine visuelle Karte der Bewegungen, die das moderne Design prägten.',
  },
  {
    code: 'FR',
    titleTop: 'AVANT-GARDE',
    titleBottom: 'ATLAS',
    subtitle: 'Une cartographie visuelle des mouvements qui ont façonné le design moderne.',
  },
  {
    code: 'IT',
    titleTop: 'AVANGUARDIA',
    titleBottom: 'ATLANTE',
    subtitle: 'Una mappa visiva dei movimenti che hanno plasmato il design moderno.',
  },
  {
    code: 'RU',
    titleTop: 'АВАНГАРД',
    titleBottom: 'АТЛАС',
    subtitle: 'Визуальная карта движений, сформировавших современный дизайн.',
  },
  {
    code: 'NL',
    titleTop: 'AVANT-GARDE',
    titleBottom: 'ATLAS',
    subtitle: 'Een visuele kaart van de bewegingen die het moderne ontwerp vormgaven.',
  },
  {
    code: 'ES',
    titleTop: 'VANGUARDIA',
    titleBottom: 'ATLAS',
    subtitle: 'Un mapa visual de los movimientos que dieron forma al diseño moderno.',
  },
  {
    code: 'JA',
    titleTop: 'アヴァンギャルド',
    titleBottom: 'アトラス',
    subtitle: 'モダンデザインを形づくった運動をたどる視覚的な地図。',
  },
] as const;

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreTimeline,
  onExploreNetwork,
}) => {
  const [languageIndex, setLanguageIndex] = useState(0);
  const [cutTick, setCutTick] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let swapTimer: number | undefined;
    let settleTimer: number | undefined;

    const interval = window.setInterval(() => {
      setCutTick((current) => current + 1);
      swapTimer = window.setTimeout(() => {
        setLanguageIndex((current) => (current + 1) % HERO_LANGUAGES.length);
      }, 135);
      settleTimer = window.setTimeout(() => undefined, 360);
    }, 3600);

    return () => {
      window.clearInterval(interval);
      if (swapTimer) window.clearTimeout(swapTimer);
      if (settleTimer) window.clearTimeout(settleTimer);
    };
  }, []);

  const activeLanguage = HERO_LANGUAGES[languageIndex];

  return (
    <section className="relative w-full min-h-[72vh] flex flex-col justify-between pt-16 sm:pt-24 pb-12 px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)] overflow-hidden">
      {/* Archival metadata top line */}
      <div className="flex items-center justify-between text-xs font-mono text-[var(--atlas-text-quiet)] uppercase tracking-widest border-b border-[var(--atlas-border-soft)] pb-4">
        <span>ARCHIVE REF // AT-1890-1940</span>
        <span className="hidden sm:inline">EUROPEAN AVANT-GARDE CHRONOLOGY</span>
        <span>EDITION 2026</span>
      </div>

      {/* Constructivist language marker */}
      <div
        aria-hidden="true"
        className="absolute top-28 right-6 lg:right-12 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.24em] text-[var(--atlas-text-muted)]"
      >
        <span className="h-px w-10 bg-[#D82B2B]" />
        <span>{activeLanguage.code}</span>
      </div>

      {/* Hero typographical statement */}
      <div className="my-auto py-12 max-w-6xl">
        <div className="relative atlas-guillotine-zone">
          <div
            aria-hidden="true"
            className="absolute -left-3 sm:-left-5 top-2 h-16 sm:h-24 w-1.5 bg-[#D82B2B]"
          />
          <div
            aria-hidden="true"
            className="absolute -left-3 sm:-left-5 top-[5.25rem] sm:top-[7.75rem] w-14 sm:w-20 h-px bg-[var(--atlas-text)]"
          />
          {cutTick > 0 && (
            <span
              key={cutTick}
              aria-hidden="true"
              className="atlas-guillotine-bar"
            />
          )}

          <h1 className="text-6xl sm:text-8xl lg:text-9xl font-semibold tracking-tighter text-[var(--atlas-text)] leading-[0.88] select-none">
            <span className="block">{activeLanguage.titleTop}</span>
            <span className="block">{activeLanguage.titleBottom}</span>
          </h1>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-[var(--atlas-rule-subtle)]">
          <div className="max-w-2xl">
            <div className="text-2xl sm:text-3xl font-mono tracking-tight text-[var(--atlas-text)]">
              1890—1940
            </div>
            <h3
              key={`subtitle-${activeLanguage.code}`}
              className="atlas-hard-cut mt-3 text-lg sm:text-xl text-[var(--atlas-text-secondary)] max-w-xl font-light leading-relaxed"
            >
              {activeLanguage.subtitle}
            </h3>
            <div className="mt-4 flex items-center gap-3 font-mono text-[8px] uppercase tracking-[0.22em] text-[var(--atlas-text-quiet)]">
              <span className="inline-block size-1.5 bg-[#D82B2B]" />
              <span>
                EN · DE · FR · IT · RU · NL · ES · JA
              </span>
            </div>
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
          <span className="text-[var(--atlas-text)] underline cursor-pointer" onClick={onExploreTimeline}>
            Scroll to inspect ↓
          </span>
        </div>
      </div>
    </section>
  );
};
