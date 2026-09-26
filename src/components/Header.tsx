import React, { useState } from 'react';

export type NavTab =
  | 'timeline'
  | 'network'
  | 'movements'
  | 'archive'
  | 'compare'
  | 'people'
  | 'stories'
  | 'geography'
  | 'global';

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

const PRIMARY_NAV_ITEMS: Array<{ id: NavTab; label: string }> = [
  { id: 'timeline', label: 'Timeline' },
  { id: 'network', label: 'Network' },
  { id: 'movements', label: 'Movements' },
  { id: 'archive', label: 'Objects' },
  { id: 'compare', label: 'Compare' },
  { id: 'people', label: 'People' },
  { id: 'stories', label: 'Stories' },
];

const MAP_ITEMS: Array<{ id: NavTab; label: string; description: string }> = [
  { id: 'geography', label: 'Europe', description: 'European movement geography' },
  { id: 'global', label: 'Global', description: 'Worldwide transmission network' },
];

const isMapTab = (tab: NavTab) => tab === 'geography' || tab === 'global';

const activeLabelForTab = (tab: NavTab) => {
  if (tab === 'geography') return 'Maps / Europe';
  if (tab === 'global') return 'Maps / Global';
  return PRIMARY_NAV_ITEMS.find((item) => item.id === tab)?.label ?? 'Timeline';
};

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  selectedYear,
  onSelectYear,
  theme,
  onToggleTheme,
  gridEnabled,
  onToggleGrid,
}) => {
  const [sectionsOpen, setSectionsOpen] = useState(false);
  const [mapsOpen, setMapsOpen] = useState(false);

  const selectTab = (tab: NavTab) => {
    setSectionsOpen(false);
    setMapsOpen(false);
    onSelectTab(tab);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--atlas-header-bg)] backdrop-blur-xs border-b border-[var(--atlas-border)] transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
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

        <nav
          className="hidden xl:flex items-center gap-4 2xl:gap-6 text-xs font-medium tracking-wide uppercase text-[var(--atlas-text-secondary)]"
          aria-label="Primary atlas navigation"
        >
          {PRIMARY_NAV_ITEMS.map((item) => (
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

          <div className="relative">
            <button
              type="button"
              onClick={() => setMapsOpen((open) => !open)}
              aria-expanded={mapsOpen}
              aria-controls="atlas-maps-menu"
              aria-current={isMapTab(currentTab) ? 'page' : undefined}
              className={`cursor-pointer transition-colors py-1 whitespace-nowrap flex items-center gap-1.5 ${
                isMapTab(currentTab)
                  ? 'text-[var(--atlas-text)] border-b-2 border-[var(--atlas-text)] font-semibold'
                  : 'hover:text-[var(--atlas-text)]'
              }`}
            >
              <span>Maps</span>
              <span aria-hidden="true" className="font-mono text-[9px]">
                {mapsOpen ? '−' : '+'}
              </span>
            </button>

            {mapsOpen && (
              <div
                id="atlas-maps-menu"
                className="absolute top-[calc(100%+0.6rem)] right-0 w-64 border border-[var(--atlas-border)] bg-[var(--atlas-bg)] shadow-lg"
              >
                <div className="px-3 py-2 border-b border-[var(--atlas-border)] font-mono text-[8px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                  Map views
                </div>
                {MAP_ITEMS.map((item) => {
                  const active = currentTab === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => selectTab(item.id)}
                      aria-current={active ? 'page' : undefined}
                      className={`w-full text-left px-4 py-3 border-b last:border-b-0 border-[var(--atlas-border)] transition-colors ${
                        active
                          ? 'bg-[var(--atlas-text)] text-[var(--atlas-bg)]'
                          : 'bg-[var(--atlas-bg)] text-[var(--atlas-text)] hover:bg-[var(--atlas-surface-alt)]'
                      }`}
                    >
                      <span className="block text-xs font-semibold uppercase tracking-wide">
                        {item.label}
                      </span>
                      <span className="block mt-1 text-[10px] normal-case tracking-normal opacity-65">
                        {item.description}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

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
              onChange={(e) =>
                onSelectYear(Math.min(1940, Math.max(1890, Number(e.target.value) || 1920)))
              }
              className="w-11 sm:w-14 font-mono font-semibold text-xs text-[var(--atlas-text)] bg-transparent text-right focus:outline-hidden"
              aria-label="Filter active year"
            />
          </div>
        </div>
      </div>

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
            {activeLabelForTab(currentTab)}
          </span>
        </div>

        {sectionsOpen && (
          <nav
            id="atlas-sections-menu"
            aria-label="Atlas sections"
            className="absolute left-0 right-0 top-full z-50 border-y border-[var(--atlas-border)] bg-[var(--atlas-bg)] shadow-lg"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-4">
                {PRIMARY_NAV_ITEMS.map((item, index) => {
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
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="block text-xs font-semibold uppercase tracking-wide">
                        {item.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-[var(--atlas-border)]">
                <div className="px-4 py-2 font-mono text-[9px] uppercase tracking-widest text-[var(--atlas-text-muted)] bg-[var(--atlas-control)]">
                  Maps
                </div>
                <div className="grid grid-cols-2">
                  {MAP_ITEMS.map((item) => {
                    const active = currentTab === item.id;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => selectTab(item.id)}
                        aria-current={active ? 'page' : undefined}
                        className={`min-h-16 px-4 py-3 text-left border-r last:border-r-0 border-[var(--atlas-border)] transition-colors ${
                          active
                            ? 'bg-[var(--atlas-text)] text-[var(--atlas-bg)]'
                            : 'bg-[var(--atlas-bg)] text-[var(--atlas-text)] hover:bg-[var(--atlas-surface-alt)]'
                        }`}
                      >
                        <span className="block font-mono text-[9px] tracking-wider opacity-60 mb-1">
                          MAP
                        </span>
                        <span className="block text-xs font-semibold uppercase tracking-wide">
                          {item.label}
                        </span>
                        <span className="block mt-1 text-[10px] opacity-60">
                          {item.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
