import { DiffusionRoute } from '../types';

export const sternCoppolaBerlinBuenosAiresRoute: DiffusionRoute = {
  id: 'stern-coppola-berlin-buenos-aires',
  title: 'Berlin → Buenos Aires: Stern, Coppola and modern photography',
  origin: { scope: 'atlas', id: 'berlin' },
  destination: { scope: 'global', id: 'buenos-aires' },
  startYear: 1935,
  personRefs: [
    { scope: 'global', id: 'grete-stern' },
    { scope: 'global', id: 'horacio-coppola' },
  ],
  mechanisms: ['study', 'return', 'migration', 'reinterpretation'],
  sourceMovementIds: ['bauhaus'],
  destinationEntityIds: ['modern-photography-buenos-aires'],
  media: ['photography', 'publishing', 'typography'],
  summary:
    'After Bauhaus-linked training and European work, Grete Stern and Horacio Coppola arrived in Buenos Aires in 1935 and exhibited at the offices of the magazine Sur, reinforcing a modern photographic culture in Argentina.',
  transformationNote:
    'This was a circular exchange: Coppola had already developed modernist photography in Buenos Aires before studying in Europe, then returned with Stern to extend rather than originate the local modern movement.',
  sourceIds: ['moma-stern-coppola'],
};
