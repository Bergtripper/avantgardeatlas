import React, { useMemo, useState } from 'react';
import { MovementId } from '../types/atlas';
import { ALL_PLACES } from '../data/places';
import {
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

export const GeographySection: React.FC<GeographySectionProps> = ({
  onSelectMovement,
  selectedYear,
  onSelectYear,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeCityId, setActiveCityId] = useState<string>('dessau');

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

  return (
    <section
      id="geography-section"
      className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[#E5E4DF] bg-[#FBFBFA]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#121212] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#737373]">
              Section 07 // Spatial Geopolitics
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#121212] mt-1">
              European Cultural Map
            </h2>
          </div>
          <div className="text-xs font-mono text-[#525252] max-w-md">
            Ideas traveled by rail, journals, and exile between European cultural poles. Drag
            the year slider to witness how the avant-garde gravitational center shifted across
            four decades.
          </div>
        </div>

        <div className="mb-8 p-6 bg-[#F5F4EE] border border-[#E5E4DF]">
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
              <div className="font-mono text-2xl font-bold text-[#121212]">{selectedYear}</div>
            </div>
            <div className="font-mono text-xs text-[#737373]">
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
            <div className="flex justify-between text-[11px] font-mono text-[#8C8C88] mt-2">
              <span>1900 // FIN-DE-SIÈCLE</span>
              <span>1914 // WAR & DADA</span>
              <span>1925 // DESSAU & VKhUTEMAS</span>
              <span>1933 // EXILE & CIAM</span>
              <span>1940 // DISPERSAL</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 border border-[#E5E4DF] bg-[#FAF9F5] p-4 relative overflow-hidden select-none">
            <svg
              viewBox={`0 0 ${EUROPE_MAP.width} ${EUROPE_MAP.height}`}
              className="w-full h-auto bg-[#FAF9F5]"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="geography-map-title geography-map-description"
            >
              <title id="geography-map-title">European avant-garde cultural hubs</title>
              <desc id="geography-map-description">
                Geographic projection of European cultural centers between 1900 and 1940.
                City positions are based on latitude and longitude.
              </desc>

              <rect
                x="0"
                y="0"
                width={EUROPE_MAP.width}
                height={EUROPE_MAP.height}
                fill="#FAF9F5"
              />

              <g stroke="#E5E4DF" strokeWidth="0.75" strokeDasharray="3 3">
                {LONGITUDE_TICKS.map((longitude) => {
                  const x = projectLongitude(longitude);
                  return (
                    <line
                      key={`lon-${longitude}`}
                      x1={x}
                      y1={EUROPE_MAP.paddingY}
                      x2={x}
                      y2={EUROPE_MAP.height - EUROPE_MAP.paddingY}
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
                    />
                  );
                })}
              </g>

              <g
                fill="#9A9992"
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
                      stroke={isActive ? '#B8B6AC' : '#E5E4DF'}
                      strokeWidth={isActive ? 1.25 : 0.75}
                      strokeDasharray="3 4"
                      opacity={isActive ? 0.9 : 0.55}
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
                const point = projectPlace(city);

                return (
                  <g
                    key={city.id}
                    transform={`translate(${point.x}, ${point.y})`}
                    className="cursor-pointer group outline-none"
                    onClick={() => selectCity(city.id)}
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
                        stroke={isSelected ? '#D82B2B' : '#121212'}
                        strokeWidth="1"
                        strokeDasharray={isSelected ? '2 2' : undefined}
                        opacity="0.6"
                      />
                    )}

                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 5 : 3.5}
                      fill={isSelected ? '#D82B2B' : isActive ? '#121212' : '#A8A79E'}
                    />

                    <text
                      x="8"
                      y="4"
                      fontFamily="IBM Plex Sans"
                      fontSize={isSelected ? '12' : '10'}
                      fontWeight={isSelected ? '700' : '600'}
                      fill={isSelected ? '#D82B2B' : isActive ? '#121212' : '#8C8C88'}
                      letterSpacing="0.02em"
                    >
                      {city.name}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="mt-3 flex flex-wrap justify-between gap-2 text-[10px] font-mono uppercase tracking-wide text-[#8C8C88]">
              <span>Projection // lon −5° to 42° · lat 43° to 58°</span>
              <span>Coordinates // geographic, not illustrative</span>
            </div>
          </div>

          <div className="lg:col-span-4 border border-[#E5E4DF] bg-[#FAF9F5] p-6 min-h-[460px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#E5E4DF] pb-3 text-xs font-mono">
                <span className="text-[#8C8C88] uppercase">Urban Epicenter</span>
                <span className="text-[#121212] font-semibold">{selectedCity.country}</span>
              </div>

              <div className="mt-4">
                <h3 className="text-3xl font-bold tracking-tight text-[#121212]">
                  {selectedCity.name}
                </h3>
                <div className="font-mono text-xs text-[#737373] mt-1">
                  Active Cultural Span: {selectedCity.activeEras.start}—{selectedCity.activeEras.end}
                </div>
                <div className="font-mono text-[10px] text-[#8C8C88] mt-1">
                  {selectedCity.latitude.toFixed(4)}°N / {selectedCity.longitude.toFixed(4)}°E
                </div>

                <p className="mt-4 text-xs text-[#444] leading-relaxed">
                  {selectedCity.historicalNotes}
                </p>

                <div className="mt-6 pt-4 border-t border-[#EAE9E4]">
                  <span className="font-mono text-[10px] text-[#8C8C88] uppercase block mb-1">
                    Key Historical Institutions & Ateliers
                  </span>
                  <ul className="text-xs text-[#333] space-y-1">
                    {selectedCity.keyInstitutions.map((institution) => (
                      <li key={institution} className="flex items-start gap-1.5">
                        <span className="text-[#D82B2B] font-mono">▪</span>
                        <span>{institution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE9E4]">
                  <span className="font-mono text-[10px] text-[#8C8C88] uppercase block mb-2">
                    Movements Connected to {selectedCity.name}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCity.activeMovements.map((movementId) => (
                      <button
                        type="button"
                        key={movementId}
                        onClick={() => onSelectMovement(movementId)}
                        className="font-mono text-xs px-2.5 py-1 bg-white hover:bg-[#121212] hover:text-white border border-[#DDDCD4] cursor-pointer transition-colors"
                      >
                        {movementId.toUpperCase()} →
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E5E4DF] text-[11px] font-mono text-[#8C8C88]">
              COORDINATES // EUROPEAN MODERNIST CONTINUUM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
