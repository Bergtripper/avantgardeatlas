import React, { useState } from 'react';
import { MovementId } from '../types/atlas';
import { ALL_CONNECTIONS } from '../data/connections';
import { NETWORK_NODES, NetworkNode } from '../data';

interface NetworkSectionProps {
  onSelectMovement: (id: MovementId) => void;
}

export const NetworkSection: React.FC<NetworkSectionProps> = ({ onSelectMovement }) => {
  const [activeNodeId, setActiveNodeId] = useState<MovementId | null>('bauhaus');
  const [selectedConnectionIndex, setSelectedConnectionIndex] = useState<number | null>(null);

  // Nodes map for fast lookup
  const nodeMap = new Map<MovementId, NetworkNode>();
  NETWORK_NODES.forEach((n) => nodeMap.set(n.id, n));

  // Determine connected movements when a node is selected or hovered
  const connectedNodeIds = new Set<MovementId>();
  const activeConnections = ALL_CONNECTIONS.filter((conn) => {
    if (!activeNodeId) return false;
    const isSource = conn.source === activeNodeId;
    const isTarget = conn.target === activeNodeId;
    if (isSource) connectedNodeIds.add(conn.target);
    if (isTarget) connectedNodeIds.add(conn.source);
    return isSource || isTarget;
  });

  if (activeNodeId) {
    connectedNodeIds.add(activeNodeId);
  }

  const activeNode = activeNodeId ? nodeMap.get(activeNodeId) : null;

  return (
    <section id="network-section" className="w-full py-16 px-4 sm:px-6 lg:px-12 border-b border-[var(--atlas-border)] bg-[var(--atlas-bg)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[var(--atlas-text)] pb-6 mb-8 gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--atlas-text-muted)]">
              Section 02 // Genealogical Matrix
            </div>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[var(--atlas-text)] mt-1">
              Network of Influences
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--atlas-text-secondary)] max-w-md">
            The birth of modernism was not a solitary invention but an intense web of migrations, polemics, and cross-pollination. Hover or click any node to trace its lines of inheritance.
          </div>
        </div>

        {/* Quick Node Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 text-xs font-mono">
          <span className="text-[var(--atlas-text-quiet)] uppercase mr-2 shrink-0">Focus Node:</span>
          {NETWORK_NODES.map((node) => {
            const isSelected = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => {
                  setActiveNodeId(node.id);
                  setSelectedConnectionIndex(null);
                }}
                className={`px-3 py-1 cursor-pointer transition-all uppercase tracking-wider shrink-0 border ${
                  isSelected
                    ? 'bg-[var(--atlas-ink-button)] text-[var(--atlas-on-ink)] border-[var(--atlas-text)] font-semibold'
                    : 'bg-[var(--atlas-surface-alt)] text-[var(--atlas-text-secondary)] border-[var(--atlas-border-control)] hover:border-[var(--atlas-text)] hover:text-[var(--atlas-text)]'
                }`}
              >
                {node.name}
              </button>
            );
          })}
        </div>

        {/* Network Layout Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left/Center: Interactive SVG Diagram */}
          <div className="lg:col-span-8 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-2 relative overflow-hidden select-none">
            <svg
              viewBox="0 0 1000 620"
              className="w-full h-auto aspect-1000/620"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="14"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="var(--network-ink)" />
                </marker>
                <marker
                  id="arrow-active"
                  viewBox="0 0 10 10"
                  refX="14"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#D82B2B" />
                </marker>
              </defs>

              {/* Background architectural grid */}
              <g stroke="var(--network-grid)" strokeWidth="0.75" opacity="0.6">
                <line x1="100" y1="0" x2="100" y2="620" />
                <line x1="300" y1="0" x2="300" y2="620" />
                <line x1="500" y1="0" x2="500" y2="620" />
                <line x1="700" y1="0" x2="700" y2="620" />
                <line x1="900" y1="0" x2="900" y2="620" />
                <line x1="0" y1="150" x2="1000" y2="150" />
                <line x1="0" y1="300" x2="1000" y2="300" />
                <line x1="0" y1="450" x2="1000" y2="450" />
              </g>

              {/* Era Header Markers in SVG */}
              <text x="100" y="30" fontFamily="IBM Plex Mono" fontSize="10" fill="var(--network-muted)" letterSpacing="0.1em">1890—1905 PRECURSORS</text>
              <text x="400" y="30" fontFamily="IBM Plex Mono" fontSize="10" fill="var(--network-muted)" letterSpacing="0.1em">1905—1920 ABSTRACTION & DISRUPTION</text>
              <text x="750" y="30" fontFamily="IBM Plex Mono" fontSize="10" fill="var(--network-muted)" letterSpacing="0.1em">1920—1940 SYNTHESIS & MODERN CANON</text>

              {/* Network Connections */}
              {ALL_CONNECTIONS.map((conn, idx) => {
                const source = nodeMap.get(conn.source);
                const target = nodeMap.get(conn.target);
                if (!source || !target) return null;

                const isConnectedToActive =
                  activeNodeId && (conn.source === activeNodeId || conn.target === activeNodeId);
                const isDirectlySelected = selectedConnectionIndex === idx;

                // Bezier curve calculations
                const dx = target.x - source.x;
                const dy = target.y - source.y;
                const cx1 = source.x + dx * 0.5;
                const cy1 = source.y;
                const cx2 = source.x + dx * 0.5;
                const cy2 = target.y;

                const pathD = `M ${source.x} ${source.y} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${target.x} ${target.y}`;

                return (
                  <g key={`conn-${idx}`} className="cursor-pointer" onClick={() => setSelectedConnectionIndex(idx)}>
                    {/* Hover Hitbox */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke="transparent"
                      strokeWidth="14"
                    />
                    {/* Rendered Line */}
                    <path
                      d={pathD}
                      fill="none"
                      stroke={
                        isDirectlySelected
                          ? '#D82B2B'
                          : isConnectedToActive
                          ? 'var(--network-ink)'
                          : 'var(--network-line)'
                      }
                      strokeWidth={
                        isDirectlySelected ? 3 : isConnectedToActive ? 2 : 1
                      }
                      strokeDasharray={
                        isConnectedToActive || isDirectlySelected ? 'none' : '4 3'
                      }
                      markerEnd={
                        isConnectedToActive || isDirectlySelected
                          ? 'url(#arrow-active)'
                          : 'url(#arrow)'
                      }
                      opacity={
                        !activeNodeId
                          ? 0.5
                          : isConnectedToActive || isDirectlySelected
                          ? 1
                          : 0.12
                      }
                      className="transition-all duration-200"
                    />
                  </g>
                );
              })}

              {/* Typographic Nodes */}
              {NETWORK_NODES.map((node) => {
                const isSelected = activeNodeId === node.id;
                const isConnected = connectedNodeIds.has(node.id);
                const opacity = !activeNodeId || isSelected || isConnected ? 1 : 0.18;

                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer group transition-opacity duration-200"
                    opacity={opacity}
                    onClick={() => {
                      setActiveNodeId(node.id);
                      setSelectedConnectionIndex(null);
                    }}
                    onDoubleClick={() => onSelectMovement(node.id)}
                  >
                    {/* Center anchor pin */}
                    <circle
                      cx="0"
                      cy="0"
                      r={isSelected ? 6 : 4}
                      fill={isSelected ? '#D82B2B' : 'var(--network-ink)'}
                      stroke="var(--network-node-stroke)"
                      strokeWidth="1.5"
                    />

                    {/* Node background plate for readability */}
                    <rect
                      x="-8"
                      y="-28"
                      width={node.name.length * 9.5 + 20}
                      height="24"
                      fill={isSelected ? 'var(--network-ink)' : 'var(--network-paper)'}
                      stroke={isSelected ? 'var(--network-ink)' : 'var(--network-border)'}
                      strokeWidth="1"
                    />

                    {/* Typographic Label */}
                    <text
                      x="0"
                      y="-12"
                      fontFamily="IBM Plex Sans"
                      fontSize="12"
                      fontWeight={isSelected ? '700' : '600'}
                      fill={isSelected ? 'var(--network-paper)' : 'var(--network-ink)'}
                      letterSpacing="-0.01em"
                    >
                      {node.name}
                    </text>

                    {/* Date Subscript */}
                    <text
                      x="0"
                      y="16"
                      fontFamily="IBM Plex Mono"
                      fontSize="9"
                      fill={isSelected ? '#D82B2B' : 'var(--network-muted)'}
                      letterSpacing="0.05em"
                    >
                      {node.startYear}—{node.endYear}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right: Educational Relationship Inspector Card */}
          <div className="lg:col-span-4 border border-[var(--atlas-border)] bg-[var(--atlas-surface)] p-6 flex flex-col justify-between min-h-[480px]">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--atlas-border)] pb-3 text-xs font-mono">
                <span className="text-[var(--atlas-text-quiet)] uppercase">Lineage Inspector</span>
                {activeNode && (
                  <button
                    onClick={() => onSelectMovement(activeNode.id)}
                    className="text-[var(--atlas-text)] font-semibold underline hover:text-[#D82B2B] cursor-pointer"
                  >
                    Open Full Monograph →
                  </button>
                )}
              </div>

              {activeNode ? (
                <div className="mt-4">
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold tracking-tight text-[var(--atlas-text)]">
                      {activeNode.name}
                    </h3>
                    <span className="font-mono text-xs text-[var(--atlas-text-muted)]">
                      ({activeNode.startYear}—{activeNode.endYear})
                    </span>
                  </div>

                  <p className="mt-2 text-xs text-[var(--atlas-text-secondary)] leading-relaxed">
                    Active genealogical links: {activeConnections.length} direct influence lines.
                  </p>

                  {/* Connections List */}
                  <div className="mt-6 space-y-4">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--atlas-text-quiet)] border-b border-[var(--atlas-border-soft)] pb-1">
                      Direct Relationships:
                    </div>

                    {activeConnections.length === 0 ? (
                      <div className="text-xs text-[var(--atlas-text-quiet)] italic py-2">
                        No primary direct vectors recorded for this node.
                      </div>
                    ) : (
                      activeConnections.map((conn, idx) => {
                        const isSource = conn.source === activeNodeId;
                        const otherNode = nodeMap.get(isSource ? conn.target : conn.source);
                        const isSelectedConn = selectedConnectionIndex === idx;

                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedConnectionIndex(idx)}
                            className={`p-3 border text-xs cursor-pointer transition-colors ${
                              isSelectedConn
                                ? 'bg-[var(--atlas-popover)] text-white border-[var(--atlas-popover)]'
                                : 'bg-[var(--atlas-card)] border-[var(--atlas-border)] hover:border-[var(--atlas-text)]'
                            }`}
                          >
                            <div className="flex items-center justify-between font-mono font-semibold text-[11px] mb-1">
                              <span className={isSelectedConn ? 'text-[#FACC15]' : 'text-[#D82B2B]'}>
                                {isSource ? 'INFLUENCED →' : '← INHERITED FROM'}
                              </span>
                              <span className="uppercase">{otherNode?.name}</span>
                            </div>
                            <p className={`mt-1.5 leading-relaxed text-[12px] ${isSelectedConn ? 'text-gray-200' : 'text-[var(--atlas-text-body)]'}`}>
                              {conn.rationale}
                            </p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                              {conn.keyThemes.map((theme, tIdx) => (
                                <span
                                  key={tIdx}
                                  className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                                    isSelectedConn
                                      ? 'bg-black/40 border-gray-700 text-gray-300'
                                      : 'bg-[var(--atlas-surface-alt)] border-[var(--atlas-border-control)] text-[var(--atlas-text-soft)]'
                                  }`}
                                >
                                  {theme}
                                </span>
                              ))}
                            </div>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              ) : (
                <div className="py-16 text-center text-xs font-mono text-[var(--atlas-text-quiet)]">
                  Select a movement node in the diagram to inspect its genealogical connections.
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[var(--atlas-border)] text-[11px] font-mono text-[var(--atlas-text-muted)] flex justify-between">
              <span>DOUBLE-CLICK NODE TO ENTER</span>
              <span>1890—1940 ARCHIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
