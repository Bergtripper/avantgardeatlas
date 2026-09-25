import { DiffusionRoute } from '../types';

export const route391ZurichParis: DiffusionRoute = {
  id: '391-zurich-paris',
  title: 'Zurich → Paris: 391 and the Paris Dada network',
  origin: { scope: 'atlas', id: 'zurich' },
  destination: { scope: 'atlas', id: 'paris' },
  startYear: 1919,
  endYear: 1924,
  personRefs: [{ scope: 'global', id: 'francis-picabia' }],
  mechanisms: ['print', 'reinterpretation'],
  sourceMovementIds: ['dada'],
  transmissionEntityIds: ['391-magazine'],
  destinationEntityIds: [],
  media: ['publishing', 'typography', 'graphic-design', 'art'],
  summary:
    'After its Zurich issue, 391 continued in Paris, where Picabia’s magazine became part of the emerging Paris Dada environment and continued until 1924.',
  transformationNote:
    'The Paris phase shows how a mobile publication could accumulate meanings from several Dada centers and carry them into a new local constellation.',
  sourceIds: ['iowa-391', 'iowa-picabia-391'],
};
