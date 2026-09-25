import { buenosAiresHub } from './buenos-aires';
import { chicagoHub } from './chicago';
import { montevideoHub } from './montevideo';
import { newYorkHub } from './new-york';
import { telAvivHub } from './tel-aviv';
import { tokyoHub } from './tokyo';

export {
  buenosAiresHub,
  chicagoHub,
  montevideoHub,
  newYorkHub,
  telAvivHub,
  tokyoHub,
};

export const ALL_GLOBAL_HUBS = [
  tokyoHub,
  chicagoHub,
  montevideoHub,
  telAvivHub,
  newYorkHub,
  buenosAiresHub,
];

export const globalHubsRegistry = Object.fromEntries(
  ALL_GLOBAL_HUBS.map((hub) => [hub.id, hub]),
);

export const getGlobalHubById = (id: string) => globalHubsRegistry[id];
