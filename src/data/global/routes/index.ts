import { moholyNagyDessauChicagoRoute } from './moholy-nagy-dessau-chicago';
import { murayamaBerlinTokyoRoute } from './murayama-berlin-tokyo';
import { torresGarciaParisMontevideoRoute } from './torres-garcia-paris-montevideo';

export {
  moholyNagyDessauChicagoRoute,
  murayamaBerlinTokyoRoute,
  torresGarciaParisMontevideoRoute,
};

export const ALL_DIFFUSION_ROUTES = [
  murayamaBerlinTokyoRoute,
  moholyNagyDessauChicagoRoute,
  torresGarciaParisMontevideoRoute,
];

export const diffusionRoutesRegistry = Object.fromEntries(
  ALL_DIFFUSION_ROUTES.map((route) => [route.id, route]),
);

export const getDiffusionRouteById = (id: string) => diffusionRoutesRegistry[id];
