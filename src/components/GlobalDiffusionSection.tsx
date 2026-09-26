import React, { useEffect, useMemo, useState } from 'react';
import { getMovementById } from '../data/movements';
import { getPersonById } from '../data/people';
import { getPlaceById } from '../data/places';
import {
  ALL_DIFFUSION_ROUTES,
  ALL_GLOBAL_ENTITIES,
  ALL_GLOBAL_HISTORICAL_EVENTS,
  ALL_GLOBAL_HUBS,
  DiffusionMechanism,
  DiffusionMedium,
  DiffusionPlaceRef,
  DiffusionRoute,
  getGlobalEntityById,
  getGlobalHistoricalEventById,
  getGlobalHubById,
  getGlobalPersonById,
  getGlobalSourceById,
} from '../data/global';
import {
  GLOBAL_BASEMAP_PATH,
  GLOBAL_MAP,
  projectGlobalCoordinate,
} from '../data/global/map';

const resolvePlace = (ref: DiffusionPlaceRef) => {
  const place = ref.scope === 'atlas' ? getPlaceById(ref.id) : getGlobalHubById(ref.id);
  if (!place) return null;

  return {
    id: ref.id,
    name: place.name,
    country: place.country,
    latitude: place.latitude,
    longitude: place.longitude,
  };
};


type RouteSemanticId =
  | 'circulation'
  | 'displacement'
  | 'print'
  | 'institution'
  | 'commercial'
  | 'reinterpretation';

type GlobalViewMode = 'map' | 'routes' | 'nodes' | 'crossroads';

interface CityCrossroad {
  key: string;
  placeRef: DiffusionPlaceRef;
  place: NonNullable<ReturnType<typeof resolvePlace>>;
  movementIds: string[];
  routeIds: string[];
  entityIds: string[];
}

interface RouteSemantic {
  id: RouteSemanticId;
  label: string;
  description: string;
  dash?: string;
  marker: 'arrow' | 'diamond' | 'square';
}

const ROUTE_SEMANTICS: Record<RouteSemanticId, RouteSemantic> = {
  circulation: {
    id: 'circulation',
    label: 'Travel / Study / Return',
    description: 'Knowledge carried through travel, study or return journeys.',
    marker: 'arrow',
  },
  displacement: {
    id: 'displacement',
    label: 'Exile / Migration',
    description: 'Ideas transferred through forced or long-term relocation.',
    dash: '10 5',
    marker: 'arrow',
  },
  print: {
    id: 'print',
    label: 'Print / Publishing',
    description: 'Transmission through journals, books, posters and printed networks.',
    dash: '2 4',
    marker: 'square',
  },
  institution: {
    id: 'institution',
    label: 'Institution / Exhibition',
    description: 'Transfer through schools, museums, exhibitions and formal institutions.',
    dash: '12 3 2 3',
    marker: 'square',
  },
  commercial: {
    id: 'commercial',
    label: 'Commercial Application',
    description: 'Translation into advertising, publishing and applied graphic practice.',
    dash: '1 4',
    marker: 'arrow',
  },
  reinterpretation: {
    id: 'reinterpretation',
    label: 'Local Reinterpretation',
    description: 'A local reformulation that produces a new cultural expression.',
    dash: '6 3 1 3',
    marker: 'diamond',
  },
};

const semanticForMechanisms = (mechanisms: DiffusionMechanism[]): RouteSemantic => {
  if (mechanisms.some((item) => item === 'exile' || item === 'migration')) {
    return ROUTE_SEMANTICS.displacement;
  }
  if (mechanisms.some((item) => item === 'travel' || item === 'study')) {
    return ROUTE_SEMANTICS.circulation;
  }
  if (mechanisms.includes('print')) {
    return ROUTE_SEMANTICS.print;
  }
  if (mechanisms.some((item) => item === 'institution-transfer' || item === 'exhibition')) {
    return ROUTE_SEMANTICS.institution;
  }
  if (mechanisms.includes('commercial-application')) {
    return ROUTE_SEMANTICS.commercial;
  }
  return ROUTE_SEMANTICS.reinterpretation;
};

const semanticForRoute = (route: DiffusionRoute): RouteSemantic => {
  if (route.primaryMechanism) {
    return semanticForMechanisms([route.primaryMechanism]);
  }
  return semanticForMechanisms(route.mechanisms);
};

const SEMANTIC_LEGEND: RouteSemantic[] = [
  ROUTE_SEMANTICS.circulation,
  ROUTE_SEMANTICS.displacement,
  ROUTE_SEMANTICS.print,
  ROUTE_SEMANTICS.institution,
  ROUTE_SEMANTICS.commercial,
  ROUTE_SEMANTICS.reinterpretation,
];

const routePath = (route: DiffusionRoute) => {
  const origin = resolvePlace(route.origin);
  const destination = resolvePlace(route.destination);
  if (!origin || !destination) return '';

  const start = projectGlobalCoordinate(origin.longitude, origin.latitude);
  const end = projectGlobalCoordinate(destination.longitude, destination.latitude);
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.sqrt(dx * dx + dy * dy);
  const lift = Math.min(95, Math.max(35, distance * 0.16));
  const controlX = (start.x + end.x) / 2;
  const controlY = (start.y + end.y) / 2 - lift;

  return `M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`;
};

