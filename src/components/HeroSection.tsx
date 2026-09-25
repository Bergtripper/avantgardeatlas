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
    <section className="relative w-full min-h-[72vh] flex flex-col justify-between pt-16 sm:pt-24 pb-12 px-6 lg:px-12 border-b border-[#E5E4DF] bg-[#FBFBFA]">
      {/* Archival metadata top line */}
      <div className="flex items-center justify-between text-xs font-mono text-[#8C8C88] uppercase tracking-widest border-b border-[#EAE9E4] pb-4">
        <span>ARCHIVE REF // AT-1890-1940</span>
        <span className="hidden sm:inline">EUROPEAN AVANT-GARDE CHRONOLOGY</span>
        <span>EDITION 2026</span>
      </div>

      {/* Hero typographical statement */}
      <div className="my-auto py-12 max-w-5xl">
        <h1 className="text-6xl sm:text-8xl lg:text-9xl font-semibold tracking-tighter text-[#121212] leading-[0.88] select-none">
          AVANT-GARDE<br />ATLAS
        </h1>

        <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-8 pt-8 border-t border-[#121212]/15">
          <div>
            <div className="text-2xl sm:text-3xl font-mono tracking-tight text-[#121212]">
              1890—1940
            </div>
            <p className="mt-3 text-lg sm:text-xl text-[#525252] max-w-xl font-light leading-relaxed">
              A visual map of the movements that created modern design.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono tracking-wider uppercase">
            <button
              onClick={onExploreTimeline}
              className="px-5 py-2.5 bg-[#121212] text-[#FBFBFA] hover:bg-[#262626] transition-colors cursor-pointer"
            >
              Explore Timeline
            </button>
            <button
              onClick={onExploreNetwork}
              className="px-5 py-2.5 border border-[#121212] text-[#121212] hover:bg-[#F4F4EE] transition-colors cursor-pointer"
            >
              Influence Network
            </button>
          </div>
        </div>
      </div>

      {/* Bottom informational coordinates */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs text-[#737373] font-mono border-t border-[#EAE9E4] pt-4">
        <div>
          <span className="block text-[10px] text-[#A8A79E] uppercase">Historical Span</span>
          <span className="text-[#121212] font-semibold">50 Decisive Years</span>
        </div>
        <div>
          <span className="block text-[10px] text-[#A8A79E] uppercase">Core Centers</span>
          <span className="text-[#121212]">Weimar · Dessau · Moscow · Paris</span>
        </div>
        <div>
          <span className="block text-[10px] text-[#A8A79E] uppercase">Disciplines</span>
          <span className="text-[#121212]">Architecture · Type · Objects</span>
        </div>
        <div className="text-right">
          <span className="block text-[10px] text-[#A8A79E] uppercase">Navigation</span>
          <span className="text-[#121212] underline cursor-pointer" onClick={onExploreTimeline}>Scroll to inspect ↓</span>
        </div>
      </div>
    </section>
  );
};
