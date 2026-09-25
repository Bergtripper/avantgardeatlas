import { GlobalEntity } from '../types';

export const deStijlPublication: GlobalEntity = {
  id: 'de-stijl-magazine',
  name: 'De Stijl',
  kind: 'publication',
  placeRef: { scope: 'global', id: 'leiden' },
  startYear: 1917,
  endYear: 1932,
  movementLinks: ['de-stijl', 'constructivism'],
  media: ['publishing', 'typography', 'graphic-design'],
  summary:
    'Founded by Theo van Doesburg in 1917, De Stijl evolved from a movement journal into an international review that circulated texts, reproductions and reports across the European avant-garde.',
  sourceIds: ['moma-de-stijl-magazine'],
};
