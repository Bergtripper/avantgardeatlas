import { DiffusionRoute } from '../types';

export const torresGarciaParisMontevideoRoute: DiffusionRoute = {
  id: 'torres-garcia-paris-montevideo',
  title: 'Paris → Montevideo: Torres-García and the Escuela del Sur',
  origin: { scope: 'atlas', id: 'paris' },
  destination: { scope: 'global', id: 'montevideo' },
  startYear: 1934,
  personRefs: [{ scope: 'global', id: 'joaquin-torres-garcia' }],
  mechanisms: ['return', 'reinterpretation'],
  sourceMovementIds: ['constructivism', 'de-stijl'],
  destinationEntityIds: ['universalismo-constructivo'],
  media: ['art', 'graphic-design', 'education'],
  summary:
    'After decades abroad and participation in European abstraction networks, Torres-García returned to Uruguay in 1934 and developed Universalismo Constructivo in Montevideo.',
  transformationNote:
    'The route culminates in an explicitly South American reformulation of constructive abstraction rather than a peripheral copy of European modernism.',
  sourceIds: ['moma-torres-garcia'],
};
