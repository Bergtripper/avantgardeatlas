import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export interface AccessibilitySettings {
  textScale: number;
  highContrast: boolean;
  relaxedSpacing: boolean;
  readableFont: boolean;
  highlightLinks: boolean;
  dockPosition: 'left' | 'right';
}

interface AccessibilityContextValue {
  settings: AccessibilitySettings;
  textScale: number;
  setTextScale: (scale: number) => void;
  increaseTextScale: () => void;
  decreaseTextScale: () => void;
  resetTextScale: () => void;
  toggleHighContrast: () => void;
  toggleRelaxedSpacing: () => void;
  toggleReadableFont: () => void;
  toggleHighlightLinks: () => void;
  toggleDockPosition: () => void;
  resetAllSettings: () => void;
  isPanelOpen: boolean;
  setIsPanelOpen: (open: boolean) => void;
  togglePanel: () => void;
}

const STORAGE_KEY = 'avantgarde-atlas-a11y-v1';

const defaultSettings: AccessibilitySettings = {
  textScale: 100,
  highContrast: false,
  relaxedSpacing: false,
  readableFont: false,
  highlightLinks: false,
  dockPosition: 'right',
};

const AccessibilityContext = createContext<AccessibilityContextValue | undefined>(undefined);

export const AccessibilityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<AccessibilitySettings>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Partial<AccessibilitySettings>;
        return {
          ...defaultSettings,
          ...parsed,
          textScale:
            typeof parsed.textScale === 'number'
              ? Math.max(90, Math.min(160, parsed.textScale))
              : 100,
        };
      }
    } catch {
      // Ignore malformed or unavailable local storage.
    }

    return defaultSettings;
  });

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // Accessibility settings still work for the current session.
    }

    const root = document.documentElement;
    root.style.fontSize = `${settings.textScale}%`;
    root.dataset.textScale = String(settings.textScale);
    root.classList.toggle('a11y-high-contrast', settings.highContrast);
    root.classList.toggle('a11y-relaxed-spacing', settings.relaxedSpacing);
    root.classList.toggle('a11y-readable-font', settings.readableFont);
    root.classList.toggle('a11y-highlight-links', settings.highlightLinks);
  }, [settings]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement
      ) {
        return;
      }

      if (event.altKey && event.key.toLowerCase() === 'a') {
        event.preventDefault();
        setIsPanelOpen((current) => !current);
      } else if (event.key === 'Escape') {
        setIsPanelOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const setTextScale = useCallback((scale: number) => {
    setSettings((current) => ({
      ...current,
      textScale: Math.max(90, Math.min(160, Math.round(scale))),
    }));
  }, []);

  const increaseTextScale = useCallback(() => {
    setSettings((current) => ({
      ...current,
      textScale: Math.min(160, current.textScale + 10),
    }));
  }, []);

  const decreaseTextScale = useCallback(() => {
    setSettings((current) => ({
      ...current,
      textScale: Math.max(90, current.textScale - 10),
    }));
  }, []);

  const resetTextScale = useCallback(() => {
    setSettings((current) => ({ ...current, textScale: 100 }));
  }, []);

  const toggleHighContrast = useCallback(() => {
    setSettings((current) => ({ ...current, highContrast: !current.highContrast }));
  }, []);

  const toggleRelaxedSpacing = useCallback(() => {
    setSettings((current) => ({ ...current, relaxedSpacing: !current.relaxedSpacing }));
  }, []);

  const toggleReadableFont = useCallback(() => {
    setSettings((current) => ({ ...current, readableFont: !current.readableFont }));
  }, []);

  const toggleHighlightLinks = useCallback(() => {
    setSettings((current) => ({ ...current, highlightLinks: !current.highlightLinks }));
  }, []);

  const toggleDockPosition = useCallback(() => {
    setSettings((current) => ({
      ...current,
      dockPosition: current.dockPosition === 'right' ? 'left' : 'right',
    }));
  }, []);

  const resetAllSettings = useCallback(() => setSettings(defaultSettings), []);
  const togglePanel = useCallback(() => setIsPanelOpen((current) => !current), []);

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        textScale: settings.textScale,
        setTextScale,
        increaseTextScale,
        decreaseTextScale,
        resetTextScale,
        toggleHighContrast,
        toggleRelaxedSpacing,
        toggleReadableFont,
        toggleHighlightLinks,
        toggleDockPosition,
        resetAllSettings,
        isPanelOpen,
        setIsPanelOpen,
        togglePanel,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error('useAccessibility must be used within AccessibilityProvider');
  }
  return context;
};
