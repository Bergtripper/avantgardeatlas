import { geoNaturalEarth1, geoPath } from 'd3-geo';
import { feature } from 'topojson-client';
import worldAtlas from 'world-atlas/countries-110m.json';

export const GLOBAL_MAP = {
  width: 1000,
  height: 520,
} as const;

export const globalProjection = geoNaturalEarth1()
  .fitExtent(
    [[24, 24], [GLOBAL_MAP.width - 24, GLOBAL_MAP.height - 24]],
    { type: 'Sphere' },
  );

const topology = worldAtlas as any;
const landFeature = feature(topology, topology.objects.land) as any;

export const GLOBAL_BASEMAP_PATH = geoPath(globalProjection)(landFeature) ?? '';

export const projectGlobalCoordinate = (longitude: number, latitude: number) => {
  const projected = globalProjection([longitude, latitude]);

  if (!projected) {
    return { x: GLOBAL_MAP.width / 2, y: GLOBAL_MAP.height / 2 };
  }

  return { x: projected[0], y: projected[1] };
};
