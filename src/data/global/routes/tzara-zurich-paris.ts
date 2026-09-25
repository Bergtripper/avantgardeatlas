import { DiffusionRoute } from '../types';

export const tzaraZurichParisRoute: DiffusionRoute = {
  id: 'tzara-zurich-paris',
  title: 'Zurich → Paris: Tristan Tzara and Paris Dada',
  origin: { scope: 'atlas', id: 'zurich' },
  destination: { scope: 'atlas', id: 'paris' },
  startYear: 1919,
  endYear: 1920,
  personRefs: [{ scope: 'atlas', id: 'tristan-tzara' }],
  mechanisms: ['migration', 'print', 'reinterpretation'],
  sourceMovementIds: ['dada'],
  destinationEntityIds: [],
  media: ['publishing', 'performance', 'typography'],
  summary:
    'After editing Dada publications in Zurich, Tristan Tzara moved to Paris at the end of 1919 and became a central catalyst for the city’s Dada manifestations and publishing network.',
  transformationNote:
    'In Paris, Dada entered an already dense literary and artistic milieu and became intertwined with magazines, public actions and the group that would soon move toward Surrealism.',
  sourceIds: ['moma-tzara-paris', 'moma-dada-overview'],
};