export const GlobalDiffusionSection: React.FC = () => {
  const minRouteYear = Math.min(...ALL_DIFFUSION_ROUTES.map((route) => route.startYear));
  const maxRouteYear = Math.max(...ALL_DIFFUSION_ROUTES.map((route) => route.endYear ?? route.startYear));
  const fracture1933 = ALL_GLOBAL_HISTORICAL_EVENTS.find(
    (event) => event.id === 'political-fracture-1933',
  );
  const fracturePosition = fracture1933
    ? ((fracture1933.year - minRouteYear) / (maxRouteYear - minRouteYear)) * 100
    : 0;
  const fractureSources = fracture1933
    ? fracture1933.sourceIds.map((id) => getGlobalSourceById(id)).filter(Boolean)
    : [];

  const phaseStats = useMemo(() => {
    const before = ALL_DIFFUSION_ROUTES.filter((route) => route.startYear < 1933);
    const after = ALL_DIFFUSION_ROUTES.filter((route) => route.startYear >= 1933);
    const displacementCount = (routes: DiffusionRoute[]) =>
      routes.filter((route) =>
        route.mechanisms.some((item) => item === 'exile' || item === 'migration'),
      ).length;

    return {
      before: { total: before.length, displacement: displacementCount(before) },
      after: { total: after.length, displacement: displacementCount(after) },
    };
  }, []);

  const availableMedia = useMemo(
    () =>
      Array.from(new Set(ALL_DIFFUSION_ROUTES.flatMap((route) => route.media))).sort() as DiffusionMedium[],
    [],
  );
  const availableMovements = useMemo(
    () =>
      Array.from(new Set(ALL_DIFFUSION_ROUTES.flatMap((route) => route.sourceMovementIds))).sort(),
    [],
  );

  const availableSemantics = useMemo(
    () =>
      SEMANTIC_LEGEND.filter((semantic) =>
        ALL_DIFFUSION_ROUTES.some(
          (route) => semanticForRoute(route).id === semantic.id,
        ),
      ),
    [],
  );

  const [selectedRouteId, setSelectedRouteId] = useState(ALL_DIFFUSION_ROUTES[0]?.id ?? '');
  const [selectedNodeId, setSelectedNodeId] = useState('');
  const [selectedCrossroadKey, setSelectedCrossroadKey] = useState('');
  const [yearFilter, setYearFilter] = useState(maxRouteYear);
  const [semanticFilter, setSemanticFilter] = useState<RouteSemanticId | 'all'>('all');
  const [mediumFilter, setMediumFilter] = useState<DiffusionMedium | 'all'>('all');
  const [movementFilter, setMovementFilter] = useState<string | 'all'>('all');
  const [viewMode, setViewMode] = useState<GlobalViewMode>('map');
  const [showFractureInfo, setShowFractureInfo] = useState(false);

  const visibleTransmissionNodes = useMemo(
    () =>
      ALL_GLOBAL_ENTITIES.filter((entity) => {
        if (!['exhibition', 'institution'].includes(entity.kind)) return false;
        if (entity.startYear > yearFilter) return false;
        if (mediumFilter !== 'all' && !entity.media.includes(mediumFilter)) return false;
        if (movementFilter !== 'all' && !entity.movementLinks.includes(movementFilter as never)) return false;
        return (
          entity.kind === 'exhibition' ||
          entity.media.includes('advertising') ||
          entity.media.includes('exhibition-design')
        );
      }),
    [yearFilter, mediumFilter, movementFilter],
  );

  const convergenceEntities = useMemo(
    () =>
      ALL_GLOBAL_ENTITIES.filter((entity) => {
        if (entity.startYear > yearFilter) return false;
        if (mediumFilter !== 'all' && !entity.media.includes(mediumFilter)) return false;
        if (movementFilter !== 'all' && !entity.movementLinks.includes(movementFilter as never)) return false;
        return true;
      }),
    [yearFilter, mediumFilter, movementFilter],
  );

  const filteredRoutes = useMemo(
    () =>
      ALL_DIFFUSION_ROUTES.filter((route) => {
        const routeYear = route.startYear;
        const semantic = semanticForRoute(route);
        const matchesYear = routeYear <= yearFilter;
        const matchesSemantic = semanticFilter === 'all' || semantic.id === semanticFilter;
        const matchesMedium = mediumFilter === 'all' || route.media.includes(mediumFilter);
        const matchesMovement =
          movementFilter === 'all' || route.sourceMovementIds.includes(movementFilter as never);
        return matchesYear && matchesSemantic && matchesMedium && matchesMovement;
      }),
    [yearFilter, semanticFilter, mediumFilter, movementFilter],
  );

  const selectRoute = (routeId: string) => {
    setSelectedNodeId('');
    setSelectedCrossroadKey('');
    setSelectedRouteId(routeId);
    setViewMode('map');
  };

  const selectNode = (nodeId: string) => {
    setSelectedCrossroadKey('');
    setSelectedNodeId(nodeId);
    setViewMode('map');
  };

  const selectCrossroad = (crossroadKey: string) => {
    setSelectedNodeId('');
    setSelectedCrossroadKey(crossroadKey);
    setViewMode('map');
  };

  useEffect(() => {
    if (selectedNodeId || selectedCrossroadKey) return;
    if (filteredRoutes.some((route) => route.id === selectedRouteId)) return;
    setSelectedRouteId(filteredRoutes[0]?.id ?? '');
  }, [filteredRoutes, selectedRouteId, selectedNodeId, selectedCrossroadKey]);

  const selectedRoute =
    filteredRoutes.find((route) => route.id === selectedRouteId) ?? filteredRoutes[0];

  const selectedNode = selectedNodeId ? getGlobalEntityById(selectedNodeId) : undefined;
  const selectedNodePlace = selectedNode
    ? selectedNode.placeRef
      ? resolvePlace(selectedNode.placeRef)
      : selectedNode.hubId
      ? resolvePlace({ scope: 'global', id: selectedNode.hubId })
      : null
    : null;
  const selectedNodeRoutes = selectedNode
    ? ALL_DIFFUSION_ROUTES.filter(
        (route) =>
          route.transmissionEntityIds?.includes(selectedNode.id) ||
          route.destinationEntityIds.includes(selectedNode.id),
      )
    : [];
  const selectedNodeSources = selectedNode
    ? selectedNode.sourceIds.map((id) => getGlobalSourceById(id)).filter(Boolean)
    : [];
  const selectedNodeMovements = selectedNode
    ? selectedNode.movementLinks.map((id) => getMovementById(id)?.name ?? id)
    : [];

  const cityCrossroads = useMemo(() => {
    const records = new Map<
      string,
      {
        placeRef: DiffusionPlaceRef;
        place: NonNullable<ReturnType<typeof resolvePlace>>;
        movementIds: Set<string>;
        routeIds: Set<string>;
        entityIds: Set<string>;
      }
    >();

    const ensure = (placeRef: DiffusionPlaceRef) => {
      const place = resolvePlace(placeRef);
      if (!place) return null;
      const key = `${placeRef.scope}:${placeRef.id}`;
      if (!records.has(key)) {
        records.set(key, {
          placeRef,
          place,
          movementIds: new Set<string>(),
          routeIds: new Set<string>(),
          entityIds: new Set<string>(),
        });
      }
      return records.get(key)!;
    };

    filteredRoutes.forEach((route) => {
      [route.origin, route.destination].forEach((placeRef) => {
        const record = ensure(placeRef);
        if (!record) return;
        route.sourceMovementIds.forEach((movementId) => record.movementIds.add(movementId));
        record.routeIds.add(route.id);
      });
    });

    convergenceEntities.forEach((entity) => {
      const placeRef = entity.placeRef ??
        (entity.hubId ? ({ scope: 'global', id: entity.hubId } as DiffusionPlaceRef) : null);
      if (!placeRef) return;
      const record = ensure(placeRef);
      if (!record) return;
      entity.movementLinks.forEach((movementId) => record.movementIds.add(movementId));
      record.entityIds.add(entity.id);
    });

    return Array.from(records.entries())
      .map(([key, record]): CityCrossroad => ({
        key,
        placeRef: record.placeRef,
        place: record.place,
        movementIds: Array.from(record.movementIds),
        routeIds: Array.from(record.routeIds),
        entityIds: Array.from(record.entityIds),
      }))
      .filter(
        (crossroad) =>
          crossroad.movementIds.length >= 2 &&
          crossroad.routeIds.length + crossroad.entityIds.length >= 2,
      )
      .sort((a, b) => {
        const movementDelta = b.movementIds.length - a.movementIds.length;
        if (movementDelta !== 0) return movementDelta;
        const evidenceDelta =
          b.routeIds.length + b.entityIds.length - (a.routeIds.length + a.entityIds.length);
        if (evidenceDelta !== 0) return evidenceDelta;
        return a.place.name.localeCompare(b.place.name);
      });
  }, [filteredRoutes, convergenceEntities]);

  const selectedCrossroad = selectedCrossroadKey
    ? cityCrossroads.find((crossroad) => crossroad.key === selectedCrossroadKey)
    : undefined;
  const selectedCrossroadRoutes = selectedCrossroad
    ? selectedCrossroad.routeIds
        .map((id) => ALL_DIFFUSION_ROUTES.find((route) => route.id === id))
        .filter(Boolean) as DiffusionRoute[]
    : [];
  const selectedCrossroadEntities = selectedCrossroad
    ? selectedCrossroad.entityIds.map((id) => getGlobalEntityById(id)).filter(Boolean)
    : [];
  const selectedCrossroadMovements = selectedCrossroad
    ? selectedCrossroad.movementIds.map((id) => getMovementById(id)?.name ?? id)
    : [];

  useEffect(() => {
    if (!selectedCrossroadKey) return;
    if (cityCrossroads.some((crossroad) => crossroad.key === selectedCrossroadKey)) return;
    setSelectedCrossroadKey('');
  }, [cityCrossroads, selectedCrossroadKey]);

  const atlasRoutePlaces = useMemo(() => {
    const seen = new Map<string, ReturnType<typeof resolvePlace>>();

    filteredRoutes.forEach((route) => {
      [route.origin, route.destination].forEach((ref) => {
        if (ref.scope !== 'atlas' || seen.has(ref.id)) return;
        seen.set(ref.id, resolvePlace(ref));
      });
    });
    if (selectedNode?.placeRef?.scope === 'atlas' && !seen.has(selectedNode.placeRef.id)) {
      seen.set(selectedNode.placeRef.id, resolvePlace(selectedNode.placeRef));
    }
    if (selectedCrossroad?.placeRef.scope === 'atlas' && !seen.has(selectedCrossroad.placeRef.id)) {
      seen.set(selectedCrossroad.placeRef.id, resolvePlace(selectedCrossroad.placeRef));
    }

    return Array.from(seen.values()).filter(Boolean) as NonNullable<ReturnType<typeof resolvePlace>>[];
  }, [filteredRoutes, selectedNode, selectedCrossroad]);

  const visibleGlobalHubIds = useMemo(() => {
    const ids = new Set<string>();
    filteredRoutes.forEach((route) => {
      [route.origin, route.destination].forEach((ref) => {
        if (ref.scope === 'global') ids.add(ref.id);
      });
    });
    if (selectedNode?.placeRef?.scope === 'global') ids.add(selectedNode.placeRef.id);
    if (selectedNode?.hubId) ids.add(selectedNode.hubId);
    if (selectedCrossroad?.placeRef.scope === 'global') ids.add(selectedCrossroad.placeRef.id);
    return ids;
  }, [filteredRoutes, selectedNode, selectedCrossroad]);

  const selectedSemantic = selectedRoute
    ? semanticForRoute(selectedRoute)
    : ROUTE_SEMANTICS.circulation;

  const selectedOrigin = selectedRoute ? resolvePlace(selectedRoute.origin) : null;
  const selectedDestination = selectedRoute ? resolvePlace(selectedRoute.destination) : null;

  const selectedPeople = selectedRoute?.personRefs
    .map((ref) =>
      ref.scope === 'atlas' ? getPersonById(ref.id)?.name : getGlobalPersonById(ref.id)?.name,
    )
    .filter(Boolean) ?? [];

  const selectedEntities = selectedRoute?.destinationEntityIds
    .map((id) => getGlobalEntityById(id))
    .filter(Boolean) ?? [];

  const selectedTransmissionEntities = selectedRoute?.transmissionEntityIds
    ?.map((id) => getGlobalEntityById(id))
    .filter(Boolean) ?? [];

  const selectedHistoricalContexts = selectedRoute?.historicalContextIds
    ?.map((id) => getGlobalHistoricalEventById(id))
    .filter(Boolean) ?? [];

  const selectedSources = selectedRoute?.sourceIds
    .map((id) => getGlobalSourceById(id))
    .filter(Boolean) ?? [];

  const resetFilters = () => {
    setYearFilter(maxRouteYear);
    setSemanticFilter('all');
    setMediumFilter('all');
    setMovementFilter('all');
  };

  const hasActiveFilters =
    yearFilter !== maxRouteYear ||
    semanticFilter !== 'all' ||
    mediumFilter !== 'all' ||
    movementFilter !== 'all';

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--atlas-text)] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Global Diffusion // Transmission Network
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--atlas-text)] mt-1">
              The Avant-Garde in Transit
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--atlas-text-secondary)] max-w-lg leading-relaxed">
            A growing network traces how avant-garde ideas moved through travel, exile, print,
            institutions, commercial practice and local reinterpretation—not as a one-way map of European influence.
          </div>
        </div>


        <div className="sticky top-0 z-40 mb-8 border-y border-[var(--atlas-border)] bg-[var(--atlas-bg)]/95 backdrop-blur">
          <div className="px-3 py-2 md:px-4 flex flex-wrap items-end gap-3">
            <div className="min-w-[220px] flex-1">
              <label
                htmlFor="global-year-filter"
                className="flex items-center justify-between gap-3 font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]"
              >
                <span>Year</span>
                <span className="font-semibold text-[var(--atlas-text)]">{yearFilter}</span>
              </label>
              <div className="relative">
                <input
                  id="global-year-filter"
                  type="range"
                  min={minRouteYear}
                  max={maxRouteYear}
                  value={yearFilter}
                  onChange={(event) => setYearFilter(Number(event.target.value))}
                  className="w-full mt-2 accent-[#D82B2B]"
                />
                {fracture1933 && (
                  <div
                    className="absolute top-1 bottom-1 border-l border-[#D82B2B] pointer-events-none"
                    style={{ left: `${fracturePosition}%` }}
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>

            <div>
              <label htmlFor="global-mechanism-filter" className="block font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)] mb-1">
                Mechanism
              </label>
              <select
                id="global-mechanism-filter"
                value={semanticFilter}
                onChange={(event) => setSemanticFilter(event.target.value as RouteSemanticId | 'all')}
                className="border border-[var(--atlas-border-control)] bg-[var(--atlas-bg)] text-[var(--atlas-text)] px-2.5 py-2 text-[10px] font-mono"
              >
                <option value="all">All</option>
                {availableSemantics.map((semantic) => (
                  <option key={semantic.id} value={semantic.id}>{semantic.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="global-medium-filter" className="block font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)] mb-1">
                Medium
              </label>
              <select
                id="global-medium-filter"
                value={mediumFilter}
                onChange={(event) => setMediumFilter(event.target.value as DiffusionMedium | 'all')}
                className="border border-[var(--atlas-border-control)] bg-[var(--atlas-bg)] text-[var(--atlas-text)] px-2.5 py-2 text-[10px] font-mono"
              >
                <option value="all">All</option>
                {availableMedia.map((medium) => (
                  <option key={medium} value={medium}>{medium.replaceAll('-', ' ')}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="global-movement-filter" className="block font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)] mb-1">
                Movement
              </label>
              <select
                id="global-movement-filter"
                value={movementFilter}
                onChange={(event) => setMovementFilter(event.target.value)}
                className="border border-[var(--atlas-border-control)] bg-[var(--atlas-bg)] text-[var(--atlas-text)] px-2.5 py-2 text-[10px] font-mono"
              >
                <option value="all">All</option>
                {availableMovements.map((movement) => (
                  <option key={movement} value={movement}>{movement.replaceAll('-', ' ')}</option>
                ))}
              </select>
            </div>

            {fracture1933 && (
              <button
                type="button"
                onClick={() => setShowFractureInfo((value) => !value)}
                aria-expanded={showFractureInfo}
                className="px-2.5 py-2 border border-[#D82B2B] font-mono text-[9px] uppercase tracking-wider text-[#D82B2B]"
              >
                1933 fracture {showFractureInfo ? '−' : '+'}
              </button>
            )}

            <button
              type="button"
              onClick={resetFilters}
              disabled={!hasActiveFilters}
              className="px-2.5 py-2 border border-[var(--atlas-border-control)] font-mono text-[9px] uppercase tracking-wider disabled:opacity-35"
            >
              Reset
            </button>
          </div>

          {showFractureInfo && fracture1933 && (
            <div className="border-t border-[#D82B2B] px-4 py-3 bg-[var(--atlas-card)]">
              <div className="font-mono text-[8px] uppercase tracking-widest text-[#D82B2B]">
                {fracture1933.label} // {fracture1933.year}
              </div>
              <div className="mt-1 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-3 items-start">
                <p className="text-[11px] leading-relaxed text-[var(--atlas-text-secondary)] max-w-4xl">
                  {fracture1933.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {fractureSources.map((source) => (
                    <a
                      key={source?.id}
                      href={source?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[8px] underline underline-offset-2 text-[var(--atlas-text-muted)]"
                    >
                      {source?.publisher}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="border-t border-[var(--atlas-border)] flex items-center justify-between gap-3 px-3 md:px-4">
            <div className="flex">
              {(['map', 'routes', 'nodes', 'crossroads'] as GlobalViewMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setViewMode(mode)}
                  aria-pressed={viewMode === mode}
                  className={`px-4 py-2.5 border-r border-[var(--atlas-border)] font-mono text-[10px] uppercase tracking-widest ${
                    viewMode === mode
                      ? 'bg-[var(--atlas-text)] text-[var(--atlas-bg)]'
                      : 'text-[var(--atlas-text-secondary)]'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
            <div className="font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-quiet)]">
              {filteredRoutes.length}/{ALL_DIFFUSION_ROUTES.length} routes
            </div>
          </div>
        </div>

        {viewMode === 'routes' && (
          <div className="mb-8 border border-[var(--atlas-border)] bg-[var(--atlas-surface)]">
            <div className="px-4 py-3 border-b border-[var(--atlas-border)] font-mono text-[9px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Routes // chronological index
            </div>
            <div>
              {filteredRoutes.map((route, index) => {
                const origin = resolvePlace(route.origin);
                const destination = resolvePlace(route.destination);
                const semantic = semanticForRoute(route);
                return (
                  <button
                    key={route.id}
                    type="button"
                    onClick={() => selectRoute(route.id)}
                    className="w-full grid grid-cols-[52px_1fr_auto] md:grid-cols-[64px_1.5fr_1fr_auto] items-center gap-3 px-4 py-3 border-b last:border-b-0 border-[var(--atlas-border)] text-left hover:bg-[var(--atlas-card)]"
                  >
                    <span className="font-mono text-[10px] text-[var(--atlas-text-muted)]">
                      {route.startYear}
                    </span>
                    <span className="text-sm font-semibold text-[var(--atlas-text)]">
                      {origin?.name} → {destination?.name}
                    </span>
                    <span className="hidden md:block font-mono text-[9px] uppercase tracking-wide text-[var(--atlas-text-secondary)] truncate">
                      {route.title.split(':').slice(1).join(':').trim() || route.title}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                      {semantic.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {viewMode === 'nodes' && (
          <div className="mb-8 border border-[var(--atlas-border)] bg-[var(--atlas-surface)]">
            <div className="px-4 py-3 border-b border-[var(--atlas-border)] flex items-center justify-between gap-3">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                Nodes // exhibitions + institutions + applied design
              </span>
              <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-quiet)]">
                {visibleTransmissionNodes.length} visible
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[var(--atlas-border)]">
              {visibleTransmissionNodes.map((entity) => {
                const place = entity.placeRef
                  ? resolvePlace(entity.placeRef)
                  : entity.hubId
                  ? getGlobalHubById(entity.hubId)
                  : null;
                return (
                  <button
                    key={entity.id}
                    type="button"
                    onClick={() => selectNode(entity.id)}
                    className="bg-[var(--atlas-card)] p-4 text-left hover:bg-[var(--atlas-surface-alt)] transition-colors"
                  >
                    <div className="font-mono text-[8px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                      {entity.kind} // {entity.startYear}
                    </div>
                    <h3 className="mt-1 text-sm font-semibold text-[var(--atlas-text)]">{entity.name}</h3>
                    <div className="mt-1 font-mono text-[9px] uppercase tracking-wide text-[var(--atlas-text-quiet)]">
                      {place?.name ?? '—'}
                    </div>
                    <p className="mt-3 text-[11px] leading-relaxed text-[var(--atlas-text-secondary)]">
                      {entity.summary}
                    </p>
                    <div className="mt-3 font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                      View on map →
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {viewMode === 'crossroads' && (
          <div className="mb-8 border border-[var(--atlas-border)] bg-[var(--atlas-surface)]">
            <div className="px-4 py-3 border-b border-[var(--atlas-border)] flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="font-mono text-[9px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                  Crossroads // city convergence
                </div>
                <p className="mt-1 text-[11px] text-[var(--atlas-text-secondary)]">
                  Cities where the current filtered network documents at least two distinct movements through routes or local nodes.
                </p>
              </div>
              <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-quiet)]">
                {cityCrossroads.length} visible
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-[var(--atlas-border)]">
              {cityCrossroads.map((crossroad) => (
                <button
                  key={crossroad.key}
                  type="button"
                  onClick={() => selectCrossroad(crossroad.key)}
                  className="bg-[var(--atlas-card)] p-4 text-left hover:bg-[var(--atlas-surface-alt)] transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-mono text-[8px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                        {crossroad.place.country}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold text-[var(--atlas-text)]">
                        {crossroad.place.name}
                      </h3>
                    </div>
                    <span className="font-mono text-xl font-semibold text-[#D82B2B]">
                      {crossroad.movementIds.length}
                    </span>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {crossroad.movementIds.map((movementId) => (
                      <span
                        key={movementId}
                        className="px-2 py-1 border border-[var(--atlas-border-control)] font-mono text-[8px] uppercase tracking-wide"
                      >
                        {getMovementById(movementId)?.name ?? movementId}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                    {crossroad.routeIds.length} routes · {crossroad.entityIds.length} nodes
                  </div>
                  <div className="mt-2 font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                    View on map →
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className={`${viewMode === 'map' ? 'grid' : 'hidden'} grid-cols-1 lg:grid-cols-12 gap-8 items-start`}>
          <div className="lg:col-span-8 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--atlas-border)] flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                {minRouteYear}—{maxRouteYear} // Transmission Network
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-quiet)]">
                {filteredRoutes.length} route{filteredRoutes.length === 1 ? '' : 's'} · filtered view
              </span>
            </div>

            <div className="px-4 py-3 border-b border-[var(--atlas-border)] bg-[var(--atlas-card)]">
              <div className="font-mono text-[9px] uppercase tracking-widest text-[var(--atlas-text-muted)] mb-2">
                Transmission grammar
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-2">
                {SEMANTIC_LEGEND.map((semantic) => (
                  <div key={semantic.id} className="flex items-center gap-2 min-w-0">
                    <svg viewBox="0 0 46 10" className="w-11 h-3 shrink-0" aria-hidden="true">
                      <line
                        x1="1"
                        y1="5"
                        x2="43"
                        y2="5"
                        stroke="var(--atlas-text)"
                        strokeWidth="1.5"
                        strokeDasharray={semantic.dash}
                      />
                      {semantic.marker === 'diamond' && (
                        <rect
                          x="39"
                          y="2"
                          width="6"
                          height="6"
                          fill="var(--atlas-text)"
                          transform="rotate(45 42 5)"
                        />
                      )}
                      {semantic.marker === 'square' && (
                        <rect x="39" y="2" width="6" height="6" fill="var(--atlas-text)" />
                      )}
                      {semantic.marker === 'arrow' && (
                        <path d="M 39 1 L 45 5 L 39 9 Z" fill="var(--atlas-text)" />
                      )}
                    </svg>
                    <span className="font-mono text-[9px] uppercase tracking-wide text-[var(--atlas-text-secondary)] truncate">
                      {semantic.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <svg
              viewBox={`0 0 ${GLOBAL_MAP.width} ${GLOBAL_MAP.height}`}
              className="w-full h-auto min-h-[320px] bg-[var(--geo-water)]"
              role="img"
              aria-labelledby="global-map-title global-map-desc"
            >
              <title id="global-map-title">Global diffusion of the avant-garde</title>
              <desc id="global-map-desc">
                Interactive world map of documented avant-garde transmission routes between European and global cultural hubs from 1917 to 1939.
              </desc>

              <defs>
                <marker id="global-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                  <path d="M 0 0 L 8 4 L 0 8 Z" fill="context-stroke" />
                </marker>
                <marker id="global-diamond" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
                  <rect x="1.5" y="1.5" width="5" height="5" transform="rotate(45 4 4)" fill="context-stroke" />
                </marker>
                <marker id="global-square" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto" markerUnits="strokeWidth">
                  <rect x="1.5" y="1.5" width="5" height="5" fill="context-stroke" />
                </marker>
              </defs>

              <path
                d={GLOBAL_BASEMAP_PATH}
                fill="var(--geo-land)"
                stroke="var(--geo-coast)"
                strokeWidth="0.7"
              />

              {filteredRoutes.map((route) => {
                const active = !selectedNode && !selectedCrossroad && route.id === selectedRoute?.id;
                const semantic = semanticForRoute(route);
                const markerId =
                  semantic.marker === 'diamond'
                    ? 'global-diamond'
                    : semantic.marker === 'square'
                    ? 'global-square'
                    : 'global-arrow';

                return (
                  <g key={route.id}>
                    <path
                      d={routePath(route)}
                      fill="none"
                      stroke="transparent"
                      strokeWidth="16"
                      className="cursor-pointer"
                      role="button"
                      tabIndex={0}
                      aria-label={`${route.title}. ${semantic.label}.`}
                      onClick={() => selectRoute(route.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          selectRoute(route.id);
                        }
                      }}
                    />
                    <path
                      d={routePath(route)}
                      fill="none"
                      stroke={active ? '#D82B2B' : 'var(--geo-connection-active)'}
                      strokeWidth={active ? 3 : 1.6}
                      strokeDasharray={semantic.dash}
                      markerEnd={`url(#${markerId})`}
                      opacity={active ? 1 : 0.7}
                      pointerEvents="none"
                      className="transition-all duration-200"
                    />
                  </g>
                );
              })}

              {atlasRoutePlaces.map((place) => {
                const point = projectGlobalCoordinate(place.longitude, place.latitude);
                const crossroad = cityCrossroads.find(
                  (item) => item.placeRef.scope === 'atlas' && item.placeRef.id === place.id,
                );
                const activeCrossroad = selectedCrossroad?.key === crossroad?.key;
                const activeNode = selectedNodePlace?.id === place.id;
                return (
                  <g key={`atlas-${place.id}`} transform={`translate(${point.x}, ${point.y})`}>
                    {crossroad && (
                      <circle
                        r={10 + Math.min(6, crossroad.movementIds.length * 1.5)}
                        fill="none"
                        stroke={activeCrossroad ? '#D82B2B' : 'var(--geo-city-active)'}
                        strokeWidth={activeCrossroad ? 2 : 1}
                        strokeDasharray="2 2"
                        opacity={activeCrossroad ? 1 : 0.55}
                      />
                    )}
                    <circle
                      r={activeCrossroad || activeNode ? 6 : 4.5}
                      fill={activeCrossroad || activeNode ? '#D82B2B' : 'var(--geo-city-active)'}
                    />
                    <circle
                      r={activeCrossroad || activeNode ? 12 : 9}
                      fill="none"
                      stroke={activeCrossroad || activeNode ? '#D82B2B' : 'var(--geo-city-active)'}
                      strokeWidth="0.8"
                      opacity="0.45"
                    />
                    <text
                      x="10"
                      y="-8"
                      fill="var(--atlas-text)"
                      fontSize="10"
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      {place.name.toUpperCase()}
                    </text>
                  </g>
                );
              })}

              {ALL_GLOBAL_HUBS.filter((hub) => visibleGlobalHubIds.has(hub.id)).map((hub) => {
                const point = projectGlobalCoordinate(hub.longitude, hub.latitude);
                const crossroad = cityCrossroads.find(
                  (item) => item.placeRef.scope === 'global' && item.placeRef.id === hub.id,
                );
                const activeCrossroad = selectedCrossroad?.key === crossroad?.key;
                const active = activeCrossroad || (selectedNode
                  ? selectedNodePlace?.id === hub.id
                  : !selectedCrossroad &&
                    (selectedDestination?.id === hub.id || selectedOrigin?.id === hub.id));

                return (
                  <g
                    key={hub.id}
                    transform={`translate(${point.x}, ${point.y})`}
                    role={crossroad ? 'button' : undefined}
                    tabIndex={crossroad ? 0 : undefined}
                    className={crossroad ? 'cursor-pointer' : undefined}
                    aria-label={
                      crossroad
                        ? `${hub.name}: ${crossroad.movementIds.length} movement crossroad`
                        : undefined
                    }
                    onClick={() => crossroad && selectCrossroad(crossroad.key)}
                    onKeyDown={(event) => {
                      if (!crossroad || (event.key !== 'Enter' && event.key !== ' ')) return;
                      event.preventDefault();
                      selectCrossroad(crossroad.key);
                    }}
                  >
                    {crossroad && (
                      <circle
                        r={12 + Math.min(7, crossroad.movementIds.length * 1.5)}
                        fill="none"
                        stroke={activeCrossroad ? '#D82B2B' : 'var(--geo-city-active)'}
                        strokeWidth={activeCrossroad ? 2 : 1}
                        strokeDasharray="2 2"
                        opacity={activeCrossroad ? 1 : 0.55}
                      />
                    )}
                    <rect
                      x="-5"
                      y="-5"
                      width="10"
                      height="10"
                      fill={active ? '#D82B2B' : 'var(--geo-city-active)'}
                      transform="rotate(45)"
                    />
                    <text
                      x="12"
                      y="4"
                      fill="var(--atlas-text)"
                      fontSize="10"
                      fontWeight={active ? 700 : 500}
                      fontFamily="IBM Plex Mono, monospace"
                    >
                      {hub.name.toUpperCase()}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {selectedCrossroad ? (
            <aside className="lg:col-span-4 lg:sticky lg:top-28 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[#D82B2B] mb-2">
                Selected Crossroad // {selectedCrossroad.movementIds.length} movements
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[var(--atlas-text)]">
                {selectedCrossroad.place.name}
              </h3>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                {selectedCrossroad.place.country} · current filtered network
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[var(--atlas-text-body)]">
                This city is a convergence point in the current Atlas view: multiple documented movement networks meet here through routes, publications, exhibitions, institutions or applied-design nodes.
              </p>

              <div className="mt-5">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                  Movements in convergence
                </div>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {selectedCrossroadMovements.map((movement) => (
                    <span
                      key={movement}
                      className="px-2 py-1 border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] font-mono text-[9px] uppercase"
                    >
                      {movement}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)] mb-2">
                  Connected routes // {selectedCrossroadRoutes.length}
                </div>
                <div className="space-y-1.5">
                  {selectedCrossroadRoutes.map((route) => (
                    <button
                      key={route.id}
                      type="button"
                      onClick={() => selectRoute(route.id)}
                      className="block w-full text-left border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] px-2.5 py-2 hover:border-[var(--atlas-text)]"
                    >
                      <span className="block font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                        {route.startYear} // {semanticForRoute(route).label}
                      </span>
                      <span className="block mt-1 text-[11px] text-[var(--atlas-text)]">
                        {route.title}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {selectedCrossroadEntities.length > 0 && (
                <div className="mt-6">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)] mb-2">
                    Local nodes // {selectedCrossroadEntities.length}
                  </div>
                  <div className="space-y-1.5">
                    {selectedCrossroadEntities.map((entity) => (
                      <button
                        key={entity?.id}
                        type="button"
                        onClick={() => entity?.id && selectNode(entity.id)}
                        className="block w-full text-left border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] px-2.5 py-2 hover:border-[var(--atlas-text)]"
                      >
                        <span className="block font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                          {entity?.kind} // {entity?.startYear}
                        </span>
                        <span className="block mt-1 text-[11px] text-[var(--atlas-text)]">
                          {entity?.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[var(--atlas-border)] text-[10px] leading-relaxed text-[var(--atlas-text-muted)]">
                Crossroads are derived from the currently visible Atlas records. They indicate documented convergence in the dataset, not automatic proof of direct influence between every movement shown.
              </div>
            </aside>
          ) : selectedNode ? (
            <aside className="lg:col-span-4 lg:sticky lg:top-28 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-muted)] mb-2">
                Selected Node // {selectedNode.kind} // {selectedNode.startYear}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[var(--atlas-text)]">
                {selectedNode.name}
              </h3>

              <div className="mt-5 border border-[var(--atlas-border)] bg-[var(--atlas-card)] p-3">
                <div className="font-mono text-[9px] uppercase text-[var(--atlas-text-muted)]">Location</div>
                <div className="text-sm font-semibold mt-1">
                  {selectedNodePlace?.name ?? '—'}{selectedNodePlace?.country ? ` · ${selectedNodePlace.country}` : ''}
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[var(--atlas-text-body)]">
                {selectedNode.summary}
              </p>

              <dl className="mt-6 space-y-4 text-xs">
                <div>
                  <dt className="font-mono uppercase tracking-wider text-[var(--atlas-text-muted)]">Movements</dt>
                  <dd className="mt-1 text-[var(--atlas-text)]">
                    {selectedNodeMovements.join(' · ') || '—'}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-wider text-[var(--atlas-text-muted)]">Media</dt>
                  <dd className="mt-1 text-[var(--atlas-text-secondary)]">
                    {selectedNode.media.map((medium) => medium.replaceAll('-', ' ')).join(' · ')}
                  </dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-wider text-[var(--atlas-text-muted)]">Connected routes</dt>
                  <dd className="mt-2 space-y-1.5">
                    {selectedNodeRoutes.length > 0 ? (
                      selectedNodeRoutes.map((route) => (
                        <button
                          key={route.id}
                          type="button"
                          onClick={() => selectRoute(route.id)}
                          className="block w-full text-left border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] px-2.5 py-2 hover:border-[var(--atlas-text)]"
                        >
                          <span className="block font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                            {route.startYear} // {semanticForRoute(route).label}
                          </span>
                          <span className="block mt-1 text-[11px] text-[var(--atlas-text)]">{route.title}</span>
                        </button>
                      ))
                    ) : (
                      <span className="text-[var(--atlas-text-muted)]">No route currently linked to this node.</span>
                    )}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-[var(--atlas-border)]">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)] mb-2">
                  Sources
                </div>
                <div className="space-y-2">
                  {selectedNodeSources.map((source) => (
                    <a
                      key={source?.id}
                      href={source?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-xs underline underline-offset-2 text-[var(--atlas-text-secondary)] hover:text-[var(--atlas-text)]"
                    >
                      {source?.publisher} — {source?.title}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          ) : selectedRoute ? (
            <aside className="lg:col-span-4 lg:sticky lg:top-28 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-muted)] mb-2">
                Selected Transmission // {selectedRoute.startYear}
              </div>
              <h3 className="text-2xl font-semibold tracking-tight text-[var(--atlas-text)]">
                {selectedRoute.title}
              </h3>
              <div className="mt-2 inline-flex items-center gap-2 border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] px-2.5 py-1.5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                  Primary mode
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider font-semibold text-[var(--atlas-text)]">
                  {selectedSemantic.label}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-px bg-[var(--atlas-border)] border border-[var(--atlas-border)]">
                <div className="bg-[var(--atlas-card)] p-3">
                  <div className="font-mono text-[9px] uppercase text-[var(--atlas-text-muted)]">Origin</div>
                  <div className="text-sm font-semibold mt-1">{selectedOrigin?.name}</div>
                </div>
                <div className="bg-[var(--atlas-card)] p-3">
                  <div className="font-mono text-[9px] uppercase text-[var(--atlas-text-muted)]">Destination</div>
                  <div className="text-sm font-semibold mt-1">{selectedDestination?.name}</div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[var(--atlas-text-body)]">
                {selectedRoute.summary}
              </p>
              <p className="mt-2 text-[11px] leading-relaxed text-[var(--atlas-text-muted)]">
                {selectedSemantic.description}
              </p>

              <div className="mt-5 border-l-2 border-[#D82B2B] pl-4">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                  Transformation
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[var(--atlas-text-secondary)]">
                  {selectedRoute.transformationNote}
                </p>
              </div>

              {selectedHistoricalContexts.length > 0 && (
                <div className="mt-5 border border-[#D82B2B] p-3 bg-[var(--atlas-card)]">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[#D82B2B]">
                    Historical context
                  </div>
                  {selectedHistoricalContexts.map((event) => (
                    <div key={event?.id} className="mt-1">
                      <div className="text-xs font-semibold text-[var(--atlas-text)]">
                        {event?.title}
                      </div>
                      <p className="mt-1 text-[11px] leading-relaxed text-[var(--atlas-text-secondary)]">
                        {event?.summary}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <dl className="mt-6 space-y-4 text-xs">
                <div>
                  <dt className="font-mono uppercase tracking-wider text-[var(--atlas-text-muted)]">People</dt>
                  <dd className="mt-1 text-[var(--atlas-text)]">{selectedPeople.join(', ')}</dd>
                </div>
                <div>
                  <dt className="font-mono uppercase tracking-wider text-[var(--atlas-text-muted)]">Mechanisms</dt>
                  <dd className="mt-1 flex flex-wrap gap-1.5">
                    {selectedRoute.mechanisms.map((mechanism) => (
                      <span key={mechanism} className="px-2 py-1 border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] font-mono text-[10px] uppercase">
                        {mechanism.replaceAll('-', ' ')}
                      </span>
                    ))}
                  </dd>
                </div>
                {selectedTransmissionEntities.length > 0 && (
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-[var(--atlas-text-muted)]">Transmission carriers</dt>
                    <dd className="mt-1 flex flex-wrap gap-1.5">
                      {selectedTransmissionEntities.map((entity) => (
                        <span
                          key={entity?.id}
                          className="px-2 py-1 border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] font-mono text-[10px]"
                        >
                          {entity?.kind ? `${entity.kind} · ` : ''}{entity?.name}
                        </span>
                      ))}
                    </dd>
                  </div>
                )}
                {selectedEntities.length > 0 && (
                  <div>
                    <dt className="font-mono uppercase tracking-wider text-[var(--atlas-text-muted)]">Local expression</dt>
                    <dd className="mt-1 text-[var(--atlas-text)]">
                      {selectedEntities.map((entity) => entity?.name).join(', ')}
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="font-mono uppercase tracking-wider text-[var(--atlas-text-muted)]">Media</dt>
                  <dd className="mt-1 text-[var(--atlas-text-secondary)]">
                    {selectedRoute.media.map((medium) => medium.replaceAll('-', ' ')).join(' · ')}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 pt-4 border-t border-[var(--atlas-border)]">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)] mb-2">
                  Sources
                </div>
                <div className="space-y-2">
                  {selectedSources.map((source) => (
                    <a
                      key={source?.id}
                      href={source?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="block text-xs underline underline-offset-2 text-[var(--atlas-text-secondary)] hover:text-[var(--atlas-text)]"
                    >
                      {source?.publisher} — {source?.title}
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          ) : (
            <aside className="lg:col-span-4 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6 min-h-[260px] flex flex-col justify-center">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                No routes match
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--atlas-text)]">
                Adjust the filters
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--atlas-text-secondary)]">
                The current year, mechanism and medium combination excludes all documented transmissions.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 self-start font-mono text-[10px] uppercase tracking-wider underline underline-offset-4 text-[var(--atlas-text)]"
              >
                Show all routes
              </button>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
};
