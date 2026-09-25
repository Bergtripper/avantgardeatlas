import { politicalFracture1933 } from './1933-political-fracture';

export { politicalFracture1933 };

export const ALL_GLOBAL_HISTORICAL_EVENTS = [politicalFracture1933];

export const globalHistoricalEventsRegistry = Object.fromEntries(
  ALL_GLOBAL_HISTORICAL_EVENTS.map((event) => [event.id, event]),
);

export const getGlobalHistoricalEventById = (id: string) =>
  globalHistoricalEventsRegistry[id];
