import { DiffusionRoute } from '../types';

export const manRayNewYorkParisRoute: DiffusionRoute = {
  id: 'man-ray-new-york-paris',
  title: 'New York → Paris: Man Ray and transatlantic Dada',
  origin: { scope: 'global', id: 'new-york' },
  destination: { scope: 'atlas', id: 'paris' },
  startYear: 1921,
  personRefs: [{ scope: 'global', id: 'man-ray' }],
  mechanisms: ['migration', 'print', 'reinterpretation'],
  sourceMovementIds: ['dada'],
  destinationEntityIds: [],
  media: ['photography', 'art', 'publishing'],
  summary:
    'Man Ray moved from New York to Paris in 1921 after participating in New York Dada with Marcel Duchamp, joining a Parisian Dada network already connected to Tristan Tzara.',
  transformationNote:
    'The route reverses a simple Europe-to-America model: New York Dada developed in parallel with Zurich, and Man Ray carried its experimental object and photographic culture into Paris.',
  sourceIds: ['moma-man-ray-studio', 'met-new-york-dada', 'moma-dada-overview'],
};
