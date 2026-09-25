import React from 'react';

export type NavTab = 'timeline' | 'network' | 'movements' | 'archive' | 'compare' | 'people' | 'stories' | 'geography';

interface HeaderProps {
  currentTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
  selectedYear: number;
  onSelectYear: (year: number) => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  gridEnabled: boolean;
  onToggleGrid: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  selectedYear,
  onSelectYear,
  theme,
  onToggleTheme,
  gridEnabled,
  onToggleGrid
}) => {
  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--atlas-header-bg)] backdrop-blur-xs border-b border-[var(--atlas-border)] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => onSelectTab('timeline')}
          className="text-left group cursor-pointer focus:outline-hidden"
        >
          <span className="text-base sm:text-lg font-semibold tracking-tight text-[var(--atlas-text)] group-hover:text-black">
            AVANT-GARDE ATLAS
          </span>
          <span className="hidden sm:inline font-mono text-xs text-[var(--atlas-text-muted)] ml-3 tracking-widest">
            1890—1940
          </span>
        </button>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs lg:text-sm font-medium tracking-wide uppercase text-[var(--atlas-text-secondary)]">
          <button
            onClick={() => onSelectTab('timeline')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'timeline'
                ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                : 'hover:text-[var(--atlas-text)]'
            }`}
          >
            Timeline
          </button>
          <button
            onClick={() => onSelectTab('network')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'network'
                ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                : 'hover:text-[var(--atlas-text)]'
            }`}
          >
            Network
          </button>
          <button
            onClick={() => onSelectTab('movements')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'movements'
                ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                : 'hover:text-[var(--atlas-text)]'
            }`}
          >
            Movements
          </button>
          <button
            onClick={() => onSelectTab('archive')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'archive'
                ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                : 'hover:text-[var(--atlas-text)]'
            }`}
          >
            Objects
          </button>
          <button
            onClick={() => onSelectTab('compare')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'compare'
                ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                : 'hover:text-[var(--atlas-text)]'
            }`}
          >
            Compare
          </button>
          <button
            onClick={() => onSelectTab('people')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'people'
                ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                : 'hover:text-[var(--atlas-text)]'
            }`}
          >
            People
          </button>
          <button
            onClick={() => onSelectTab('stories')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'stories'
                ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                : 'hover:text-[var(--atlas-text)]'
            }`}
          >
            Stories
          </button>
          <button
            onClick={() => onSelectTab('geography')}
            className={`cursor-pointer transition-colors py-1 ${
              currentTab === 'geography'
                ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                : 'hover:text-[var(--atlas-text)]'
            }`}
          >
            Europe Map
          </button>
        </nav>

        {/* Zone 3: 1-2 primary actions (Year display / quick jumper) */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="atlas-control px-2.5 py-1.5 border border-[var(--atlas-border)] bg-[var(--atlas-control)] font-mono text-[10px] uppercase tracking-wider hover:border-[var(--atlas-text)]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            aria-pressed={theme === 'dark'}
            title="Toggle light / dark theme"
          >
            {theme === 'light' ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            onClick={onToggleGrid}
            className="atlas-control px-2.5 py-1.5 border border-[var(--atlas-border)] bg-[var(--atlas-control)] font-mono text-[10px] uppercase tracking-wider hover:border-[var(--atlas-text)]"
            aria-label={`${gridEnabled ? 'Disable' : 'Enable'} architectural grid`}
            aria-pressed={gridEnabled}
            title="Toggle architectural grid"
          >
            Grid {gridEnabled ? 'On' : 'Off'}
          </button>
          <div className="flex items-center gap-2 border border-[var(--atlas-border)] bg-[var(--atlas-control)] px-3 py-1.5 rounded-none text-xs">
            <span className="font-mono text-[var(--atlas-text-muted)] text-[10px] tracking-wider uppercase">Active Year</span>
            <input
              type="number"
              min={1890}
              max={1940}
              value={selectedYear}
              onChange={(e) => onSelectYear(Math.min(1940, Math.max(1890, Number(e.target.value) || 1920)))}
              className="w-14 font-mono font-semibold text-xs text-[var(--atlas-text)] bg-transparent text-right focus:outline-hidden"
              aria-label="Filter active year"
            />
          </div>
        </div>
      </div>

      {/* Mobile nav bar row for touch screens */}
      <div className="md:hidden flex items-center overflow-x-auto px-4 py-2 border-t border-[var(--atlas-border)] bg-[var(--atlas-control)] gap-4 text-xs font-mono uppercase text-[var(--atlas-text-muted)]">
        <button
          onClick={() => onSelectTab('timeline')}
          className={`shrink-0 ${currentTab === 'timeline' ? 'text-[var(--atlas-text)] font-bold underline' : ''}`}
        >
          Timeline
        </button>
        <button
          onClick={() => onSelectTab('network')}
          className={`shrink-0 ${currentTab === 'network' ? 'text-[var(--atlas-text)] font-bold underline' : ''}`}
        >
          Network
        </button>
        <button
          onClick={() => onSelectTab('movements')}
          className={`shrink-0 ${currentTab === 'movements' ? 'text-[var(--atlas-text)] font-bold underline' : ''}`}
        >
          Movements
        </button>
        <button
          onClick={() => onSelectTab('archive')}
          className={`shrink-0 ${currentTab === 'archive' ? 'text-[var(--atlas-text)] font-bold underline' : ''}`}
        >
          Objects
        </button>
        <button
          onClick={() => onSelectTab('compare')}
          className={`shrink-0 ${currentTab === 'compare' ? 'text-[var(--atlas-text)] font-bold underline' : ''}`}
        >
          Compare
        </button>
        <button
          onClick={() => onSelectTab('people')}
          className={`shrink-0 ${currentTab === 'people' ? 'text-[var(--atlas-text)] font-bold underline' : ''}`}
        >
          People
        </button>
        <button
          onClick={() => onSelectTab('stories')}
          className={`shrink-0 ${currentTab === 'stories' ? 'text-[var(--atlas-text)] font-bold underline' : ''}`}
        >
          Stories
        </button>
        <button
          onClick={() => onSelectTab('geography')}
          className={`shrink-0 ${currentTab === 'geography' ? 'text-[var(--atlas-text)] font-bold underline' : ''}`}
        >
          Map
        </button>
      </div>
    </header>
  );
};
