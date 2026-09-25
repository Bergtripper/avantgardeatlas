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
  geography: 'geography',
  global: 'global'
};

const PATH_TO_TAB: Record<string, NavTab> = Object.fromEntries(
  Object.entries(TAB_TO_PATH).map(([tab, path]) => [path, tab as NavTab])
) as Record<string, NavTab>;

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
      movementId: decodeURIComponent(segments[1]) as MovementId
    };
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
