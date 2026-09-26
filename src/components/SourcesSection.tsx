import React, { useMemo, useState } from 'react';
import { ALL_SOURCES, SourceRecordType } from '../data/sources';

type SourceTypeFilter = SourceRecordType | 'all';

const SOURCE_TYPE_LABELS: Record<SourceRecordType, string> = {
  museum: 'Museum',
  archive: 'Archive',
  university: 'University',
  institution: 'Institution',
};

const usageLabel = (kind: string) => {
  switch (kind) {
    case 'route':
      return 'Route';
    case 'entity':
      return 'Node';
    case 'person':
      return 'Person';
    case 'hub':
      return 'Place';
    case 'event':
      return 'Event';
    default:
      return kind;
  }
};

export const SourcesSection: React.FC = () => {
  const [typeFilter, setTypeFilter] = useState<SourceTypeFilter>('all');
  const [query, setQuery] = useState('');
  const [expandedSourceId, setExpandedSourceId] = useState<string | null>(null);

  const sourceTypes = useMemo(
    () => Array.from(new Set(ALL_SOURCES.map((source) => source.sourceType))).sort(),
    [],
  );

  const publishers = useMemo(
    () => new Set(ALL_SOURCES.map((source) => source.publisher)).size,
    [],
  );

  const linkedRecords = useMemo(
    () => ALL_SOURCES.reduce((total, source) => total + source.usages.length, 0),
    [],
  );

  const filteredSources = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return ALL_SOURCES.filter((source) => {
      if (typeFilter !== 'all' && source.sourceType !== typeFilter) return false;
      if (!normalizedQuery) return true;

      return [
        source.title,
        source.publisher,
        source.note ?? '',
        source.sourceType,
        ...source.usages.map((usage) => usage.label),
      ].some((value) => value.toLowerCase().includes(normalizedQuery));
    }).sort((a, b) => {
      const publisherOrder = a.publisher.localeCompare(b.publisher);
      if (publisherOrder !== 0) return publisherOrder;
      return a.title.localeCompare(b.title);
    });
  }, [query, typeFilter]);

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--atlas-text)] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Section 08 // Sources, Bibliography & Provenance
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--atlas-text)] mt-1">
              Source Register
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--atlas-text-secondary)] max-w-lg leading-relaxed">
            The first provenance layer of the Atlas. This register exposes the institutional
            sources already linked to Global routes, people, places, events and transmission
            nodes. Claim-level citations for movements, objects and stories are the next phase.
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--atlas-border)] border border-[var(--atlas-border)] mb-8">
          <div className="bg-[var(--atlas-card)] p-4">
            <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
              Sources
            </div>
            <div className="mt-1 text-3xl font-semibold text-[var(--atlas-text)]">
              {ALL_SOURCES.length}
            </div>
          </div>
          <div className="bg-[var(--atlas-card)] p-4">
            <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
              Publishers
            </div>
            <div className="mt-1 text-3xl font-semibold text-[var(--atlas-text)]">
              {publishers}
            </div>
          </div>
          <div className="bg-[var(--atlas-card)] p-4">
            <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
              Linked records
            </div>
            <div className="mt-1 text-3xl font-semibold text-[var(--atlas-text)]">
              {linkedRecords}
            </div>
          </div>
          <div className="bg-[var(--atlas-card)] p-4">
            <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
              Current coverage
            </div>
            <div className="mt-1 text-sm font-semibold text-[var(--atlas-text)] uppercase">
              Global network
            </div>
            <div className="mt-1 font-mono text-[9px] text-[var(--atlas-text-muted)]">
              Movements / Objects / Stories next
            </div>
          </div>
        </div>

        <div className="mb-8 border-y border-[var(--atlas-border)] py-3 flex flex-col lg:flex-row lg:items-center gap-3">
          <div className="flex items-center gap-1 overflow-x-auto">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)] mr-2 shrink-0">
              Source type
            </span>
            <button
              type="button"
              onClick={() => setTypeFilter('all')}
              className={`px-3 py-1.5 border font-mono text-[9px] uppercase tracking-wider whitespace-nowrap ${
                typeFilter === 'all'
                  ? 'bg-[var(--atlas-text)] text-[var(--atlas-bg)] border-[var(--atlas-text)]'
                  : 'bg-[var(--atlas-surface)] text-[var(--atlas-text)] border-[var(--atlas-border-control)] hover:border-[var(--atlas-text)]'
              }`}
            >
              All
            </button>
            {sourceTypes.map((sourceType) => (
              <button
                key={sourceType}
                type="button"
                onClick={() => setTypeFilter(sourceType)}
                className={`px-3 py-1.5 border font-mono text-[9px] uppercase tracking-wider whitespace-nowrap ${
                  typeFilter === sourceType
                    ? 'bg-[var(--atlas-text)] text-[var(--atlas-bg)] border-[var(--atlas-text)]'
                    : 'bg-[var(--atlas-surface)] text-[var(--atlas-text)] border-[var(--atlas-border-control)] hover:border-[var(--atlas-text)]'
                }`}
              >
                {SOURCE_TYPE_LABELS[sourceType]}
              </button>
            ))}
          </div>

          <label className="lg:ml-auto flex items-center gap-2 border border-[var(--atlas-border-control)] bg-[var(--atlas-surface)] px-3 py-1.5 min-w-0 lg:w-80">
            <span className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)] shrink-0">
              Search
            </span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="publisher, title, linked record…"
              className="w-full min-w-0 bg-transparent text-xs text-[var(--atlas-text)] placeholder:text-[var(--atlas-text-quiet)] outline-none"
            />
          </label>
        </div>

        <div className="flex items-center justify-between mb-4 font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
          <span>{filteredSources.length} sources shown</span>
          <span>Institutional / archival sources currently registered</span>
        </div>

        <div className="border-t border-[var(--atlas-border)]">
          {filteredSources.map((source, index) => {
            const expanded = expandedSourceId === source.id;
            const host = (() => {
              try {
                return new URL(source.url).hostname.replace(/^www\./, '');
              } catch {
                return source.url;
              }
            })();

            return (
              <article
                key={source.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-6 py-5 border-b border-[var(--atlas-border)]"
              >
                <div className="lg:col-span-1 font-mono text-[10px] text-[var(--atlas-text-muted)]">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="lg:col-span-6">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="font-mono text-[8px] uppercase tracking-wider px-2 py-1 border border-[var(--atlas-border-control)] text-[var(--atlas-text-muted)]">
                      {SOURCE_TYPE_LABELS[source.sourceType]}
                    </span>
                    <span className="font-mono text-[8px] uppercase tracking-wider text-[var(--atlas-text-quiet)]">
                      {source.scope} provenance
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-[var(--atlas-text)]">
                    {source.title}
                  </h3>
                  <div className="mt-1 text-xs text-[var(--atlas-text-secondary)]">
                    {source.publisher}
                  </div>
                  {source.note && (
                    <p className="mt-2 max-w-2xl text-xs leading-relaxed text-[var(--atlas-text-muted)]">
                      {source.note}
                    </p>
                  )}
                </div>

                <div className="lg:col-span-3">
                  <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)]">
                    Provenance links // {source.usages.length}
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {source.usages.slice(0, expanded ? undefined : 3).map((usage) => (
                      <span
                        key={`${usage.kind}:${usage.id}`}
                        title={usage.label}
                        className="max-w-full truncate px-2 py-1 border border-[var(--atlas-border-control)] bg-[var(--atlas-card)] font-mono text-[9px] text-[var(--atlas-text-secondary)]"
                      >
                        {usageLabel(usage.kind)} // {usage.label}
                      </span>
                    ))}
                    {source.usages.length === 0 && (
                      <span className="font-mono text-[9px] text-[#D82B2B]">
                        Orphan source
                      </span>
                    )}
                  </div>
                  {source.usages.length > 3 && (
                    <button
                      type="button"
                      onClick={() => setExpandedSourceId(expanded ? null : source.id)}
                      className="mt-2 font-mono text-[9px] uppercase tracking-wider underline underline-offset-2 text-[var(--atlas-text-muted)] hover:text-[var(--atlas-text)]"
                    >
                      {expanded ? 'Collapse ↑' : `Show all ${source.usages.length} links ↓`}
                    </button>
                  )}
                </div>

                <div className="lg:col-span-2 lg:text-right">
                  <div className="font-mono text-[9px] text-[var(--atlas-text-muted)] break-all">
                    {host}
                  </div>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 font-mono text-[9px] uppercase tracking-wider underline underline-offset-4 text-[var(--atlas-text)] hover:text-[#D82B2B]"
                  >
                    Open source ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 border border-[var(--atlas-border)] bg-[var(--atlas-surface-alt)] p-5">
          <div className="font-mono text-[9px] uppercase tracking-widest text-[#D82B2B]">
            Provenance policy // Phase E
          </div>
          <p className="mt-2 max-w-4xl text-xs leading-relaxed text-[var(--atlas-text-secondary)]">
            A source appearing in this register supports one or more linked records, not automatically
            every sentence or interpretive statement attached to them. The next provenance phase will
            bind source IDs to individual claims so factual support, interpretation and editorial
            synthesis can be distinguished explicitly.
          </p>
        </div>
      </div>
    </section>
  );
};
