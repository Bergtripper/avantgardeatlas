import { bauhausNewBauhausChicago } from './bauhaus-new-bauhaus-chicago';
import { bauhausPalestineSharon } from './bauhaus-palestine-sharon';
import { kanagawaMurayama2011 } from './kanagawa-murayama-2011';
import { momaBauhaus1938 } from './moma-bauhaus-1938';
import { momaHerbertBayer } from './moma-herbert-bayer';
import { momaSternCoppola } from './moma-stern-coppola';
import { momaTorresGarcia } from './moma-torres-garcia';
import { princetonMavo } from './princeton-mavo';
import { unescoTelAvivWhiteCity } from './unesco-tel-aviv-white-city';

export {
  bauhausNewBauhausChicago,
  bauhausPalestineSharon,
  kanagawaMurayama2011,
  momaBauhaus1938,
  momaHerbertBayer,
  momaSternCoppola,
  momaTorresGarcia,
  princetonMavo,
  unescoTelAvivWhiteCity,
};

export const ALL_GLOBAL_SOURCES = [
  kanagawaMurayama2011,
  princetonMavo,
  bauhausNewBauhausChicago,
  momaTorresGarcia,
  bauhausPalestineSharon,
  unescoTelAvivWhiteCity,
  momaHerbertBayer,
  momaBauhaus1938,
  momaSternCoppola,
];

export const globalSourcesRegistry = Object.fromEntries(
  ALL_GLOBAL_SOURCES.map((source) => [source.id, source]),
);

export const getGlobalSourceById = (id: string) => globalSourcesRegistry[id];
