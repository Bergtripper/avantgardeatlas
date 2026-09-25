import { CulturalCity } from '../../types/atlas';
import { weimarPlace } from './weimar';
import { dessauPlace } from './dessau';
import { berlinPlace } from './berlin';
import { parisPlace } from './paris';
import { moscowPlace } from './moscow';
import { vitebskPlace } from './vitebsk';
import { viennaPlace } from './vienna';
import { zurichPlace } from './zurich';
import { milanPlace } from './milan';
import { comoPlace } from './como';
import { rotterdamPlace } from './rotterdam';
import { utrechtPlace } from './utrecht';
import { stuttgartPlace } from './stuttgart';

export {
  weimarPlace,
  dessauPlace,
  berlinPlace,
  parisPlace,
  moscowPlace,
  vitebskPlace,
  viennaPlace,
  zurichPlace,
  milanPlace,
  comoPlace,
  rotterdamPlace,
  utrechtPlace,
  stuttgartPlace
};

export const ALL_PLACES: CulturalCity[] = [
  parisPlace,
  berlinPlace,
  weimarPlace,
  dessauPlace,
  moscowPlace,
  vitebskPlace,
  viennaPlace,
  zurichPlace,
  milanPlace,
  comoPlace,
  rotterdamPlace,
  utrechtPlace,
  stuttgartPlace
];

export const placesRegistry: Record<string, CulturalCity> = Object.fromEntries(
  ALL_PLACES.map((p) => [p.id, p])
);

export const getPlaceById = (id: string): CulturalCity | undefined => {
  return placesRegistry[id] || ALL_PLACES.find((p) => p.id === id);
};
