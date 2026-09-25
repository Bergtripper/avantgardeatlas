import { CulturalCity } from '../../types/atlas';

export const viennaPlace: CulturalCity = {
  id: 'vienna',
  name: 'Vienna',
  country: 'Austria',
  latitude: 48.2082,
  longitude: 16.3738,
  activeEras: { start: 1897, end: 1934 },
  activeMovements: ['vienna-secession', 'art-nouveau', 'neue-sachlichkeit'],
  historicalNotes: 'Imperial metropolis where Klimt, Hoffmann, and Wagner revolted against academic historicism, establishing the Wiener Werkstätte and Red Vienna public housing.',
  keyInstitutions: ['Secession Exhibition Pavilion', 'Wiener Werkstätte', 'Karl-Marx-Hof municipal estate']
};
