import { GlobalHub } from '../types';

export const newYorkHub: GlobalHub = {
  id: 'new-york',
  name: 'New York',
  country: 'United States',
  latitude: 40.7128,
  longitude: -74.006,
  activeEras: [{ start: 1938, end: 1940 }],
  summary:
    'A key institutional and exhibition hub for the American reception of the Bauhaus, especially through MoMA and émigré designers such as Herbert Bayer.',
  sourceIds: ['moma-herbert-bayer', 'moma-bauhaus-1938'],
};
