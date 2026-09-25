import { barcelonaHub } from './barcelona';
import { buenosAiresHub } from './buenos-aires';
import { chicagoHub } from './chicago';
import { leidenHub } from './leiden';
import { mexicoCityHub } from './mexico-city';
import { montevideoHub } from './montevideo';
import { newYorkHub } from './new-york';
import { roveretoHub } from './rovereto';
import { telAvivHub } from './tel-aviv';
import { tokyoHub } from './tokyo';

export {
  barcelonaHub,
  buenosAiresHub,
  chicagoHub,
  leidenHub,
  mexicoCityHub,
  montevideoHub,
  newYorkHub,
  roveretoHub,
  telAvivHub,
  tokyoHub,
};

export const ALL_GLOBAL_HUBS = [
  barcelonaHub,
  leidenHub,
  tokyoHub,
  chicagoHub,
  montevideoHub,
  mexicoCityHub,
  roveretoHub,
  telAvivHub,
  newYorkHub,
  buenosAiresHub,
];

export const globalHubsRegistry = Object.fromEntries(
  ALL_GLOBAL_HUBS.map((hub) => [hub.id, hub]),
);

export const getGlobalHubById = (id: string) => globalHubsRegistry[id];
