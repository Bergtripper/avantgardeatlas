import { chicagoHub } from './chicago';
import { montevideoHub } from './montevideo';
import { tokyoHub } from './tokyo';

export { chicagoHub, montevideoHub, tokyoHub };

export const ALL_GLOBAL_HUBS = [tokyoHub, chicagoHub, montevideoHub];

export const globalHubsRegistry = Object.fromEntries(
  ALL_GLOBAL_HUBS.map((hub) => [hub.id, hub]),
);

export const getGlobalHubById = (id: string) => globalHubsRegistry[id];
