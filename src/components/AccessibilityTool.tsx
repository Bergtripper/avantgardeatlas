import React, { useEffect, useRef, useState } from 'react';
import {
  AlignLeft,
  Check,
  Glasses,
  Highlighter,
  Minus,
  MoveHorizontal,
  Pause,
  Plus,
  RotateCcw,
  Type,
  X,
} from 'lucide-react';
import { useAccessibility } from '../context/AccessibilityContext';

const presets = [100, 115, 130, 145] as const;

export const AccessibilityTool: React.FC = () => {
  const {
    settings,
    textScale,
    setTextScale,
    increaseTextScale,
    decreaseTextScale,
    resetTextScale,
    toggleHighContrast,
    toggleRelaxedSpacing,
    toggleReadableFont,
    toggleHighlightLinks,
    toggleReadingWidth,
    toggleReduceMotion,
    togglePauseDynamicType,
    toggleDockPosition,
    resetAllSettings,
    isPanelOpen,
    setIsPanelOpen,
    togglePanel,
  } = useAccessibility();

  const [collapsed, setCollapsed] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const dockRight = settings.dockPosition === 'right';

  useEffect(() => {
    if (isPanelOpen) {
      panelRef.current?.focus();
    }
  }, [isPanelOpen]);

  return (
    <>
      <aside
        aria-label="Accessibility and reading tools"
        className={`fixed top-24 sm:top-28 z-50 ${
          dockRight ? 'right-0' : 'left-0'
        }`}
      >
        {collapsed ? (
          <button
            type="button"
            onClick={() => setCollapsed(false)}
            className={`atlas-a11y-tab atlas-a11y-tab-collapsed ${
              dockRight ? 'atlas-a11y-right' : 'atlas-a11y-left'
            }`}
            aria-label="Expand accessibility tools"
            title="Accessibility tools (Alt + A)"
          >
            <Glasses size={15} />
            <span>{textScale}%</span>
          </button>
        ) : (
          <div
            className={`atlas-a11y-tab ${
              dockRight ? 'atlas-a11y-right' : 'atlas-a11y-left'
            }`}
          >
            <button
              type="button"
              onClick={() => setCollapsed(true)}
              className="atlas-a11y-mini"
              aria-label="Collapse accessibility tools"
              title="Collapse accessibility tools"
            >
              {dockRight ? '›' : '‹'}
            </button>

            <button
              type="button"
              onClick={togglePanel}
              className={`atlas-a11y-main ${isPanelOpen ? 'is-active' : ''}`}
              aria-label="Open accessibility settings"
              aria-expanded={isPanelOpen}
              title="Accessibility settings (Alt + A)"
            >
              <span className="flex items-center gap-1">
                <Type size={14} />
                <strong>Aa</strong>
              </span>
              <span>{textScale}%</span>
            </button>

            <div className="atlas-a11y-rule" />

            <button
              type="button"
              onClick={increaseTextScale}
              disabled={textScale >= 160}
              className="atlas-a11y-step"
              aria-label="Increase text size"
              title="Increase text size"
            >
              <Plus size={14} />
            </button>
            <button
              type="button"
              onClick={decreaseTextScale}
              disabled={textScale <= 90}
              className="atlas-a11y-step"
              aria-label="Decrease text size"
              title="Decrease text size"
            >
              <Minus size={14} />
            </button>
          </div>
        )}
      </aside>

      {isPanelOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/45 flex items-center justify-center sm:justify-end p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="atlas-a11y-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setIsPanelOpen(false)}
            aria-label="Close accessibility panel"
          />

          <div
            ref={panelRef}
            tabIndex={-1}
            className="atlas-a11y-panel relative z-10 w-full max-w-md max-h-[92vh] overflow-y-auto"
          >
            <div className="atlas-a11y-panel-header">
              <div>
                <div className="atlas-a11y-kicker">ACCESSIBILITY // READING</div>
                <h2 id="atlas-a11y-title" className="text-xl font-semibold tracking-tight">
                  Inclusive Reading Tools
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsPanelOpen(false)}
                className="atlas-a11y-icon-button"
                aria-label="Close accessibility panel"
              >
                <X size={17} />
              </button>
            </div>

            <div className="p-5 space-y-7">
              <section>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="atlas-a11y-section-title">
                    <Type size={14} />
                    TEXT SIZE
                  </div>
                  {textScale !== 100 && (
                    <button
                      type="button"
                      onClick={resetTextScale}
                      className="atlas-a11y-text-action"
                    >
                      <RotateCcw size={11} />
                      RESET 100%
                    </button>
                  )}
                </div>

                <div className="atlas-a11y-scale-control">
                  <button
                    type="button"
                    onClick={decreaseTextScale}
                    disabled={textScale <= 90}
                    className="atlas-a11y-scale-button"
                    aria-label="Decrease text size"
                  >
                    A−
                  </button>
                  <div className="text-center">
                    <div className="font-mono text-2xl font-semibold">{textScale}%</div>
                    <div className="font-mono text-[9px] uppercase tracking-widest text-[var(--atlas-text-muted)]">
                      GLOBAL TYPE SCALE
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={increaseTextScale}
                    disabled={textScale >= 160}
                    className="atlas-a11y-scale-button"
                    aria-label="Increase text size"
                  >
                    A+
                  </button>
                </div>

                <div className="grid grid-cols-4 gap-px mt-3 bg-[var(--atlas-border)] border border-[var(--atlas-border)]">
                  {presets.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => setTextScale(preset)}
                      className={`atlas-a11y-preset ${textScale === preset ? 'is-active' : ''}`}
                    >
                      <span>{preset}%</span>
                      {textScale === preset && <Check size={11} />}
                    </button>
                  ))}
                </div>
              </section>

              <section className="pt-5 border-t border-[var(--atlas-border)]">
                <div className="atlas-a11y-section-title mb-3">
                  <Glasses size={14} />
                  READING COMFORT
                </div>

                <div className="space-y-px bg-[var(--atlas-border)] border border-[var(--atlas-border)]">
                  <label className="atlas-a11y-toggle-row">
                    <div>
                      <div className="font-semibold text-sm">High Contrast</div>
                      <div className="atlas-a11y-description">
                        Stronger borders, text separation and interactive states.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.highContrast}
                      onChange={toggleHighContrast}
                    />
                  </label>

                  <label className="atlas-a11y-toggle-row">
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-2">
                        <AlignLeft size={13} /> Relaxed Spacing
                      </div>
                      <div className="atlas-a11y-description">
                        Adds line, word and paragraph spacing for easier reading.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.relaxedSpacing}
                      onChange={toggleRelaxedSpacing}
                    />
                  </label>

                  <label className="atlas-a11y-toggle-row">
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-2">
                        <Type size={13} /> Readable Type
                      </div>
                      <div className="atlas-a11y-description">
                        Uses the Atlas sans-serif system more consistently for body copy.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.readableFont}
                      onChange={toggleReadableFont}
                    />
                  </label>

                  <label className="atlas-a11y-toggle-row">
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-2">
                        <Highlighter size={13} /> Highlight Links
                      </div>
                      <div className="atlas-a11y-description">
                        Makes links and interactive text actions persistently visible.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.highlightLinks}
                      onChange={toggleHighlightLinks}
                    />
                  </label>

                  <label className="atlas-a11y-toggle-row">
                    <div>
                      <div className="font-semibold text-sm flex items-center gap-2">
                        <AlignLeft size={13} /> Reading Width
                      </div>
                      <div className="atlas-a11y-description">
                        Limits long-form text to a more comfortable reading measure.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.readingWidth}
                      onChange={toggleReadingWidth}
                    />
                  </label>
                </div>
              </section>

              <section className="pt-5 border-t border-[var(--atlas-border)]">
                <div className="atlas-a11y-section-title mb-3">
                  <Pause size={14} />
                  MOTION & DYNAMIC TYPE
                </div>

                <div className="space-y-px bg-[var(--atlas-border)] border border-[var(--atlas-border)]">
                  <label className="atlas-a11y-toggle-row">
                    <div>
                      <div className="font-semibold text-sm">Reduce Motion</div>
                      <div className="atlas-a11y-description">
                        Suppresses decorative animation and animated transitions across the Atlas.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.reduceMotion}
                      onChange={toggleReduceMotion}
                    />
                  </label>

                  <label className="atlas-a11y-toggle-row">
                    <div>
                      <div className="font-semibold text-sm">Pause Dynamic Typography</div>
                      <div className="atlas-a11y-description">
                        Freezes automatic language and movement-name rotations while keeping content visible.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={settings.pauseDynamicType}
                      onChange={togglePauseDynamicType}
                    />
                  </label>
                </div>
              </section>

              <section className="pt-5 border-t border-[var(--atlas-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={toggleDockPosition}
                  className="atlas-a11y-secondary-button"
                >
                  <MoveHorizontal size={13} />
                  DOCK // {dockRight ? 'RIGHT' : 'LEFT'}
                </button>
                <button
                  type="button"
                  onClick={resetAllSettings}
                  className="atlas-a11y-text-action"
                >
                  <RotateCcw size={12} />
                  RESET ACCESSIBILITY
                </button>
              </section>

              <div className="font-mono text-[9px] uppercase tracking-wider text-[var(--atlas-text-muted)] border-t border-[var(--atlas-border)] pt-4">
                Shortcut // ALT + A · ESC closes panel
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
