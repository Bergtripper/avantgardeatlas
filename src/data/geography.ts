import { CulturalCity } from '../types/atlas';

export const EUROPE_MAP = {
  width: 800,
  height: 520,
  paddingX: 48,
  paddingY: 40,
  minLongitude: -5,
  maxLongitude: 42,
  minLatitude: 43,
  maxLatitude: 58,
} as const;

export interface GeographyConnection {
  source: string;
  target: string;
  label: string;
}

export const GEOGRAPHY_CONNECTIONS: GeographyConnection[] = [
  { source: 'paris', target: 'berlin', label: 'Paris ↔ Berlin' },
  { source: 'berlin', target: 'moscow', label: 'Berlin ↔ Moscow' },
  { source: 'paris', target: 'zurich', label: 'Paris ↔ Zurich' },
  { source: 'zurich', target: 'vienna', label: 'Zurich ↔ Vienna' },
  { source: 'berlin', target: 'milan', label: 'Berlin ↔ Milan' },
  { source: 'rotterdam', target: 'utrecht', label: 'Rotterdam ↔ Utrecht' },
  { source: 'weimar', target: 'dessau', label: 'Weimar ↔ Dessau' },
  { source: 'moscow', target: 'vitebsk', label: 'Moscow ↔ Vitebsk' },
  { source: 'milan', target: 'como', label: 'Milan ↔ Como' },
];

const usableWidth = EUROPE_MAP.width - EUROPE_MAP.paddingX * 2;
const usableHeight = EUROPE_MAP.height - EUROPE_MAP.paddingY * 2;

export const projectPlace = (place: Pick<CulturalCity, 'latitude' | 'longitude'>) => {
  const x =
    EUROPE_MAP.paddingX +
    ((place.longitude - EUROPE_MAP.minLongitude) /
      (EUROPE_MAP.maxLongitude - EUROPE_MAP.minLongitude)) *
      usableWidth;

  const y =
    EUROPE_MAP.paddingY +
    ((EUROPE_MAP.maxLatitude - place.latitude) /
      (EUROPE_MAP.maxLatitude - EUROPE_MAP.minLatitude)) *
      usableHeight;

  return { x, y };
};

export const LONGITUDE_TICKS = [0, 10, 20, 30, 40] as const;
export const LATITUDE_TICKS = [45, 50, 55] as const;

export const projectLongitude = (longitude: number) =>
  EUROPE_MAP.paddingX +
  ((longitude - EUROPE_MAP.minLongitude) /
    (EUROPE_MAP.maxLongitude - EUROPE_MAP.minLongitude)) *
    usableWidth;

export const projectLatitude = (latitude: number) =>
  EUROPE_MAP.paddingY +
  ((EUROPE_MAP.maxLatitude - latitude) /
    (EUROPE_MAP.maxLatitude - EUROPE_MAP.minLatitude)) *
    usableHeight;
