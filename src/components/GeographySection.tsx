import React, { useState } from 'react';
import { MovementId } from '../types/atlas';
import { ALL_PLACES } from '../data/places';

interface GeographySectionProps {
  onSelectMovement: (id: MovementId) => void;
  selectedYear: number;
  onSelectYear: (year: number) => void;
}

export const GeographySection: React.FC<GeographySectionProps> = ({
  onSelectMovement,
  selectedYear,
  onSelectYear
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [activeCityId, setActiveCityId] = useState<string>('dessau');

  // Filter active cities for selectedYear
  const activeCities = ALL_PLACES.filter(
    (c) => selectedYear >= c.activeEras.start && selectedYear <= c.activeEras.end
  );

  const selectedCity = ALL_PLACES.find((c) => c.id === activeCityId) || ALL_PLACES[0];

  // Playback timer
  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        onSelectYear(selectedYear >= 1940 ? 1900 : selectedYear + 1);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, selectedYear, onSelectYear]);

  return (
    <section id="geography-section" className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[#E5E4DF] bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Ideas traveled by rail, journals, and exile between European cultural poles. Drag the year slider to witness how the avant-garde gravitational center shifted across four decades.
          </div>
        </div>

        {/* Year Slider Controls */}
        <div className="mb-8 p-6 bg-[#F5F4EE] border border-[#E5E4DF]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="font-mono text-xs px-3 py-1.5 bg-[#121212] text-white hover:bg-[#333] cursor-pointer"
              >
                {isPlaying ? 'PAUSE ❚❚' : 'PLAY ANIMATION ▶'}
              </button>
              <div className="font-mono text-2xl font-bold text-[#121212]">
                {selectedYear}
              </div>
            </div>
            <div className="font-mono text-xs text-[#737373]">
              ACTIVE HUBS IN {selectedYear}: {activeCities.map((c) => c.name).join(', ')}
            </div>
          </div>

          <div className="relative">
            <input
              type="range"
              min={1900}
              max={1940}
              value={selectedYear}
              onChange={(e) => onSelectYear(Number(e.target.value))}
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

        {/* Minimal Abstract Map Canvas + City Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Minimal Map */}
          <div className="lg:col-span-8 border border-[#E5E4DF] bg-[#FAF9F5] p-4 relative overflow-hidden select-none">
            <svg
              viewBox="0 0 800 520"
              className="w-full h-auto aspect-800/520 bg-[#FAF9F5]"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Minimal European Geographic Contours (Abstract Modernist Vector coastlines) */}
              <path
                d="M 120 180 Q 200 160 260 210 Q 300 180 340 160 Q 400 120 460 140 Q 560 100 680 120 Q 760 140 760 280 Q 650 360 520 420 Q 420 460 380 480 Q 360 440 320 460 Q 250 440 180 380 Z"
                fill="#F3F2EB"
                stroke="#E2E1DA"
                strokeWidth="1.5"
              />

              {/* Geographic Longitude/Latitude Minimal Lines */}
              <line x1="80" y1="260" x2="720" y2="260" stroke="#E5E4DF" strokeWidth="0.75" strokeDasharray="3 3" />
              <line x1="400" y1="40" x2="400" y2="480" stroke="#E5E4DF" strokeWidth="0.75" strokeDasharray="3 3" />

              {/* Inactive connection trajectories */}
              <g stroke="#E5E4DF" strokeWidth="0.75" strokeDasharray="2 3">
                <line x1="256" y1="249" x2="432" y2="187" /> {/* Paris - Berlin */}
                <line x1="432" y1="187" x2="704" y2="135" /> {/* Berlin - Moscow */}
                <line x1="256" y1="249" x2="368" y2="348" /> {/* Paris - Zurich */}
                <line x1="368" y1="348" x2="480" y2="296" /> {/* Zurich - Vienna */}
                <line x1="432" y1="187" x2="376" y2="348" /> {/* Berlin - Milan */}
              </g>

              {/* City Nodes */}
              {ALL_PLACES.map((city) => {
                const isActive = selectedYear >= city.activeEras.start && selectedYear <= city.activeEras.end;
                const isSelected = activeCityId === city.id;
                const cx = (city.xPercent / 100) * 800;
                const cy = (city.yPercent / 100) * 520;

                return (
                  <g
                    key={city.id}
                    transform={`translate(${cx}, ${cy})`}
                    className="cursor-pointer group"
                    onClick={() => setActiveCityId(city.id)}
                    opacity={isActive ? 1 : 0.25}
                  >
                    {/* Concentric pulse ring when active and selected */}
                    {isActive && (
                      <circle
                        cx="0"
                        cy="0"
                        r={isSelected ? 14 : 9}
                        fill="none"
                        stroke={isSelected ? '#D82B2B' : '#121212'}
                        strokeWidth="1"
                        strokeDasharray={isSelected ? '2 2' : 'none'}
                        opacity="0.6"
                      />
                    )}

                    {/* Center point */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 5 : 3.5}
                      fill={isSelected ? '#D82B2B' : isActive ? '#121212' : '#A8A79E'}
                    />

                    {/* City Label */}
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
          </div>

          {/* Right: Cultural City Monograph Drawer */}
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

                <p className="mt-4 text-xs text-[#444] leading-relaxed">
                  {selectedCity.historicalNotes}
                </p>

                {/* Institutions */}
                <div className="mt-6 pt-4 border-t border-[#EAE9E4]">
                  <span className="font-mono text-[10px] text-[#8C8C88] uppercase block mb-1">
                    Key Historical Institutions & Ateliers
                  </span>
                  <ul className="text-xs text-[#333] space-y-1">
                    {selectedCity.keyInstitutions.map((inst, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-[#D82B2B] font-mono">▪</span>
                        <span>{inst}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Movements born or active here */}
                <div className="mt-6 pt-4 border-t border-[#EAE9E4]">
                  <span className="font-mono text-[10px] text-[#8C8C88] uppercase block mb-2">
                    Movements Connected to {selectedCity.name}:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCity.activeMovements.map((mId) => (
                      <button
                        key={mId}
                        onClick={() => onSelectMovement(mId)}
                        className="font-mono text-xs px-2.5 py-1 bg-white hover:bg-[#121212] hover:text-white border border-[#DDDCD4] cursor-pointer transition-colors"
                      >
                        {mId.toUpperCase()} →
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
