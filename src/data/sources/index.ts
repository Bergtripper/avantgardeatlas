import {
  ALL_DIFFUSION_ROUTES,
  ALL_GLOBAL_ENTITIES,
  ALL_GLOBAL_HISTORICAL_EVENTS,
  ALL_GLOBAL_HUBS,
  ALL_GLOBAL_PEOPLE,
  ALL_GLOBAL_SOURCES,
  getGlobalSourceById,
} from '../global';
import { AtlasSourceRecord, SourceUsageRef } from './types';

const usagesForSource = (sourceId: string): SourceUsageRef[] => {
  const usages: SourceUsageRef[] = [];

  ALL_DIFFUSION_ROUTES.forEach((route) => {
    if (route.sourceIds.includes(sourceId)) {
      usages.push({ kind: 'route', id: route.id, label: route.title });
    }
  });

  ALL_GLOBAL_ENTITIES.forEach((entity) => {
    if (entity.sourceIds.includes(sourceId)) {
      usages.push({ kind: 'entity', id: entity.id, label: entity.name });
    }
  });

  ALL_GLOBAL_PEOPLE.forEach((person) => {
    if (person.sourceIds.includes(sourceId)) {
      usages.push({ kind: 'person', id: person.id, label: person.name });
    }
  });

  ALL_GLOBAL_HUBS.forEach((hub) => {
    if (hub.sourceIds.includes(sourceId)) {
      usages.push({ kind: 'hub', id: hub.id, label: hub.name });
    }
  });

  ALL_GLOBAL_HISTORICAL_EVENTS.forEach((event) => {
    if (event.sourceIds.includes(sourceId)) {
      usages.push({ kind: 'event', id: event.id, label: event.title });
    }
  });

  return usages;
};

export const ALL_SOURCES: AtlasSourceRecord[] = ALL_GLOBAL_SOURCES.map((source) => ({
  ...source,
  scope: 'global',
  usages: usagesForSource(source.id),
}));

export const sourceRegistry: Record<string, AtlasSourceRecord> = Object.fromEntries(
  ALL_SOURCES.map((source) => [source.id, source]),
);

export const getSourceById = (id: string): AtlasSourceRecord | undefined =>
  sourceRegistry[id] ??
  (getGlobalSourceById(id)
    ? {
        ...getGlobalSourceById(id)!,
        scope: 'global',
        usages: usagesForSource(id),
      }
    : undefined);

export * from './types';
