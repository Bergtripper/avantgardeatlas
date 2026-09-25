import React, { useMemo, useState } from 'react';
import { getPersonById } from '../data/people';
import { getPlaceById } from '../data/places';
import {
  ALL_DIFFUSION_ROUTES,
  ALL_GLOBAL_HUBS,
  DiffusionMechanism,
  DiffusionPlaceRef,
  DiffusionRoute,
  getGlobalEntityById,
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
  const [selectedRouteId, setSelectedRouteId] = useState(ALL_DIFFUSION_ROUTES[0]?.id ?? '');
  const selectedRoute =
    ALL_DIFFUSION_ROUTES.find((route) => route.id === selectedRouteId) ?? ALL_DIFFUSION_ROUTES[0];

  const atlasRoutePlaces = useMemo(() => {
    const seen = new Map<string, ReturnType<typeof resolvePlace>>();

    ALL_DIFFUSION_ROUTES.forEach((route) => {
      [route.origin, route.destination].forEach((ref) => {
        if (ref.scope !== 'atlas' || seen.has(ref.id)) return;
        seen.set(ref.id, resolvePlace(ref));
      });
    });

    return Array.from(seen.values()).filter(Boolean) as NonNullable<ReturnType<typeof resolvePlace>>[];
  }, []);

  const selectedSemantic = selectedRoute
    ? semanticForMechanisms(selectedRoute.mechanisms)
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

  const selectedSources = selectedRoute?.sourceIds
    .map((id) => getGlobalSourceById(id))
    .filter(Boolean) ?? [];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--atlas-text)] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Global Diffusion // Prototype 01
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--atlas-text)] mt-1">
              The Avant-Garde in Transit
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--atlas-text-secondary)] max-w-lg leading-relaxed">
            Three pilot routes test a global model based on travel, exile, institutional transfer
            and local reinterpretation—not a one-way map of European influence.
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] overflow-hidden">
            <div className="px-4 py-3 border-b border-[var(--atlas-border)] flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                1923—1937 // Pilot Network
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--atlas-text-quiet)]">
                3 routes · 6 geographic nodes
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
                Pilot map showing routes from Berlin to Tokyo, Dessau to Chicago and Paris to Montevideo.
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

              {ALL_DIFFUSION_ROUTES.map((route) => {
                const active = route.id === selectedRoute?.id;
                const semantic = semanticForMechanisms(route.mechanisms);
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
                      onClick={() => setSelectedRouteId(route.id)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          setSelectedRouteId(route.id);
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
                return (
                  <g key={`atlas-${place.id}`} transform={`translate(${point.x}, ${point.y})`}>
                    <circle r="4.5" fill="var(--geo-city-active)" />
                    <circle r="9" fill="none" stroke="var(--geo-city-active)" strokeWidth="0.8" opacity="0.35" />
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

              {ALL_GLOBAL_HUBS.map((hub) => {
                const point = projectGlobalCoordinate(hub.longitude, hub.latitude);
                const active =
                  selectedDestination?.id === hub.id || selectedOrigin?.id === hub.id;

                return (
                  <g key={hub.id} transform={`translate(${point.x}, ${point.y})`}>
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

            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-[var(--atlas-border)]">
              {ALL_DIFFUSION_ROUTES.map((route, index) => {
                const active = route.id === selectedRoute?.id;
                return (
                  <button
                    key={route.id}
                    type="button"
                    onClick={() => setSelectedRouteId(route.id)}
                    aria-pressed={active}
                    className={`text-left p-4 border-b sm:border-b-0 sm:border-r last:border-r-0 border-[var(--atlas-border)] transition-colors ${
                      active
                        ? 'bg-[var(--atlas-text)] text-[var(--atlas-bg)]'
                        : 'bg-[var(--atlas-surface)] text-[var(--atlas-text)] hover:bg-[var(--atlas-surface-alt)]'
                    }`}
                  >
                    <span className="block font-mono text-[9px] uppercase tracking-wider opacity-60 mb-1">
                      ROUTE 0{index + 1} // {route.startYear}
                    </span>
                    <span className="block text-sm font-semibold leading-tight">
                      {route.title.split(':')[0]}
                    </span>
                    <span className="block mt-1 font-mono text-[9px] uppercase tracking-wide opacity-65">
                      {semanticForMechanisms(route.mechanisms).label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {selectedRoute && (
            <aside className="lg:col-span-4 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6">
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
                <div>
                  <dt className="font-mono uppercase tracking-wider text-[var(--atlas-text-muted)]">Local expression</dt>
                  <dd className="mt-1 text-[var(--atlas-text)]">
                    {selectedEntities.map((entity) => entity?.name).join(', ')}
                  </dd>
                </div>
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
          )}
        </div>
      </div>
    </section>
  );
};
