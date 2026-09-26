import { MovementId } from './types/atlas';
import { NavTab } from './components/Header';

const TAB_TO_PATH: Record<NavTab, string> = {
  timeline: 'timeline',
  network: 'network',
  movements: 'movements',
  archive: 'objects',
  compare: 'compare',
  people: 'people',
  stories: 'stories',
  geography: 'maps/europe',
  global: 'maps/global',
};

const LEGACY_PATH_TO_TAB: Record<string, NavTab> = {
  geography: 'geography',
  global: 'global',
};

const PATH_TO_TAB: Record<string, NavTab> = {
  timeline: 'timeline',
  network: 'network',
  movements: 'movements',
  objects: 'archive',
  compare: 'compare',
  people: 'people',
  stories: 'stories',
};

const normalizedBase = () => {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : `${base}/`;
};

const stripBase = (pathname: string) => {
  const base = normalizedBase();
  if (base !== '/' && pathname.startsWith(base)) {
    return pathname.slice(base.length);
  }
  return pathname.replace(/^\//, '');
};

export interface AtlasRoute {
  tab: NavTab;
  movementId: MovementId | null;
}

export const parseAtlasRoute = (pathname = window.location.pathname): AtlasRoute => {
  const segments = stripBase(pathname).split('/').filter(Boolean);

  if (segments[0] === 'movements' && segments[1]) {
    return {
      tab: 'movements',
      movementId: decodeURIComponent(segments[1]) as MovementId,
    };
  }

  if (segments[0] === 'maps') {
    if (segments[1] === 'global') {
      return { tab: 'global', movementId: null };
    }
    if (segments[1] === 'europe' || !segments[1]) {
      return { tab: 'geography', movementId: null };
    }
  }

  const legacyTab = LEGACY_PATH_TO_TAB[segments[0] ?? ''];
  if (legacyTab) {
    return { tab: legacyTab, movementId: null };
  }

  const tab = PATH_TO_TAB[segments[0] ?? ''] ?? 'timeline';
  return { tab, movementId: null };
};

export const pathForTab = (tab: NavTab) => {
  return `${normalizedBase()}${TAB_TO_PATH[tab]}`;
};

export const pathForMovement = (id: MovementId) => {
  return `${normalizedBase()}movements/${encodeURIComponent(id)}`;
};
