import { DiffusionRoute } from '../types';

export const sharonDessauTelAvivRoute: DiffusionRoute = {
  id: 'sharon-dessau-tel-aviv',
  title: 'Dessau → Tel Aviv: Arieh Sharon and local modernism',
  origin: { scope: 'atlas', id: 'dessau' },
  destination: { scope: 'global', id: 'tel-aviv' },
  startYear: 1931,
  personRefs: [{ scope: 'global', id: 'arieh-sharon' }],
  mechanisms: ['study', 'return', 'reinterpretation'],
  sourceMovementIds: ['bauhaus'],
  destinationEntityIds: ['tel-aviv-modern-movement'],
  media: ['architecture', 'urbanism'],
  summary:
    'After studying at the Bauhaus in Dessau, Arieh Sharon returned to Tel Aviv and applied functionalist principles to housing and urban architecture during the city’s rapid 1930s growth.',
  transformationNote:
    'The result was not a direct copy of Bauhaus architecture: modernist principles were adapted to local climate, urban density and social housing requirements.',
  sourceIds: ['bauhaus-palestine-sharon', 'unesco-tel-aviv-white-city'],
};
