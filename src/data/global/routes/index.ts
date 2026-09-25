import { bayerBerlinNewYorkRoute } from './bayer-berlin-new-york';
import { moholyNagyDessauChicagoRoute } from './moholy-nagy-dessau-chicago';
import { murayamaBerlinTokyoRoute } from './murayama-berlin-tokyo';
import { sharonDessauTelAvivRoute } from './sharon-dessau-tel-aviv';
import { sternCoppolaBerlinBuenosAiresRoute } from './stern-coppola-berlin-buenos-aires';
import { torresGarciaParisMontevideoRoute } from './torres-garcia-paris-montevideo';

export {
  bayerBerlinNewYorkRoute,
  moholyNagyDessauChicagoRoute,
  murayamaBerlinTokyoRoute,
  sharonDessauTelAvivRoute,
  sternCoppolaBerlinBuenosAiresRoute,
  torresGarciaParisMontevideoRoute,
};

export const ALL_DIFFUSION_ROUTES = [
  murayamaBerlinTokyoRoute,
  sharonDessauTelAvivRoute,
  torresGarciaParisMontevideoRoute,
  sternCoppolaBerlinBuenosAiresRoute,
  moholyNagyDessauChicagoRoute,
  bayerBerlinNewYorkRoute,
];

export const diffusionRoutesRegistry = Object.fromEntries(
  ALL_DIFFUSION_ROUTES.map((route) => [route.id, route]),
);

export const getDiffusionRouteById = (id: string) => diffusionRoutesRegistry[id];
