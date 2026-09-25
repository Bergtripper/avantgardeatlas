import { bauhausNewBauhausChicago } from './bauhaus-new-bauhaus-chicago';
import { kanagawaMurayama2011 } from './kanagawa-murayama-2011';
import { momaTorresGarcia } from './moma-torres-garcia';
import { princetonMavo } from './princeton-mavo';

export {
  bauhausNewBauhausChicago,
  kanagawaMurayama2011,
  momaTorresGarcia,
  princetonMavo,
};

export const ALL_GLOBAL_SOURCES = [
  kanagawaMurayama2011,
  princetonMavo,
  bauhausNewBauhausChicago,
  momaTorresGarcia,
];

export const globalSourcesRegistry = Object.fromEntries(
  ALL_GLOBAL_SOURCES.map((source) => [source.id, source]),
);

export const getGlobalSourceById = (id: string) => globalSourcesRegistry[id];
