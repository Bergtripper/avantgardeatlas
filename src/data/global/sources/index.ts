import { bauhausAfter1933 } from './bauhaus-after-1933';
import { bauhausBergnerMexico } from './bauhaus-bergner-mexico';
import { bauhausClosure1933 } from './bauhaus-closure-1933';
import { bauhausNewBauhausChicago } from './bauhaus-new-bauhaus-chicago';
import { bauhausPalestineSharon } from './bauhaus-palestine-sharon';
import { dhmHitlerChancellor1933 } from './dhm-hitler-chancellor-1933';
import { kanagawaMurayama2011 } from './kanagawa-murayama-2011';
import { martDeperoNewYork } from './mart-depero-new-york';
import { metNewYorkDada } from './met-new-york-dada';
import { momaBauhaus1938 } from './moma-bauhaus-1938';
import { momaDadaHeritage } from './moma-dada-heritage';
import { momaDadaOverview } from './moma-dada-overview';
import { momaDepero } from './moma-depero';
import { momaHerbertBayer } from './moma-herbert-bayer';
import { momaManRayStudio } from './moma-man-ray-studio';
import { momaSternCoppola } from './moma-stern-coppola';
import { momaTorresGarcia } from './moma-torres-garcia';
import { momaTzaraParis } from './moma-tzara-paris';
import { princetonMavo } from './princeton-mavo';
import { unescoTelAvivWhiteCity } from './unesco-tel-aviv-white-city';

export {
  bauhausAfter1933,
  bauhausBergnerMexico,
  bauhausClosure1933,
  bauhausNewBauhausChicago,
  bauhausPalestineSharon,
  dhmHitlerChancellor1933,
  kanagawaMurayama2011,
  martDeperoNewYork,
  metNewYorkDada,
  momaBauhaus1938,
  momaDadaHeritage,
  momaDadaOverview,
  momaDepero,
  momaHerbertBayer,
  momaManRayStudio,
  momaSternCoppola,
  momaTorresGarcia,
  momaTzaraParis,
  princetonMavo,
  unescoTelAvivWhiteCity,
};

export const ALL_GLOBAL_SOURCES = [
  dhmHitlerChancellor1933,
  bauhausClosure1933,
  bauhausAfter1933,
  kanagawaMurayama2011,
  princetonMavo,
  bauhausNewBauhausChicago,
  momaTorresGarcia,
  bauhausPalestineSharon,
  unescoTelAvivWhiteCity,
  momaHerbertBayer,
  momaBauhaus1938,
  momaDadaHeritage,
  momaDadaOverview,
  momaManRayStudio,
  momaTzaraParis,
  metNewYorkDada,
  momaSternCoppola,
  bauhausBergnerMexico,
  martDeperoNewYork,
  momaDepero,
];

export const globalSourcesRegistry = Object.fromEntries(
  ALL_GLOBAL_SOURCES.map((source) => [source.id, source]),
);

export const getGlobalSourceById = (id: string) => globalSourcesRegistry[id];
