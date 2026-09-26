import { GlobalSource } from '../global';

export type SourceRecordType = GlobalSource['sourceType'];

export interface SourceUsageRef {
  kind: 'route' | 'entity' | 'person' | 'hub' | 'event';
  id: string;
  label: string;
}

export interface AtlasSourceRecord extends GlobalSource {
  scope: 'global';
  usages: SourceUsageRef[];
}
