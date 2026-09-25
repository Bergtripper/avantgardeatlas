import { lazy, Suspense, useState, useEffect } from 'react';
import { MovementId } from './types/atlas';
import { ALL_MOVEMENTS, getMovementById } from './data/movements';
import { Header, NavTab } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { TimelineSection } from './components/TimelineSection';
import { NetworkSection } from './components/NetworkSection';
import { MovementsIndexSection } from './components/MovementsIndexSection';
import { Footer } from './components/Footer';
import { parseAtlasRoute, pathForMovement, pathForTab } from './routing';

const ObjectsRouteSection = lazy(() => import('./routes/ObjectsRouteSection'));
const CompareSection = lazy(() =>
  import('./components/CompareSection').then((module) => ({ default: module.CompareSection }))
);
const PeopleSection = lazy(() =>
  import('./components/PeopleSection').then((module) => ({ default: module.PeopleSection }))
);
const StoriesSection = lazy(() =>
  import('./components/StoriesSection').then((module) => ({ default: module.StoriesSection }))
);
const GeographySection = lazy(() =>
  import('./components/GeographySection').then((module) => ({ default: module.GeographySection }))
);
const MovementDetailView = lazy(() =>
  import('./components/MovementDetailView').then((module) => ({ default: module.MovementDetailView }))
);

const SectionLoading = () => (
  <div
    className="min-h-[35vh] border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]"
    aria-live="polite"
    aria-label="Loading atlas section"
  />
);

export default function App() {
  const initialRoute = parseAtlasRoute();
  const initialMovement = initialRoute.movementId ? getMovementById(initialRoute.movementId) : null;

  const [currentTab, setCurrentTab] = useState<NavTab>(initialRoute.tab);
  const [selectedYear, setSelectedYear] = useState<number>(1925);
  const [selectedMovementId, setSelectedMovementId] = useState<MovementId | null>(
    initialMovement ? initialRoute.movementId : null
  );
  const [lastOverviewTab, setLastOverviewTab] = useState<NavTab>(
    initialMovement ? 'movements' : initialRoute.tab
  );
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

  useEffect(() => {
    const syncFromLocation = () => {
      const route = parseAtlasRoute();
      const movement = route.movementId ? getMovementById(route.movementId) : null;

      if (movement && route.movementId) {
        setSelectedMovementId(route.movementId);
        setCurrentTab('movements');
        setLastOverviewTab('movements');
      } else {
        setSelectedMovementId(null);
        setCurrentTab(route.tab);
        setLastOverviewTab(route.tab);
      }

      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', syncFromLocation);
    return () => window.removeEventListener('popstate', syncFromLocation);
  }, []);

  useEffect(() => {
    const route = parseAtlasRoute();
    const movement = route.movementId ? getMovementById(route.movementId) : null;
    const isBasePath = window.location.pathname === import.meta.env.BASE_URL
      || window.location.pathname === import.meta.env.BASE_URL.replace(/\/$/, '');

    if (isBasePath) {
      window.history.replaceState({}, '', pathForTab('timeline'));
    } else if (route.movementId && !movement) {
      window.history.replaceState({}, '', pathForTab('movements'));
      setCurrentTab('movements');
      setSelectedMovementId(null);
      setLastOverviewTab('movements');
    }
  }, []);

  useEffect(() => {
    const movement = selectedMovementId ? getMovementById(selectedMovementId) : null;
    const sectionTitle = currentTab === 'archive'
      ? 'Objects'
      : currentTab === 'geography'
      ? 'Geography'
      : currentTab.charAt(0).toUpperCase() + currentTab.slice(1);

    document.title = movement
      ? `${movement.name} — Avant-Garde Atlas`
      : `${sectionTitle} — Avant-Garde Atlas`;
  }, [currentTab, selectedMovementId]);

  const handleSelectMovement = (id: MovementId) => {
    setLastOverviewTab(currentTab);
    setSelectedMovementId(id);
    window.history.pushState({}, '', pathForMovement(id));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOverview = () => {
    setSelectedMovementId(null);
    setCurrentTab(lastOverviewTab);
    window.history.pushState({}, '', pathForTab(lastOverviewTab));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab: NavTab) => {
    setSelectedMovementId(null);
    setCurrentTab(tab);
    setLastOverviewTab(tab);
    window.history.pushState({}, '', pathForTab(tab));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedMovement = selectedMovementId ? getMovementById(selectedMovementId) : null;

  return (
    <div
      className="atlas-shell min-h-screen bg-[var(--atlas-bg)] text-[var(--atlas-text)] selection:bg-[var(--atlas-text)] selection:text-white flex flex-col font-sans"
      data-theme={theme}
      data-grid={gridEnabled ? 'on' : 'off'}
    >
      <a href="#main-content" className="atlas-skip-link">Skip to main content</a>

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
      <main id="main-content" className="flex-1 w-full" tabIndex={-1}>
        <Suspense fallback={<SectionLoading />}>
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
              <ObjectsRouteSection onSelectMovement={handleSelectMovement} />
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
        </Suspense>
      </main>

      {/* Editorial Colophon Footer */}
      <Footer />
    </div>
  );
}
