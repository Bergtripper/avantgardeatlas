import { DiffusionRoute } from '../types';

export const murayamaBerlinTokyoRoute: DiffusionRoute = {
  id: 'murayama-berlin-tokyo',
  title: 'Berlin → Tokyo: Murayama and MAVO',
  origin: { scope: 'atlas', id: 'berlin' },
  destination: { scope: 'global', id: 'tokyo' },
  startYear: 1923,
  personRefs: [{ scope: 'global', id: 'tomoyoshi-murayama' }],
  mechanisms: ['travel', 'return', 'print', 'reinterpretation'],
  sourceMovementIds: ['dada', 'constructivism'],
  transmissionEntityIds: ['mavo'],
  destinationEntityIds: ['mavo'],
  media: ['publishing', 'typography', 'collage', 'performance'],
  summary:
    'After direct exposure to Berlin’s avant-garde, Murayama returned to Japan and helped transform Dadaist and Constructivist strategies into the experimental practices associated with MAVO.',
  transformationNote:
    'Not a simple import: European avant-garde techniques were reworked through Japanese urban culture, performance and commercial print.',
  sourceIds: ['kanagawa-murayama-2011', 'princeton-mavo'],
};
