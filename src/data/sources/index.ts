import {
  ALL_DIFFUSION_ROUTES,
  ALL_GLOBAL_ENTITIES,
  ALL_GLOBAL_HISTORICAL_EVENTS,
  ALL_GLOBAL_HUBS,
  ALL_GLOBAL_PEOPLE,
  ALL_GLOBAL_SOURCES,
  getGlobalSourceById,
} from '../global';
import { ALL_MOVEMENTS } from '../movements';
import { ALL_OBJECTS } from '../objects';
import { ALL_STORIES } from '../stories';
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

  ALL_MOVEMENTS.forEach((movement) => {
    Object.entries(movement.provenance ?? {}).forEach(([claimKey, evidence]) => {
      if (evidence?.sourceIds.includes(sourceId)) {
        usages.push({
          kind: 'movement-claim',
          id: `${movement.id}:${claimKey}`,
          label: `${movement.name} // ${claimKey}`,
        });
      }
    });
  });

  ALL_OBJECTS.forEach((object) => {
    Object.entries(object.provenance ?? {}).forEach(([claimKey, evidence]) => {
      if (evidence?.sourceIds.includes(sourceId)) {
        usages.push({
          kind: 'object-claim',
          id: `${object.id}:${claimKey}`,
          label: `${object.title} // ${claimKey}`,
        });
      }
    });
  });

  ALL_STORIES.forEach((story) => {
    story.steps.forEach((step) => {
      Object.entries(step.provenance ?? {}).forEach(([claimKey, evidence]) => {
        if (evidence?.sourceIds.includes(sourceId)) {
          usages.push({
            kind: 'story-step-claim',
            id: `${story.id}:${step.stepNumber}:${claimKey}`,
            label: `${story.title} // step ${step.stepNumber} // ${claimKey}`,
          });
        }
      });
    });
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
