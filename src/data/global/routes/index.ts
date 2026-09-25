import { bayerBerlinNewYorkRoute } from './bayer-berlin-new-york';
import { deperoRoveretoNewYorkRoute } from './depero-rovereto-new-york';
import { huelsenbeckZurichBerlinRoute } from './huelsenbeck-zurich-berlin';
import { lissitzkyMoscowBerlinPrintRoute } from './lissitzky-moscow-berlin-print';
import { manRayNewYorkParisRoute } from './man-ray-new-york-paris';
import { meyerBergnerDessauMexicoCityRoute } from './meyer-bergner-dessau-mexico-city';
import { moholyNagyDessauChicagoRoute } from './moholy-nagy-dessau-chicago';
import { murayamaBerlinTokyoRoute } from './murayama-berlin-tokyo';
import { sharonDessauTelAvivRoute } from './sharon-dessau-tel-aviv';
import { sternCoppolaBerlinBuenosAiresRoute } from './stern-coppola-berlin-buenos-aires';
import { torresGarciaParisMontevideoRoute } from './torres-garcia-paris-montevideo';
import { tzaraZurichParisRoute } from './tzara-zurich-paris';

export {
  bayerBerlinNewYorkRoute,
  deperoRoveretoNewYorkRoute,
  huelsenbeckZurichBerlinRoute,
  lissitzkyMoscowBerlinPrintRoute,
  manRayNewYorkParisRoute,
  meyerBergnerDessauMexicoCityRoute,
  moholyNagyDessauChicagoRoute,
  murayamaBerlinTokyoRoute,
  sharonDessauTelAvivRoute,
  sternCoppolaBerlinBuenosAiresRoute,
  torresGarciaParisMontevideoRoute,
  tzaraZurichParisRoute,
};

export const ALL_DIFFUSION_ROUTES = [
  huelsenbeckZurichBerlinRoute,
  lissitzkyMoscowBerlinPrintRoute,
  tzaraZurichParisRoute,
  manRayNewYorkParisRoute,
  deperoRoveretoNewYorkRoute,
  murayamaBerlinTokyoRoute,
  sharonDessauTelAvivRoute,
  torresGarciaParisMontevideoRoute,
  sternCoppolaBerlinBuenosAiresRoute,
  moholyNagyDessauChicagoRoute,
  bayerBerlinNewYorkRoute,
  meyerBergnerDessauMexicoCityRoute,
];

export const diffusionRoutesRegistry = Object.fromEntries(
  ALL_DIFFUSION_ROUTES.map((route) => [route.id, route]),
);

export const getDiffusionRouteById = (id: string) => diffusionRoutesRegistry[id];
