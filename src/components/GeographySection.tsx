import React, { useMemo, useRef, useState } from 'react';
import { MovementId } from '../types/atlas';
import { ALL_PLACES } from '../data/places';
import {
  EUROPE_BASEMAP_PATH,
  EUROPE_MAP,
  GEOGRAPHY_CONNECTIONS,
  LATITUDE_TICKS,
  LONGITUDE_TICKS,
  projectLatitude,
  projectLongitude,
  projectPlace,
} from '../data/geography';

interface GeographySectionProps {
  onSelectMovement: (id: MovementId) => void;
  selectedYear: number;
  onSelectYear: (year: number) => void;
}

interface MapViewBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

const INITIAL_VIEWBOX: MapViewBox = {
  x: 0,
  y: 0,
  width: EUROPE_MAP.width,
  height: EUROPE_MAP.height,
};

const MIN_VIEWBOX_WIDTH = 220;
const MAX_VIEWBOX_WIDTH = EUROPE_MAP.width;

export const GeographySection: React.FC<GeographySectionProps> = ({
  onSelectMovement,
  selectedYear,
  onSelectYear,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeCityId, setActiveCityId] = useState<string>('dessau');
  const [hoveredCityId, setHoveredCityId] = useState<string | null>(null);
  const [viewBox, setViewBox] = useState<MapViewBox>(INITIAL_VIEWBOX);
  const [isPanning, setIsPanning] = useState(false);

  const svgRef = useRef<SVGSVGElement | null>(null);
  const panStartRef = useRef<{
    clientX: number;
    clientY: number;
    viewBox: MapViewBox;
  } | null>(null);

  const activeCities = ALL_PLACES.filter(
    (city) => selectedYear >= city.activeEras.start && selectedYear <= city.activeEras.end,
  );

  const selectedCity = ALL_PLACES.find((city) => city.id === activeCityId) || ALL_PLACES[0];

  const placesById = useMemo(
    () => Object.fromEntries(ALL_PLACES.map((place) => [place.id, place])),
    [],
  );

  React.useEffect(() => {
    let interval: ReturnType<typeof setInterval> | undefined;

    if (isPlaying) {
      interval = setInterval(() => {
        onSelectYear(selectedYear >= 1940 ? 1900 : selectedYear + 1);
      }, 500);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, selectedYear, onSelectYear]);

  const selectCity = (cityId: string) => {
    setActiveCityId(cityId);
  };

  const clampViewBox = (next: MapViewBox): MapViewBox => {
    const width = Math.min(MAX_VIEWBOX_WIDTH, Math.max(MIN_VIEWBOX_WIDTH, next.width));
    const height = width * (EUROPE_MAP.height / EUROPE_MAP.width);
    const x = Math.min(EUROPE_MAP.width - width, Math.max(0, next.x));
    const y = Math.min(EUROPE_MAP.height - height, Math.max(0, next.y));

    return { x, y, width, height };
  };

  const zoomAround = (scale: number, anchorX: number, anchorY: number) => {
    setViewBox((current) => {
      const nextWidth = current.width * scale;
      const widthRatio = nextWidth / current.width;
      const nextHeight = current.height * widthRatio;

      return clampViewBox({
        x: anchorX - (anchorX - current.x) * widthRatio,
        y: anchorY - (anchorY - current.y) * widthRatio,
        width: nextWidth,
        height: nextHeight,
      });
    });
  };

  const zoomFromCenter = (scale: number) => {
    const centerX = viewBox.x + viewBox.width / 2;
    const centerY = viewBox.y + viewBox.height / 2;
    zoomAround(scale, centerX, centerY);
  };

  const handleWheel = (event: React.WheelEvent<SVGSVGElement>) => {
    event.preventDefault();

    const svg = svgRef.current;
    if (!svg) return;

    const rect = svg.getBoundingClientRect();
    const anchorX = viewBox.x + ((event.clientX - rect.left) / rect.width) * viewBox.width;
    const anchorY = viewBox.y + ((event.clientY - rect.top) / rect.height) * viewBox.height;
    const scale = event.deltaY < 0 ? 0.86 : 1.16;

    zoomAround(scale, anchorX, anchorY);
  };

  const handlePointerDown = (event: React.PointerEvent<SVGSVGElement>) => {
    if ((event.target as Element).closest('[data-city-node="true"]')) return;

    event.currentTarget.setPointerCapture(event.pointerId);
    panStartRef.current = {
      clientX: event.clientX,
      clientY: event.clientY,
      viewBox,
    };
    setIsPanning(true);
  };

  const handlePointerMove = (event: React.PointerEvent<SVGSVGElement>) => {
    const start = panStartRef.current;
    const svg = svgRef.current;
    if (!start || !svg) return;

    const rect = svg.getBoundingClientRect();
    const dx = ((event.clientX - start.clientX) / rect.width) * start.viewBox.width;
    const dy = ((event.clientY - start.clientY) / rect.height) * start.viewBox.height;

    setViewBox(
      clampViewBox({
        ...start.viewBox,
        x: start.viewBox.x - dx,
        y: start.viewBox.y - dy,
      }),
    );
  };

  const stopPanning = (event: React.PointerEvent<SVGSVGElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    panStartRef.current = null;
    setIsPanning(false);
  };

  const resetView = () => {
    setViewBox(INITIAL_VIEWBOX);
  };

  const zoomLevel = Math.round((EUROPE_MAP.width / viewBox.width) * 100);

  return (
    <section
      id="geography-section"
      className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--atlas-text)] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Section 07 // Spatial Geopolitics
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--atlas-text)] mt-1">
              European Cultural Map
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--atlas-text-secondary)] max-w-md">
            Ideas traveled by rail, journals, and exile between European cultural poles. Drag
            the year slider to witness how the avant-garde gravitational center shifted across
            four decades.
          </div>
        </div>

        <div className="mb-8 p-6 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="font-mono text-xs px-3 py-1.5 bg-[#121212] text-white hover:bg-[#333] cursor-pointer"
                aria-pressed={isPlaying}
              >
                {isPlaying ? 'PAUSE ❚❚' : 'PLAY ANIMATION ▶'}
              </button>
              <div className="font-mono text-2xl font-bold text-[var(--atlas-text)]">{selectedYear}</div>
            </div>
            <div className="font-mono text-xs text-[var(--atlas-text-muted)]">
              ACTIVE HUBS IN {selectedYear}: {activeCities.map((city) => city.name).join(', ')}
            </div>
          </div>

          <div className="relative">
            <label htmlFor="geography-year" className="sr-only">
              Cultural map year
            </label>
            <input
              id="geography-year"
              type="range"
              min={1900}
              max={1940}
              value={selectedYear}
              onChange={(event) => onSelectYear(Number(event.target.value))}
              className="w-full h-2 bg-[#DDDCD4] appearance-none cursor-pointer accent-[#D82B2B]"
            />
            <div className="flex justify-between text-[11px] font-mono text-[var(--atlas-text-quiet)] mt-2">
              <span>1900 // FIN-DE-SIÈCLE</span>
              <span>1914 // WAR & DADA</span>
              <span>1925 // DESSAU & VKhUTEMAS</span>
              <span>1933 // EXILE & CIAM</span>
              <span>1940 // DISPERSAL</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-4 relative overflow-hidden select-none">
            <div className="absolute top-6 right-6 z-10 flex items-center border border-[var(--geo-control-border)] bg-[var(--atlas-bg)]/95 shadow-sm">
              <button
                type="button"
                onClick={() => zoomFromCenter(0.8)}
                className="w-9 h-9 border-r border-[var(--geo-control-border)] font-mono text-lg hover:bg-[var(--atlas-text)] hover:text-white"
                aria-label="Zoom in"
              >
                +
              </button>
              <button
                type="button"
                onClick={() => zoomFromCenter(1.25)}
                className="w-9 h-9 border-r border-[var(--geo-control-border)] font-mono text-lg hover:bg-[var(--atlas-text)] hover:text-white"
                aria-label="Zoom out"
              >
                −
              </button>
              <button
                type="button"
                onClick={resetView}
                className="h-9 px-3 font-mono text-[10px] uppercase hover:bg-[var(--atlas-text)] hover:text-white"
                aria-label="Reset map view"
              >
                Reset
              </button>
            </div>

            <div className="absolute top-16 right-6 z-10 bg-[var(--atlas-bg)]/90 px-2 py-1 font-mono text-[9px] text-[var(--atlas-text-muted)]">
              ZOOM {zoomLevel}%
            </div>

            <svg
              ref={svgRef}
              viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
              className={`w-full h-auto bg-[var(--atlas-surface)] touch-none ${
                isPanning ? 'cursor-grabbing' : 'cursor-grab'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="geography-map-title geography-map-description"
              onWheel={handleWheel}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={stopPanning}
              onPointerCancel={stopPanning}
            >
              <title id="geography-map-title">European avant-garde cultural hubs</title>
              <desc id="geography-map-description">
                Geographic projection of European cultural centers between 1900 and 1940.
                Scroll to zoom and drag to pan. City positions are based on latitude and longitude.
              </desc>

              <rect
                x="0"
                y="0"
                width={EUROPE_MAP.width}
                height={EUROPE_MAP.height}
                fill="var(--geo-water)"
              />

              <g aria-label="European geographic basemap">
                <path
                  d={EUROPE_BASEMAP_PATH}
                  fill="var(--geo-land)"
                  stroke="var(--geo-coast)"
                  strokeWidth="1.1"
                  vectorEffect="non-scaling-stroke"
                />
              </g>

              <g stroke="var(--geo-grid)" strokeWidth="0.75" strokeDasharray="3 3">
                {LONGITUDE_TICKS.map((longitude) => {
                  const x = projectLongitude(longitude);
                  return (
                    <line
                      key={`lon-${longitude}`}
                      x1={x}
                      y1={EUROPE_MAP.paddingY}
                      x2={x}
                      y2={EUROPE_MAP.height - EUROPE_MAP.paddingY}
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })}
                {LATITUDE_TICKS.map((latitude) => {
                  const y = projectLatitude(latitude);
                  return (
                    <line
                      key={`lat-${latitude}`}
                      x1={EUROPE_MAP.paddingX}
                      y1={y}
                      x2={EUROPE_MAP.width - EUROPE_MAP.paddingX}
                      y2={y}
                      vectorEffect="non-scaling-stroke"
                    />
                  );
                })}
              </g>

              <g
                fill="var(--geo-label)"
                fontFamily="IBM Plex Mono"
                fontSize="9"
                aria-hidden="true"
              >
                {LONGITUDE_TICKS.map((longitude) => (
                  <text
                    key={`lon-label-${longitude}`}
                    x={projectLongitude(longitude)}
                    y={EUROPE_MAP.height - 14}
                    textAnchor="middle"
                  >
                    {longitude}°E
                  </text>
                ))}
                {LATITUDE_TICKS.map((latitude) => (
                  <text
                    key={`lat-label-${latitude}`}
                    x="10"
                    y={projectLatitude(latitude) + 3}
                  >
                    {latitude}°N
                  </text>
                ))}
              </g>

              <g aria-label="Cultural exchange routes">
                {GEOGRAPHY_CONNECTIONS.map((connection) => {
                  const source = placesById[connection.source];
                  const target = placesById[connection.target];
                  if (!source || !target) return null;

                  const sourcePoint = projectPlace(source);
                  const targetPoint = projectPlace(target);
                  const isActive =
                    selectedYear >= source.activeEras.start &&
                    selectedYear <= source.activeEras.end &&
                    selectedYear >= target.activeEras.start &&
                    selectedYear <= target.activeEras.end;

                  return (
                    <line
                      key={`${connection.source}-${connection.target}`}
                      x1={sourcePoint.x}
                      y1={sourcePoint.y}
                      x2={targetPoint.x}
                      y2={targetPoint.y}
                      stroke={isActive ? 'var(--geo-connection-active)' : 'var(--geo-connection-muted)'}
                      strokeWidth={isActive ? 1.25 : 0.75}
                      strokeDasharray="3 4"
                      opacity={isActive ? 0.9 : 0.5}
                      vectorEffect="non-scaling-stroke"
                    >
                      <title>{connection.label}</title>
                    </line>
                  );
                })}
              </g>

              {ALL_PLACES.map((city) => {
                const isActive =
                  selectedYear >= city.activeEras.start && selectedYear <= city.activeEras.end;
                const isSelected = activeCityId === city.id;
                const isHovered = hoveredCityId === city.id;
                const point = projectPlace(city);

                return (
                  <g
                    key={city.id}
                    data-city-node="true"
                    transform={`translate(${point.x}, ${point.y})`}
                    className="cursor-pointer group outline-none"
                    onClick={() => selectCity(city.id)}
                    onPointerEnter={() => {
                      if (isActive) setHoveredCityId(city.id);
                    }}
                    onPointerLeave={() => setHoveredCityId(null)}
                    onFocus={() => {
                      if (isActive) setHoveredCityId(city.id);
                    }}
                    onBlur={() => setHoveredCityId(null)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        selectCity(city.id);
                      }
                    }}
                    opacity={isActive ? 1 : 0.28}
                    role="button"
                    tabIndex={0}
                    aria-label={`${city.name}, ${city.country}. Active ${city.activeEras.start} to ${city.activeEras.end}`}
                    aria-pressed={isSelected}
                  >
                    {isActive && (
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? 14 : 9}
                        fill="none"
                        stroke={isSelected ? '#D82B2B' : 'var(--geo-city-active)'}
                        strokeWidth="1"
                        strokeDasharray={isSelected ? '2 2' : undefined}
                        opacity="0.6"
                        vectorEffect="non-scaling-stroke"
                      />
                    )}

                    {isActive && isHovered && (
                      <circle
                        cx="0"
                        cy="0"
                        r="7"
                        fill="none"
                        stroke="#D82B2B"
                        strokeWidth="1.5"
                        opacity="0.75"
                        vectorEffect="non-scaling-stroke"
                        pointerEvents="none"
                      >
                        <animate
                          attributeName="r"
                          values="7;18;7"
                          dur="0.9s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values="0.8;0.05;0.8"
                          dur="0.9s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}

                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected || isHovered ? 5 : 3.5}
                      fill={isSelected || isHovered ? '#D82B2B' : isActive ? 'var(--geo-city-active)' : 'var(--geo-city-muted)'}
                    />

                    <text
                      x="8"
                      y="4"
                      fontFamily="IBM Plex Sans"
                      fontSize={isSelected || isHovered ? '12' : '10'}
                      fontWeight={isSelected || isHovered ? '700' : '600'}
                      fill={isSelected || isHovered ? '#D82B2B' : isActive ? 'var(--geo-city-active)' : 'var(--atlas-text-quiet)'}
                      letterSpacing="0.02em"
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="mt-3 flex flex-wrap justify-between gap-2 text-[10px] font-mono uppercase tracking-wide text-[var(--atlas-text-quiet)]">
              <span>Scroll // Zoom · Drag // Pan · Hover // Pulse</span>
              <span>Coordinates // geographic, not illustrative</span>
            </div>
          </div>

          <div className="lg:col-span-4 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6 min-h-[460px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--atlas-border)] pb-3 text-xs font-mono">
                <span className="text-[var(--atlas-text-quiet)] uppercase">Urban Epicenter</span>
                <span className="text-[var(--atlas-text)] font-semibold">{selectedCity.country}</span>
              </div>

              <div className="mt-4">
                <h3 className="text-3xl font-bold tracking-tight text-[var(--atlas-text)]">
                  {selectedCity.name}
                </h3>
                <div className="font-mono text-xs text-[var(--atlas-text-muted)] mt-1">
                  Active Cultural Span: {selectedCity.activeEras.start}—{selectedCity.activeEras.end}
                </div>
                <div className="font-mono text-[10px] text-[var(--atlas-text-quiet)] mt-1">
                  {selectedCity.latitude.toFixed(4)}°N / {selectedCity.longitude.toFixed(4)}°E
                </div>

                <p className="mt-4 text-xs text-[var(--atlas-text-body)] leading-relaxed">
                  {selectedCity.historicalNotes}
                </p>

                <div className="mt-6 pt-4 border-t border-[var(--atlas-border-soft)]">
                  <span className="font-mono text-[10px] text-[var(--atlas-text-quiet)] uppercase block mb-1">
                    Key Historical Institutions & Ateliers
                  </span>
                  <ul className="text-xs text-[var(--atlas-text-body)] space-y-1">
                    {selectedCity.keyInstitutions.map((institution) => (
                      <li key={institution} className="flex items-start gap-1.5">
                        <span className="text-[#D82B2B] font-mono">▪</span>
                        <span>{institution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[var(--atlas-border-soft)]">
                  <span className="font-mono text-[10px] text-[var(--atlas-text-quiet)] uppercase block mb-2">
                    Movements Connected to {selectedCity.name}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCity.activeMovements.map((movementId) => (
                      <button
                        type="button"
                        key={movementId}
                        onClick={() => onSelectMovement(movementId)}
                        className="font-mono text-xs px-2.5 py-1 bg-[var(--atlas-card)] hover:bg-[var(--atlas-text)] hover:text-white border border-[var(--atlas-border-control)] cursor-pointer transition-colors"
                      >
                        {movementId.toUpperCase()} →
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--atlas-border)] text-[11px] font-mono text-[var(--atlas-text-quiet)]">
              COORDINATES // EUROPEAN MODERNIST CONTINUUM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
