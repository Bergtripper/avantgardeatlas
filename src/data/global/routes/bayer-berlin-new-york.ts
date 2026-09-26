import { DiffusionRoute } from '../types';

export const bayerBerlinNewYorkRoute: DiffusionRoute = {
  id: 'bayer-berlin-new-york',
  title: 'Berlin → New York: Herbert Bayer and MoMA',
  origin: { scope: 'atlas', id: 'berlin' },
  destination: { scope: 'global', id: 'new-york' },
  startYear: 1938,
  personRefs: [{ scope: 'atlas', id: 'herbert-bayer' }],
  mechanisms: ['migration', 'institution-transfer', 'exhibition'],
  primaryMechanism: 'exhibition',
  historicalContextIds: ['political-fracture-1933'],
  sourceMovementIds: ['bauhaus', 'new-typography'],
  transmissionEntityIds: ['bauhaus-moma-1938'],
  destinationEntityIds: ['bauhaus-moma-1938'],
  media: ['exhibition-design', 'graphic-design', 'photography'],
  summary:
    'Herbert Bayer emigrated to the United States in 1938 and brought Bauhaus display and graphic-design methods directly into MoMA’s major Bauhaus survey in New York.',
  transformationNote:
    'Bauhaus visual practice entered an American museum and communication context through exhibition design, graphic systems and photography rather than through a new school alone.',
  sourceIds: ['bauhaus-after-1933', 'moma-herbert-bayer', 'moma-bauhaus-1938'],
};
