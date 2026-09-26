import { GlobalSource } from '../global';

export type SourceRecordType = GlobalSource['sourceType'];

export interface SourceUsageRef {
  kind:
    | 'route'
    | 'entity'
    | 'person'
    | 'hub'
    | 'event'
    | 'movement-claim'
    | 'object-claim'
    | 'story-step-claim';
  id: string;
  label: string;
}

export interface AtlasSourceRecord extends GlobalSource {
  scope: 'global';
  usages: SourceUsageRef[];
}
