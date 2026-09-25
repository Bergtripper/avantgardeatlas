import { DiffusionRoute } from '../types';

export const lissitzkyMoscowBerlinPrintRoute: DiffusionRoute = {
  id: 'lissitzky-moscow-berlin-print',
  title: 'Moscow → Berlin: Lissitzky and Veshch',
  origin: { scope: 'atlas', id: 'moscow' },
  destination: { scope: 'atlas', id: 'berlin' },
  startYear: 1922,
  personRefs: [{ scope: 'atlas', id: 'el-lissitzky' }],
  mechanisms: ['print', 'reinterpretation'],
  sourceMovementIds: ['constructivism', 'new-typography'],
  transmissionEntityIds: ['veshch-gegenstand-objet'],
  destinationEntityIds: ['veshch-gegenstand-objet'],
  media: ['publishing', 'typography', 'graphic-design'],
  summary:
    'El Lissitzky’s Berlin period turned print into a major transmission channel between Soviet and Western European avant-garde circles. The trilingual magazine Veshch/Gegenstand/Objet made Constructivist ideas legible across linguistic and national boundaries.',
  transformationNote:
    'The magazine did more than reproduce Russian material: it reformulated Constructivist ideas for an international readership through multilingual editing, typography and graphic design.',
  sourceIds: ['moma-magazines-intersection'],
};
