import {
  ALL_CONNECTIONS,
  ALL_MOVEMENTS,
  ALL_OBJECTS,
  ALL_PEOPLE,
  ALL_PLACES,
  ALL_STORIES,
  getMovementById,
  getObjectById,
  getPersonById,
  getPlaceById
} from '../src/data/index';
import {
  ALL_DIFFUSION_ROUTES,
  ALL_GLOBAL_ENTITIES,
  ALL_GLOBAL_HISTORICAL_EVENTS,
  ALL_GLOBAL_HUBS,
  ALL_GLOBAL_PEOPLE,
  ALL_GLOBAL_SOURCES,
  getGlobalEntityById,
  getGlobalHistoricalEventById,
  getGlobalHubById,
  getGlobalPersonById,
  getGlobalSourceById
} from '../src/data/global';
import { ALL_SOURCES } from '../src/data/sources';

const errors: string[] = [];
const warnings: string[] = [];
const editorialBacklog: string[] = [];

const checkUnique = (label: string, ids: string[]) => {
  const seen = new Set<string>();
  for (const id of ids) {
    if (!id.trim()) errors.push(`${label}: empty id`);
    if (seen.has(id)) errors.push(`${label}: duplicate id "${id}"`);
    seen.add(id);
  }
};

const requireText = (label: string, value: string | undefined) => {
  if (!value || !value.trim()) errors.push(`${label}: missing required text`);
};

