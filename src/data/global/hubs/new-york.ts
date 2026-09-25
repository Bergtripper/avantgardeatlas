import { GlobalHub } from '../types';

export const newYorkHub: GlobalHub = {
  id: 'new-york',
  name: 'New York',
  country: 'United States',
  latitude: 40.7128,
  longitude: -74.006,
  activeEras: [
    { start: 1915, end: 1921 },
    { start: 1938, end: 1940 },
  ],
  summary:
    'A major transatlantic avant-garde hub: New York developed an independent Dada circle around Marcel Duchamp and Man Ray in the late 1910s and later became an institutional center for the American reception of the Bauhaus through MoMA.',
  sourceIds: [
    'moma-dada-overview',
    'met-new-york-dada',
    'moma-herbert-bayer',
    'moma-bauhaus-1938',
  ],
};
