import { DiffusionRoute } from '../types';

export const meyerBergnerDessauMexicoCityRoute: DiffusionRoute = {
  id: 'meyer-bergner-dessau-mexico-city',
  title: 'Bauhaus / exile → Mexico City: Meyer and Bergner',
  origin: { scope: 'atlas', id: 'dessau' },
  destination: { scope: 'global', id: 'mexico-city' },
  startYear: 1939,
  personRefs: [
    { scope: 'atlas', id: 'hannes-meyer' },
    { scope: 'global', id: 'lena-bergner' },
  ],
  mechanisms: ['exile', 'migration', 'institution-transfer'],
  sourceMovementIds: ['bauhaus'],
  destinationEntityIds: [],
  media: ['architecture', 'education', 'graphic-design', 'publishing'],
  summary:
    'Hannes Meyer and Lena Bergner reached Mexico in 1939 after the Bauhaus and Soviet phases of their careers. The route represents the transfer of Bauhaus-linked methods through political displacement, not a literal nonstop journey from Dessau.',
  transformationNote:
    'Mexico became the setting for later architectural, educational and visual-communication work, including Bergner’s graphic practice and projects developed with Meyer. The 1939 route marks the beginning of that exile context within the Atlas period.',
  sourceIds: ['bauhaus-bergner-mexico'],
};
