import React, { useState } from 'react';
import { Movement, MovementId } from '../types/atlas';

interface TimelineSectionProps {
  movements: Movement[];
  selectedYear: number;
  onSelectYear: (year: number) => void;
  onSelectMovement: (id: MovementId) => void;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  movements,
  selectedYear,
  onSelectYear,
  onSelectMovement
}) => {
  const [hoveredMovementId, setHoveredMovementId] = useState<MovementId | null>(null);
  const [timelineHoverYear, setTimelineHoverYear] = useState<number | null>(null);

  const startTimelineYear = 1890;
  const endTimelineYear = 1940;
  const totalYears = endTimelineYear - startTimelineYear;

  // Generate decade marks
  const decadeMarks: number[] = [];
  for (let y = startTimelineYear; y <= endTimelineYear; y += 5) {
    decadeMarks.push(y);
  }

  const activeYearToCheck = timelineHoverYear || selectedYear;

  // Active movements during current year
  const activeMovementsInYear = movements.filter(
    (m) => activeYearToCheck >= m.startYear && activeYearToCheck <= m.endYear
  );

  const getPercentage = (year: number) => {
    return ((year - startTimelineYear) / totalYears) * 100;
  };

  return (
    <section id="timeline-section" className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--atlas-text)] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Chronological Synchronicity // 1890—1940
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--atlas-text)] mt-1">
              Simultaneous Durations
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--atlas-text-secondary)] max-w-md">
            Movements are visualized as duration ranges. Hover anywhere to scrub through years and see simultaneous revolutions across Europe.
          </div>
        </div>

        {/* Current Year Status Banner */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 py-3 px-4 bg-[var(--atlas-surface-alt)] border border-[var(--atlas-border)] text-xs">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[var(--atlas-text-muted)] uppercase tracking-wider">Historical Focus</span>
            <span className="font-mono text-xl font-bold text-[var(--atlas-text)]">
              {activeYearToCheck}
            </span>
          </div>
          <div className="flex items-center gap-2 flex-wrap text-[var(--atlas-text-secondary)]">
            <span className="font-mono text-[var(--atlas-text-muted)] uppercase text-[11px]">Co-Existing Movements ({activeMovementsInYear.length}):</span>
            {activeMovementsInYear.map((m) => (
              <button
                key={m.id}
                onClick={() => onSelectMovement(m.id)}
                className="cursor-pointer text-[var(--atlas-text)] font-medium hover:underline px-1.5 py-0.5 bg-[var(--atlas-card)] border border-[var(--atlas-border-control)]"
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Visualization Container */}
        <div className="relative overflow-x-auto pb-6 pt-2">
          <div className="min-w-[850px] relative select-none">
            {/* Top Year Ruler */}
            <div
              className="relative h-12 border-b-2 border-[var(--atlas-text)] flex items-end cursor-crosshair"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clientX = e.clientX - rect.left;
                const ratio = Math.max(0, Math.min(1, clientX / rect.width));
                const year = Math.round(startTimelineYear + ratio * totalYears);
                setTimelineHoverYear(year);
              }}
              onMouseLeave={() => setTimelineHoverYear(null)}
              onClick={() => {
                if (timelineHoverYear) onSelectYear(timelineHoverYear);
              }}
            >
              {decadeMarks.map((year) => {
                const leftPercent = getPercentage(year);
                const isMajor = year % 10 === 0;
                return (
                  <div
                    key={year}
                    className="absolute bottom-0 -translate-x-1/2 flex flex-col items-center pointer-events-none"
                    style={{ left: `${leftPercent}%` }}
                  >
                    <span
                      className={`font-mono text-[11px] mb-1.5 ${
                        isMajor ? 'text-[var(--atlas-text)] font-semibold' : 'text-[var(--atlas-text-quiet)]'
                      }`}
                    >
                      {year}
                    </span>
                    <div
                      className={`w-[1px] bg-[var(--atlas-ink-button)] ${isMajor ? 'h-3.5' : 'h-2'}`}
                    />
                  </div>
                );
              })}

              {/* Active Year Vertical Guide Line */}
              <div
                className="absolute top-0 bottom-0 w-[1.5px] bg-[#D82B2B] pointer-events-none z-20 transition-all duration-75"
                style={{ left: `${getPercentage(activeYearToCheck)}%` }}
              >
                <div className="absolute -top-6 -translate-x-1/2 bg-[#D82B2B] text-white text-[10px] font-mono px-1.5 py-0.5 whitespace-nowrap">
                  {activeYearToCheck}
                </div>
              </div>
            </div>

            {/* Movement Duration Horizontal Bars */}
            <div className="relative mt-4 space-y-2.5">
              {/* Vertical grid lines extending through the chart */}
              <div className="absolute inset-0 pointer-events-none">
                {decadeMarks.map((year) => {
                  const isMajor = year % 10 === 0;
                  return (
                    <div
                      key={`grid-${year}`}
                      className="absolute top-0 bottom-0 w-[1px]"
                      style={{
                        left: `${getPercentage(year)}%`,
                        backgroundColor: isMajor ? 'var(--atlas-grid-major)' : 'var(--atlas-grid-minor)'
                      }}
                    />
                  );
                })}
                {/* Active year vertical hairline through entire chart */}
                <div
                  className="absolute top-0 bottom-0 w-[1.5px] bg-[#D82B2B]/40 pointer-events-none"
                  style={{ left: `${getPercentage(activeYearToCheck)}%` }}
                />
              </div>

              {movements.map((movement) => {
                const startPct = getPercentage(movement.startYear);
                const endPct = getPercentage(movement.endYear);
                const widthPct = Math.max(3, endPct - startPct);
                const isActiveInCurrentYear =
                  activeYearToCheck >= movement.startYear && activeYearToCheck <= movement.endYear;
                const isHovered = hoveredMovementId === movement.id;

                return (
                  <div
                    key={movement.id}
                    role="button"
                    tabIndex={0}
                    aria-label={`Open ${movement.name}, ${movement.period}`}
                    className="relative h-10 flex items-center group cursor-pointer transition-opacity"
                    onMouseEnter={() => setHoveredMovementId(movement.id)}
                    onMouseLeave={() => setHoveredMovementId(null)}
                    onFocus={() => setHoveredMovementId(movement.id)}
                    onBlur={() => setHoveredMovementId(null)}
                    onClick={() => onSelectMovement(movement.id)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        onSelectMovement(movement.id);
                      }
                    }}
                  >
                    {/* Duration Range Bar */}
                    <div
                      className="absolute h-7 flex items-center px-3 transition-all duration-200 border"
                      style={{
                        left: `${startPct}%`,
                        width: `${widthPct}%`,
                        backgroundColor: isHovered
                          ? movement.styleTheme.accentColor
                          : isActiveInCurrentYear
                          ? 'var(--atlas-range-active)'
                          : 'var(--atlas-range-inactive)',
                        color: isHovered || isActiveInCurrentYear ? 'var(--atlas-range-active-text)' : 'var(--atlas-text)',
                        borderColor: isHovered ? 'var(--atlas-text)' : 'var(--atlas-border-strong)',
                        boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                      }}
                    >
                      <span className="font-semibold text-xs truncate select-none tracking-tight">
                        {movement.name}
                      </span>
                      <span className="hidden sm:inline font-mono text-[10px] opacity-75 ml-2 whitespace-nowrap">
                        {movement.startYear}—{movement.endYear}
                      </span>
                    </div>

                    {/* Popover on hover showing concise metadata */}
                    {isHovered && (
                      <div
                        className="absolute z-30 -top-16 bg-[var(--atlas-popover)] text-white p-2.5 shadow-xl pointer-events-none border border-[#333] text-xs font-mono whitespace-nowrap"
                        style={{
                          left: `${Math.min(75, Math.max(10, startPct))}%`
                        }}
                      >
                        <div className="font-bold uppercase tracking-wider text-[#FACC15]">
                          {movement.name} ({movement.period})
                        </div>
                        <div className="text-[11px] text-gray-300">
                          {movement.cities.join(', ')} · {movement.countries.join(', ')}
                        </div>
                        <div className="text-[10px] text-gray-400 mt-1 max-w-sm truncate">
                          {movement.summary}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Timeline Bottom Explanatory Caption */}
        <div className="mt-8 pt-4 border-t border-[var(--atlas-border)] flex flex-col sm:flex-row justify-between text-xs text-[var(--atlas-text-muted)] font-mono">
          <div>
            NOTE // Click any movement to open its complete architectural & typographic monograph.
          </div>
          <div>
            1890—1940 ARCHIVAL SYNTHESIS
          </div>
        </div>
      </div>
    </section>
  );
};
