import { GlobalEntity } from '../types';

export const veshchPublication: GlobalEntity = {
  id: 'veshch-gegenstand-objet',
  name: 'Veshch / Gegenstand / Objet',
  kind: 'publication',
  placeRef: { scope: 'atlas', id: 'berlin' },
  startYear: 1922,
  endYear: 1922,
  movementLinks: ['constructivism', 'new-typography'],
  media: ['publishing', 'typography', 'graphic-design'],
  summary:
    'A trilingual Berlin-based magazine edited by El Lissitzky and Ilya Ehrenburg that circulated Soviet Constructivist ideas internationally and helped connect Russian and Western European avant-garde networks.',
  sourceIds: ['moma-magazines-intersection'],
};
