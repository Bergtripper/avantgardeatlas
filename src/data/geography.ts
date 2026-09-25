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


export type GeoPoint = readonly [longitude: number, latitude: number];

export interface EuropeLandmass {
  id: string;
  points: GeoPoint[];
}

// Deliberately simplified editorial basemap. Coordinates are geographic and
// pass through the same projection as the cultural hubs, so the underlay and
// city positions remain aligned while retaining the atlas's graphic language.
export const EUROPE_LANDMASSES: EuropeLandmass[] = [
  {
    id: 'continental-europe',
    points: [
      [-4.5, 48.6], [-1.5, 49.8], [2.0, 51.0], [4.6, 53.5], [8.0, 54.8],
      [12.5, 54.9], [15.5, 54.5], [19.0, 54.8], [22.5, 56.0], [27.0, 56.8],
      [31.0, 56.0], [35.0, 55.2], [39.0, 53.0], [41.0, 50.5], [39.5, 48.0],
      [36.5, 46.0], [32.0, 45.2], [28.0, 44.5], [24.0, 44.0], [20.0, 44.5],
      [17.0, 45.3], [14.0, 45.7], [12.0, 46.5], [10.5, 47.5], [8.0, 48.0],
      [6.0, 47.7], [4.0, 48.5], [1.5, 48.9], [-1.0, 48.6], [-4.5, 48.6],
    ],
  },
  {
    id: 'italian-peninsula',
    points: [
      [7.2, 45.8], [9.5, 45.6], [11.8, 44.8], [13.0, 43.9], [14.5, 43.0],
      [16.0, 42.4], [17.4, 41.3], [16.7, 40.2], [15.2, 40.5], [13.8, 41.8],
      [12.3, 42.7], [11.0, 43.6], [9.8, 44.0], [8.5, 44.8], [7.2, 45.8],
    ],
  },
  {
    id: 'great-britain',
    points: [
      [-4.8, 50.0], [-3.0, 51.0], [-2.0, 52.5], [-3.2, 54.0], [-4.8, 55.4],
      [-3.8, 57.0], [-1.8, 56.0], [-0.5, 54.5], [0.5, 52.0], [-1.2, 50.5],
      [-4.8, 50.0],
    ],
  },
];

export const projectCoordinate = (longitude: number, latitude: number) => ({
  x: projectLongitude(longitude),
  y: projectLatitude(latitude),
});

export const toSvgPolygonPoints = (points: GeoPoint[]) =>
  points
    .map(([longitude, latitude]) => {
      const point = projectCoordinate(longitude, latitude);
      return `${point.x},${point.y}`;
    })
    .join(' ');
