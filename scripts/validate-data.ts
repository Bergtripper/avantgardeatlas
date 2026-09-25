import {
  ALL_CONNECTIONS,
  ALL_MOVEMENTS,
  ALL_OBJECTS,
  ALL_PEOPLE,
  ALL_PLACES,
  ALL_STORIES,
  getMovementById,
  getObjectById,
  getPersonById
} from '../src/data/index';

const errors: string[] = [];
const warnings: string[] = [];

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

checkUnique('Movement', ALL_MOVEMENTS.map((m) => m.id));
checkUnique('Person', ALL_PEOPLE.map((p) => p.id));
checkUnique('Object', ALL_OBJECTS.map((o) => o.id));
checkUnique('Place', ALL_PLACES.map((p) => p.id));
checkUnique('Story', ALL_STORIES.map((s) => s.id));

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

  for (const colour of movement.visualDna.colour.palette) {
    if (!/^#[0-9a-fA-F]{6}$/.test(colour.hex)) {
      errors.push(`Movement ${movement.id}: invalid colour hex "${colour.hex}"`);
    }
  }
}

for (const person of ALL_PEOPLE) {
  requireText(`Person ${person.id} name`, person.name);
  for (const movementId of person.primaryMovements) {
    if (!getMovementById(movementId)) {
      errors.push(`Person ${person.id}: unknown primaryMovements reference "${movementId}"`);
    }
  }
}

for (const object of ALL_OBJECTS) {
  requireText(`Object ${object.id} title`, object.title);
  if (!getMovementById(object.movementId)) {
    errors.push(`Object ${object.id}: unknown movementId "${object.movementId}"`);
  }
  if (!Number.isInteger(object.year) || object.year < 1800 || object.year > 2000) {
    errors.push(`Object ${object.id}: implausible year ${object.year}`);
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
  });
}

const movementIds = new Set(ALL_MOVEMENTS.map((m) => m.id));
for (const movementId of movementIds) {
  const movement = getMovementById(movementId);
  if (!movement) continue;

  for (const target of movement.influencesTo) {
    const hasConnection = ALL_CONNECTIONS.some((c) => c.source === movementId && c.target === target);
    if (!hasConnection) {
      warnings.push(`Movement ${movementId}: influencesTo "${target}" has no matching ALL_CONNECTIONS edge`);
    }
  }

  for (const source of movement.influencesFrom) {
    const hasConnection = ALL_CONNECTIONS.some((c) => c.source === source && c.target === movementId);
    if (!hasConnection) {
      warnings.push(`Movement ${movementId}: influencesFrom "${source}" has no matching ALL_CONNECTIONS edge`);
    }
  }
}

console.log(
  `Validated ${ALL_MOVEMENTS.length} movements, ${ALL_PEOPLE.length} people, ${ALL_OBJECTS.length} objects, ${ALL_PLACES.length} places, ${ALL_CONNECTIONS.length} connections and ${ALL_STORIES.length} stories.`
);

if (warnings.length) {
  console.warn(`\nWarnings (${warnings.length}):`);
  warnings.forEach((warning) => console.warn(`  - ${warning}`));
}

if (errors.length) {
  console.error(`\nData validation failed with ${errors.length} error(s):`);
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log('\nData validation passed.');
