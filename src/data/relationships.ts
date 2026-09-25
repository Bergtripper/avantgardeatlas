import { Movement, MovementId, HistoricalFigure, ArchivalObject, NetworkConnection } from '../types/atlas';
import { ALL_MOVEMENTS, getMovementById } from './movements';
import { ALL_PEOPLE, getPersonById } from './people';
import { ALL_OBJECTS, getObjectById } from './objects';
import { ALL_CONNECTIONS } from './connections';

/**
 * Format a movement's active date range into an archival em-dash period string
 */
export function formatMovementPeriod(startYear: number, endYear: number): string {
  return `${startYear}—${endYear}`;
}

/**
 * Resolve full HistoricalFigure records for a movement's keyPeople IDs
 */
export function getPeopleForMovement(movementId: MovementId | string): HistoricalFigure[] {
  const movement = getMovementById(movementId);
  if (!movement) return [];

  // First resolve by explicit keyPeople IDs in the movement
  const peopleFromIds = movement.keyPeople
    .map((id) => getPersonById(id))
    .filter((p): p is HistoricalFigure => p !== undefined);

  if (peopleFromIds.length > 0) {
    return peopleFromIds;
  }

  // Fallback: search people whose primaryMovements include this movementId
  return ALL_PEOPLE.filter((p) => p.primaryMovements.includes(movement.id));
}

/**
 * Resolve full ArchivalObject records for a movement's keyWorks IDs
 */
export function getObjectsForMovement(movementId: MovementId | string): ArchivalObject[] {
  const movement = getMovementById(movementId);
  if (!movement) return [];

  // First resolve by explicit keyWorks IDs in the movement
  const objectsFromIds = movement.keyWorks
    .map((id) => getObjectById(id))
    .filter((o): o is ArchivalObject => o !== undefined);

  if (objectsFromIds.length > 0) {
    return objectsFromIds;
  }

  // Fallback: search objects whose movementId matches
  return ALL_OBJECTS.filter((o) => o.movementId === movement.id);
}

/**
 * Retrieve all movements associated with a given historical person
 */
export function getMovementsForPerson(personId: string): Movement[] {
  const person = getPersonById(personId);
  return ALL_MOVEMENTS.filter((m) => {
    const isExplicitKey = m.keyPeople.includes(personId) || (person && m.keyPeople.includes(person.id));
    const isPrimary = person && person.primaryMovements.includes(m.id);
    return isExplicitKey || isPrimary;
  });
}

/**
 * Retrieve the movement(s) associated with an archival object
 */
export function getMovementsForObject(objectId: string): Movement[] {
  const obj = getObjectById(objectId);
  return ALL_MOVEMENTS.filter((m) => {
    const isExplicitKey = m.keyWorks.includes(objectId) || (obj && m.keyWorks.includes(obj.id));
    const matchesMovementId = obj && m.id === obj.movementId;
    return isExplicitKey || matchesMovementId;
  });
}

export { getConnectionsForMovement } from './connections';

/**
 * Resolve direct precursor (influencesFrom) and descendant (influencesTo) movements
 */
export function getRelatedMovements(movementId: MovementId | string): {
  incoming: Movement[];
  outgoing: Movement[];
} {
  const movement = getMovementById(movementId);
  if (!movement) {
    return { incoming: [], outgoing: [] };
  }

  const incoming = movement.influencesFrom
    .map((id) => getMovementById(id))
    .filter((m): m is Movement => m !== undefined);

  const outgoing = movement.influencesTo
    .map((id) => getMovementById(id))
    .filter((m): m is Movement => m !== undefined);

  return { incoming, outgoing };
}
