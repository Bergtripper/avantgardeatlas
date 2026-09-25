import React from 'react';

export type NavTab = 'timeline' | 'network' | 'movements' | 'archive' | 'compare' | 'people' | 'stories' | 'geography';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  selectedYear: number;
  onSelectYear: (year: number) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  selectedYear,
  onSelectYear
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#FBFBFA]/95 backdrop-blur-xs border-b border-[#E5E4DF] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('timeline')}
          className="text-left group cursor-pointer focus:outline-hidden"
        >
          <span className="text-base sm:text-lg font-semibold tracking-tight text-[#121212] group-hover:text-black">
            AVANT-GARDE ATLAS
          </span>
          <span className="hidden sm:inline font-mono text-xs text-[#737373] ml-3 tracking-widest">
            1890—1940
          </span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium tracking-wide uppercase text-[#525252]">
          <button
            onClick={() => onSelectTab('timeline')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'timeline'
                ? 'text-[#121212] border-b-2 border-[#121212] font-semibold'
                : 'hover:text-[#121212]'
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => onSelectTab('network')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'network'
                ? 'text-[#121212] border-b-2 border-[#121212] font-semibold'
                : 'hover:text-[#121212]'
            }`}
          >
            Network
          </button>
          <button
            onClick={() => onSelectTab('movements')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'movements'
                ? 'text-[#121212] border-b-2 border-[#121212] font-semibold'
                : 'hover:text-[#121212]'
            }`}
          >
            Movements
          </button>
          <button
            onClick={() => onSelectTab('archive')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'archive'
                ? 'text-[#121212] border-b-2 border-[#121212] font-semibold'
                : 'hover:text-[#121212]'
            }`}
          >
            Objects
          </button>
          <button
            onClick={() => onSelectTab('compare')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'compare'
                ? 'text-[#121212] border-b-2 border-[#121212] font-semibold'
                : 'hover:text-[#121212]'
            }`}
          >
            Compare
          </button>
          <button
            onClick={() => onSelectTab('people')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'people'
                ? 'text-[#121212] border-b-2 border-[#121212] font-semibold'
                : 'hover:text-[#121212]'
            }`}
          >
            People
          </button>
          <button
            onClick={() => onSelectTab('stories')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'stories'
                ? 'text-[#121212] border-b-2 border-[#121212] font-semibold'
                : 'hover:text-[#121212]'
            }`}
          >
            Stories
          </button>
          <button
            onClick={() => onSelectTab('geography')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'geography'
                ? 'text-[#121212] border-b-2 border-[#121212] font-semibold'
                : 'hover:text-[#121212]'
            }`}
          >
            Europe Map
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions (Year display / quick jumper) */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 border border-[#E5E4DF] bg-[#F7F6F2] px-3 py-1.5 rounded-none text-xs">
            <span className="font-mono text-[#737373] text-[10px] tracking-wider uppercase">Active Year</span>
            <input
              type="number"
              min={1890}
              max={1940}
              value={selectedYear}
              onChange={(e) => onSelectYear(Math.min(1940, Math.max(1890, Number(e.target.value) || 1920)))}
              className="w-14 font-mono font-semibold text-xs text-[#121212] bg-transparent text-right focus:outline-hidden"
              aria-label="Filter active year"
            />
          </div>
        </div>
      </div>

      {/* Mobile nav bar row for touch screens */}
      <div className="md:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-[#E5E4DF] bg-[#F7F6F2] gap-4 text-xs font-mono uppercase text-[#737373]">
        <button
          onClick={() => onSelectTab('timeline')}
          className={`shrink-0 ${currentTab === 'timeline' ? 'text-[#121212] font-bold underline' : ''}`}
        >
          Timeline
        </button>
        <button
          onClick={() => onSelectTab('network')}
          className={`shrink-0 ${currentTab === 'network' ? 'text-[#121212] font-bold underline' : ''}`}
        >
          Network
        </button>
        <button
          onClick={() => onSelectTab('movements')}
          className={`shrink-0 ${currentTab === 'movements' ? 'text-[#121212] font-bold underline' : ''}`}
        >
          Movements
        </button>
        <button
          onClick={() => onSelectTab('archive')}
          className={`shrink-0 ${currentTab === 'archive' ? 'text-[#121212] font-bold underline' : ''}`}
        >
          Objects
        </button>
        <button
          onClick={() => onSelectTab('compare')}
          className={`shrink-0 ${currentTab === 'compare' ? 'text-[#121212] font-bold underline' : ''}`}
        >
          Compare
        </button>
        <button
          onClick={() => onSelectTab('people')}
          className={`shrink-0 ${currentTab === 'people' ? 'text-[#121212] font-bold underline' : ''}`}
        >
          People
        </button>
        <button
          onClick={() => onSelectTab('stories')}
          className={`shrink-0 ${currentTab === 'stories' ? 'text-[#121212] font-bold underline' : ''}`}
        >
          Stories
        </button>
        <button
          onClick={() => onSelectTab('geography')}
          className={`shrink-0 ${currentTab === 'geography' ? 'text-[#121212] font-bold underline' : ''}`}
        >
          Map
        </button>
      </div>
    </header>
  );
};