const isValidUrl = (value: string) => {
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

const validateMediaAsset = (label: string, asset: {
  id: string;
  alt: string;
  sourceType: 'hosted' | 'external' | 'iiif';
  sourceUrl: string;
  rightsStatus: string;
  imageUrl?: string;
  thumbnailUrl?: string;
  iiifManifestUrl?: string;
  iiifImageServiceUrl?: string;
  verified: boolean;
}) => {
  requireText(`${label} id`, asset.id);
  requireText(`${label} alt`, asset.alt);
  if (!isValidUrl(asset.sourceUrl)) {
    errors.push(`${label}: invalid sourceUrl "${asset.sourceUrl}"`);
  }
  for (const [field, value] of [
    ['imageUrl', asset.imageUrl],
    ['thumbnailUrl', asset.thumbnailUrl],
    ['iiifManifestUrl', asset.iiifManifestUrl],
    ['iiifImageServiceUrl', asset.iiifImageServiceUrl],
  ] as const) {
    if (value && !isValidUrl(value)) {
      errors.push(`${label}: invalid ${field} "${value}"`);
    }
  }
  if (asset.sourceType === 'hosted' && !asset.imageUrl) {
    errors.push(`${label}: hosted media requires imageUrl`);
  }
  if (asset.sourceType === 'iiif' && !asset.iiifManifestUrl && !asset.iiifImageServiceUrl) {
    errors.push(`${label}: IIIF media requires iiifManifestUrl or iiifImageServiceUrl`);
  }
  if (asset.rightsStatus === 'unknown-review-required' && asset.verified) {
    errors.push(`${label}: media with unknown rights cannot be marked verified`);
  }
};

const validateCollectionLink = (label: string, link: { institution: string; label: string; url: string }) => {
  requireText(`${label} institution`, link.institution);
  requireText(`${label} label`, link.label);
  if (!isValidUrl(link.url)) {
    errors.push(`${label}: invalid url "${link.url}"`);
  }
};

checkUnique('Movement', ALL_MOVEMENTS.map((m) => m.id));
checkUnique('Person', ALL_PEOPLE.map((p) => p.id));
checkUnique('Object', ALL_OBJECTS.map((o) => o.id));
checkUnique('Place', ALL_PLACES.map((p) => p.id));
checkUnique('Story', ALL_STORIES.map((s) => s.id));
checkUnique('Global hub', ALL_GLOBAL_HUBS.map((hub) => hub.id));
checkUnique('Global person', ALL_GLOBAL_PEOPLE.map((person) => person.id));
checkUnique('Global entity', ALL_GLOBAL_ENTITIES.map((entity) => entity.id));
checkUnique('Global historical event', ALL_GLOBAL_HISTORICAL_EVENTS.map((event) => event.id));
checkUnique('Diffusion route', ALL_DIFFUSION_ROUTES.map((route) => route.id));
checkUnique('Global source', ALL_GLOBAL_SOURCES.map((source) => source.id));
checkUnique('Unified source registry', ALL_SOURCES.map((source) => source.id));

for (const movement of ALL_MOVEMENTS) {
  requireText(`Movement ${movement.id} name`, movement.name);
  requireText(`Movement ${movement.id} summary`, movement.summary);

  if (movement.startYear > movement.endYear) {
    errors.push(`Movement ${movement.id}: startYear ${movement.startYear} is after endYear ${movement.endYear}`);
  }
  if (movement.startYear < 1800 || movement.endYear > 2000) {
    warnings.push(`Movement ${movement.id}: dates ${movement.startYear}—${movement.endYear} fall well outside the atlas core period`);
  }

  for (const personId of movement.keyPeople) {
    if (!getPersonById(personId)) {
      errors.push(`Movement ${movement.id}: unknown keyPeople reference "${personId}"`);
    }
  }

  for (const objectId of movement.keyWorks) {
    if (!getObjectById(objectId)) {
      errors.push(`Movement ${movement.id}: unknown keyWorks reference "${objectId}"`);
    }
  }

  for (const sourceId of movement.influencesFrom) {
    if (!getMovementById(sourceId)) {
      errors.push(`Movement ${movement.id}: unknown influencesFrom reference "${sourceId}"`);
    }
    if (sourceId === movement.id) {
      errors.push(`Movement ${movement.id}: cannot influence itself via influencesFrom`);
    }
  }

  for (const targetId of movement.influencesTo) {
    if (!getMovementById(targetId)) {
      errors.push(`Movement ${movement.id}: unknown influencesTo reference "${targetId}"`);
    }
    if (targetId === movement.id) {
      errors.push(`Movement ${movement.id}: cannot influence itself via influencesTo`);
    }
  }

  for (const [claimKey, evidence] of Object.entries(movement.provenance ?? {})) {
    if (!evidence || evidence.sourceIds.length === 0) {
      errors.push(`Movement ${movement.id} claim ${claimKey}: provenance has no sourceIds`);
      continue;
    }
    if (!evidence.status) {
      errors.push(`Movement ${movement.id} claim ${claimKey}: provenance has no evidence status`);
    }
    for (const sourceId of evidence.sourceIds) {
      if (!getGlobalSourceById(sourceId)) {
        errors.push(`Movement ${movement.id} claim ${claimKey}: unknown source "${sourceId}"`);
      }
    }
  }

  for (const colour of movement.visualDna.colour.palette) {
    if (!/^#[0-9a-fA-F]{6}$/.test(colour.hex)) {
      errors.push(`Movement ${movement.id}: invalid colour hex "${colour.hex}"`);
    }
  }

  movement.media?.representativeWorks?.forEach((asset, index) =>
    validateMediaAsset(`Movement ${movement.id} representativeWorks[${index}]`, asset),
  );
  movement.media?.externalCollections?.forEach((link, index) =>
    validateCollectionLink(`Movement ${movement.id} externalCollections[${index}]`, link),
  );
}

for (const person of ALL_PEOPLE) {
  requireText(`Person ${person.id} name`, person.name);
  for (const movementId of person.primaryMovements) {
    if (!getMovementById(movementId)) {
      errors.push(`Person ${person.id}: unknown primaryMovements reference "${movementId}"`);
    }
  }
  if (person.media?.portrait) {
    validateMediaAsset(`Person ${person.id} portrait`, person.media.portrait);
  }
  person.media?.externalCollections?.forEach((link, index) =>
    validateCollectionLink(`Person ${person.id} externalCollections[${index}]`, link),
  );
}

for (const object of ALL_OBJECTS) {
  requireText(`Object ${object.id} title`, object.title);
  if (!getMovementById(object.movementId)) {
    errors.push(`Object ${object.id}: unknown movementId "${object.movementId}"`);
  }
  if (!Number.isInteger(object.year) || object.year < 1800 || object.year > 2000) {
    errors.push(`Object ${object.id}: implausible year ${object.year}`);
  }

  if (object.media?.image) {
    validateMediaAsset(`Object ${object.id} image`, object.media.image);
  }
  object.media?.externalCollections?.forEach((link, index) =>
    validateCollectionLink(`Object ${object.id} externalCollections[${index}]`, link),
  );

  for (const [claimKey, evidence] of Object.entries(object.provenance ?? {})) {
    if (!evidence || evidence.sourceIds.length === 0) {
      errors.push(`Object ${object.id} claim ${claimKey}: provenance has no sourceIds`);
      continue;
    }
    if (!evidence.status) {
      errors.push(`Object ${object.id} claim ${claimKey}: provenance has no evidence status`);
    }
    for (const sourceId of evidence.sourceIds) {
      if (!getGlobalSourceById(sourceId)) {
        errors.push(`Object ${object.id} claim ${claimKey}: unknown source "${sourceId}"`);
      }
    }
  }
}


const connectionKeys = new Set<string>();
for (const connection of ALL_CONNECTIONS) {
  const key = `${connection.source}->${connection.target}`;

  if (connectionKeys.has(key)) {
    errors.push(`Connection: duplicate directed edge ${key}`);
  }
  connectionKeys.add(key);

  if (!getMovementById(connection.source)) {
    errors.push(`Connection ${key}: unknown source`);
  }
  if (!getMovementById(connection.target)) {
    errors.push(`Connection ${key}: unknown target`);
  }
  if (connection.source === connection.target) {
    errors.push(`Connection ${key}: self-connection is not allowed`);
  }
  if (![1, 2, 3].includes(connection.strength)) {
    errors.push(`Connection ${key}: strength must be 1, 2 or 3`);
  }
  requireText(`Connection ${key} rationale`, connection.rationale);
}

for (const place of ALL_PLACES) {
  requireText(`Place ${place.id} name`, place.name);

  if (place.latitude < -90 || place.latitude > 90) {
    errors.push(`Place ${place.id}: invalid latitude ${place.latitude}`);
  }
  if (place.longitude < -180 || place.longitude > 180) {
    errors.push(`Place ${place.id}: invalid longitude ${place.longitude}`);
  }
  if (place.activeEras.start > place.activeEras.end) {
    errors.push(`Place ${place.id}: active era start is after end`);
  }

  for (const movementId of place.activeMovements) {
    if (!getMovementById(movementId)) {
      errors.push(`Place ${place.id}: unknown activeMovements reference "${movementId}"`);
    }
  }
}

for (const story of ALL_STORIES) {
  requireText(`Story ${story.id} title`, story.title);
  const stepNumbers = story.steps.map((step) => step.stepNumber);

  if (new Set(stepNumbers).size !== stepNumbers.length) {
    errors.push(`Story ${story.id}: duplicate step numbers`);
  }

  story.steps.forEach((step, index) => {
    if (step.stepNumber !== index + 1) {
      warnings.push(`Story ${story.id}: step ${step.stepNumber} is not sequential at index ${index + 1}`);
    }

    for (const movementId of step.focalMovements) {
      if (!getMovementById(movementId)) {
        errors.push(`Story ${story.id} step ${step.stepNumber}: unknown focalMovements reference "${movementId}"`);
      }
    }
    for (const [claimKey, evidence] of Object.entries(step.provenance ?? {})) {
      if (!evidence || evidence.sourceIds.length === 0) {
        errors.push(
          `Story ${story.id} step ${step.stepNumber} claim ${claimKey}: provenance has no sourceIds`,
        );
        continue;
      }
      if (!evidence.status) {
        errors.push(
          `Story ${story.id} step ${step.stepNumber} claim ${claimKey}: provenance has no evidence status`,
        );
      }
      for (const sourceId of evidence.sourceIds) {
        if (!getGlobalSourceById(sourceId)) {
          errors.push(
            `Story ${story.id} step ${step.stepNumber} claim ${claimKey}: unknown source "${sourceId}"`,
          );
        }
      }
    }
  });
}


// Global diffusion map data
for (const source of ALL_GLOBAL_SOURCES) {
  requireText(`Global source ${source.id} title`, source.title);
  requireText(`Global source ${source.id} publisher`, source.publisher);
  try {
    new URL(source.url);
  } catch {
    errors.push(`Global source ${source.id}: invalid URL "${source.url}"`);
  }
}

for (const source of ALL_SOURCES) {
  if (source.usages.length === 0) {
    warnings.push(`Source ${source.id}: registered but not linked to any provenance-bearing record`);
  }
}

for (const hub of ALL_GLOBAL_HUBS) {
  requireText(`Global hub ${hub.id} name`, hub.name);
  if (hub.latitude < -90 || hub.latitude > 90) {
    errors.push(`Global hub ${hub.id}: invalid latitude ${hub.latitude}`);
  }
  if (hub.longitude < -180 || hub.longitude > 180) {
    errors.push(`Global hub ${hub.id}: invalid longitude ${hub.longitude}`);
  }
  for (const era of hub.activeEras) {
    if (era.start > era.end) {
      errors.push(`Global hub ${hub.id}: active era start is after end`);
    }
  }
  for (const sourceId of hub.sourceIds) {
    if (!getGlobalSourceById(sourceId)) {
      errors.push(`Global hub ${hub.id}: unknown source "${sourceId}"`);
    }
  }
}

for (const person of ALL_GLOBAL_PEOPLE) {
  requireText(`Global person ${person.id} name`, person.name);
  for (const sourceId of person.sourceIds) {
    if (!getGlobalSourceById(sourceId)) {
      errors.push(`Global person ${person.id}: unknown source "${sourceId}"`);
    }
  }
}

for (const event of ALL_GLOBAL_HISTORICAL_EVENTS) {
  requireText(`Global historical event ${event.id} title`, event.title);
  requireText(`Global historical event ${event.id} summary`, event.summary);
  if (!Number.isInteger(event.year) || event.year < 1800 || event.year > 2000) {
    errors.push(`Global historical event ${event.id}: implausible year ${event.year}`);
  }
  for (const sourceId of event.sourceIds) {
    if (!getGlobalSourceById(sourceId)) {
      errors.push(`Global historical event ${event.id}: unknown source "${sourceId}"`);
    }
  }
}

for (const entity of ALL_GLOBAL_ENTITIES) {
  requireText(`Global entity ${entity.id} name`, entity.name);
  if (entity.placeRef) {
    const exists = entity.placeRef.scope === 'atlas'
      ? Boolean(getPlaceById(entity.placeRef.id))
      : Boolean(getGlobalHubById(entity.placeRef.id));
    if (!exists) {
      errors.push(`Global entity ${entity.id}: unknown ${entity.placeRef.scope} place "${entity.placeRef.id}"`);
    }
  } else if (entity.hubId) {
    if (!getGlobalHubById(entity.hubId)) {
      errors.push(`Global entity ${entity.id}: unknown hub "${entity.hubId}"`);
    }
  } else {
    errors.push(`Global entity ${entity.id}: missing hubId/placeRef`);
  }
  if (entity.endYear !== undefined && entity.startYear > entity.endYear) {
    errors.push(`Global entity ${entity.id}: startYear is after endYear`);
  }
  for (const movementId of entity.movementLinks) {
    if (!getMovementById(movementId)) {
      errors.push(`Global entity ${entity.id}: unknown movement "${movementId}"`);
    }
  }
  for (const sourceId of entity.sourceIds) {
    if (!getGlobalSourceById(sourceId)) {
      errors.push(`Global entity ${entity.id}: unknown source "${sourceId}"`);
    }
  }
}

for (const route of ALL_DIFFUSION_ROUTES) {
  requireText(`Diffusion route ${route.id} title`, route.title);
  if (route.endYear !== undefined && route.startYear > route.endYear) {
    errors.push(`Diffusion route ${route.id}: startYear is after endYear`);
  }

  for (const [label, place] of [
    ['origin', route.origin],
    ['destination', route.destination],
  ] as const) {
    const exists = place.scope === 'atlas'
      ? Boolean(getPlaceById(place.id))
      : Boolean(getGlobalHubById(place.id));
    if (!exists) {
      errors.push(`Diffusion route ${route.id}: unknown ${label} ${place.scope} place "${place.id}"`);
    }
  }

  for (const person of route.personRefs) {
    const exists = person.scope === 'atlas'
      ? Boolean(getPersonById(person.id))
      : Boolean(getGlobalPersonById(person.id));
    if (!exists) {
      errors.push(`Diffusion route ${route.id}: unknown ${person.scope} person "${person.id}"`);
    }
  }

  for (const movementId of route.sourceMovementIds) {
    if (!getMovementById(movementId)) {
      errors.push(`Diffusion route ${route.id}: unknown movement "${movementId}"`);
    }
  }

  for (const contextId of route.historicalContextIds ?? []) {
    if (!getGlobalHistoricalEventById(contextId)) {
      errors.push(`Diffusion route ${route.id}: unknown historical context "${contextId}"`);
    }
  }

  if (route.primaryMechanism && !route.mechanisms.includes(route.primaryMechanism)) {
    errors.push(
      `Diffusion route ${route.id}: primary mechanism "${route.primaryMechanism}" is not listed in mechanisms`,
    );
  }

  for (const entityId of route.transmissionEntityIds ?? []) {
    if (!getGlobalEntityById(entityId)) {
      errors.push(`Diffusion route ${route.id}: unknown transmission entity "${entityId}"`);
    }
  }

  for (const entityId of route.destinationEntityIds) {
    if (!getGlobalEntityById(entityId)) {
      errors.push(`Diffusion route ${route.id}: unknown destination entity "${entityId}"`);
    }
  }

  for (const sourceId of route.sourceIds) {
    if (!getGlobalSourceById(sourceId)) {
      errors.push(`Diffusion route ${route.id}: unknown source "${sourceId}"`);
    }
  }

  if (!route.evidenceStatus) {
    warnings.push(`Diffusion route ${route.id}: route evidence status has not been reviewed yet`);
  }
  if (!route.transformationEvidenceStatus) {
    warnings.push(
      `Diffusion route ${route.id}: transformation note evidence status has not been reviewed yet`,
    );
  }
}


/* Editorial coverage audit: provenance may be partial by design, but the
   validator should make coverage gaps visible without blocking publication. */
const movementEditorialClaimKeys = [
  'summary',
  'coreIdeas',
  'historicalContext',
  'architectureNotes',
  'graphicDesignNotes',
  'industryRelationship',
] as const;

const movementCoveredClaims = ALL_MOVEMENTS.reduce(
  (total, movement) =>
    total +
    movementEditorialClaimKeys.filter((claimKey) => Boolean(movement.provenance?.[claimKey])).length,
  0,
);
const movementTotalClaims = ALL_MOVEMENTS.length * movementEditorialClaimKeys.length;
const movementMissingClaims = ALL_MOVEMENTS
  .map((movement) => ({
    id: movement.id,
    missing: movementEditorialClaimKeys.filter((claimKey) => !movement.provenance?.[claimKey]),
  }))
  .filter((entry) => entry.missing.length > 0);

editorialBacklog.push(
  `Movement specialist-note provenance: ${movementCoveredClaims}/${movementTotalClaims} total claim fields (${Math.round((movementCoveredClaims / movementTotalClaims) * 100)}%).` +
    (movementMissingClaims.length
      ? ` Remaining optional/specialist fields: ${movementMissingClaims
          .map((entry) => `${entry.id} [${entry.missing.join(', ')}]`)
          .join('; ')}.`
      : ' All movement claim fields are sourced.'),
);

const movementNarrativeClaimKeys = ['summary', 'coreIdeas', 'historicalContext'] as const;
const movementNarrativeCovered = ALL_MOVEMENTS.reduce(
  (total, movement) =>
    total +
    movementNarrativeClaimKeys.filter((claimKey) => Boolean(movement.provenance?.[claimKey])).length,
  0,
);
const movementNarrativeTotal = ALL_MOVEMENTS.length * movementNarrativeClaimKeys.length;
const movementNarrativeMissing = ALL_MOVEMENTS
  .map((movement) => ({
    id: movement.id,
    missing: movementNarrativeClaimKeys.filter((claimKey) => !movement.provenance?.[claimKey]),
  }))
  .filter((entry) => entry.missing.length > 0);

console.log(
  `Publication-critical movement narrative coverage: ${movementNarrativeCovered}/${movementNarrativeTotal} (${Math.round((movementNarrativeCovered / movementNarrativeTotal) * 100)}%).` +
    (movementNarrativeMissing.length
      ? ` Missing: ${movementNarrativeMissing.map((entry) => `${entry.id} [${entry.missing.join(', ')}]`).join('; ')}.`
      : ' All movement summaries, core ideas and historical contexts are sourced.'),
);

const objectEditorialClaimKeys = ['description', 'significance'] as const;
const objectCoveredClaims = ALL_OBJECTS.reduce(
  (total, object) =>
    total +
    objectEditorialClaimKeys.filter((claimKey) => Boolean(object.provenance?.[claimKey])).length,
  0,
);
const objectTotalClaims = ALL_OBJECTS.length * objectEditorialClaimKeys.length;
const objectMissingClaims = ALL_OBJECTS
  .map((object) => ({
    id: object.id,
    missing: objectEditorialClaimKeys.filter((claimKey) => !object.provenance?.[claimKey]),
  }))
  .filter((entry) => entry.missing.length > 0);

editorialBacklog.push(
  `Object claim provenance: ${objectCoveredClaims}/${objectTotalClaims} core claim fields (${Math.round((objectCoveredClaims / objectTotalClaims) * 100)}%).` +
    (objectMissingClaims.length
      ? ` Remaining objects: ${objectMissingClaims
          .map((entry) => `${entry.id} [${entry.missing.join(', ')}]`)
          .join('; ')}.`
      : ' All core object claims are sourced.'),
);

const storyStepRecords = ALL_STORIES.flatMap((story) =>
  story.steps.map((step) => ({ storyId: story.id, step })),
);
const sourcedStorySteps = storyStepRecords.filter(({ step }) => Boolean(step.provenance?.text)).length;
const unsourcedStorySteps = storyStepRecords
  .filter(({ step }) => !step.provenance?.text)
  .map(({ storyId, step }) => `${storyId}#${step.stepNumber}`);
console.log(
  `Story narrative provenance: ${sourcedStorySteps}/${storyStepRecords.length} text claims (${storyStepRecords.length ? Math.round((sourcedStorySteps / storyStepRecords.length) * 100) : 100}%).` +
    (unsourcedStorySteps.length ? ` Unsourced steps: ${unsourcedStorySteps.join(', ')}.` : ' All story text steps are sourced.'),
);

const incompletePeople = ALL_PEOPLE.filter(
  (person) =>
    !person.years.trim() ||
    !person.birthCity.trim() ||
    !person.biography.trim() ||
    person.primaryMovements.length === 0 ||
    person.keyDisciplines.length === 0,
);
if (incompletePeople.length) {
  warnings.push(
    `People editorial completeness: ${incompletePeople.length} record(s) need biography/date/location/movement/discipline review: ${incompletePeople
      .map((person) => person.id)
      .join(', ')}.`,
  );
}

/* Cross-registry editorial consistency checks. These are warnings because
   association does not always imply featured status, but mismatches should be reviewed. */
for (const movement of ALL_MOVEMENTS) {
  for (const personId of movement.keyPeople) {
    const person = getPersonById(personId);
    if (person && !person.primaryMovements.includes(movement.id)) {
      warnings.push(
        `Cross-registry: movement ${movement.id} lists ${personId} as keyPeople, but the person does not list ${movement.id} in primaryMovements`,
      );
    }
  }

  for (const objectId of movement.keyWorks) {
    const object = getObjectById(objectId);
    if (object && object.movementId !== movement.id) {
      errors.push(
        `Cross-registry: movement ${movement.id} lists ${objectId} as keyWorks, but object movementId is ${object.movementId}`,
      );
    }
  }
}

console.log(
  `Validated ${ALL_MOVEMENTS.length} movements, ${ALL_PEOPLE.length} people, ${ALL_OBJECTS.length} objects, ${ALL_PLACES.length} places, ${ALL_CONNECTIONS.length} connections, ${ALL_STORIES.length} stories, ${ALL_GLOBAL_HUBS.length} global hubs, ${ALL_GLOBAL_ENTITIES.length} global entities, ${ALL_GLOBAL_HISTORICAL_EVENTS.length} historical events and ${ALL_DIFFUSION_ROUTES.length} diffusion routes, with ${ALL_SOURCES.length} sources in the unified provenance register.`
);

if (warnings.length) {
  console.warn(`\nWarnings (${warnings.length}):`);
  warnings.forEach((warning) => console.warn(`  - ${warning}`));
}

if (editorialBacklog.length) {
  console.log(`\nEditorial backlog (${editorialBacklog.length}):`);
  editorialBacklog.forEach((item) => console.log(`  - ${item}`));
}

if (errors.length) {
  console.error(`\nData validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log('\nData validation passed.');
