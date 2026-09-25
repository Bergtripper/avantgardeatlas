import { useState, useEffect } from 'react';
import { MovementId } from './types/atlas';
import { ALL_MOVEMENTS, getMovementById } from './data/movements';
import { ALL_OBJECTS } from './data/objects';
import { Header, NavTab } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { NetworkSection } from './components/NetworkSection';
import { MovementsIndexSection } from './components/MovementsIndexSection';
import { ObjectsArchiveSection } from './components/ObjectsArchiveSection';
import { CompareSection } from './components/CompareSection';
import { PeopleSection } from './components/PeopleSection';
import { StoriesSection } from './components/StoriesSection';
import { GeographySection } from './components/GeographySection';
import { MovementDetailView } from './components/MovementDetailView';
import { Footer } from './components/Footer';

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('timeline');
  const [selectedYear, setSelectedYear] = useState<number>(1925);
  const [selectedMovementId, setSelectedMovementId] = useState<MovementId | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return localStorage.getItem('atlas-theme') === 'dark' ? 'dark' : 'light';
  });
  const [gridEnabled, setGridEnabled] = useState<boolean>(() => {
    return localStorage.getItem('atlas-grid') === 'on';
  });

  useEffect(() => {
    localStorage.setItem('atlas-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    localStorage.setItem('atlas-grid', gridEnabled ? 'on' : 'off');
  }, [gridEnabled]);

  // Scroll to top when opening a detailed movement
  useEffect(() => {
    if (selectedMovementId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedMovementId]);

  const handleSelectMovement = (id: MovementId) => {
    setSelectedMovementId(id);
  };

  const handleBackToOverview = () => {
    setSelectedMovementId(null);
  };

  const handleSelectTab = (tab: NavTab) => {
    setSelectedMovementId(null);
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedMovement = selectedMovementId ? getMovementById(selectedMovementId) : null;

  return (
    <div
      className="atlas-shell min-h-screen bg-[var(--atlas-bg)] text-[var(--atlas-text)] selection:bg-[var(--atlas-text)] selection:text-white flex flex-col font-sans"
      data-theme={theme}
      data-grid={gridEnabled ? 'on' : 'off'}
    >
      {/* Swiss Modernist Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        selectedYear={selectedYear}
        onSelectYear={setSelectedYear}
        theme={theme}
        onToggleTheme={() => setTheme((current) => (current === 'light' ? 'dark' : 'light'))}
        gridEnabled={gridEnabled}
        onToggleGrid={() => setGridEnabled((current) => !current)}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {selectedMovement ? (
          /* Dedicated Immersive Movement Page (e.g. Bauhaus, De Stijl, Constructivism, etc.) */
          <MovementDetailView
            movement={selectedMovement}
            onBack={handleBackToOverview}
            onSelectMovement={handleSelectMovement}
            allMovements={ALL_MOVEMENTS}
          />
        ) : (
          /* Multi-dimensional Atlas Sections */
          <>
            {/* The large editorial masthead belongs only to the atlas home/timeline view. */}
            {currentTab === 'timeline' && (
              <HeroSection
                onExploreTimeline={() => handleSelectTab('timeline')}
                onExploreNetwork={() => handleSelectTab('network')}
              />
            )}

            {/* Tab-driven Viewport or Continuous Reading Layout */}
            {currentTab === 'timeline' && (
              <>
                <TimelineSection
                  movements={ALL_MOVEMENTS}
                  selectedYear={selectedYear}
                  onSelectYear={setSelectedYear}
                  onSelectMovement={handleSelectMovement}
                />
                <NetworkSection onSelectMovement={handleSelectMovement} />
                <MovementsIndexSection
                  movements={ALL_MOVEMENTS}
                  onSelectMovement={handleSelectMovement}
                />
              </>
            )}

            {currentTab === 'network' && (
              <>
                <NetworkSection onSelectMovement={handleSelectMovement} />
                <TimelineSection
                  movements={ALL_MOVEMENTS}
                  selectedYear={selectedYear}
                  onSelectYear={setSelectedYear}
                  onSelectMovement={handleSelectMovement}
                />
              </>
            )}

            {currentTab === 'movements' && (
              <MovementsIndexSection
                movements={ALL_MOVEMENTS}
                onSelectMovement={handleSelectMovement}
              />
            )}

            {currentTab === 'archive' && (
              <ObjectsArchiveSection
                objects={ALL_OBJECTS}
                onSelectMovement={handleSelectMovement}
              />
            )}

            {currentTab === 'compare' && (
              <CompareSection
                movements={ALL_MOVEMENTS}
                onSelectMovement={handleSelectMovement}
              />
            )}

            {currentTab === 'people' && (
              <PeopleSection onSelectMovement={handleSelectMovement} />
            )}

            {currentTab === 'stories' && (
              <StoriesSection onSelectMovement={handleSelectMovement} />
            )}

            {currentTab === 'geography' && (
              <GeographySection
                onSelectMovement={handleSelectMovement}
                selectedYear={selectedYear}
                onSelectYear={setSelectedYear}
              />
            )}
          </>
        )}
      </main>

      {/* Editorial Colophon Footer */}
      <Footer />
    </div>
  );
}
