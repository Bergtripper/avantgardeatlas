import { DiffusionRoute } from '../types';

export const moholyNagyDessauChicagoRoute: DiffusionRoute = {
  id: 'moholy-nagy-dessau-chicago',
  title: 'Dessau → Chicago: Moholy-Nagy and the New Bauhaus',
  origin: { scope: 'atlas', id: 'dessau' },
  destination: { scope: 'global', id: 'chicago' },
  startYear: 1937,
  personRefs: [{ scope: 'atlas', id: 'laszlo-moholy-nagy' }],
  mechanisms: ['exile', 'migration', 'institution-transfer'],
  sourceMovementIds: ['bauhaus'],
  destinationEntityIds: ['new-bauhaus-chicago'],
  media: ['education', 'photography', 'graphic-design', 'exhibition-design'],
  summary:
    'Moholy-Nagy carried Bauhaus pedagogy into the United States and founded the New Bauhaus in Chicago in 1937.',
  transformationNote:
    'The Bauhaus model was transplanted into an American industrial and commercial environment rather than reproduced unchanged.',
  sourceIds: ['bauhaus-new-bauhaus-chicago'],
};
