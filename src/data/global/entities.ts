import { GlobalEntity } from './types';
import { ALL_GLOBAL_EXHIBITIONS } from './exhibitions';
import { ALL_GLOBAL_EXPRESSIONS } from './expressions';
import { ALL_GLOBAL_INSTITUTIONS } from './institutions';
import { ALL_GLOBAL_PUBLICATIONS } from './publications';

export const ALL_GLOBAL_ENTITIES: GlobalEntity[] = [
  ...ALL_GLOBAL_PUBLICATIONS,
  ...ALL_GLOBAL_INSTITUTIONS,
  ...ALL_GLOBAL_EXHIBITIONS,
  ...ALL_GLOBAL_EXPRESSIONS,
];

export const globalEntitiesRegistry: Record<string, GlobalEntity> = Object.fromEntries(
  ALL_GLOBAL_ENTITIES.map((entity) => [entity.id, entity]),
);

export const getGlobalEntityById = (id: string) => globalEntitiesRegistry[id];
