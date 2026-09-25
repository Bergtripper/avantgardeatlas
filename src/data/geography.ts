import { geoMercator, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldAtlas from 'world-atlas/countries-110m.json';
import { CulturalCity } from '../types/atlas';

export const EUROPE_MAP = {
  width: 800,
  height: 520,
  paddingX: 48,
  paddingY: 40,
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

const EUROPE_CENTER: [number, number] = [18.5, 50.5];

export const europeProjection = geoMercator()
  .center(EUROPE_CENTER)
  .scale(720)
  .translate([EUROPE_MAP.width / 2, EUROPE_MAP.height / 2])
  .clipExtent([
    [0, 0],
    [EUROPE_MAP.width, EUROPE_MAP.height],
  ]);

const topology = worldAtlas as any;
const landFeature = feature(topology, topology.objects.land) as any;

export const EUROPE_BASEMAP_PATH = geoPath(europeProjection)(landFeature) ?? '';

export const projectCoordinate = (longitude: number, latitude: number) => {
  const projected = europeProjection([longitude, latitude]);

  if (!projected) {
    return { x: EUROPE_MAP.width / 2, y: EUROPE_MAP.height / 2 };
  }

  return { x: projected[0], y: projected[1] };
};

export const projectPlace = (
  place: Pick<CulturalCity, 'latitude' | 'longitude'>,
) => projectCoordinate(place.longitude, place.latitude);

export const LONGITUDE_TICKS = [0, 10, 20, 30, 40] as const;
export const LATITUDE_TICKS = [45, 50, 55] as const;

export const projectLongitude = (longitude: number) =>
  projectCoordinate(longitude, EUROPE_CENTER[1]).x;

export const projectLatitude = (latitude: number) =>
  projectCoordinate(EUROPE_CENTER[0], latitude).y;
