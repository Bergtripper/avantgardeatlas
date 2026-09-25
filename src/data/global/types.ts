import { MovementId } from '../../types/atlas';

export type DiffusionMechanism =
  | 'travel'
  | 'study'
  | 'return'
  | 'migration'
  | 'exile'
  | 'print'
  | 'exhibition'
  | 'institution-transfer'
  | 'commercial-application'
  | 'reinterpretation';

export type DiffusionMedium =
  | 'architecture'
  | 'art'
  | 'education'
  | 'exhibition-design'
  | 'graphic-design'
  | 'photography'
  | 'publishing'
  | 'typography'
  | 'advertising'
  | 'collage'
  | 'performance'
  | 'urbanism';

export type GlobalEntityKind =
  | 'publication'
  | 'institution'
  | 'expression'
  | 'exhibition';

export interface AtlasPlaceRef {
  scope: 'atlas';
  id: string;
}

export interface GlobalHubRef {
  scope: 'global';
  id: string;
}

export type DiffusionPlaceRef = AtlasPlaceRef | GlobalHubRef;

export interface AtlasPersonRef {
  scope: 'atlas';
  id: string;
}

export interface GlobalPersonRef {
  scope: 'global';
  id: string;
}

export type DiffusionPersonRef = AtlasPersonRef | GlobalPersonRef;

export interface GlobalHub {
  id: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
  activeEras: Array<{ start: number; end: number }>;
  summary: string;
  sourceIds: string[];
}

export interface GlobalPerson {
  id: string;
  name: string;
  years: string;
  summary: string;
  sourceIds: string[];
}

export interface GlobalEntity {
  id: string;
  name: string;
  kind: GlobalEntityKind;
  hubId?: string;
  placeRef?: DiffusionPlaceRef;
  startYear: number;
  endYear?: number;
  movementLinks: MovementId[];
  media: DiffusionMedium[];
  summary: string;
  sourceIds: string[];
}

export interface DiffusionRoute {
  id: string;
  title: string;
  origin: DiffusionPlaceRef;
  destination: DiffusionPlaceRef;
  startYear: number;
  endYear?: number;
  personRefs: DiffusionPersonRef[];
  mechanisms: DiffusionMechanism[];
  sourceMovementIds: MovementId[];
  historicalContextIds?: string[];
  transmissionEntityIds?: string[];
  destinationEntityIds: string[];
  media: DiffusionMedium[];
  summary: string;
  transformationNote: string;
  sourceIds: string[];
}

export interface GlobalHistoricalEvent {
  id: string;
  year: number;
  label: string;
  title: string;
  summary: string;
  sourceIds: string[];
}

export interface GlobalSource {
  id: string;
  title: string;
  publisher: string;
  url: string;
  sourceType: 'museum' | 'archive' | 'university' | 'institution';
  note?: string;
}
