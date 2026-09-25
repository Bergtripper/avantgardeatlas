import { DiffusionRoute } from '../types';

export const route391NewYorkZurich: DiffusionRoute = {
  id: '391-new-york-zurich',
  title: 'New York → Zurich: 391 reconnects Dada centers',
  origin: { scope: 'global', id: 'new-york' },
  destination: { scope: 'atlas', id: 'zurich' },
  startYear: 1919,
  personRefs: [{ scope: 'global', id: 'francis-picabia' }],
  mechanisms: ['print'],
  sourceMovementIds: ['dada'],
  transmissionEntityIds: ['391-magazine'],
  destinationEntityIds: [],
  media: ['publishing', 'typography', 'graphic-design', 'art'],
  summary:
    '391 moved from New York to Zurich, reconnecting the magazine with the European Dada network before its final Paris phase.',
  transformationNote:
    'The same periodical linked Dada milieus that had developed in parallel, reinforcing the movement’s transatlantic rather than single-origin character.',
  sourceIds: ['iowa-391', 'iowa-picabia-391'],
};
