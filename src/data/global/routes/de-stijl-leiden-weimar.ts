import { DiffusionRoute } from '../types';

export const deStijlLeidenWeimarRoute: DiffusionRoute = {
  id: 'de-stijl-leiden-weimar',
  title: 'Leiden → Weimar: De Stijl as international review',
  origin: { scope: 'global', id: 'leiden' },
  destination: { scope: 'atlas', id: 'weimar' },
  startYear: 1922,
  personRefs: [{ scope: 'global', id: 'theo-van-doesburg' }],
  mechanisms: ['print', 'reinterpretation'],
  sourceMovementIds: ['de-stijl', 'constructivism'],
  transmissionEntityIds: ['de-stijl-magazine'],
  destinationEntityIds: [],
  media: ['publishing', 'typography', 'graphic-design'],
  summary:
    'By the early 1920s De Stijl had become an international review through which Theo van Doesburg circulated texts and reproductions while participating in the Weimar avant-garde network.',
  transformationNote:
    'The journal connected De Stijl to a broader Constructivist and Dadaist discourse rather than simply exporting a fixed Dutch style.',
  sourceIds: ['moma-de-stijl-magazine', 'moma-van-doesburg'],
};
