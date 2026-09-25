// Central Content Registry for Avant-Garde Atlas
// Completely decoupled from application logic and visual components.

export * from './movements';
export * from './people';
export * from './objects';
export * from './connections';
export * from './places';
export * from './stories';
export * from './relationships';

// Import datasets for convenience aliases and normalized network nodes
import { ALL_MOVEMENTS, getMovementById } from './movements';
import { ALL_PEOPLE, getPersonById } from './people';
import { ALL_OBJECTS, getObjectById } from './objects';
import { ALL_CONNECTIONS } from './connections';
import { ALL_PLACES, getPlaceById } from './places';
import { ALL_STORIES, getStoryById } from './stories';
import { MovementId } from '../types/atlas';

// Backward compatibility exports
export const MOVEMENTS_DATA = ALL_MOVEMENTS;
export const OBJECTS_DATA = ALL_OBJECTS;
export const HISTORICAL_FIGURES = ALL_PEOPLE;
export const CONNECTION_STORIES = ALL_STORIES;
export const CULTURAL_CITIES = ALL_PLACES;
export const NETWORK_CONNECTIONS = ALL_CONNECTIONS;

/**
 * Pure network spatial and topological layout data without content duplication.
 * Historical content (name, years, colors) is resolved dynamically from Movement.
 */
export interface RawNetworkNode {
  id: MovementId;
  x: number;
  y: number;
  cluster: 'precursors' | 'abstraction' | 'constructive' | 'functionalism';
}

export const RAW_NETWORK_NODES: RawNetworkNode[] = [
  { id: 'art-nouveau', x: 100, y: 300, cluster: 'precursors' },
  { id: 'vienna-secession', x: 190, y: 190, cluster: 'precursors' },
  { id: 'deutscher-werkbund', x: 300, y: 130, cluster: 'precursors' },
  { id: 'cubism', x: 260, y: 370, cluster: 'precursors' },
  { id: 'futurism', x: 380, y: 480, cluster: 'abstraction' },
  { id: 'cubo-futurism', x: 440, y: 370, cluster: 'abstraction' },
  { id: 'suprematism', x: 530, y: 270, cluster: 'abstraction' },
  { id: 'constructivism', x: 670, y: 220, cluster: 'constructive' },
  { id: 'dada', x: 450, y: 160, cluster: 'abstraction' },
  { id: 'de-stijl', x: 490, y: 460, cluster: 'abstraction' },
  { id: 'purism', x: 380, y: 270, cluster: 'constructive' },
  { id: 'bauhaus', x: 620, y: 360, cluster: 'constructive' },
  { id: 'neue-sachlichkeit', x: 740, y: 130, cluster: 'functionalism' },
  { id: 'new-typography', x: 770, y: 450, cluster: 'constructive' },
  { id: 'rationalism', x: 790, y: 320, cluster: 'functionalism' },
  { id: 'international-style', x: 890, y: 240, cluster: 'functionalism' }
];

export interface NetworkNode {
  id: MovementId;
  name: string;
  startYear: number;
  endYear: number;
  x: number;
  y: number;
  cluster: 'precursors' | 'abstraction' | 'constructive' | 'functionalism';
  color: string;
}

/**
 * Normalized NETWORK_NODES: derives textual and chronological attributes
 * directly from the single source of truth (the Movement definition).
 */
export const NETWORK_NODES: NetworkNode[] = RAW_NETWORK_NODES.map((raw) => {
  const movement = getMovementById(raw.id);
  return {
    ...raw,
    name: movement ? movement.name : raw.id,
    startYear: movement ? movement.startYear : 1900,
    endYear: movement ? movement.endYear : 1940,
    color: movement ? movement.styleTheme.accentColor : '#121212'
  };
});

export {
  getMovementById,
  getPersonById,
  getObjectById,
  getPlaceById,
  getStoryById
};
