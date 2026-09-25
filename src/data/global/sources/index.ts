import { bauhausAfter1933 } from './bauhaus-after-1933';
import { bauhausBergnerMexico } from './bauhaus-bergner-mexico';
import { bauhausClosure1933 } from './bauhaus-closure-1933';
import { bauhausNewBauhausChicago } from './bauhaus-new-bauhaus-chicago';
import { bauhausPalestineSharon } from './bauhaus-palestine-sharon';
import { dhmHitlerChancellor1933 } from './dhm-hitler-chancellor-1933';
import { iowa391 } from './iowa-391';
import { iowaPicabia391 } from './iowa-picabia-391';
import { kanagawaMurayama2011 } from './kanagawa-murayama-2011';
import { kassakMaNetwork } from './kassak-ma-network';
import { martDeperoNewYork } from './mart-depero-new-york';
import { momaMaMagazine } from './moma-ma-magazine';
import { momaMagazinesIntersection } from './moma-magazines-intersection';
import { metNewYorkDada } from './met-new-york-dada';
import { momaBauhaus1938 } from './moma-bauhaus-1938';
import { momaDeStijlMagazine } from './moma-de-stijl-magazine';
import { momaDadaHeritage } from './moma-dada-heritage';
import { momaDadaOverview } from './moma-dada-overview';
import { momaDepero } from './moma-depero';
import { momaHerbertBayer } from './moma-herbert-bayer';
import { momaManRayStudio } from './moma-man-ray-studio';
import { momaSternCoppola } from './moma-stern-coppola';
import { momaTorresGarcia } from './moma-torres-garcia';
import { momaTzaraParis } from './moma-tzara-paris';
import { momaVanDoesburg } from './moma-van-doesburg';
import { princetonMavo } from './princeton-mavo';
import { unescoTelAvivWhiteCity } from './unesco-tel-aviv-white-city';

export {
  bauhausAfter1933,
  bauhausBergnerMexico,
  bauhausClosure1933,
  bauhausNewBauhausChicago,
  bauhausPalestineSharon,
  dhmHitlerChancellor1933,
  iowa391,
  iowaPicabia391,
  kanagawaMurayama2011,
  kassakMaNetwork,
  martDeperoNewYork,
  momaMagazinesIntersection,
  metNewYorkDada,
  momaBauhaus1938,
  momaDeStijlMagazine,
  momaDadaHeritage,
  momaDadaOverview,
  momaDepero,
  momaHerbertBayer,
  momaMaMagazine,
  momaManRayStudio,
  momaSternCoppola,
  momaTorresGarcia,
  momaTzaraParis,
  momaVanDoesburg,
  princetonMavo,
  unescoTelAvivWhiteCity,
};

export const ALL_GLOBAL_SOURCES = [
  iowa391,
  iowaPicabia391,
  momaDeStijlMagazine,
  momaMaMagazine,
  kassakMaNetwork,
  momaVanDoesburg,
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
  momaMagazinesIntersection,
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
