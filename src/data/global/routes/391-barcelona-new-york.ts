import { DiffusionRoute } from '../types';

export const route391BarcelonaNewYork: DiffusionRoute = {
  id: '391-barcelona-new-york',
  title: 'Barcelona → New York: 391 in motion',
  origin: { scope: 'global', id: 'barcelona' },
  destination: { scope: 'global', id: 'new-york' },
  startYear: 1917,
  personRefs: [{ scope: 'global', id: 'francis-picabia' }],
  mechanisms: ['print'],
  sourceMovementIds: ['dada'],
  transmissionEntityIds: ['391-magazine'],
  destinationEntityIds: [],
  media: ['publishing', 'typography', 'graphic-design', 'art'],
  summary:
    'After its first four issues in Barcelona, Francis Picabia carried 391 to New York, making the magazine itself a mobile Dada transmission vehicle.',
  transformationNote:
    'The publication’s identity travelled with its editor, linking separate Dada circles through a recurring editorial platform rather than through a single fixed institution.',
  sourceIds: ['iowa-391', 'iowa-picabia-391'],
};
