import React, { useState } from 'react';

export type NavTab = 'timeline' | 'network' | 'movements' | 'archive' | 'compare' | 'people' | 'stories' | 'geography' | 'global';

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

const NAV_ITEMS: Array<{ id: NavTab; label: string; compactLabel?: string }> = [
  { id: 'timeline', label: 'Timeline' },
  { id: 'network', label: 'Network' },
  { id: 'movements', label: 'Movements' },
  { id: 'archive', label: 'Objects' },
  { id: 'compare', label: 'Compare' },
  { id: 'people', label: 'People' },
  { id: 'stories', label: 'Stories' },
  { id: 'geography', label: 'Europe Map', compactLabel: 'Europe' },
  { id: 'global', label: 'Global Map', compactLabel: 'Global' }
];

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
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const activeItem = NAV_ITEMS.find((item) => item.id === currentTab) ?? NAV_ITEMS[0];

  const selectTab = (tab: NavTab) => {
    setSectionsOpen(false);
    onSelectTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--atlas-header-bg)] backdrop-blur-xs border-b border-[var(--atlas-border)] transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Wordmark / home */}
        <button
          onClick={() => selectTab('timeline')}
          className="text-left group cursor-pointer focus:outline-hidden shrink-0"
          aria-label="Open Avant-Garde Atlas timeline home"
        >
          <span className="text-sm sm:text-lg font-semibold tracking-tight text-[var(--atlas-text)]">
            AVANT-GARDE ATLAS
          </span>
          <span className="hidden 2xl:inline font-mono text-xs text-[var(--atlas-text-muted)] ml-3 tracking-widest">
            1890—1940
          </span>
        </button>

        {/* Full navigation appears only when there is genuinely enough room. */}
        <nav className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs font-medium tracking-wide uppercase text-[var(--atlas-text-secondary)]">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => selectTab(item.id)}
              aria-current={currentTab === item.id ? 'page' : undefined}
              className={`cursor-pointer transition-colors py-1 whitespace-nowrap ${
                currentTab === item.id
                  ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                  : 'hover:text-[var(--atlas-text)]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Persistent display controls */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            className="atlas-control px-2 sm:px-2.5 py-1.5 border border-[var(--atlas-border)] bg-[var(--atlas-control)] font-mono text-[10px] uppercase tracking-wider hover:border-[var(--atlas-text)]"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            aria-pressed={theme === 'dark'}
            title="Toggle light / dark theme"
          >
            {theme === 'light' ? 'Light' : 'Dark'}
          </button>
          <button
            type="button"
            onClick={onToggleGrid}
            className="atlas-control px-2 sm:px-2.5 py-1.5 border border-[var(--atlas-border)] bg-[var(--atlas-control)] font-mono text-[10px] uppercase tracking-wider hover:border-[var(--atlas-text)]"
            aria-label={`${gridEnabled ? 'Disable' : 'Enable'} architectural grid`}
            aria-pressed={gridEnabled}
            title="Toggle architectural grid"
          >
            <span className="hidden sm:inline">Grid {gridEnabled ? 'On' : 'Off'}</span>
            <span className="sm:hidden">Grid</span>
          </button>
          <div className="flex items-center gap-1.5 border border-[var(--atlas-border)] bg-[var(--atlas-control)] px-2 sm:px-3 py-1.5 text-xs">
            <span className="hidden lg:inline font-mono text-[var(--atlas-text-muted)] text-[10px] tracking-wider uppercase">
              Active Year
            </span>
            <input
              type="number"
              min={1890}
              max={1940}
              value={selectedYear}
              onChange={(e) => onSelectYear(Math.min(1940, Math.max(1890, Number(e.target.value) || 1920)))}
              className="w-11 sm:w-14 font-mono font-semibold text-xs text-[var(--atlas-text)] bg-transparent text-right focus:outline-hidden"
              aria-label="Filter active year"
            />
          </div>
        </div>
      </div>

      {/* Compact navigation for tablet, laptop and mobile widths. */}
      <div className="xl:hidden relative border-t border-[var(--atlas-border)] bg-[var(--atlas-control)]">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setSectionsOpen((open) => !open)}
            className="h-full flex items-center gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[var(--atlas-text)]"
            aria-expanded={sectionsOpen}
            aria-controls="atlas-sections-menu"
          >
            <span>Sections</span>
            <span aria-hidden="true">{sectionsOpen ? '−' : '+'}</span>
          </button>
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-wider text-[var(--atlas-text-muted)]">
            {activeItem.compactLabel ?? activeItem.label}
          </span>
        </div>

        {sectionsOpen && (
          <nav
            id="atlas-sections-menu"
            aria-label="Atlas sections"
            className="absolute left-0 right-0 top-full z-50 border-y border-[var(--atlas-border)] bg-[var(--atlas-bg)] shadow-lg"
          >
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4">
              {NAV_ITEMS.map((item, index) => {
                const active = item.id === currentTab;
                return (
                  <button
                    key={item.id}
                    onClick={() => selectTab(item.id)}
                    aria-current={active ? 'page' : undefined}
                    className={`min-h-16 px-4 py-3 text-left border-b border-r border-[var(--atlas-border)] transition-colors ${
                      active
                        ? 'bg-[var(--atlas-text)] text-[var(--atlas-bg)]'
                        : 'bg-[var(--atlas-bg)] text-[var(--atlas-text)] hover:bg-[var(--atlas-surface-alt)]'
                    }`}
                  >
                    <span className="block font-mono text-[9px] tracking-wider opacity-60 mb-1">
                      0{index + 1}
                    </span>
                    <span className="block text-xs font-semibold uppercase tracking-wide">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
